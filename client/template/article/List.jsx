var article_count;
List = React.createClass({
    getInitialState: function(){
        return {article_list:[], article_all_count:0};
    },
    get_article_list: function(data){
        var self = this;
        Meteor.call('get_article_list', data, function(error, data){
            PubSub.publish('loading_show', false);
            if(error){
                WB.dialog_show("网络开小差");
            }else{
                self.setState({article_list:data.result});
                self.setState({article_all_count:data.article_count});
            }
        });
    },
    componentDidMount:function(){
        this.get_article_list({mark:1, article_type:window.article_type_all||1});
        var self = this;
        this.article_type_list = PubSub.subscribe('article_type', function(msg, data){
            window.article_type_all = data || 1;
            var data = {mark:1, article_type:data};
            PubSub.publish('loading_show', true);
            self.get_article_list(data);
        });

        var mark = 1;
        var refresh = 0;
        $(window).scroll(function(){
            if($(document).scrollTop()>=$(document).height()-$(window).height()){
                PubSub.publish('loading_show', true);
                var data = {mark:++mark, article_type:window.article_type_all||1};
                if(self.state.article_list.length != self.state.article_all_count){
                    self.get_article_list(data);
                }else{
                    PubSub.publish('loading_show', false);
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
                    this.state.article_list?this.state.article_list.map((data) => {
                        return <Item key={data._id} articleId={data._id} title={data.title} content={data.content} image_url={data.imageUrl} type={data.type} />
                    }):''
                }
            </div>
        );
    }
});