/**
 * Created by tx-0020 on 15/12/4.
 */
WB = {
    dialog_show:function (dia_content){
        var d = dialog({
            content: dia_content
        });
        d.show();
        setTimeout(function() {
            d.close().remove();
        }, 1000);
    },
    createUser: function (parmers, callback){
        var data = {};
        if (!parmers.username){
            this.dialog_show("姓名不能为空");
            return;
        }else if (!parmers.password){
            this.dialog_show("密码不能为空");
            return;
        }
        Accounts.createUser(parmers, function(error){
            if (error && error.reason == "Username already exists."){
                data = {message:"用户已存在", success:false};
            }else {
                data = {success:true, message:"注册成功"};
            }
            callback(data);
        });
    },
    login:function(parmers, callback){
        var data = {};
        if (!parmers.username){
            this.dialog_show("姓名不能为空");
            return;
        }else if (!parmers.password){
            this.dialog_show("密码不能为空");
            return;
        }
        Meteor.loginWithPassword(parmers.username, parmers.password, function(error){
            if (error && error.reason == "User not found"){
                data = {message:"用户不存在", success:false};
            }else if (error && error.reason == "Incorrect password"){
                data = {message:"密码错误", success:false};
            }else{
                data = {success:true, message:"登陆成功"};
            }
            callback(data);
        });
    },
    loadImage(srcs,callBack){
        // 过滤掉 非 image 类型的文件
        for(var i = 0; i < srcs.length; i++)
        {
            var src = srcs[i];
            if(!src.type.match(/image.*/)){
                if(window.console){
                    console.log("选择的文件类型不是图片: ", src.type);
                } else {
                    window.confirm("只能选择图片文件");
                }
                return;
            }
            // 创建 FileReader 对象 并调用 render 函数来完成渲染.
            var reader = new FileReader();
            // 绑定load事件自动回调函数
            reader.onload = function(e){
                //读取数据源
                imageData = e.target.result;
                callBack(imageData);
            };
            // 读取文件内容
            reader.readAsDataURL(src);
        }
    },
    formatDate(strTime){
        var date = new Date(strTime);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
    }
};