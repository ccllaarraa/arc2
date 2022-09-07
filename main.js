gsap.registerPlugin(ScrollTrigger);


// on click
 function startAnim()  {
        gsap.to('.logo--left', {
            x:-265,
            y:-187,
            duration: 0.5,
            start: "top top",
            end: "+=100%",
            ease: "none"
        });
        gsap.to('.logo--right', {
            x:370,
            y:190,
            duration: 0.5,
            ease: "none",
            start: "top top",
            end: "+=100%"
        });
        gsap.to(".hiddenImage video", {
            duration: 1.5,
            scale: 1,
        });
         TweenMax.to($(".hiddenImage video"), .7, {scaleX:1, scaleY:1, opacity:1});
        
        var center = document.getElementById("cent");
        center.className += " relative";


        var hi = document.getElementById("hi");
        hi.className += " fadeIn";

        var overflow = document.getElementById("overflow");
        overflow.className += " scroll";

        var video = document.getElementById("videoid");
        video.className += " bigger";

 }




gsap.to(".hiddenImage", {
    scrollTrigger: {
        trigger: ".hiddenImage",
        start: "70%+=5px center ",
        end: "bottom 200px",
        toggleActions: "restart pause reverse reset",
    },
    duration: 0.3,
    scale: 0.7,
    opacity: 0,

    filter:"blur(4px)"
});


gsap.to(".text--content", {
    scrollTrigger: {
        trigger: ".text--content",
        start: "center bottom",
        end: "bottom bottom",
        scrub: true,
        toggleActions: "restart pause reverse reset"
    },
    duration: 3,
    scale: 1.3,
    opacity: 1
});



gsap.to(".logo--left", {
    scrollTrigger: {
        trigger: ".end",
        start: "center center",
        end: "bottom top-=10px",
        endTrigger:"footer",
        onEnter: () => $(".logo--left").addClass('revealed').removeClass('revealedback'),
        onLeave: () => $(".logo--left").removeClass('revealed').addClass('revealedback'),
        onEnterBack: () => $(".logo--left").addClass('revealed').removeClass('revealedback'),
        onLeaveBack: () => $(".logo--left").removeClass('revealed').addClass('revealedback'),
    }
 
});


gsap.to(".logo--right", {
    scrollTrigger: {
        trigger: ".end",
        start: "center center",
        end: "bottom top-=10px",
        endTrigger:"footer",
        onEnter: () => $(".logo--right").addClass('revealedright').removeClass('revealedrightback'),
        onLeave: () => $(".logo--right").removeClass('revealedright').addClass('revealedrightback'),
        onEnterBack: () => $(".logo--right").addClass('revealedright').removeClass('revealedrightback'),
        onLeaveBack: () => $(".logo--right").removeClass('revealedright').addClass('revealedrightback'),
    }
 
});

