$(window).load(function(){
  
  headerScroll();
  mobileBtn();
  articleSlide();
  artworkSlide();
  similarSlide();
  tabMenu();
  loadMoreBtn();
  readMoreBtn();
  
}) // window

function headerScroll(){
  
  $(window).on("scroll", onScroll);
  
  function onScroll(){
    
    var headerTop = $(window).scrollTop();
    
    if(headerTop > 300){
      $("#header_wrap").addClass("on");
      $("#mnav_btn a span").addClass("invert");
    }else{
      
      $("#header_wrap").removeClass("on").css({
        "transition": "all 0.4s"});
      $("#mnav_btn a span").removeClass("invert").css({
        "transition": "all 0.4s"});
    }
    
    $("#mnav_btn").on("click", invertClick);
    
    function invertClick(){
      
      $("#mnav_btn a span").addClass("invert");

    }//invertClick;
      
  }// onScroll
  
} // headerScroll

function mobileBtn(){
  
  var openMenu = false;
  
  $("#mnav_menu").css({"opacity":0, "top":"-100%"});
//  $("#tnav").css({"top":"-100%"});
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

function articleSlide(){

  $('#article_list').slick({
        slide : "li",
        slideToShow : 1,
        slideToScroll : 1,
        autoplay : false,
        arrows: false,
        fade: false,
        dots : true,

      })//slick
  
}//articleSlide

function artworkSlide(){
  
    $('#sale_list').slick({
        slide : "li",
        slideToShow : 4,
        slideToScroll : 4,
        autoplay : false,
        arrows: true,
        fade: false,
//        centerMode: true,
        variableWidth: true,
        
        responsive: [
          {
            
            breakpoint : 996,
            settings : {
              
              slideToShow : 1,
             centerMode: true,
      
            }//setting 720
  
          }
          
          
          
        ]//responsive
        
        
      })//slick
  
}//artworkSlide

function similarSlide(){
  $('#similar_list').slick({
        slide : "li",
        slideToShow : 4,
        slideToScroll : 4,
        autoplay : false,
        arrows: true,
        fade: false,
//        centerMode: true,
        variableWidth: true,
        
        responsive: [
          {
            
            breakpoint : 980,
            settings : {
              
              slideToShow : 1,
      
            }//setting
  
          }
          
          
          
        ]//responsive
        
        
      })//slick
  
  
}// similarSlide

function tabMenu(){
  
  var $tabMenu = $(".tabmenu_list").find("a");
  var $slide = $(".info_list").children();
  
  /* initial */
  
  $slide.hide();
  $slide.eq(0).show();
  $tabMenu.eq(0).addClass("selected");
  
  $tabMenu.on("click focus", onTabMenu);
  
  function onTabMenu(){
    var clickNum = $tabMenu.index($(this));
    
    $slide.hide();
    $slide.eq(clickNum).show();
    
    $tabMenu.removeClass("selected");
    $(this).addClass("selected");
    
    return false;
    
  }//onTabMenu
  
  var smallScreen = window.matchMedia("(max-width: 480px)");
  
  if (smallScreen.matches){
    
  $slide.show();
  
  }// Screen is less than 480px
  
}// tabMenu

function loadMoreBtn(){
  
  var $textMinHeight = 130;
  var $textBox = $('.text_box');
  var $text = $('.text_box p');
  
  $('.more-info').click(function(){
    
    var fullHeight = $('.text_box p').height();
    
    if($(this).hasClass('expand')){
      
      $('.text_box').animate({"height":$textMinHeight}, 'slow');
      
    }else{
      $('.text_box').css({"height":$textMinHeight, 'max-height':'none'}).animate({"height":fullHeight},'slow');
    }
    
    $(this).toggleClass('expand');
    return false;
    
    
  });
  
}//loadMoreBtn

function readMoreBtn(){
  
  var $textMinHeight = 130;
  var $textBox = $('#txt_wrap');
  var $text = $('#txt_wrap p.description');
  
  $('.more-info01').click(function(){
    
    var fullHeight = $('#txt_wrap p.description').height();
    
    if($(this).hasClass('expand01')){
      
      $('#txt_wrap').animate({"height":$textMinHeight}, 'slow');
      
    }else{
      $('#txt_wrap').css({"height":$textMinHeight, 'max-height':'none'}).animate({"height":fullHeight},'slow');
    }
    
    $(this).toggleClass('expand01');
    return false;
    
    
  });
  
}//loadMoreBtn