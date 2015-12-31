AtomDetail = React.createClass({
    getInitialState:function(){
        return {data:[]};
    },
    getData:function(callback){
        Session.set('loading_show', true);
        Meteor.call('get_post_detail', {atomId:this.props.atomId}, function(error, result){
            Session.set('loading_show', false);
            if(error){
                WB.dialog_show('网络开小差');
            }else{
                callback(result);
            }
        });
    },
    componentWillMount:function(){
        var self = this;
        this.getData(function(result){
            console.log(result);
            self.setState({data:result});
        });
    },
    render: function(){
        return (
            <div>
                <h5 className="atom_detail_title">{this.state.data.title}</h5>
                <div className="atom_detail_author">作者：{this.state.data.user && this.state.data.user.username}</div>
                <div style={{clear:'both'}}></div>
                <div className="atom_detail_content">{this.state.data.content}</div>
            </div>
        )
    }
});