
var Api = new Restivus({
    useDefaultAuth: false,
    prettyJson: false
});
Api.addRoute("wechat", {authRequired: false}, {
    get:function(){
        if (WeChat.wechatVerify(this.queryParams)){
            this.response.write(this.queryParams.echostr);
        }
        this.done();
        return '';
    },
    post:function(){
        var time_val = new Date();
        time_val = (time_val.getTime())/1000;
        if(time_val - WeChat.time_val >= 7000){
            WeChat.getAccessToken();
        }
        var message = get_message_from_request(this.request);
        console.log(message.FromUserName);
        this.response.write(template_message(message));
        this.done();
        return '';
    }
});
Meteor.startup(function(){
    WeChat.getAccessToken();
});