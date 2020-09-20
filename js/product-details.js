//文档加载事件
$(function () {
    // 图书详情购物车
    $("#theBook .litRight .shopping button").click(function(){
        $(this).addClass("active").find("span").addClass("url");
        $(this).siblings().removeClass("active").find("span").removeClass("url");
    });
    // 图片
    $("#theBook .contens .litLeft .box2 button").click(function(){
        $(this).addClass("abc").siblings().removeClass("abc");
    })
    // 购物车添加
    let add = 1;
    $("#theBook .addShop .lft .boxes1").click(function(){
        add++;
        if(add>99){
            $("#theBook .addShop .lft .boxes").html("99");
            add=99;
        }
        $("#theBook .addShop .lft .boxes").html(add);
    });
    $("#theBook .addShop .lft .boxes2").click(function(){
        add--;
        $("#theBook .addShop .lft .boxes").html(add);
        if(add<1){
            $("#theBook .addShop .lft .boxes").html("1");
            add=1;
        }
    });
    // 人气单品
    $("#sentiment ul li").hover(function () {
        $(this).css({ background: '#f2f2f2' });
        $(this).find("del").css({ display: 'block' });
    }, function () {
        $(this).css({ background: '#fff' });
        $(this).find("del").css({ display: 'none' });
    });
    // 商品介绍评价和介绍
    $("#introduction .rightbox .box button").click(function(){
        $(this).addClass("active").siblings().removeClass("active")
    });
    $("#introduction .rightbox .box .pj").click(function(){
        $("#introduction .rightbox .onebox").removeClass("hide");
        $("#introduction .rightbox .twobox").addClass("hide");
    });
    $("#introduction .rightbox .box .sp").click(function(){
        $("#introduction .rightbox .twobox").removeClass("hide");
        $("#introduction .rightbox .onebox").addClass("hide");
    });
    // 商品介绍-右边盒子-全部评价
    $("#introduction .rightbox .quanbu li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //商品介绍-右边盒子-评价
    $("#introduction .rightbox .dibu li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find("button").css({color:'#f8380c'});
        $(this).siblings().find("button").css({color:'#999'});
    });
});