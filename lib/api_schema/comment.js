/**
 * Created by tx-0020 on 16/1/18.
 */
Comment = new Mongo.Collection('comment');
CommentSchema = new SimpleSchema({
    userId:{
        type: String,
        label: '评论人id'
    },
    username:{
        type: String,
        label: '评论人姓名'
    },
    postId:{
        type: String,
        label: '帖子id'
    },
    comment:{
        type: String,
        label: '评论内容'
    },
    create_time:{
        type: Date,
        label: '评论时间'
    }
});

Comment.attachSchema(CommentSchema);

Comment.allow({
    insert:function(){
        return true;
    }
});

if(Meteor.isServer){
    Meteor.publish('get_comment_list', function(atom_id){
        var result = Comment.find({postId:atom_id});
        return result;
    });
    Meteor.methods({
        comment_post:function(data){
            var username = Meteor.users.findOne(data.userId).username;
            data.username = username;
            var comment_count = Posts.findOne(data.postId).comment_count + 1;
            Posts.update({_id:data.postId}, {$set:{comment_count:comment_count}});
            Comment.insert(data);
            return data;
        }
    });
}