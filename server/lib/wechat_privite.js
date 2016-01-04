/**
 * Created by tx-0020 on 15/12/5.
 */
WeChat = {
    token:'wangbing626',
    appid:'wxcfdb39f6e31ba889',
    appSecret:'bad07ae73a531e773614618d640b2ee6',
    wechatVerify:function(queryParams){
        var signature = queryParams.signature;
        var timestamp = queryParams.timestamp;
        var nonce = queryParams.nonce;

        var tmpStr = [WeChat.token,timestamp,nonce].sort().join('');
        tmpStr = CryptoJS.SHA1(tmpStr).toString();

        if (tmpStr == signature){
            return true;
        }else{
            return false;
        }
    },
    getAccessToken:function(){
        Meteor.http.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+WeChat.appid+'&secret='+WeChat.appSecret, function(error,data){
            if (data){
                var time_val = new Date();
                WeChat.time_val = (time_val.getTime())/1000;
                WeChat.access_token = EJSON.parse(data.content).access_token;
                setWechat_menu();
            }
        });
    }
}