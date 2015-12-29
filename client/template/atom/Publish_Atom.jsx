PublishAtom = React.createClass({
    post:function(){
        var data = {userId:Meteor.userId(),
            title:this.refs.form.post_title.value,
            content:this.refs.form.post_content.value,
            create_time:new Date()
        };
        Session.set('loading_show', true);
        Meteor.call("publish_post", data, function(error, data){
            Session.set('loading_show', false);
            if(error){
                WB.dialog_show('发布失败');
            }else{
                WB.dialog_show('发布成功');
                FlowRouter.go('atom');
            }
        });
    },
    render: function(){
        return(
            <div style={{marginTop:'10px'}}>
                <form className="col s12" ref="form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="post_title" type="text" className="validate" name="post_title" />
                            <label htmlFor="post_title">帖子标题</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="post_content" className="materialize-textarea" name="post_content"></textarea>
                            <label htmlFor="post_content">帖子内容</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light btn-large" style={{width:'100%'}} onClick={this.post} >提交</a>
                </form>
            </div>
        )
    }
});