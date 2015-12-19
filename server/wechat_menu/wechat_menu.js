/**
 * Created by tx-0020 on 15/12/7.
 */
WeChat.menu = {
    "button":[
        {
            "type":"click",
            "name":"最新文章",
            "key":"publish_news"
        },
        {
            "name":"更多",
            "sub_button":[
                {
                    "type":"view",
                    "name":"论坛首页",
                    "url":"http://h5vip.org/list"
                }]
        }]
}

setWechat_menu = function(){
    Meteor.http.post('https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+WeChat.access_token, {data:WeChat.menu}, function(error, data){

    });
}