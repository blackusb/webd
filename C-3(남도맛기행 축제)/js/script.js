$(function(){
    $(".nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().fadeIn();
    })
    $(".nav>ul>li").mouseleave(function(){
        $(".sub").stop().fadeOut();
    })
})