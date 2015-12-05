/**
 * Created by tx-0020 on 15/12/5.
 */
wechatVerify = function(queryParams){
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
}