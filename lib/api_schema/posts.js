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
    username:{
        type: String,
        label: '帖子所属者姓名'
    },
    create_time:{
        type: Date,
        label: '帖子创建时间'
    },
    comment_count:{
        type: Number,
        label: '帖子评论数'
    },
    imageUrl:{
        type: String,
        label: '帖子图片url',
        optional: true
    }
});

Posts.attachSchema(PostsSchema);

Posts.allow({
    insert:function(){
        return true;
    }
});

if(Meteor.isServer){
    Meteor.publish("get_post_list", function(mark){
        Counts.publish(this, 'atom_count', Posts.find());
        var result = Posts.find({}, {limit:mark*10});
        return result;
    });

    Meteor.methods({
        publish_post:function(data){
            var username = Meteor.users.findOne(data.userId).username;
            data.username = username;
            data.comment_count = 0;
            var result = Posts.insert(data);
            return data;
        },
        get_post_detail:function(data){
            var result = Posts.findOne({_id:data.atomId});
            var userresult = Meteor.users.findOne({_id:result.userId});
            result.user = userresult;
            return result;
        },
        delete_post:function(data){
            Posts.remove({_id:data.atomId});
        }
    });
}