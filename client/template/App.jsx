App = React.createClass({
    getInitialState:function(){
        return {
            loading_show:false
        }
    },
    componentDidMount:function(){
        var self = this;
        this.pubsub_token = PubSub.subscribe('loading_show', function(msg, data){
            self.setState({
                loading_show:data
            });
        });
    },
    componentWillUnmount:function(){
        PubSub.unsubscribe(this.pubsub_token);
    },
    render:function() {
        var style = {marginBottom:'54px', padding:'0'};
        return (
            <div className = "content">
                <ul className="container" style={style}>
                    {this.props.content}
                </ul>

                {this.state.loading_show?<Loading />:''}

                {this.props.tabs}
            </div>
        );
    }
});