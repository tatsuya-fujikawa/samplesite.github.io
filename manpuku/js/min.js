$(function(){
    'use strict';

// $('.landing').bgSwitcher({
//     images:['../img/スライダー１.jpg','../スライダー２.jpg','../img/スライダー３.jpg','../img/スライダー４.jpg','../img/スライダー５.jpg'],
//     interval: 3500,
//     effect: "fade",
//     duration: 1800,
//     easing: "swing",
    
// });

   
var pagetop = $('#page_top');
// ボタン非表示
pagetop.hide();
//  スクロールしたらボタン表示
$(window).scroll(function () {
   if ($(this).scrollTop() > 2500) {
        pagetop.fadeIn();
   } else {
        pagetop.fadeOut();
   }
});

pagetop.click(function () {
$('body, html').animate({ scrollTop: 0 }, 800);
   return false;
});

$('a[href^="#"]').click(function(){
    var speed = 300;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
    });

$(window).scroll(function(){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if(scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
        }    
    });
});


});

