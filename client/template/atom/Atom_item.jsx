AtomItem = React.createClass({
    render:function(){
        return(
            <ul className="collection">
                <li className="collection-item avatar">
                    <i className="Large material-icons circle" style={{fontSize:'2.0em'}} >account_box</i>
                    <span className="title">{this.props.title}</span>
                    <p>{Meteor.user().username}</p>
                    <a href="#" className="secondary-content"><i className="material-icons">grade</i></a>
                </li>
            </ul>
        )
    }
});