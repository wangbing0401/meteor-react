/**
 * Created by tx-0020 on 16/1/7.
 */
Article = new Mongo.Collection('article');
ArticleSchema = new SimpleSchema({
    title:{
        type: String,
        label: '文章标题'
    },
    content:{
        type: String,
        label: '文章内容'
    },
    create_time:{
        type: Date,
        label: '文章创建时间'
    },
    imageMd5:{
        type: String,
        label: '文章图片的md5标识',
        optional: true
    },
    imageUrl:{
        type: String,
        label: '文章图片url',
        optional: true
    }
});

Article.attachSchema(ArticleSchema);

if(Meteor.isServer){
    Meteor.publish("get_article_list", function(){
        var result = Article.find();
        return result;
    });
    Meteor.methods({
        get_article_list: function(data){
            var result = Article.find().fetch();
            return result;
        },
        post_article: function(data){
            var current_time = new Date();
            current_time  = current_time.getTime();
            var imageBuffer = DecodeBase64Image(data.imageUrl);
            if (!imageBuffer){
                return false;
            }
            var syncFunc = Meteor.wrapAsync(Oss.putObject);
            var result = syncFunc.call(Oss, {
                Bucket: 'wb-images',
                Key: current_time+'.jpg',                 // 注意, Key 的值不能以 / 开头, 否则会返回错误.
                Body: imageBuffer.data,
                AccessControlAllowOrigin: '',
                ContentType: 'img/*',
                CacheControl: 'public',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
                ContentDisposition: '',           // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1
                ContentEncoding: '',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
                ServerSideEncryption: '',
                Expires:  new Date()                      // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21
            });
            if (result){
                //提前插入数据库, 本应阿里存储后插入,但是有bug,顾临时在此插入, bug!!!
                data.imageMd5 = result.ETag;
                data.imageUrl = "http://wb-images.oss-cn-beijing.aliyuncs.com/"+current_time+".jpg";
                Article.insert(data);
                return data;
            }
        }
    });
}