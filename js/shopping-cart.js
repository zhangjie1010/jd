//文档加载事件
$(function () {
    // 猜你喜欢
    $("#sentiment ul li").hover(function () {
        $(this).css({ background: '#f2f2f2' });
        $(this).find("del").css({ display: 'block' });
    }, function () {
        $(this).css({ background: '#fff' });
        $(this).find("del").css({ display: 'none' });
    });

    // 购物车
    // 1.全选
    // 选中或者不选中子项目前面的复选框
    $("#shooping button.quanxuan").click(function () {
        if ($(this).hasClass("active")) {
            $("#shooping button.quanxuan").removeClass("active");
            $(".danxuan").removeClass("active");
        } else {
            $("#shooping button.quanxuan").addClass("active");
            $(".danxuan").addClass("active");
        }
        zjia();
    });
    // 子项目的选中状态来决定全选的选中状态
    // 如果选中子项目复选框的个数与所有子项目复选框的个数相同时，那么就全选，否则就不全选
    // 选中复选框的个数 = $("table .two:checked").length
    // 所有子项目的复选框的个数 = $("table .two").length
    $("#shooping .danxuan").click(function () {
        let a = 0;
        let sall = $("#shooping .danxuan").length;
        let snum = $(this).hasClass("active");
        if (snum) {
            $(this).removeClass("active");
        } else {
            $(this).addClass("active");
        }
        $("#shooping .danxuan").each(function () {
            if ($(this).hasClass("active")) {
                a++;
            }
        })
        if (a == sall) {
            $("#shooping .quanxuan").addClass("active");
        } else {
            $("#shooping .quanxuan").removeClass("active");
        }
        zjia();
    });

    /**
     * 增加数量
     * 分析：
     *      当点击事件发生时，去除文本框的值，然后自减1，最后吧修改后的值赋给文本框
     */
    $("#shooping .box1 .add").click(function () {
        let num = $(this).siblings(".ctner").val();
        if (num < 100) {
            num++;//隐式类型转换
        }
        $(this).siblings(".ctner").val(num);

        //计算小计：数量*单价
        //单价
        let sum = $(this).parent().siblings(".danjia").html();
        let danzong = num * sum;//隐式转换
        $(this).parent().siblings(".xiaoji").html(danzong.toFixed(2));//toFixd保留两位小数
        zjia();
    });
    //减少数量
    $("#shooping .box1 .red").click(function () {
        let num = $(this).siblings(".ctner").val();
        if (num > 1) {
            num--;//隐式类型转换
        }
        $(this).siblings(".ctner").val(num);
        //计算小计：数量*单价
        //单价
        let sum = $(this).parent().siblings(".danjia").html();
        let danzong = num * sum;//隐式转换
        $(this).parent().siblings(".xiaoji").html(danzong.toFixed(2));//toFixd保留两位小数
        zjia();
    });

    /**
     * 改变数量的事件
     * 
     */
    $("#shooping .box1 .ctner").keyup(function () {
        let num = $(this).val();
        //判断：如果不是一个数字那么就改为1
        //如果不是一个数字就返回true
        if (isNaN(num)) {
            $(this).val(1);
            num = 1;
        }
        if (num > 100) {
            $(this).val(100);
            num = 100;
        }
        //计算小计：数量*单价
        //单价
        let sum = $("#shooping .box1 .red").parent().siblings(".danjia").html();
        let danzong = num * sum;//隐式转换
        $(this).parent().siblings(".xiaoji").html(danzong.toFixed(2));//toFixd保留两位小数
        zjia();
    });

    /**
     * 计算总价
     * 分析：
     *      应该计算所有选中单项的小计之和，显示在总价出
     *      找出选中的单项,分别取取出对应的小计，然后相加
     */
    function zjia() {
        let sum = 0;
        let hum = 0;
        $("#shooping .danxuan").each(function (index, dom) {//each为遍历方法
            //获取单个小计价格
            let djia = $(dom).siblings().find(".xiaoji").html();
            //获取单个数量
            let zshu = $(dom).siblings().find(".anniu").find(".ctner").val();
            if ($(this).hasClass("active")) {
                sum += parseFloat(djia);
                hum += parseFloat(zshu);
            }
            console.log(sum);
        });

        //遍历结束得到总价
        $("#shooping .zjia").html(sum.toFixed(2));
        //遍历结束得到数量
        $("#shooping .zshu").html(hum);
    };

    /**
     * 删除单个商品
     */
    $("#shooping .delbox").click(function(){
        $(this).parent().parent().parent().remove();
        //重新计算总价数量
        zjia();
    });
    /**
     * 删除选中商品
     */
    $("#shooping .delxuanzhong").click(function(){
        $("#shooping .danxuan").each(function(index,dom){
            if ($(this).hasClass("active")) {
                $(this).parent().parent().parent().remove();
            }
            zjia();
        })
    })
})