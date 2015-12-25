Atom = React.createClass({
    getData1:function(){
        Meteor.call("get_post", {}, function(error, result){
            if(error){
                WB.dialog_show("网络开小差");
            }else{
                console.log(result);
                return result;
            }
        });
        return "";
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

                {this.getData1().map(data =>{
                    return <Atom_item key={data._id} />
                })}
            </div>
        )
    }
});