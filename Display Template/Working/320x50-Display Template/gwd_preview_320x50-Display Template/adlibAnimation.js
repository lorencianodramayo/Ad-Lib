"use strict";
CustomEase.create("startAnimation", "0, 0, 0, 0.995");
CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
CustomEase.create("endAnimation", "1, 0.005, 1, 1");

//arrowEasing
CustomEase.create("arrowEaseIn", "0, 0, 0.255, 0.995");

let tl = gsap.timeline({ paused: true }),
    _loopCount = 0;

gsap.set(["#backgroundWrapper", "#gradiantWrapper", "#logoWrapper"], { opacity: 0 });
gsap.set(".text-class", { opacity: 0, x: 150 });
gsap.set("#ctaHandler", { opacity: 0, x: 150 });
gsap.set("#curveWrapper", { x: 320 });

function animate() {
    adlibStart();
    tl.play()
        .to("#logoWrapper", 0, { opacity: 1 })
        .to(["#curveWrapper"], 1, { x: 0, ease: "startAnimation", force3D: true })
        .to(["#backgroundWrapper", "#gradiantWrapper"], 1, { opacity: 1, onComplete: getEnd, onCompleteParams: ["fram1"] }, "-=1")
        .to(["#baseImageImg", "#baseVideo"], 1, { opacity: 0, ease: "endAnimation", force3D: true }, "+=2.5")
    //start frame 1
    if (defaultValues.frame1Headline.toLowerCase() != "n/a") {
        tl.to("#frame1-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame2"] })
            .to("#frame1-headline1", 1, { opacity: 0, x: 150, ease: "endAnimation", force3D: true }, "+=2.5")
    }
    //frame 2
    if (defaultValues.frame2Headline.toLowerCase() != "n/a") {
        tl.to("#frame2-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame3"] })
            .to("#frame2-headline1", 1, { opacity: 0, x: 150, ease: "endAnimation", force3D: true }, "+=2.5")
    }
    //start frame 3
    if (defaultValues.frame3Headline.toLowerCase() != "n/a") {
        tl.to("#frame3-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame4"] })
            .to("#frame3-headline1", 1, { opacity: 0, x: 150, ease: "endAnimation", force3D: true }, "+=2.5")
    }

    if (defaultValues.ctaText.toLowerCase() != "n/a") {
        tl.to("#ctaHandler", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["cta"] })
            .to("#arrow", 0.2, { x: 5, ease: "arrowEaseIn", force3D: true }, "+=1")
            .to("#arrow", 0.2, { x: 0, ease: "arrowEaseIn", force3D: true })
            .to("#arrow", 0.2, { x: 5, ease: "arrowEaseIn", force3D: true })
            .to("#arrow", 0.2, { x: 0, ease: "arrowEaseIn", force3D: true, onComplete: takeScreenshot })
            .to("#ctaHandler", 1, { opacity: 0, x: 150, ease: "endAnimation", force3D: true, onStart: takeScreenshot }, "+=2.5")
    }

    if (defaultValues.frame1Headline.toLowerCase() != "n/a") {
        tl.to("#frame1-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame2"] })
             //frame 2
        if (defaultValues.animationType.toLowerCase() === "frame2") {
            tl.to("#frame1-headline1", 1, { opacity: 0, x: 150, ease: "endAnimation", force3D: true }, "+=2.5")
              .to("#frame2-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame3"] })
        }
    }

    tl.call(()=>{adlibEnd()})
}

function getEnd(t) {
    takeScreenshot();
    if (defaultValues.animationType.toLowerCase() != "cta" && defaultValues.frame2Headline.toLowerCase() != "n/a") {
        if (_loopCount == 2) {
            if (t === defaultValues.animationType) {
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
        }
    } else {
        if (_loopCount == 1) {
            if (t === defaultValues.animationType) {
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
        }
    }
}

function additionalCustom() {
    document.querySelector("#backgroundWrapper").classList.add("active");
    document.querySelector("#gradiantWrapper").classList.add("active");
    _loopCount++;
}