$(function(){
    //메뉴
    $(".nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();
    })
    $(".nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    //메뉴 키보드이벤트
    $(".nav>ul>li").focusin(function(){
        $(".sub").stop().slideDown();
        $(this).addClass("on");
    })
    $(".nav>ul>li").focusout(function(){
        $(".sub").stop().slideUp();
        $(this).removeClass("on");
    })

    //슬라이드
    //슬라이드 띠를 불러서 이동시킨다.
    //$(".slide ul").css({left:"-1200px"})
    function slide(){
        $(".slide ul").animate({left:"-1200px"}, 1000, function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({left:0})
        })
    }
    setInterval(slide, 2000)

    //탭메뉴
    var i=0;

    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        i=$(this).index();
        console.log(i);

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    })

    //팝업
    $(".pp").click(function(){
        $(".popup").show();

        return false;
    })
    $("button").click(function(){
        $(".popup").hide();
    })
})