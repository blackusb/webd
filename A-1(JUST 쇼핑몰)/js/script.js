$(function(){   //문서 로딩 후 실행해라
    //슬라이드
    //$(".slide ul").css({top:"-300px"})    //확인용
    function slide(){
        $(".slide ul").animate({top:"-300px"}, 1000, function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
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

        return false;   //링크차단
    })
    
    //메뉴
    $(".nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();  //show는 사용x. 문제에서 부드럽게 나타나야한다고 함.
    })
    $(".nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();     //stop을 넣어줘야, 계속 움직이는 것 방지.
    })

    //키보드이벤트 메뉴(시간적 여유 있을 때 하기)
    $(".nav>ul>li").focusin(function(){
        $(".sub").slideDown();
        $(this).addClass("on");
    }) 
    $(".sub li:last-child").focusout(function(){
        $(".nav>ul>li").removeClass("on");
    })
    $(".nav li:last-child li:last-child").focusout(function(){
        $(".sub").slideUp();
    })

    //팝업
    $(".pp").click(function(){
        $(".popup").show();

        return false;   //링크차단(".pp"가 a태그인데 연결된 링크가 없으므로 차단시킴)
    })
    $("button").click(function(){
        $(".popup").hide();
    })
})