App = React.createClass({
    render:function() {
        var style = {marginBottom:'54px', padding:'0'};
        return (
            <div className = "content">
                <ul className="container" style={style}>
                    {this.props.content}
                </ul>

                {Session.get('loading_show')?<Loading />:''}

                {this.props.tabs}
            </div>
        );
    }
});