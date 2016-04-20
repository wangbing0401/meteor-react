CommentList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData:function(){
        var data = {};
        var handle = Meteor.subscribe("get_comment_list", this.props.atomId);
        if(handle.ready()){
            data.comment_list = Comment.find({postId:this.props.atomId}).fetch();
        }
        return data;
    },
    render: function(){
        return(
            <div>
                {
                    this.data.comment_list?this.data.comment_list.map((d) => {
                        return <div key={d._id} style={{marginBottom:'10px'}}>
                            <div>{WB.formatDate(d.create_time)}</div>
                            {d.username}:{d.comment}
                        </div>
                    }):''
                }
            </div>
        )
    }
});