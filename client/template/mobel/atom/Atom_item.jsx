AtomItem = React.createClass({
    click_item:function(id){
        FlowRouter.go('atom_detail', null, {atomId:id});
    },
    delete_atom:function(id, event){
        sweetAlert({
            title:'确定删除吗？',
            showCancelButton:true,
            canfirmButtonColor:'#1cb1b1',
            confirmButtonText:'删除',
            cancelButtonText:'取消',
            closeOnConfirm:true
        }, function(isConfirm){
            if(isConfirm){
                PubSub.subscribe('loading_show', true);
                Meteor.call("delete_post", {atomId:id}, function(error, data){
                    PubSub.subscribe('loading_show', false);
                    if(error){
                        WB.dialog_show("网络开小差");
                    }else{
                        WB.dialog_show("删除成功");
                    }
                });
            }
        });
        event.stopPropagation();
    },
    render:function(){
        return(
            <ul className="collection" onClick={this.click_item.bind(this, this.props.id)} >
                <li className="collection-item avatar">
                    <i className="Large material-icons circle" style={{fontSize:'2.0em'}} >account_box</i>
                    <span className="title">{this.props.title}</span>
                    <p>{this.props.author}</p>
                    <p><span style={{color:'#D58B47'}}>{this.props.comment_count}</span>条评论 {Meteor.user()._id==this.props.authorId?<span style={{color:'red', marginLeft:'10px'}} onClick={this.delete_atom.bind(this, this.props.id)}>删除</span>:''}</p>
                    <a href="#" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>
        )
    }
});