Access_token = new Mongo.Collection('accessToken');
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
        var message = get_message_from_request(this.request);
        console.log(message);
        this.response.write(template_message(message));
        this.done();
        return '';
    }
});
Meteor.startup(function(){
    WeChat.getAccessToken();
});