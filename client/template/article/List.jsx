List = React.createClass({
    getInitialState:function(){
        return {data:[]};
    },
    getData:function(callback){
        Meteor.call("get_article_list", {}, function(error, result){
            if(error){
                WB.dialog_show('网络开小差');
            }else{
                callback(result);
            }
        })
    },
    componentDidMount:function(){
        var self = this;
        this.getData(function(result){
            self.setState({data:result});
        });
    },
    render:function(){
        return (
            <div>
                {
                    this.state.data.map((data) => {
                        return <Item key={data._id} title={data.title} content={data.content} image_url={data.imageUrl} />
                    })
                }
            </div>
        );
    }
});