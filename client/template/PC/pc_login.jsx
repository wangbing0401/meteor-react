PcLogin = React.createClass({
    login:function(){
        var name = this.refs.form.userName.value,
            password = this.refs.form.userPassword.value;
        WB.login({username:name, password:password}, function(result){
            WB.dialog_show(result.message);
            if (result.success){
                FlowRouter.go('home');
            }else{

            }
        });
    },
    render: function(){
        return(
            <div style={styles.pc_login_center}>
                <div style={styles.login_button}>登陆</div>
                <div className="row" style={styles.pc_login_500}>
                    <form className="col s12" ref="form" >
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
                        <a className="waves-effect waves-light btn-large" style={styles.large_button} onClick={this.login}>登陆</a>
                    </form>
                </div>
            </div>
        )
    }
});
var styles = {
    pc_login_center: {
        textAlign: "center"
    },
    pc_login_500: {
        width: 500,
        marginLeft: '50%',
        transform: 'translateX(-50%)'
    },
    large_button: {
        width: '80%'
    },
    login_button: {
        fontSize: 30
    }
}