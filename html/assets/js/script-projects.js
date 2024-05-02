$(window).load(function () {
    fadeTitle();
    fadeProjects();
    fadeFooter();
});

//setTimeout (function(){
//    fadeTitle();
//},500);

//-->Page Transition
document.body.classList.add('fade');
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.classList.remove('fade');
    },1000);
});

//----> Set Timeline 
let tl = new TimelineLite();
const controller = new ScrollMagic.Controller();

function fadeTitle() {
    let tl = gsap.timeline({
        defaults: {
            ease: "SlowMo.easeOut"
        }
    });

    tl.to("#nav", {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: Power3.easeOut,
        stagger: 0.2,
    });

    //project-title
    let titWrapper = document.querySelector(".proj-tit h2");
    titWrapper.innerHTML = titWrapper.textContent.replace(
        /\S/g, "<span>$&</span>");

    let tween1 = TweenMax.staggerFromTo(".proj-tit span", 0.6, {
        ease: Power1.easeOut,
        opacity: 0,
        y: 40,
        x: 5
    }, {
        ease: Power1.easeOut,
        opacity: 1,
        y: 0,
        x: 0
    }, 0.05);

    const titleScene = new ScrollMagic.Scene({
            triggerElement: ".proj-tit",
            triggerHook: 0.5,
        })
        .setTween(tween1)
        .addTo(controller);

    //project-sub
    const subScene = new ScrollMagic.Scene({
            triggerElement: ".proj-tit",
            triggerHook: 0.5,
        })
        .setClassToggle(".proj-sub", "active")
        .addTo(controller);
}
//fadeTitle End

function fadeProjects() {

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll >= $(".proj-re-left").offset().top - $(window).height() / 5) {
            $(".proj-re-left").addClass("active");
        } else {
            $(".proj-re-left").removeClass("active");
        }

        if (wScroll >= $(".proj-re-middle").offset().top - $(window).height() / 5.2) {
            $(".proj-re-middle").addClass("active");
        } else {
            $(".proj-re-middle").removeClass("active");
        }

        if (wScroll >= $(".proj-re-right").offset().top - $(window).height() / 5.4) {
            $(".proj-re-right").addClass("active");
        } else {
            $(".proj-re-right").removeClass("active");
        }
    });
}

function fadeFooter() {
    //contact
    let contactWrapper = document.querySelector(".email p");
    contactWrapper.innerHTML = contactWrapper.textContent.replace(
        /\S/g, "<span>$&</span>");

    let tween =
        TweenMax.staggerFromTo(".email p span", 0.6, {
            ease: Back.easeOut.config(1.5),
            opacity: 0,
            y: 20,
            x: 5
        }, {
            ease: Back.easeOut.config(1.5),
            opacity: 1,
            y: 0,
            x: 0
        }, 0.05);

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
