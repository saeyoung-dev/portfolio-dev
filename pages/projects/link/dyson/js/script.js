$(window).load(function () {
    menuEffect();
    visualSlider();
    headerScroll();
    searchBarDown();
    Splitting_();
})

function headerScroll() {
    $(window).on("scroll", onScroll);

    function onScroll() {

        var headerTop = $(window).scrollTop();
        var headerWidth = $(window).outerWidth();

        if (headerTop > 150 && headerWidth >= 1024) {
            $("#gnb").addClass("on");
            $("#notice").addClass("on");
            $("#header_wrap").addClass("onscroll");
        } else {
            $("#gnb").removeClass("on");
            $("#notice").removeClass("on");
            $("#header_wrap").removeClass("onscroll");
        }
    }
}

function menuEffect() {

    var $mainMenu = $(".menu_top > li > a");
    var $subMenu = $(".sub_menu");
    var $category = $(".category>li>a");
    var $categoryList = $(".category_box");

    $subMenu.slideUp(0);
    $("#header_wrap").removeClass("on");
    $(".sub_banner, .category_box").stop();

    $mainMenu.on("mouseenter focus", onMenu);
    $subMenu.on("mouseleave", outMenu);
    $subMenu.on("focousout", outMenu);

    $category.on("mouseenter focus", onSubMenu);
    $subMenu.on("mouseleave", outSubMenu);
    $category.last().on("focusout", outSubMenu);



    function onMenu() {
        var menuClickNum = $mainMenu.index($(this));

        $subMenu.slideUp();
        $("#header_wrap").removeClass("on");
        $("#header_wrap").addClass("on");
        $subMenu.eq(menuClickNum).slideDown(200);
    }

    function outMenu() {
        $("#header_wrap").removeClass("on");
        $subMenu.slideUp(200);
    }

    function onSubMenu() {
        var subClickNum = $category.index($(this));

        $(".sub_banner, .category_box").stop();
        $categoryList.removeClass("on");
        $categoryList.eq(subClickNum).addClass("on");

        $(".sub_banner").removeClass("on");
        $(".sub_banner").eq(subClickNum).addClass("on");
    }

    function outSubMenu() {
        $(".sub_banner, .category_box").stop();
        $categoryList.removeClass("on");
        $(".sub_banner").removeClass("on");
    }
}

function searchBarDown() {
    $(".search_drop").slideUp(0);

    $(".search_drop_btn").on("click", onSearchBar);
    $(".search_close_btn").on("click", outSearchBar);

    function onSearchBar() {
        $(".search_drop").slideToggle(200);
    }

    function outSearchBar() {
        $(".search_drop").slideUp(200);
    }
}

function visualSlider() {
    $("#slider").slick({
        infinite: true,
        slide: "li",
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        dots: true,
        arrows: false,
    })
}

function Splitting_() {
    Splitting();
}
