PcGoldPrice = React.createClass({
    getInitialState: function(){
        return{
            hjqbPrice: '',
            jsbPrie: '',
            hjqbMin: '',
            hjqbMax: '',
            jsbPrice: '',
            jsbMin: '',
            jsbMax: '',
            jsbupdate_time: '',
            freshTime: 5000,
            notificationShowTime: 3000
        }
    },
    componentDidMount: function(){
        var self = this;
        if (window.Notification){
            Notification.requestPermission();
        }
        Meteor.setInterval(function(){
            self.getHJQBNowGold();
            self.getJSBNowGold();
        }, self.state.freshTime);
        self.getHJQBNowGold();
        self.getJSBNowGold();
    },
    getHJQBNowGold: function(){
        var self = this;
        $.ajax({
            type: "GET",
            url: "/goldPrice",
            success: function(data){
                self.setState({hjqbPrice: data.price/100});
                self.checkoutNatifacation('HJQB', data.price/100);
            },
            error: function(){
                self.setState({hjqbPrice: '--'});
            }
        });
    },
    getJSBNowGold: function() {
        var self = this;
        var _url = 'https://login.vip9999.com/';
        var url = _url + "?s=api-getgold&callback=?";
        $.getJSON(url, function(response) {
            self.setState({jsbPrice: response.results.buy});
            self.setState({jsbupdate_time: response.results.converted_updated});
            self.checkoutNatifacation('JSB', response.results.buy-0);
        }, "json");
    },
    checkoutNatifacation: function(type, price){
        if (!window.Notification) return ;

        if(type == 'HJQB' && this.state.hjqbMin && this.state.hjqbMin > price){
            this.notificationShow('/images/goDown.png', '黄金钱包', '价钱跌到' + price);
        }
        if (type == 'HJQB' && this.state.hjqbMax && this.state.hjqbMax < price){
            this.notificationShow('/images/goUp.png', '黄金钱包', '价钱涨到' + price);
        }
        if(type == 'JSB' && this.state.jsbMin && this.state.jsbMin > price){
            this.notificationShow('/images/goDown.png', '金生宝', '价钱跌到' + price);
        }
        if (type == 'JSB' && this.state.jsbMax && this.state.jsbMax < price){
            this.notificationShow('/images/goUp.png', '金生宝', '价钱涨到' + price);
        }
    },
    notificationShow: function(icon, title, message){
        var self = this;
        var notification = new Notification(title,{
            body: message,
            icon: icon
        });
        notification.onshow = function(){
            self.tipSound();
            setTimeout(function(){
                notification.close();
            }, self.state.notificationShowTime);
        };
    },
    tipSound: function(url){
        url = url || '/music/dada.mp3';
        var audio = document.createElement('audio');
        audio.src = url;
        audio.play();
    },
    hjqbMinChange: function(event){
        this.setState({hjqbMin:event.target.value});
    },
    hjqbMaxChange: function(event){
        this.setState({hjqbMax:event.target.value});
    },
    jsbMinChange: function(event){
        this.setState({jsbMin:event.target.value});
    },
    jsbMaxChange: function(event){
        this.setState({jsbMax:event.target.value});
    },
    notificationTimeChange: function(event){
        this.setState({notificationShowTime:event.target.value});
    },
    setfreshTime: function(freshTime){
        this.setState({freshTime:freshTime});
    },
    render: function(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">黄金钱包</div>
                            <div className="panel-body">
                                <div>
                                    当前金价: <span style={{color:'lightcoral', fontSize:'24'}}>{this.state.hjqbPrice}</span>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <div>
                                    低于: <input type="text" onChange={this.hjqbMinChange} value={this.state.hjqbMin} />
                                </div>
                                <div>
                                    高于: <input type="text" onChange={this.hjqbMaxChange} value={this.state.hjqbMax} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-heading">金生宝</div>
                            <div className="panel-body">
                                <div>
                                    买入金价: <span style={{color:'lightcoral', fontSize:'24'}}>{this.state.jsbPrice}</span>
                                </div>
                                <div>
                                    更新时间: <span style={{color:'lightcoral', fontSize:'18'}}>{this.state.jsbupdate_time}</span>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <div>
                                    低于: <input type="text" onChange={this.jsbMinChange} value={this.state.jsbMin} />
                                </div>
                                <div>
                                    高于: <input type="text" onChange={this.jsbMaxChange} value={this.state.jsbMax}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
                <div className="row">
                    <div className="panel panel-default">
                        <div className="panel-heading">配置</div>
                        <div className="panel-body">
                            <div>
                                价格刷新频率: <input type="number" value={this.state.freshTime}  />
                                <button className="btn btn-primary btn-xs" onClick={this.setfreshTime.bind(this, 1000)} >快(1000ms)</button>
                                <button className="btn btn-default btn-xs" onClick={this.setfreshTime.bind(this, 5000)} >正常(5000ms)</button>
                                <button className="btn btn-warning btn-xs" onClick={this.setfreshTime.bind(this, 11000)} >慢(11000ms)</button>
                            </div>
                            <div>
                                消息通知显示: <input type="number" onChange={this.notificationTimeChange} value={this.state.notificationShowTime} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
});