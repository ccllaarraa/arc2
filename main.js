gsap.registerPlugin(ScrollTrigger);


// on click
 function startAnim()  {
        gsap.to('.logo--left', {
            top: 30,
            left: 30,
            duration: 0.5,
            start: "top top",
            end: "+=100%",
            ease: "none", 
        });
        gsap.to('.logo--right', {
            bottom: 30,
            right: 30,
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

        var left = document.getElementById("logoleft");
        left.className += " fixed";

        var right = document.getElementById("logoright");
        right.className += " fixed";


 }




gsap.to(".hiddenImage", {
    scrollTrigger: {
        trigger: ".hiddenImage",
        start: "70%+=5px center+=100px ",
        end: "70%+=15px center",
        toggleActions: "restart pause reverse reset",
        scrub: true,
    },
    duration: 0.3,
    scale: 0.5,
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
    duration: 2,
    scale: 1.3,
    opacity: 1
});


gsap.to(".logo--left", {
    scrollTrigger: {
        trigger: ".end",
        start: "center center",
        end: "bottom top-=10px",
        endTrigger:"footer",
        duration: 0.5,
        // onEnter: () => $(".logo--left").addClass('revealed').removeClass('revealedback'),
        // onLeave: () => $(".logo--left").removeClass('revealed').addClass('revealedback'),
        // onEnterBack: () => $(".logo--left").addClass('revealed').removeClass('revealedback'),
        // onLeaveBack: () => $(".logo--left").removeClass('revealed').addClass('revealedback'),
    }
 
});



gsap.to(".logo--right", {
    scrollTrigger: {
        trigger: ".end",
        start: "center center",
        end: "bottom top-=10px",
        endTrigger:"footer",

        // onEnter: () => $(".logo--right").addClass('revealedright').removeClass('revealedrightback'),
        //  onLeave: () => $(".logo--right").removeClass('revealedright').addClass('revealedrightback'),
        //  onEnterBack: () => $(".logo--right").addClass('revealedright').removeClass('revealedrightback'),
        //  onLeaveBack: () => $(".logo--right").removeClass('revealedright').addClass('revealedrightback'),
    }
 
});

