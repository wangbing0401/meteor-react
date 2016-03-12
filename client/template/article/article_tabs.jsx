ArticleTabs = React.createClass({
    top_tabs: function(article_type){
        PubSub.publish('article_type', article_type);
    },
    render: function(){
        return(
            <ul className="tabs article_tabs" style={{top:'0', overflowX:'scroll', overflowY:'hidden'}}>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 1)} >H5</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 2)} >angular</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 3)} >react</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 4)} >meteor</span>
                <span className="tab" style={{textTransform:'none'}} onClick={this.top_tabs.bind(this, 0)} >其它</span>
            </ul>
        )
    }
});