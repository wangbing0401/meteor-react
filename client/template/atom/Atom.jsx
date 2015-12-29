Atom = React.createClass({
    getInitialState:function(){
        return {data:[]};
    },
    getData1:function(callback){
        Meteor.call("get_post", {}, function(error, result){
            if(error){
                WB.dialog_show("网络开小差");
            }else{
                callback(result);
            }
        });
    },
    componentDidMount:function(){
        var self = this;
        this.getData1(function(result){
            self.setState({data:result});
        })
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
                    this.state.data.map((d) =>{
                        return <AtomItem key={d._id} id={d._id} title={d.title} />
                    })
                }
            </div>
        )
    }
});