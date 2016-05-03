Item = React.createClass({
    getInitialState: function(){
        return{
            article_url: null
        }
    },
    componentWillMount: function(){
        if(this.props.image_url){
            this.state.article_url = this.props.image_url;
        }else{
            if(this.props.type == 1){
                this.state.article_url = 'http://wb-category-logo.oss-cn-beijing.aliyuncs.com/html5_icon.png';
            }
            if(this.props.type == 2){
                this.state.article_url = 'http://wb-category-logo.oss-cn-beijing.aliyuncs.com/angular_icon.png';
            }
            if(this.props.type == 3){
                this.state.article_url = 'http://wb-category-logo.oss-cn-beijing.aliyuncs.com/react_icon.png';
            }
            if(this.props.type == 4){
                this.state.article_url = 'http://wb-category-logo.oss-cn-beijing.aliyuncs.com/meteor_icon.png';
            }
            if(this.props.type == 6){
                this.state.article_url = 'http://wb-category-logo.oss-cn-beijing.aliyuncs.com/node_icon.png';
            }
        }
    },
    article_detail:function(articleId){
        FlowRouter.go('article_detail', null, {articleId:articleId});
    },
    render:function(){
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" style={{maxHeight:'150px'}} src={this.state.article_url} />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
                    <p><a onClick={this.article_detail.bind(this, this.props.articleId)}>查看</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
                    <p dangerouslySetInnerHTML={{__html: this.props.content}}></p>
                </div>
            </div>
        )
    }
});