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
    createUser: function (name, password, callback){
        var data = {};
        if (!name){
            this.dialog_show("姓名不能为空");
            return;
        }else if (!password){
            this.dialog_show("密码不能为空");
            return;
        }
        Accounts.createUser({username:name, password:password}, function(error){
            if (error && error.reason == "Username already exists."){
                data = {message:"用户已存在", success:false};
            }else {
                data = {success:true, message:"注册成功"};
            }
            callback(data);
        });
    }
};