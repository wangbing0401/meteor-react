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
        var tabs_arr = this.props.count.split(',');
        var active = this.props.active;
        return (
            <div className = "tabs">
                {tabs_arr.map((data) => {
                    return <span key={data} onClick={this.click_span} style={(active&&data=='文章')?{color:'red'}:{}} >{data}</span>
                })}
            </div>
        )
    }
});