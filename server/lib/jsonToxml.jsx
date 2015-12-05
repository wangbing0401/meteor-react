/**
 * Created by tx-0020 on 15/12/5.
 */
template_message = function(data){
    if (data.MsgType == "text"){
        return `<xml>
        <ToUserName><![CDATA[${data.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${data.ToUserName}]]></FromUserName>
        <CreateTime>12345678</CreateTime>
        <MsgType><![CDATA[${data.MsgType}]]></MsgType>
        <Content><![CDATA[${data.Content}]]></Content>
        </xml>`;
    }
}