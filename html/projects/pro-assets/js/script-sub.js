$(window).load(function () {
    fadeTit();
    fadeContents();
    fadeFooter();
});

//----> highlightCode
hljs.initHighlightingOnLoad();

//----> Set Gsap Default 
let tl = gsap.timeline();
const controller = new ScrollMagic.Controller();

function fadeTit() {
    TweenMax.to("#nav", {
        y: '0',
        opacity: 1,
        duration: 0.5,
        ease: Power3.easeOut,
        stagger: 0.2
    });
    TweenMax.from(".link", {
        x: '-80',
        opacity: 0,
        duration: 0.4,
        ease: Sine.easeIn,
    });
    TweenMax.from(".category", {
        x: '-80',
        opacity: 0,
        duration: 0.5,
        ease: Sine.easeIn,
    });
    TweenMax.from(".project-title p", {
        x: '-80',
        opacity: 0,
        duration: 0.4,
        ease: Sine.easeIn,
        stagger: 0.2
    });
}
//fadeTit End

//fadeContents
function fadeContents() {
    //----skill
    let skillTit = tl.from(".skill-tit h2", {
            x: -80,
            opacity: 0,
            stagger: 0.3,
            ease: Sine.easeIn,
        });
    
    const skillTitScene = new ScrollMagic.Scene({
            triggerElement: ".proj-inner",
            triggerHook: 0.8
        })
        .setTween(skillTit)
        .addTo(controller)
        .reverse(false);
    
    let skillTxt = tl.from(".proj-desc-main span",{
            x: -50,
            opacity: 0,
            stagger: 0.2,
            ease: Sine.easeIn,
    });
    
    const skillTxtScene = new ScrollMagic.Scene({
            triggerElement: ".proj-inner",
            triggerHook: 0.8,
        })
        .setTween(skillTxt)
        .addTo(controller)
        .reverse(false);
    
    let skillSub = tl.from(".proj-desc-sub",{
            y: 50,
            opacity: 0,
            ease: Sine.easeInOut,
    });
    
    const skillSubScene = new ScrollMagic.Scene({
            triggerElement: ".proj-inner",
            triggerHook: 0.9
        })
        .setTween(skillSub)
        .addTo(controller)
        .reverse(false);
    
    //----image
    let image = tl.from(".proj-img",{
            y: 50,
            duration: 0.3,
            opacity: 0,
            ease: Sine.easeIn,
    });
    
    const imageScene = new ScrollMagic.Scene({
            triggerElement: ".proj-inner",
            triggerHook: 0.9
        })
        .setTween(image)
        .addTo(controller)
        .reverse(false);
    
    //----planning title
    let planTitCont = tl.from(".planning h2",{
            x: -80,
            opacity: 0,
            stagger: 0.3,
            ease: Sine.easeIn,
    });
    
    const planTitScene = new ScrollMagic.Scene({
            triggerElement: ".proj-img",
            triggerHook: 0.9
        })
        .setTween(planTitCont)
        .addTo(controller)
        .reverse(false);
    
        //----planning
    let planCont = tl.from(".plan-inner",{
            y: 50,
            opacity: 0,
            ease: Sine.easeIn,
    });
    
    const planScene = new ScrollMagic.Scene({
            triggerElement: ".planning h2",
            triggerHook: 0.8
        })
        .setTween(planCont)
        .addTo(controller)
        .reverse(false);
    
    //----information
    let infoTit = tl.from(".info-tit",{
            y: 50,
            duration: 0.4,
            opacity: 0,
            ease: Sine.easeIn,
    });
    
    const infoTitScene = new ScrollMagic.Scene({
            triggerElement: ".info",
            triggerHook: 1
        })
        .setTween(infoTit)
        .addTo(controller)
        .reverse(false);
    
    let infoSub = tl.from(".proj-desc-info p",{
            y: 50,
            duration: 0.6,
            stagger: 0.3,
            opacity: 0,
            ease: Sine.easeIn,
    });
    
    const infoSubScene = new ScrollMagic.Scene({
            triggerElement: ".info",
            triggerHook: 0.9
        })
        .setTween(infoSub)
        .addTo(controller)
        .reverse(false);
    
    let infoTable = tl.from(".info-table",{
            y: 50,
            opacity: 0,
            ease: Sine.easeIn,
    });
    
    const infoTableScene = new ScrollMagic.Scene({
            triggerElement: ".proj-desc-info",
            triggerHook: 0.9
        })
        .setTween(infoTable)
        .addTo(controller)
        .reverse(false);
    
    //----code title
    let codeTit = tl.from(".code-tit h2",{
            x: -80,
            opacity: 0,
            stagger: 0.3,
            ease: Sine.easeIn,
    });
    
    const codeTitScene = new ScrollMagic.Scene({
            triggerElement: ".code-cont",
            triggerHook: 0.9
        })
        .setTween(codeTit)
        .addTo(controller)
        .reverse(false);
    
    //----code preview 
    let codeCont = tl.from(".tab-cont",{
            y: 50,
            opacity: 0,
            ease: Sine.easeIn,
    });
    
    const codeContScene = new ScrollMagic.Scene({
            triggerElement: ".code-tit",
            triggerHook: 0.9
        })
        .setTween(codeCont)
        .addTo(controller)
        .reverse(false);
    
    //----Code:tabmenu
    $('ul.tabs li').click(function () {
        let tabId = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tabId).addClass('active');
    });
}
//fadeContents End

function fadeFooter() {
    //backbutton
    $('.back-btn').on('click', function () {
        parent.history.back();
    });
}