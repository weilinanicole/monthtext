require(['jquery', 'iscroll', 'handlebars'], function($, IScroll, Handlebars) {
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
            rander(data, '#pageOne', '.one', Handlebars);
            rander(data, '#pageTwo', '.two', Handlebars);
            rander(data, '#pageThree', '.three', Handlebars)
        }
    });


    $('.page').on('click', 'li', function() {
        var addr = $(this).attr('data_id');
        var type = $(this).attr('type');
        location.href = '../../pages/detail.html?id=' + addr + type
    })


})

function rander(data, id, box, Handlebars) {
    var source = $(id).html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $(box).html(html)
}