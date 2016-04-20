PC = React.createClass({
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
    render: function(){
        var style = {marginTop:'65px'};
        return(
            <div className = "content">
                {this.props.nav}
                <ul className="container" style={style}>
                    {this.props.content}
                </ul>

                {this.state.loading_show?<Loading />:''}
            </div>
        )
    }
});