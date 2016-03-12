var article_count;
List = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function(mark, article_type){
        var mark = mark || 1;
        var article_type = article_type || 1;
        Meteor.subscribe('article_count');
        PubSub.publish('loading_show', true);
        var data = {};
        var handle = Meteor.subscribe("get_article_list", mark, article_type);
        if(handle.ready()){
            PubSub.publish('loading_show', false);
            data.articles = Article.find({}, {sort:{create_time:-1}}).fetch();
            article_count = data.articles.length;
        }
        return data;
    },
    componentDidMount:function(){
        var self = this;
        var article_type;
        this.article_type_list = PubSub.subscribe('article_type', function(msg, data){
            article_type = data;
            self.getMeteorData(1, data);
        });

        var mark = 1;
        var refresh = 0;
        $(window).scroll(function(){
            if($(document).scrollTop()>=$(document).height()-$(window).height()){
                if(Counts.get('article_count') != article_count){
                    self.getMeteorData(++mark, article_type);
                }else{
                    if(refresh == 1){
                        return;
                    }
                    refresh = 1;
                    WB.dialog_show("没有更多数据了");
                }
            }
        });
    },
    componentWillUnmount: function(){
        $(window).unbind("scroll");
        PubSub.unsubscribe(this.article_type_list);
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