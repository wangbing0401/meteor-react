/**
 * Created by tx-0020 on 15/12/7.
 */
WeChat = {
    menu: {
        "button":[
            {
                "type":"click",
                "name":"今日歌曲",
                "key":"V1001_TODAY_MUSIC"
            },
            {
                "name":"菜单",
                "sub_button":[
                    {
                        "type":"view",
                        "name":"搜索",
                        "url":"http://www.soso.com/"
                    },
                    {
                        "type":"view",
                        "name":"视频",
                        "url":"http://v.qq.com/"
                    },
                    {
                        "type":"click",
                        "name":"赞一下我们",
                        "key":"V1001_GOOD"
                    }]
            }]
    }
}

setWechat_menu = function(){
    Meteor.http.post('https://api.weixin.qq.com/cgi-bin/menu/create?access_token='+WeChat.access_token, WeChat.menu, function(error, data){
        console.log(data);
    });
}