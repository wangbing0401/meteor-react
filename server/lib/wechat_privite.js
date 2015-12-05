/**
 * Created by tx-0020 on 15/12/5.
 */
WeChat = {
    token:'wb6266099',
    appid:'wxd062703f9a45db27',
    appSecret:'ac0c217290c9eeac44bc8ca9552aec7e'
}

getAccessToken = function(){
    Meteor.http.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+WeChat.appid+'&secret='+WeChat.appSecret, function(error,data){
        if (data){
            WeChat.access_token = data.content.access_token;
        }
    });
}