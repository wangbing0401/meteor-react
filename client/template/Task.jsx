Task = React.createClass({
    render:function(){
        var homeLogin = {marginTop:'20px'};
        return(
            <a href="/Login" className="waves-effect waves-light btn" style={homeLogin}><i className="material-icons left">cloud</i>登陆注册</a>
        )
    }
});