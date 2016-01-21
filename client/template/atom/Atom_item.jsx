AtomItem = React.createClass({
    click_item:function(id){
        FlowRouter.go('atom_detail', null, {atomId:id});
    },
    render:function(){
        return(
            <ul className="collection" onClick={this.click_item.bind(this, this.props.id)} >
                <li className="collection-item avatar">
                    <i className="Large material-icons circle" style={{fontSize:'2.0em'}} >account_box</i>
                    <span className="title">{this.props.title}</span>
                    <p>{this.props.author}</p>
                    <p><span style={{color:'#D58B47'}}>{this.props.comment_count}</span>条评论</p>
                    <a href="#" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>
        )
    }
});