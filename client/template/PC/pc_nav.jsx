PcNav = React.createClass({
    getJSBNowGold: function() {
        var _url = 'https://login.vip9999.com/';
        var url = _url + "?s=api-getgold&callback=?";
        $.getJSON(url, function(response) {
            $('#gold_buy').html(response.results.buy);
            //$('#jsbPriceSell').html(response.results.sell);
            //$('#jsbPriceUpdated').html(response.results.converted_updated);
        }, "json");
    },
    componentDidMount: function(){
        var self = this;
        Meteor.setInterval(function(){
            self.getJSBNowGold();
        }, 2000);
    },
    render: function(){
        return(
            <div className="pc_top">
                <div className="pc_nav">
                    <span><a href="/">意浓佐岸</a></span>
                    <span id="gold_buy" ></span>
                    <UserName username={this.props.username} />
                </div>
            </div>
        )
    }
});