List = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function(){
        PubSub.publish('loading_show', true);
        var data = {};
        var handle = Meteor.subscribe("get_article_list");
        if(handle.ready()){
            PubSub.publish('loading_show', false);
            data.articles = Article.find({}, {sort:{create_time:-1}}).fetch();
        }
        return data;
    },
    componentDidMount:function(){
        var waypoint = new Waypoint({
            element: document.getElementsByClassName('article_last'),
            handler: function(direction) {
                console.log('Handler triggered in ' + direction + ' direction');
            },
            context: document.getElementsByClassName('article_content')
        });
    },
    render:function(){
        return (
            <div className="article_content" style={{height:'300px', overflow:'scroll'}}>
                {
                    this.data.articles?this.data.articles.map((data) => {
                        return <Item key={data._id} articleId={data._id} title={data.title} content={data.content} image_url={data.imageUrl} />
                    }):''
                }
                <div style={{height:'500px'}} className="article_last"></div>
            </div>
        );
    }
});