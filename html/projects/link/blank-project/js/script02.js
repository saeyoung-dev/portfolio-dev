$(window).load(function(){
  
  initialSetting();
  headerScroll();
  mobileBtn();
  mainVisualSlide();
  selectMenu();
  imgHover();
  contentSlide();
  filterBtn();
  slideBtnScroll();
  
}) // window

function initialSetting(){
  $("#mnav_btn a span").addClass("invert");
}//initialSetting

function headerScroll(){

  $(window).on("scroll", onScroll);
  
  function onScroll(){
    
    var headerTop = $(window).scrollTop();
    if(headerTop > 300){
      $("#header_wrap").addClass("on");
    }else{
      
      $("#header_wrap").removeClass("on").css({
        "transition": "all 0.4s"});
    }
      
  }// onScroll
  
} // headerScroll

function mobileBtn(){
  
  var openMenu = false;
  
  $("#mnav_menu").css({"opacity":0, "top":"-100%"});
  $("#mnav_btn").on("click", onMnav);
  
  function onMnav(){
    
    if(openMenu == false){
      $("#mnav_btn a span").addClass("invert");
      
      setTimeout(function(){
        $("#mnav_btn a span.line02").addClass("on")},0);
      
      setTimeout(function(){
        $("#mnav_btn a span.line01").addClass("on")
        $("#mnav_btn a span.line03").addClass("on")},300)
      
      setTimeout(function(){
        $("#mnav_btn a").addClass("on")},600);
      $("#mnav_menu").animate({"opacity":1,"top":0},500,"easeOutCubic");
      
      openMenu = true;
      return false;
      
    }else if(openMenu == true){
      
      
      
      $("#mnav_btn a").removeClass("on");
      $("#mnav_btn a span.line01").removeClass("on");
      $("#mnav_btn a span.line02").removeClass("on");
      $("#mnav_btn a span.line03").removeClass("on");
      
      $("#mnav_btn a span").removeClass("invert");
      
      $("#mnav_menu").animate({"opacity":0, "top":"-100%"},500,"easeOutCubic");
     
      openMenu = false;
      return false;
    }
    
  }// onMnav
  
  
} // mobileBtn

function mainVisualSlide() {

  $(".slider01").on("init", function (event, slick) {

    $('<div class="slick-counter"><span class="current"></span>/<span class="total"></span></div>').appendTo($(this));
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
    
    $('.slick-arrow').removeClass("on");

    //$('.text_wrap > .slick-arrow').on("click", btnClick);
    
 //   $('ul.slider01 > button.slick-arrow').css({"display":"none"});

//    function btnClick() {
//
//      $('.slick-arrow').removeClass("on");
//      $(this).addClass("on");
//      
//     
//
//    } //btnClick

  }) // init

  $(".slider01").slick({

      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 4500,
      infinite: true,
      pauseOnHover: true,
      arrows: true,
      variableWidth: true,
      prevArrow : ".slick-prev01",
      nextArrow : ".slick-next01",
    

      responsive: [
        {
          breakpoint: 996,
          settings: {
            centerMode : false,
            variableWidth: false,
          }
    },
        {
          breakpoint: 480,
          settings: {
            centerMode : false,
            variableWidth: false,
          }
    }
  ]

    })
  
   .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.current').text(nextSlide + 1);
    })

} // mainVisualSlide

function selectMenu(){
  
  $('.sel').each(function() {
  $(this).children('select').css('display', 'none');
  
  var $current = $(this);
  
  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));
      
      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));
      
      return;
    }
    
    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Toggling the `.active` state on the `.sel`.
  
$('.sel').click(function() {
  $(this).toggleClass('active');
});

  $('.sel').on("mouseleave", leave);
  
  function leave(){
    setTimeout(function(){
        $('.sel').removeClass('active');
    },450);
    
  }
  
  
// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();
  
  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');
  
  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});
  
  
  
}//help

function imgHover(){
  
  var $gallery = $('.gallery_list > ul > li');
  var $galleryBtn = $gallery.find('a');
  
  $galleryBtn.css({"opacity":0,"width":"0%"});
  
  $gallery.on("mouseenter", onHover);
  $gallery.on("mouseleave", outHover);
  
  function onHover(){
    $(this).find('a').animate({"opacity":1, "width":"100%"},800,"easeOutCubic");
//    $(this).find('img').css({"transform":"scale(1.35)"});
  }//onHover
  
  function outHover(){
    $(this).find('a').animate({"opacity":0,"width":"0%"},500,
"easeOutCubic");
//    $(this).find('img').css({"transform":"scale(1)"});
  }//outHover
  
}// imgHover

function contentSlide(){
  
  $("#con03_inner").on("init", function (event, slick) {
    
    var $currentList = $(this).find("#con03_inner > .slick-active");
    var $listCount = $("#con03_inner .gallery_list").size();
    
    //alert($listCount);
    
    $('<div class="slick-counter02"><span class="currentList"></span>/<span class="totalList"></span></div>').appendTo($(this));
    $('.currentList').text( slick.currentSlide + 1  );
    $('.totalList').text( $listCount ) ;

  }) // init
  

  $("#con03_inner").slick({
    
    slide : ".gallery_list",
    arrows: true,
    slidesToShow: 1,
    draggable : false,
    infinite : false,
    prevArrow : ".slick-prev02",
    nextArrow : ".slick-next02",
      responsive: [
        {
          breakpoint: 768,
          settings: {
          }
    },
        {
          breakpoint: 480,
          settings: {
          }
    }
  ]

    })
   .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      $('.currentList').text(nextSlide + 1);
    })
  
}// contentSlide

function filterBtn(){
  
  var $filterBtn = $('#filter_btn');
  
  $filterBtn.on("click focus", popUp);
  function popUp(){
     $('#filter_wrap').toggleClass('on');
     $('#filter_btn').toggleClass('on');
    
    
     //$('#filter_btn span#out').show();
     //$('#filter_btn span#in').hide();
  } //popUp
  
}// filterBtn

function slideBtnScroll(){

  $(window).on("scroll", onScroll);
  
  function onScroll(){
    
    var headerTop = $(window).scrollTop();
    
    if(headerTop > 900){
      $("#con03_inner > button.slick-arrow").addClass("on");
    }else{
      $("#con03_inner > button.slick-arrow").removeClass("on").css({
        "transition": "all 0.4s"});
    }
    
    if( $(window).scrollTop() + $(window).height() > ($(document).height() - 300) ){
      
      $("#con03_inner > button.slick-arrow").removeClass("on").css({
        "transition": "all 0.2s"});
    }
      
  }// onScroll
  
} // headerScroll