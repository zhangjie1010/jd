//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 430,//盒子的高度
        w: 1000,//图片的宽度
        h: 430,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });
    //电子书轮播图
    $("#ebook .fltbox .zhong .pptbox").slidebox({
        boxh: 216,//盒子的高度
        w: 328,//图片的宽度
        h: 216,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0//控制按钮圆角度数
    });
    //电子书右边内容
    $("#ebook .frtbox li").hover(function () {
        $(this).find(".box1").hide()//隐藏
        $(this).find(".two").show();//显示
        $(this).siblings().find(".box1").show();
        $(this).siblings().find(".two").hide();
    }), function () {
        $("#ebook .frtbox li .two").hide();
        $("#ebook .frtbox li .box1").show();
    };
    // 标题控制
    $(".biaoti button").click(function () {
        $(this).addClass("act");
        $(this).siblings().removeClass("act")
    });

    //服装轮播图
    $("#cloth .pptbox").slidebox({
        boxh: 338,//盒子的高度
        w: 423,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0//控制按钮圆角度数
    });
    //运动户外轮播图
    $("#sport .pptbox").slidebox({
        boxh: 338,//盒子的高度
        w: 423,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0//控制按钮圆角度数
    });

    // 童装轮播图
    $("#childcloth .pptbox").slidebox({
        boxh: 338,//盒子的高度
        w: 423,//图片的宽度
        h: 338,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 5,//控制按钮高度
        radius: 0//控制按钮圆角度数
    });

    //家居日常
    $("#spread .box2>ul>li").mouseenter(function () {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    // 滚动条监听交互事件
    $(window).scroll(function () {
        //获取滚动条距离
        let t = $(document).scrollTop();
        //判断距离显示或隐藏元素
        if (t >= 1000) {
            $("#twoNav").stop(true).slideDown(500);
        } else {
            $("#twoNav").stop(true).slideUp(500);
        }
        if (t >= 2500) {
            $("#backTop").show();
        } else {
            $("#backTop").hide();
        }
    });
    //返回顶部点击事件
    $("#backTop").click(function () {
        $("html,body").stop(true).animate({ scrollTop: 0 }, 1000);
    });

    //把要改变的颜色设置为一个数组。用于匹配索引颜色
    let arr = ["#f60", "#93d56e", "#f35928", "#ba9eee", "#fe7594", "#c2ed51"];
    
    //楼层导航移入移出事件
    $("#floorNav>ul>li").hover(function () {
        // 获取定义li的索引
        // index() 方法返回指定元素相对于其他指定元素的 index 位置。
        let index = $(this).index();
        $(this).css({
            width: '40px',backgroundPositionX: '-40px',backgroundColor: arr[index]});
    }, function () {
        $(this).css({width: "0px",backgroundPositionX:"0px", backgroundColor: "#ccc"});
    });

    //楼层导航点击切换效果
    $("#floorNav>ul>li").click(function(){
        //获取索引
        let index = $(this).index();
        // 匹配展示的楼层
        let t = $(".louceng").eq(index).offset().top;
        //动画让滚动条移动到当前距离
        $("html,body").stop(true).animate({ scrollTop: t }, 1000);
    })
})