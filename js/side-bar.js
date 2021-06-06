var lastScroll = 0;

$(document).ready(function(){
    $(window).on('scroll', function(){
        const st = $(window).scrollTop();
        if(st > lastScroll  ){
            $('nav#nav-bar').addClass('hide')
        } else {
            $('nav#nav-bar').removeClass('hide')
        }
        lastScroll = st
    })
});