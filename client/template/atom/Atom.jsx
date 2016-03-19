var atom_count;
Atom = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData:function(mark){
        var mark = mark || 1;
        PubSub.publish('loading_show', true);
        var data = {};
        const handle = Meteor.subscribe("get_post_list", mark);
        if(handle.ready()){
            PubSub.publish('loading_show', false);
            data.posts = Posts.find({}, {sort:{create_time:-1}}).fetch();
            atom_count = data.posts.length;
        }
        return data;
    },
    componentDidMount: function(){
        var self = this;
        var mark = 1;
        var refresh = 0;
        $(window).scroll(function(){
            if($(document).scrollTop()>=$(document).height()-$(window).height()){
                if(Counts.get('atom_count') != atom_count){
                    self.getMeteorData(++mark);
                }else{
                    if(refresh == 1){
                        return;
                    }
                    refresh = 1;
                    WB.dialog_show("没有更多数据了");
                }
            }
        });
    },
    componentWillUnmount: function(){
        $(window).unbind("scroll");
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