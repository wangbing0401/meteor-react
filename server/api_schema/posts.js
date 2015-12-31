/**
 * Created by tx-0020 on 15/12/25.
 */
Posts = new Mongo.Collection('post');
PostsSchema = new SimpleSchema({
    title:{
        type: String,
        label: '帖子标题',
    },
    content:{
        type: String,
        label: '帖子内容',
    },
    userId:{
        type: String,
        label: '帖子所属者id'
    },
    create_time:{
        type: Date,
        label: '帖子创建时间'
    },
    imageUrl:{
        type: String,
        label: '帖子图片url',
        optional: true
    }
});

Posts.attachSchema(PostsSchema);

Meteor.methods({
    publish_post:function(data){
        var result = Posts.insert(data);
        return data;
    },
    get_post:function(data){
        var result = Posts.find().fetch();
        result.forEach(function(post){
            post.author = Meteor.users.findOne(post.userId).username;
        });
        return result;
    },
    get_post_detail:function(data){
        var result = Posts.findOne({_id:data.atomId});
        var userresult = Meteor.users.findOne({_id:result.userId});
        result.user = userresult;
        return result;
    }
});