$(window).load(function(){
  
  mainVisualSlide();
  headerScroll();
  Hover();
  mobileBtn();
  hoverZoom();
  splitting();
  VisualSlideOne();
  VisualSlideTwo();
  inputAfter();
  
}) // window
  
function mainVisualSlide(){
     
      $(".slider").slick({
        slide : "li",
        slideToShow : 1,
        slideToScroll : 1,
        autoplay : true, 
        autoplaySpeed : 4000, 
        infinite : true,
        pauseOnHover : true,
        arrows: false,
        fade: true, 
        
        
        responsive: [
          {
            
            breakpoint : 980,
            settings : {
              
              slideToShow : 1,
      
            }//setting
  
          }
          
        ]//responsive
        
        
      }) //slick
    
  } // mainVisualSlide

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

function Hover(){
  
  var $visualSlide = $(".visual_slide > ul > li, #con05_visual a");
  var $singleBtn = $("span.singleBtn");
  var $artistBtn = $("span.exhibit_btn, span.artwork_btn");
  var $shopBtn = $("span.shop_btn");
  
  $singleBtn.hide();
  $artistBtn.hide();
  $shopBtn.css({"opacity":0,"top":"30%"});
  
  $visualSlide.on("mouseenter", onHover);
  $visualSlide.on("mouseleave", outHover);
  
  function onHover(){
    $(this).find("img").css({"opacity":"0.5"});
    $(this).find("span.singleBtn").show();
    $(this).find("span.exhibit_btn, span.artwork_btn").show();
 $(this).find("span.shop_btn").animate({"opacity":1,"top":"40%"},150,"easeOutCubic");
    
  }// onHover
  
  function outHover(){
    $singleBtn.hide();
    $artistBtn.hide();
//    $shopBtn.hide();
    $shopBtn.animate({"opacity":0,"top":"30%"},150,"easeOutCubic");
    
    $(this).find("img").css({"opacity":"1"});
   
  }//outHover
  
}// Hover

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

function hoverZoom(){
  
  $("#con05_visual").find("a").on("mouseenter", zoomIn);
  $("#con05_visual").find("a").on("mouseleave", zoomOut);
  
  function zoomIn(){
      $(this).find(".con05_visual").addClass("on");
  }
  
  function zoomOut(){
    $(this).find(".con05_visual").removeClass("on");
  }
  
}//hoverZoom

function splitting(){
 Splitting();
} //splitting

function VisualSlideOne(){
  
  $(".vslide01").on("init", function(event, slick){
    
    $('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>').appendTo($(this));
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);  
    
       $('.slick-arrow').on("click", btnClick);
  
  function btnClick(){
    
      $('.slick-arrow').removeClass("on");
      $(this).addClass("on");
  
  }//btnClick
    
  })// init
  
  .slick({

    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 2,
    variableWidth: true,
    arrows : true,
    autoplay : true,
    autoplaySpeed : 3000,
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.current').text(nextSlide+1);
  })
  
}// VisualSlideOne

function VisualSlideTwo(){
  
  $(".slideTwo").slick({

    slide : "li",
    slidesToShow:1,
    variableWidth: true,
    arrows : false,
    autoplay : true,
    autoplaySpeed : 3500,
    
    responsive: [
          {
            
            breakpoint : 980,
            settings : {
              
              slideToShow : 1,
      
            }//setting
  
          }

        ]//responsive
    
  })
  
  
}// VisualSlideTwo

function inputAfter(){
  
  $('')
  
}// inputAfter