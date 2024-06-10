//Page Transition
document.body.classList.add('fade');
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.classList.remove('fade');
    }, 1000);
});

$(window).load(function () {
    fadeTitle();
    fadeIntro();
    fadeAbout();
    fadeFooter();
});

let tl = new TimelineLite();
const controller = new ScrollMagic.Controller();
//----> Set Timeline 

function fadeTitle() {
    let tl = gsap.timeline({
        defaults: {
            ease: "SlowMo.easeOut",
        }
    });

    tl.to("#nav", {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: Power3.easeOut,
        stagger: 0.2,
    });
    tl.from(".cc-icon-wrap", 0.4, {
        ease: Power1.easeOut,
        opacity: 0,
        y: 60,
    });
    tl.staggerFromTo(".about-tit p", 0.6, {
        ease: Power1.easeOut,
        opacity: 0,
        y: 60
    }, {
        ease: Power1.easeOut,
        opacity: 1,
        y: 0,
    }, 0.2);
}
//fadeTitle End

function fadeIntro() {
    let tween1 =
        tl.staggerFromTo(".ap-bg > div", 0.6, {
            ease: Power1.easeOut,
            opacity: 0,
            y: 60
        }, {
            ease: Power1.easeOut,
            opacity: 1,
            y: 0,
        }, 0.2);

    const scene1 = new ScrollMagic.Scene({
            triggerElement: ".about-photo",
            triggerHook: 0.5,
        })
        .setTween(tween1)
        .addTo(controller);

    let tween2 =
        TweenMax.from(".ap-img", 0.5, {
            ease: Power1.easeOut,
            opacity: 0,
            y: 50
        });
    const scene2 = new ScrollMagic.Scene({
            triggerElement: ".about-bg",
            triggerHook: 0.5,
        })
        .setTween(tween2)
        .addTo(controller);

    let tween3 =
        TweenMax.staggerFromTo(".ap-tit p", 0.6, {
            ease: Power1.easeOut,
            opacity: 0,
            y: 60
        }, {
            ease: Power1.easeOut,
            opacity: 1,
            y: 0
        }, 0.05);

    const scene3 = new ScrollMagic.Scene({
            triggerElement: ".ap-img",
            triggerHook: 0.5,
        })
        .setTween(tween3)
        .addTo(controller);

    let tween4 =
        TweenMax.from(".ap-sub", 0.8, {
            ease: Power1.easeOut,
            opacity: 0,
            y: 60
        });
    const scene4 = new ScrollMagic.Scene({
            triggerElement: ".ap-img",
            triggerHook: 0.5,
        })
        .setTween(tween4)
        .addTo(controller);
}
//fadeIntro

function fadeAbout() {
    //about-bottom
    let ellipseTxt =
        TweenMax.staggerFromTo(".ellipse_b_txt p", 0.7, {
            ease: Back.easeOut.config(1.7),
            opacity: 0,
            y: 60
        }, {
            ease: Back.easeOut.config(1.7),
            opacity: 1,
            y: 0
        }, 0.2);

    const ellipseTxtScene = new ScrollMagic.Scene({
            triggerElement: ".ellipse_b_wrap",
            triggerHook: 0.8,
        })
        .setTween(ellipseTxt)
        .addTo(controller);

    const ellipse = new ScrollMagic.Scene({
            triggerElement: ".ellipse_b_wrap",
            triggerHook: 0.9,
        })
        .setClassToggle("#ellipse_b", "active")
        .addTo(controller);
    //aboout-bottom End

    //aboout-list Start
    let abListStagger = TweenMax.staggerFromTo('.ab_desc_inner', 0.4, {
            ease: Power1.easeOut,
            opacity: 0,
            y: 40,
        }, {
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