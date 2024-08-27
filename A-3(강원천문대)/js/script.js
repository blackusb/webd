$(function(){
    //메뉴
    $(".nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    //키보드이벤트 메뉴
    $(".nav>ul>li").focusin(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".nav>ul>li").focusout(function(){
        $(".sub").stop().slideUp();
    })

    //슬라이드
    var t=0;

    function slide(){
        if(t<2){
            t++;
        }else{
            t=0;
        }
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(t).fadeIn();
    }
    setInterval(slide, 2000)

    //탭메뉴
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on");
        $(this).addClass("on");

        var i=$(this).index();
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