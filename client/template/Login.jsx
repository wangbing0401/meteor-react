Login = React.createClass({
    render(){
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate" />
                                <label htmlFor="icon_prefix">用户名</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" type="tel" className="validate" />
                                <label htmlFor="icon_telephone">密码</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn-large">登陆</a>
                </form>
            </div>
        )
    }
});