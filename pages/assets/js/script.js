$(window).load(function () {
  fadeTitle();
  fadeIntro();
  fadeAnimation();
  fadeJsGame();
  fadeProject();
  fadeAbout();
  fadeFooter();
});

//-->Page Transition
document.body.classList.add("fade");
document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.classList.remove("fade");
  }, 1200);
});

function fadeTitle() {
  let tl = gsap.timeline({
    defaults: {
      ease: "SlowMo.easeOut",
    },
  });

  tl.to("#nav", {
    y: "0",
    opacity: 1,
    duration: 0.5,
    ease: Power3.easeOut,
    stagger: 0.2,
  });

  tl.to("#title_inner p", {
    y: "0",
    opacity: 1,
    duration: 0.6,
    stagger: 0.2,
  });
}
//fadeTitle End

let tl = gsap.timeline();
const controller = new ScrollMagic.Controller();
//----> Set Gsap Default

function fadeIntro() {
  let tween = tl.to(
    ".intro_bg > div",
    0.7,
    {
      y: "0",
      opacity: 1,
      stagger: 0.2,
    },
    0.7
  );
  tl.to(
    ".intro_photo",
    0.8,
    {
      left: "8.3333vw",
      opacity: 1,
    },
    0.8
  );
  tl.to(
    ".intro_tit h2",
    0.9,
    {
      y: "0",
      opacity: 1,
    },
    0.9
  );
  tl.to(
    ".desc_top",
    0.9,
    {
      y: "0",
      opacity: 1,
    },
    0.9
  );
  tl.to(
    ".star_icon",
    1,
    {
      y: "0",
      opacity: 1,
    },
    1
  );
  tl.to(
    ".desc_bottom",
    1.2,
    {
      y: "0",
      opacity: 1,
    },
    1.2
  );
  tl.to(
    ".cc_icon",
    1.3,
    {
      opacity: 1,
    },
    1.3
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: ".trigger-intro",
    triggerHook: 0.8,
    reverse: false,
  })
    .setTween(tween)
    .addTo(controller);
}
// fadeIntro End

function fadeAnimation() {
  let tl = new TimelineLite();
  let tween = tl.from(".animation_tit > span", 0.5, {
    y: "40",
    opacity: 0,
    stagger: 0.1,
    ease: Power1.easeIn,
  });
  tl.from(".animation-list", 1.4, {
    y: "60",
    opacity: 0,
    stagger: 0.2,
    ease: Power1.easeOut,
  });

  const scene = new ScrollMagic.Scene({
    triggerElement: ".trigger-animation",
    triggerHook: 0.8,
    reverse: false,
  })
    .setTween(tween)
    .addTo(controller);

  //    TweenMax.set(".animation-preview", {
  //        width: 0
  //    });
  //    $(document)
  //        .on("mouseover", ".animation-item", function (evt) {
  //            tl = new TimelineLite();
  //            tl.to($(".animation-preview"), 1, {
  //                width: "42vw",
  //                ease: Expo.easeInOut
  //            });
  //        })
  //        .on("mouseout", ".animation-item", function (evt) {
  //            tl = new TimelineLite();
  //            tl.to($(".animation-preview"), 0.5, {
  //                width: 0,
  //                ease: Expo.easeInOut
  //            });
  //        });

  $(".animation-link-1").hover(function () {
    $(".animation-preview-1").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-1").mouseleave(function () {
    $(".animation-preview-1").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });

  $(".animation-link-2").hover(function () {
    $(".animation-preview-2").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-2").mouseleave(function () {
    $(".animation-preview-2").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });

  $(".animation-link-3").hover(function () {
    $(".animation-preview-3").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-3").mouseleave(function () {
    $(".animation-preview-3").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });

  $(".animation-link-4").hover(function () {
    $(".animation-preview-4").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-4").mouseleave(function () {
    $(".animation-preview-4").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });

  $(".animation-link-5").hover(function () {
    $(".animation-preview-5").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-5").mouseleave(function () {
    $(".animation-preview-5").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });

  $(".animation-link-6").hover(function () {
    $(".animation-preview-6").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-6").mouseleave(function () {
    $(".animation-preview-6").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });

  $(".animation-link-7").hover(function () {
    $(".animation-preview-7").css({
      width: "42vw",
      transition: "all 0.5s ease-in-out",
      opacity: 1,
    });
  });
  $(".animation-link-7").mouseleave(function () {
    $(".animation-preview-7").css({
      width: "0",
      transition: "all 0.4s ease-in-out",
      opacity: 0,
    });
  });
}
//fadeAnimation End

function fadeJsGame() {
  //js-game-title
  let tween1 = tl.from(".jsg_tit > span", 0.6, {
    y: "40",
    opacity: 0,
    stagger: 0.2,
    ease: Power1.easeIn,
  });
  let tween2 = tl.from(".jsg_desc", 0.6, {
    y: "50",
    opacity: 0,
    ease: Power1.easeIn,
  });

  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger-jsg",
    triggerHook: 0.9,
    reverse: false,
  })
    .setTween(tween1)
    .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger-jsg",
    triggerHook: 0.9,
    reverse: false,
  })
    .setTween(tween2)
    .addTo(controller);

  //js-game-container
  let revealElements = document.getElementsByClassName("jsg-re");
  for (var i = 0; i < revealElements.length; i++) {
    const scene3 = new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements[i], "visible")
      .addTo(controller);
  }
}
//fadeJsGame End

function fadeProject() {
  //----project-title:scroll event

  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    //----project-title:sticky
    if (wScroll > $("#webstandard").offset().top - $(window).height() / 2) {
      $(".proj_tit_bg_wrap").addClass("active");
      $(".proj_desc_top").addClass("active");
      $(".proj_desc_bot").removeClass("active");
      $("#tit-latest").removeClass("active");
      $("#tit-lets").removeClass("active");
    }

    if (wScroll < $("#webstandard").offset().top - $(window).height() / 2) {
      $(".proj_tit_bg_wrap").removeClass("active");
      $(".proj_desc_top").removeClass("active");
    }

    if (wScroll > $("#dyson").offset().top - $(window).height() / 2) {
      $(".proj_tit_bg_wrap").removeClass("active");
      $(".proj_desc_bot").addClass("active");
      $("#tit-latest").addClass("active");
      $("#tit-lets").addClass("active");
    }

    if (wScroll < $("#dyson").offset().bottom - $(window).height() / 2) {
      $(".proj_tit_bg_wrap").addClass("active");
      $(".proj_desc_bot").removeClass("active");
    }
  });

  //---->project-title:animation

  //----workTxt
  let workTxt = TweenMax.from("#tit-work", 0.4, {
    y: 20,
    opacity: 0,
    ease: Power1.easeIn,
  });

  const wkTxtScene = new ScrollMagic.Scene({
    triggerElement: ".proj_tit_bg",
    triggerHook: 0.9,
    reverse: false,
  })
    .setTween(workTxt)
    .addTo(controller);

  //----ellipse
  const ellipseStr = new ScrollMagic.Scene({
    triggerElement: ".proj_tit_bg",
    triggerHook: 0.9,
    reverse: false,
  })
    .setClassToggle("#ellipse", "visible")
    .addTo(controller);

  //----arrow
  let arrow = TweenMax.to(
    "#tit-arrow",
    0.4,
    {
      opacity: 1,
      left: "50%",
      ease: Power1.easeIn,
    },
    0.4
  );

  const arrowScene = new ScrollMagic.Scene({
    triggerElement: ".trigger-project",
    triggerHook: 0.9,
    reverse: false,
  })
    .setTween(arrow)
    .addTo(controller);

  //----proj-desc
  let projDescTop = TweenMax.from(".proj_desc_top", 0.4, {
    y: 20,
    z: 10,
    stagger: 0.2,
    opacity: 0,
    ease: Power1.easeIn,
  });

  const projDescScene = new ScrollMagic.Scene({
    triggerElement: ".proj_desc_top",
    triggerHook: 1,
    reverse: false,
  })
    .setTween(projDescTop)
    .addTo(controller);

  //----project-Container
  let revealElements04 = document.getElementsByClassName("proj-re");
  for (var i = 0; i < revealElements04.length; i++) {
    const scene04 = new ScrollMagic.Scene({
      triggerElement: revealElements04[i],
      triggerHook: 0.9,
    })
      .setClassToggle(revealElements04[i], "visible")
      .addTo(controller);
  }
}
//fadeProject End

//fadeAbout
function fadeAbout() {
  //about-title Start
  let titWrapper = document.querySelector(".about-tit");
  titWrapper.innerHTML = titWrapper.textContent.replace(
    /\S/g,
    "<span>$&</span>"
  );
  let subWrapper = document.querySelector(".about-sub-top");
  subWrapper.innerHTML = subWrapper.textContent.replace(
    /\S/g,
    "<span>$&</span>"
  );

  let tween1 = TweenMax.staggerFromTo(
    ".about-tit span",
    0.6,
    {
      ease: Power1.easeOut,
      opacity: 0,
      y: 40,
      x: 5,
    },
    {
      ease: Power1.easeOut,
      opacity: 1,
      y: 0,
      x: 0,
    },
    0.05
  );
  let tween2 = TweenMax.staggerFromTo(
    ".about-sub-top span",
    0.6,
    {
      ease: Back.easeOut.config(1.5),
      opacity: 0,
      y: 20,
      x: 5,
    },
    {
      ease: Back.easeOut.config(1.5),
      opacity: 1,
      y: 0,
      x: 0,
    },
    0.05
  );

  let tween3 = TweenMax.staggerFromTo(
    ".ellipse_b_txt p",
    0.7,
    {
      ease: Back.easeOut.config(1.7),
      opacity: 0,
      y: 60,
    },
    {
      ease: Back.easeOut.config(1.7),
      opacity: 1,
      y: 0,
    },
    0.2
  );

  const scene1 = new ScrollMagic.Scene({
    triggerElement: ".about-tit",
    triggerHook: 0.9,
  })
    .setTween(tween1)
    .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".about-sub-top",
    triggerHook: 0.9,
  })
    .setTween(tween2)
    .addTo(controller);
  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".about_photo",
    triggerHook: 0.9,
  })
    .setClassToggle(".about_photo img", "active")
    .addTo(controller);
  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".about_photo",
    triggerHook: 0.8,
  })
    .setClassToggle(".about-sub-bg", "active")
    .addTo(controller);
  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".ellipse_b_wrap",
    triggerHook: 0.8,
  })
    .setTween(tween3)
    .addTo(controller);
  const scene6 = new ScrollMagic.Scene({
    triggerElement: ".ellipse_b_wrap",
    triggerHook: 1.2,
  })
    .setClassToggle("#ellipse_b", "active")
    .addTo(controller);
  //aboout-title End

  //aboout-list Start
  let abListStagger = TweenMax.staggerFromTo(
    ".ab_desc_inner",
    0.4,
    {
      ease: Power1.easeOut,
      opacity: 0,
      y: 40,
    },
    {
      ease: Power1.easeOut,
      opacity: 1,
      y: 0,
    },
    0.3
  );
  const aboutListScene = new ScrollMagic.Scene({
    triggerElement: ".ab_desc_wrap",
    triggerHook: 0.9,
  })
    .setTween(abListStagger)
    .addTo(controller);
  //about-List End
}

function fadeFooter() {
  //contact
  let contactWrapper = document.querySelector(".email p");
  contactWrapper.innerHTML = contactWrapper.textContent.replace(
    /\S/g,
    "<span>$&</span>"
  );

  let tween = TweenMax.staggerFromTo(
    ".email p span",
    0.6,
    {
      ease: Back.easeOut.config(1.5),
      opacity: 0,
      y: 20,
      x: 5,
    },
    {
      ease: Back.easeOut.config(1.5),
      opacity: 1,
      y: 0,
      x: 0,
    },
    0.05
  );

  const fadeMail = new ScrollMagic.Scene({
    triggerElement: ".email",
    triggerHook: 0.5,
  })
    .setTween(tween)
    .setClassToggle(".email-sub", "active")
    .addTo(controller);

  const fadeContact = new ScrollMagic.Scene({
    triggerElement: ".email-sub",
    triggerHook: 0.6,
  })
    .setTween(tween)
    .setClassToggle(".contact", "active")
    .addTo(controller);
}
//footer End
