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
})