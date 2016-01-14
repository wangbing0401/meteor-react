PCarticle = React.createClass({
    getInitialState:function(){
        return {file:null};
    },
    componentDidMount:function(){
        $('#summernote').summernote();
    },
    article:function(event){
        var self = this;
        WB.loadImage(event.target.files, function(result){
            self.setState({file:result});
            console.log(result);
        });
    },
    post:function(){
        var article_title = this.refs.form.article_title.value;
        var article_content = $('#summernote').summernote('code');
        console.log(article_content);
        var data = {title:article_title,
            content:article_content,
            imageUrl:this.state.file,
            create_time:new Date()
        };
        if(!article_title){
            WB.dialog_show('请输入文章标题');
            return;
        }
        if(!article_content){
            WB.dialog_show('请输入文章内容');
            return;
        }
        Meteor.call('post_article', data, function(error, result){
            if(error){
                WB.dialog_show('网络开小差');
            }else{
                WB.dialog_show('发布成功');
            }
        });
    },
    render: function(){
        return (
            <form ref="form">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="post_title" type="text" className="validate" name="article_title" />
                        <label htmlFor="post_title">文章标题</label>
                    </div>
                </div>

                <div id="summernote"></div>

                <div className="file-field input-field">
                    <div className="btn">
                        <span>选择图片</span>
                        <input type="file" accept="image/*" onChange={this.article} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="只能上传一张" />
                    </div>
                </div>
                <div>{this.state.file && this.state.file.name}</div>
                <a className="waves-effect waves-light btn-large" style={{width:'100%',marginTop:'20px'}} onClick={this.post} >提交</a>
            </form>
        )
    }
})