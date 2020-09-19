//文档加载事件
$(function () {
    $("#banner .pptbox").slidebox({
        boxh: 430,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 20,//控制按钮宽度
        controlsH: 20,//控制按钮高度
        radius: 20//控制按钮圆角度数
    });
    //banner右边移入事件
    $("#banner .frtbox ul li").mouseenter(function () {
        $(this).find(".box").hide();
        $(this).find(".two").show();
        $(this).siblings().find(".box").show();
        $(this).siblings().find(".two").hide();
    });
    // 图书折扣移入事件
    $("#discount .btbox li").hover(function () {
        $(this).css({ background: '#f2f2f2' });
        $(this).find("del").css({ display: 'block' });
    }, function () {
        $(this).css({ background: '#fff' });
        $(this).find("del").css({ display: 'none' });
    });

    //新书上架右边内容
    $("#selves .frtbox li").hover(function () {
        $(this).find(".box1").hide()//隐藏
        $(this).find(".two").show();//显示
        $(this).siblings().find(".box1").show();
        $(this).siblings().find(".two").hide();
    }), function () {
        $("#selves .frtbox li .two").hide();
        $("#selves .frtbox li .box1").show();
    };
    // 独家提供轮播图
    $("#exclusive .pptbox").slidebox({
        boxh: 525,//盒子的高度
        w: 1200,//图片的宽度
        h: 525,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 10,//控制按钮宽度
        controlsH: 10,//控制按钮高度
        radius: 10//控制按钮圆角度数
    });
    //独家提供选项卡
    $("#exclusive .biaoti button").mouseenter(function () {
        $(this).addClass("abc");
        $(this).siblings().removeClass("abc");
    })
    // 猜你喜欢换一批
    let a = 1;
    // let b = $("#guessLikes .noeBox .boxes").length;
    $("#guessLikes .biaoti button").click(function () {
        if(a<$("#guessLikes .noeBox .boxes").length){
            $("#guessLikes .outBox").stop().animate({marginLeft:(-1200 * a)+'px'},1000,function(){
                if(a>=$("#guessLikes .noeBox .boxes").length){
                    $("#guessLike .outBox").css({marginLeft:'0px'});
                    a=0;
                };
            });
            a++;
        }
        // if(a>=$("#guessLikes .noeBox .boxes").length){
        //     $("#guessLike .outBox").stop().animate({marginLeft:0+'px'},1000,function(){
        //         if(a>=$("#guessLikes .noeBox .boxes").length){
        //             $("#guessLike .outBox").css({marginLeft:'0px'});
        //         }
        //     });
        //     a=0;
        // }
    });
})