PCarticle = React.createClass({
    componentDidMount:function(){
        $('#summernote').summernote();
    },
    post:function(){
        $.ajax({

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
                        <span>选择文件</span>
                        <input type="file" accept="image/*" />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" placeholder="只能上传一张" />
                    </div>
                </div>
                <a className="waves-effect waves-light btn-large" style={{width:'100%',marginTop:'20px'}} onClick={this.post} >提交</a>
            </form>
        )
    }
})