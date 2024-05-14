$(document).ready(function () {
    $(".depth2,.depth2_bg").hide();

    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".depth2_bg").stop().fadeIn();
    });

    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".depth2_bg").stop().fadeOut();
    });



    // header에 마우스 올렸을 때
    //h1 img 에 src속성 값이 바꿔라
    $("#header").mouseenter(function () {
        $("h1 img").attr("src", "images/common/logo_b.png"); //src값을 변경
    });
    $("#header").mouseleave(function () {
        $("h1 img").attr("src", "images/common/logo_w.png");
    });

});