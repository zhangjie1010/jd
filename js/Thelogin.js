//文档加载事件
$(function () {
    $.validator.setDefaults({
        submitHandler: function () {
            alert("提交事件!");
        }
    });
    $().ready(function () {
        $("#commentForm").validate();
    });
    $().ready(function () {
        // 在键盘按下并释放及提交后验证提交表单
        $("#signupForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    myUser: true
                },
                pwd: {
                    required: true,
                    minlength: 5
                },
                repwd: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                dianhua:{
                    required: true,
                    shouJ:true
                },
                yanzheng:{
                    required: true,
                    yanZ:true
                },
                shoujiyz:{
                    required: true,
                    shoujyz:true
                },
                agree: "required"
            },
            //提示信息
            messages: {
                firstname: "请输入您的名字",
                lastname: "请输入您的姓氏",
                username: {
                    required: "请输入用户名",
                },
                pwd: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于 5 个字符"
                },
                repwd: {
                    required: "请输入密码",
                    minlength: "密码长度不能小于 5 个字符",
                    equalTo: "两次密码输入不一致"
                },
                dianhua: {
                    required: "请输入11位手机号码",
                },
                yanzheng:{
                    required: "请输入正确的4位验证码",
                },
                shoujiyz:{
                    required: "请输入6位验证码",
                },
            }
        })
        jQuery.validator.addMethod("myUser", function (value, element) {
            var tel = /^[A-Za-z0-9_]{4,10}$/;
            return this.optional(element) || (tel.test(value));
        }, "请输入正确的用户名");
        jQuery.validator.addMethod("shouJ", function (value, element) {
            var tel = /^[0-9]{11}$/;
            return this.optional(element) || (tel.test(value));
        }, "请输入正确的手机号");
        jQuery.validator.addMethod("yanZ", function (value, element) {
            var tel = /^[4Ee7Rr]{4}$/;
            return this.optional(element) || (tel.test(value));
        }, "验证错误");
        jQuery.validator.addMethod("shoujyz", function (value, element) {
            var tel = /^[0-9]{6}$/;
            return this.optional(element) || (tel.test(value));
        }, "验证错误");
    });

    
    $("#bdy .ipt .box2 button").click(function () {
        var time = 60;
        var timer = setInterval(function(){
            time--;
            $("#bdy .ipt .box2 button").html("（"+time+"秒）重发");
            if(time==0){
                clearInterval(timer);
                $("#bdy .ipt .box2 button").text("获取验证码");
            }
        },1000);
    });

})