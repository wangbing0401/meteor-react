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
    imageUrl:{
        type: String,
        label: '文章图片url',
        optional: true
    }
});

Article.attachSchema(ArticleSchema);

Meteor.methods({

});