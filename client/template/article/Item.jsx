Item = React.createClass({
    article_detail:function(articleId){
        FlowRouter.go('article_detail', null, {articleId:articleId});
    },
    render:function(){
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" style={{maxHeight:'150px'}} src={this.props.image_url} />
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