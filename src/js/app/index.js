require(['jquery', 'iscroll'], function($, IScroll) {
    //iscroll实例化
    var myIscroll = new IScroll('.nav', {
        scrollX: true,
        scrollY: false
    });
    //tab切换
    $('.nav ul li').on('click', function() {
        $(this).addClass('on').siblings().removeClass('on');
        var ind = $(this).index();
        $('.page').eq(ind).show().siblings().hide()
    });
    //渲染pageOne
    $.ajax({
        url: '/pageOne',
        success: function(data) {
            var data = JSON.parse(data);
            console.log(data)
            rander(data, '#pageOne', '.one', Handlebars)
        }
    })



})

function rander(data, id, box, Handlebars) {
    var source = $(id).html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $(box).html(html)
}