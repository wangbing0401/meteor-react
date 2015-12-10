Tabs = React.createClass({
    click_span:function(event){
        $(".tabs span").css("color", "black");
        $(event.target).css("color", "red");
    },
    render:function(){
        return (
            <div className = "tabs">
                <span onClick={this.click_span}>文章</span>
                <span onClick={this.click_span}>活动</span>
                <span onClick={this.click_span}>发帖</span>
                <span onClick={this.click_span}>我</span>
            </div>
        )
    }
});