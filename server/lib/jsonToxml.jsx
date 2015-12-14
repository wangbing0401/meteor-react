/**
 * Created by tx-0020 on 15/12/5.
 */
template_message = function(data){
    if (data.MsgType == "text"){
        return `<xml>
        <ToUserName><![CDATA[${data.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${data.ToUserName}]]></FromUserName>
        <CreateTime>${new Date()}</CreateTime>
        <MsgType><![CDATA[${data.MsgType}]]></MsgType>
        <Content><![CDATA[${data.Content}]]></Content>
        </xml>`;
    }else if (data.MsgType == "image"){

    }else if (data.MsgType == "voice"){

    }else if (data.MsgType == "video"){

    }else if (data.MsgType == "shortvideo"){

    }else if (data.MsgType == "location"){

    }else if (data.MsgType == "link"){

    }else if (data.MsgType == "event" && data.Event == "subscribe"){
        return `<xml>
        <ToUserName><![CDATA[${data.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${data.ToUserName}]]></FromUserName>
        <CreateTime>${new Date()}</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[欢迎关注前端订阅号,我们会带给您最前沿的前端知识,这里有H5,angular,react,meteor等最前沿前端知识.]]></Content>
        </xml>`;
    }else if(data.Event == "CLICK" && data.EventKey == "publish_news"){
        return `<xml>
        <ToUserName><![CDATA[${data.FromUserName}]]></ToUserName>
        <FromUserName><![CDATA[${data.ToUserName}]]></FromUserName>
        <CreateTime>${new Date()}</CreateTime>
        <MsgType><![CDATA[news]]></MsgType>
        <ArticleCount>1</ArticleCount>
        <Articles>
        <item>
        <Title><![CDATA[这是title]]></Title>
        <Description><![CDATA[这是描述]]></Description>
        <PicUrl><![CDATA[http://101.200.237.34/images/news.png]]></PicUrl>
        <Url><![CDATA[http://www.baidu.com]]></Url>
        </item>
        </Articles>
        </xml> `;
    }
    return '';
}