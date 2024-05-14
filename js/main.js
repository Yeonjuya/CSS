$(document).ready(function () {
    // 메인 슬라이드
    const mv = new Swiper('.mv', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 슬라이드 재생버튼
    $(".play").hide();
    $(".pause").click(function () {
        mv.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });
    $(".play").click(function () {
        mv.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });


    //best
    const best_list = new Swiper('.best_list', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },

        speed: 1000,
        centeredSlides: true,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        slidesPerView: 2, // 한줄에 보이는 갯수
        spaceBetween: 30, // 슬라이드 사이의 간격
        scrollbar: {
            el: ".swiper-scrollbar",
            dragSize: 200,
            draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // 슬라이드 재생버튼
    $(".bs_play").hide();
    $(".bs_pause").click(function () {
        best_list.autoplay.stop();
        $(".bs_pause").hide();
        $(".bs_play").show();
    });
    $(".bs_play").click(function () {
        best_list.autoplay.start();
        $(".bs_pause").show();
        $(".bs_play").hide();
    });

    // New
    $(".tab_img li:not(:first-child)").hide();

    // .tab_btn li를 클릭했을 때
    // $(this)의 index()값 가져와서 변수 idx에 할당하시오
    // tab_img li에 eq(변수 idx)에 해당하는 li fadeIn하고 형제요소는 fadeOut

    $(".tab_btn li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
    });


    //family
    $(".family_list li:nth-child(1)").addClass("active");
    $(".family_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});