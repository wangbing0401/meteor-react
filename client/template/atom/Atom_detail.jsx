AtomDetail = React.createClass({
    getInitialState:function(){
        return {data:[]};
    },
    getData:function(callback){
        Meteor.call('get_post_detail', {atomId:this.props.atomId}, function(error, result){
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
            self.setState({data:result});
        });
    },
    comment:function(){
        if(!this.refs.form.comment.value){
            WB.dialog_show("请先输入评论");
            return;
        }
        PubSub.publish('loading_show', true);
        var data = {userId:Meteor.userId(),
            postId:this.props.atomId,
            comment:this.refs.form.comment.value,
            create_time: new Date()
        };
        Meteor.call('comment_post', data, function(error, data){
            PubSub.publish('loading_show', false);
            if(error){
                WB.dialog_show("网络开小差");
            }else{
                WB.dialog_show("评论成功");
            }
        });
    },
    render: function(){
        return (
            <div>
                <h3 className="atom_detail_title">{this.state.data.title}</h3>
                <div className="atom_detail_author">作者：{this.state.data.user && this.state.data.user.username}</div>
                <div style={{clear:'both'}}></div>
                <div className="atom_detail_content">{this.state.data.content}</div>

                <CommentList key={this.props.atomId} atomId={this.props.atomId} />

                <form className="col s12" ref="form">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="comment" className="materialize-textarea" name="comment"></textarea>
                            <label htmlFor="comment">评论</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn-large" style={{width:'100%'}} onClick={this.comment} >提交</a>
                </form>
            </div>
        )
    }
});