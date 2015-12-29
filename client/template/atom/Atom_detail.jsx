AtomDetail = React.createClass({
    getInitialState:function(){
        return {data:[]};
    },
    componentWillMount:function(){
        var self = this;
        Session.set('loading_show', true);
        Meteor.call('get_post_detail', {atomId:this.props.atomId}, function(error, result){
            Session.set('loading_show', false);
            if(error){
                WB.dialog_show('网络开小差');
            }else{
                console.log(result);
                self.setState({data:result});
            }
        });
    },
    render: function(){
        return (
            <div></div>
        )
    }
});