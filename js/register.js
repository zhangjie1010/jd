//文档加载事件
$(function () {
    // 点击事件
    $("#contnt .denglu .topbox .top1").click(function(){
        $(this).find("a").addClass("active");
        $("#contnt .denglu .topbox .top2").find("a").removeClass("active");
        $("#contnt .denglu .box").addClass("show").removeClass("hide");
        $("#contnt .denglu .box2").removeClass("show").addClass("hide");
    })
    $("#contnt .denglu .topbox .top2").click(function(){
        $(this).find("a").addClass("active");
        $("#contnt .denglu .topbox .top1").find("a").removeClass("active");
        $("#contnt .denglu .box2").addClass("show").removeClass("hide");
        $("#contnt .denglu .box").removeClass("show").addClass("hide");
    })
    // 登录二维码移入移出事件
    $("#contnt .denglu .box .one").hover(function(){
        $(this).stop().animate({right:8+'px'},1000);
        $("#contnt .denglu .box .two").stop(true).fadeIn(1000);
    },function(){
        $(this).stop().animate({right:110+'px'},1000);
        $("#contnt .denglu .box .two").stop(true).fadeOut(1000);
    });
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
                    minlength: 6,
                    myPwd:true
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
                    minlength: "密码长度不能小于 6 个字符"
                },
                shoujiyz:{
                    required: "请输入正确验证码",
                },
            }
        })
        jQuery.validator.addMethod("myUser", function (value, element) {
            var tel = /^[A-Za-z0-9_]{4,10}$/;
            return this.optional(element) || (tel.test(value));
        }, "请输入正确的用户名");
        jQuery.validator.addMethod("myPwd", function (value, element) {
            var tel = /^[A-Za-z0-9_]{6,12}$/;
            return this.optional(element) || (tel.test(value));
        }, "请输入6-12位密码");
        jQuery.validator.addMethod("shoujyz", function (value, element) {
            var tel = /^[0-9]{6}$/;
            return this.optional(element) || (tel.test(value));
        }, "验证错误");
    });
    $("#contnt .denglu .box2 .box3 button").click(function () {
        var time = 60;
        var timer = setInterval(function(){
            time--;
            $("#contnt .denglu .box2 .box3 button").html("（"+time+"秒）重发");
            if(time==0){
                clearInterval(timer);
                $("#contnt .denglu .box2 .box3 button").text("获取验证码");
            }
        },1000);
    });

})