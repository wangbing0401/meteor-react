Atom = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData:function(){
        PubSub.publish('loading_show', true);
        var data = {};
        var handle = Meteor.subscribe("get_post_list");
        if(handle.ready()){
            PubSub.publish('loading_show', false);
            data.posts = Posts.find({}, {sort:{create_time:-1}}).fetch();
        }
        return data;
    },
    publish_atom:function(){
        FlowRouter.go('publish_atom');
    },
    render: function(){
        var icon_style = {float:'right', marginTop:'10px'};
        return (
            <div>
                <i className="material-icons" style={icon_style} onClick={this.publish_atom} >border_color</i>
                <div style={{clear:'both'}}></div>
                {
                    this.data.posts?this.data.posts.map((d) =>{
                        return <AtomItem key={d._id} id={d._id} title={d.title} author={d.username} authorId={d.userId} comment_count={d.comment_count} />
                    }):''
                }
            </div>
        )
    }
});