Login = React.createClass({
    login:function(){
        var name = this.refs.form.userName.value,
            password = this.refs.form.userPassword.value;
        console.log(Meteor.user());
        Accounts.createUser({username:name, password:password}, function(error, result){
            console.log(Meteor.user());
        });
    },
    render:function(){
        var style = {marginTop:'20px'};
        return (
            <div className="row">
                <form className="col s12" ref="form" style={style}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" name="userName" />
                                <label htmlFor="icon_prefix">用户名</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input type="password" id="icon_telephone" className="validate" name="userPassword" />
                                <label htmlFor="icon_telephone">密码</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn-large" onClick={this.login}>登陆</a>
                </form>
            </div>
        )
    }
});