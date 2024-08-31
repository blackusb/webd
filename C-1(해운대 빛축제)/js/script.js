$(function(){
    //메뉴
    $(".nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".nav>ul>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    })

    //슬라이드
    //eq(0) : 인덱스 0번
    //$(".slide ul li").eq(0).fadeOut();
    $(".slide ul li").fadeOut();
    $(".slide ul li").eq(1).fadeIn();
    //2초후
    //$(".slide ul li").eq(1).fadeOut();
    $(".slide ul li").fadeOut();
    $(".slide ul li").eq(2).fadeIn();
    //2초후
    //$(".slide ul li").eq(2).fadeOut();
    $(".slide ul li").fadeOut();
    $(".slide ul li").eq(0).fadeIn();

    var i=0;
    function slide(){
        if(i<2){
            i++;
        }else{
            i=0;
        }
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(i).fadeIn();
    }
    setInterval(slide, 2000)
})