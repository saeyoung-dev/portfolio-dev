        //라이트갤러리
        $(".lightgallery").lightGallery({
            thumbnail: true,
            autoplay: true,
            pause: 3000,
            progressBar: true
        });

        //윈도우팝업
        $(".window").click(function(e) {
            e.preventDefault();
            //window.open("파일명","팝업이름","옵션설정");
            window.open("popup.html", "popup01", "width=800, height=590,left=50,top=50, scrollbars=0, toolbar=0, menubar=0");
        })

        //레이어팝업
        $(".layer").click(function(e) {
            e.preventDefault();
            $("#layer").fadeIn();
        })
        $("#layer .close").click(function(e) {
            e.preventDefault();
            $("#layer").fadeOut();
        })

        //탭메뉴
        var $tab_list = $(".tab_menu");

        $tab_list.find("ul ul").hide();
        $tab_list.find("li.active > ul").show();

        function tabMenu(e) {
            e.preventDefault();
            var $this = $(this);
            $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
        }
        $tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

        //배너
        $(".ban").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true
        })

        //갤러리
        $(".gallery_img").slick({
            fade: true,
            arrows: false,
            pauseOnHover: true,
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
        $(".play").click(function() {
            $(".gallery_img").slick("slickPlay");
        });
        $(".pause").click(function() {
            $(".gallery_img").slick("slickPause");
        });
        $(".prev").click(function() {
            $(".gallery_img").slick("slickPrev");
        });
        $(".next").click(function() {
            $(".gallery_img").slick("slickNext");
        });

        //버튼을 클릭하면 전체 메뉴를 보이게 하세요.
        $(".tit .btn").click(function(e) {
            e.preventDefault();
            $("#cont_nav").slideToggle(300);
            $(this).toggleClass("on");
        });