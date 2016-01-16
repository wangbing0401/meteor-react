Atom = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData:function(){
        var data = {};
        var handle = Meteor.subscribe("get_post_list");
        if(handle.ready()){
            data.posts = Posts.find({}, {sort:{create_time:-1}}).fetch();
            data.posts.forEach(function(post){
                post.author = Meteor.users.findOne(post.userId).username;
            });
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
                        return <AtomItem key={d._id} id={d._id} title={d.title} author={d.author} />
                    }):''
                }
            </div>
        )
    }
});