var article_count;
List = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function(mark){
        var mark = mark || 1;
        Meteor.subscribe('article_count');
        PubSub.publish('loading_show', true);
        var data = {};
        var handle = Meteor.subscribe("get_article_list", mark);
        if(handle.ready()){
            PubSub.publish('loading_show', false);
            data.articles = Article.find({}, {sort:{create_time:-1}}).fetch();
            article_count = data.articles.length;
        }
        return data;
    },
    componentDidMount:function(){
        var self = this;
        var mark = 1;
        $(window).scroll(function(){
            if($(document).scrollTop()>=$(document).height()-$(window).height()){
                if(Counts.get('article_count') != article_count){
                    self.getMeteorData(++mark);
                }else{
                    WB.dialog_show("没有更多数据了");
                }
            }
        });
    },
    componentWillUnmount: function(){
        $(window).unbind("scroll");
    },
    render:function(){
        return (
            <div className="article_content" style={{overflow:'scroll'}}>
                {
                    this.data.articles?this.data.articles.map((data) => {
                        return <Item key={data._id} articleId={data._id} title={data.title} content={data.content} image_url={data.imageUrl} />
                    }):''
                }
                <div style={{height:'5px'}} className="article_last"></div>
            </div>
        );
    }
});