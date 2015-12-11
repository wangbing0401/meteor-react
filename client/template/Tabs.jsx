Tabs = React.createClass({
    click_span:function(event){
        $(".tabs span").css("color", "black");
        $(event.target).css("color", "red");
        if($(event.target).text() == "文章"){
            FlowRouter.go('list');
        }else if($(event.target).text() == "活动"){
            FlowRouter.go('activity');
        }else if($(event.target).text() == "发帖"){
            FlowRouter.go('atom');
        }else if($(event.target).text() == "我"){
            FlowRouter.go('me');
        }
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