Register = React.createClass({
    register:function(){
        var name = this.refs.form.userName.value,
            password = this.refs.form.userPassword.value;
        WB.createUser({username:name, password:password}, function(result){
            WB.dialog_show(result.message)
        });
    },
    render:function(){
        var style = {marginTop:'20px'};
        var trueButton = {width:'100%'};
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
                    <a className="waves-effect waves-light btn-large" style={trueButton} onClick={this.register}>确定</a>
                </form>
            </div>
        )
    }
});