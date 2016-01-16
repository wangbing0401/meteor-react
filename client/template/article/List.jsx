List = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function(){
        var data = {};
        var handle = Meteor.subscribe("get_article_list");
        if(handle.ready()){
            data.articles = Article.find({}, {sort:{create_time:-1}}).fetch();
        }
        return data;
    },
    render:function(){
        return (
            <div>
                {
                    this.data.articles?this.data.articles.map((data) => {
                        return <Item key={data._id} title={data.title} content={data.content} image_url={data.imageUrl} />
                    }):''
                }
            </div>
        );
    }
});