UserName = React.createClass({
    render: function(){
        if(Meteor.userId()){
            return(
                <ul className="pc_user_login">
                    <li>{this.props.username}</li>
                </ul>
            )
        }else{
            return(
                <ul className="pc_user_login">
                    <li><a href="/pc_register">注册</a></li>
                    <li><a href="/pc_login">登陆</a></li>
                </ul>
            )
        }
    }
});