App = React.createClass({
    // This mixin makes the getMeteorData method work
    page_back:function(){
        history.back();
    },
    render:function() {
        var style = {marginBottom:'54px'};
        return (
            <div className = "content">
                <ul className="container" style={style}>
                    {this.props.content}
                </ul>

                {this.props.tabs}
            </div>
        );
    }
});