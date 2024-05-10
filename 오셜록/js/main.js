$(document).ready(function () {
    const mb = new Swiper('.mb', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction", //버튼 종류 설정
        },
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        loop: true,
        speed: 1000,
    });

    $(".play").hide();
    // .pause를 클릭했을때 
    // mb슬라이드의 자동재생(autoplay)을 멈춰라(stop)
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });
    $(".play").click(function () {
        mb.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });

    // news
    const news = new Swiper('.news', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        loop: true,
        speed: 1000,
        direction: "vertical",
    });

    // prd
    const prd_list = new Swiper('.prd_list', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },

        speed: 1000,
        loop: true,
        slidesPerView: "5", // 한줄에 보이는 갯수
        spaceBetween: 100, // 슬라이드 사이의 간격
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });

    $(".prd_list li a img:nth-child(2)").hide();
    $(".prd_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle(); //마우스 올린 요소에 포함되어 있는 이미지 두번 째를 찾아서 fadein, fadeout
    });

    // //.tab_btn li 1,2,3,4를 클릭했을 때
    // //.tab_img li 1,2,3,4를 클릭했을 때 (형제들은 숨겨라)
    // $(".tab_img li:not(:first-child)").hide();
    // $(".tab_btn li:nth-child(1)").click(function () {
    //     $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
    // });
    // $(".tab_img li:not(:first-child)").hide();
    // $(".tab_btn li:nth-child(2)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on"); //클릭 했을 때 on,해제
    //     $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
    // });
    // $(".tab_img li:not(:first-child)").hide();
    // $(".tab_btn li:nth-child(3)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on");
    //     $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
    // });
    // $(".tab_img li:not(:first-child)").hide();
    // $(".tab_btn li:nth-child(4)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on");
    //     $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
    // });

    $(".tab_btn li").click(function () {
        let idx = $(this).index(); //.tab_btn li 클릭한 요소 번호 찾기
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut(); //tab_btn li에 클릭한 번호를 .tab_img li fadeIn 나머지 형제요소는 faceOut
    });

    //museum_list hover 
    $(".museum_list li:nth-child(1)").addClass("active");
    $(".museum_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


});
