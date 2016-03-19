ArticleTabs = React.createClass({
    top_tabs: function(article_type){
        PubSub.publish('article_type', article_type);
        $(".article_tabs span").css('color', 'black');
        $(".article_tabs span:nth-of-type("+article_type+")").css('color', 'red');
    },
    render: function(){
        return(
            <ul className="tabs article_tabs" style={{top:'0', overflowX:'scroll', overflowY:'hidden'}}>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 1)} >H5</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 2)} >angular</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 3)} >react</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 4)} >meteor</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 5)} >其它</span>
            </ul>
        )
    }
});