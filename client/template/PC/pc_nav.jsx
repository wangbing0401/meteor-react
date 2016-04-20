PcNav = React.createClass({
    render: function(){
        return(
            <div className="pc_top">
                <div className="pc_nav">
                    <span><a href="/">意浓佐岸</a></span>
                    <ul className="pc_user_login">
                        <li><a href="/pc_register">注册</a></li>
                        <li><a href="/pc_login">登陆</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});