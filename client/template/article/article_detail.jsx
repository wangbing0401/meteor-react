ArticleDetail = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function(){
        PubSub.publish('loading_show', true);
        var data = {};
        var handle = Meteor.subscribe("get_article_detail", this.props.articleId);
        if(handle.ready()){
            PubSub.publish('loading_show', false);
            data.article = Article.find({_id:this.props.articleId}).fetch();
        }
        return data;
    },
    render:function(){
        return(
            <div>
                {
                    this.data.article?this.data.article.map((d) => {
                        return <div key={d._id}>
                            <h3 className="article_detail_title">{d.title}</h3>
                            <div className="article_detail_time">{WB.formatDate(d.create_time)}</div>
                            <div style={{clear:'both'}}></div>
                            <div className="article_detail_content" dangerouslySetInnerHTML={{__html: d.content}}></div>
                        </div>
                    }):''
                }
            </div>
        )
    }
});