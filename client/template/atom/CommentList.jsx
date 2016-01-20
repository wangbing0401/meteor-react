CommentList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData:function(){
        var data = {};
        var handle = Meteor.subscribe("get_comment_list", this.props.atomId);
        if(handle.ready()){
            data.comment_list = Comment.find({postId:this.props.atomId}).fetch();
            console.log(1111, data);
        }
        console.log(2222, data);
        return data;
    },
    render: function(){
        return(
            <div>
                {
                    this.data.comment_list?this.data.comment_list.map((d) => {
                        return <div>
                            {d.username}:{d.comment}
                        </div>
                    }):''
                }
            </div>
        )
    }
});