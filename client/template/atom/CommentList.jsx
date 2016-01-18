CommentList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData:function(){
        var data = {};
        var handle = Meteor.subscribe("get_comment_list", this.props.atomId);
        if(handle.ready()){
            data.comment_list = Comment.find({postId:this.props.atomId}).fetch();
        }
        console.log(data);
        return data;
    },
    render: function(){
        return(
            <div>
                {this.props.atomId}
            </div>
        )
    }
});