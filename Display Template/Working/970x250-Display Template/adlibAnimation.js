"use strict";
CustomEase.create("startAnimation", "0, 0, 0, 0.995");
CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
CustomEase.create("endAnimation", "1, 0.005, 1, 1");

let tl = gsap.timeline({ paused: true }),
    _loopCount = 0;

gsap.set(["#backgroundWrapper", "#gradiantWrapper", "#logoWrapper"], { opacity: 0 });
gsap.set(".text-class", { opacity: 0, x: 200 });
gsap.set("#ctaWrapper", { opacity: 0, x: 200 });
gsap.set("#fcWrapper", { opacity: 0 });
 gsap.set("#curveWrapper", { x: -613 });

function animate() {
    adlibStart();

    tl.play()
        .to("#logoWrapper", 0, { opacity: 1 })
        .to(["#backgroundWrapper", "#gradiantWrapper"], 1, { opacity: 1 })
        .to(["#curveWrapper"], 1, { x: 0, ease: "startAnimation", force3D: true }, "-=1")
    //start frame 1
    if (defaultValues.frame1Headline.toLowerCase() != "n/a") {
        tl.to("#frame1-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.6")
        if (defaultValues.frame1Headline2.toLowerCase() != "n/a") {
            tl.to("#frame1-headline2", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame1Headline3.toLowerCase() != "n/a") {
            tl.to("#frame1-headline3", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        tl.to("#ctaWrapper", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame1"] }, "-=0.8")
            .to("#ctaWrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1")
            .to("#ctaWrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
            .to("#ctaWrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
            .to("#ctaWrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame1end"]})
            .to("#fcWrapper", 0, { x: 0, ease: "endAnimation", force3D: true })
    }
    //frame 2
    if (defaultValues.frame2Headline.toLowerCase() != "n/a") {
        //end frame 1
        if (defaultValues.frame1Headline.toLowerCase() != "n/a") {
            tl.to("#frame1-headline1", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "+=2.5")
        }
        if (defaultValues.frame1Headline2.toLowerCase() != "n/a") {
            tl.to("#frame1-headline2", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame1Headline3.toLowerCase() != "n/a") {
            tl.to("#frame1-headline3", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "-=0.8")
        }

        tl.to("#frame2-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.2")

        if (defaultValues.frame2Headline2.toLowerCase() != "n/a") {
            tl.to("#frame2-headline2", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame2Headline3.toLowerCase() != "n/a") {
            tl.to("#frame2-headline3", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: takeScreenshot }, "-=0.8")
        }
        //final call
        tl.to("#ctaWrapper", 0.1, { x: 0, y: 0, onComplete: getEnd, onCompleteParams: ["frame2"] }, "+=0.1")
        if (defaultValues.ctaText2.toLowerCase() != "n/a") {
            tl.to("#ctaWrapper", 0.1, { opacity: 0, y: -4, ease: "startAnimation", force3D: true }, "+=1")
                .to("#fcWrapper", 0.1, { opacity: 1, y: -4, ease: "startAnimation", force3D: true }, "-=0.1")
                .to("#fcWrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
                .to("#fcWrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
                .to("#fcWrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: takeScreenshot })
                .to("#fcWrapper", 0.1, { opacity: 0, y: -4, ease: "startAnimation", force3D: true }, "+=1.5")
                .to("#ctaWrapper", 0.1, { opacity: 1, y: -4, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame2end"]  }, "-=0.1")
        } else {
            tl.to("#ctaWrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1");
        }
        tl.to("#ctaWrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
            .to("#ctaWrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
            .to("#ctaWrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame2end"]  })
    }
    //start frame 3
    if (defaultValues.frame3Headline.toLowerCase() != "n/a") {
        //end frame 2
        if (defaultValues.frame2Headline.toLowerCase() != "n/a") {
            tl.to("#frame2-headline1", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "+=2.5")
        }
        if (defaultValues.frame2Headline2.toLowerCase() != "n/a") {
            tl.to("#frame2-headline2", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame2Headline3.toLowerCase() != "n/a") {
            tl.to("#frame2-headline3", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        
        tl.to("#frame3-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.2")

        if (defaultValues.frame3Headline2.toLowerCase() != "n/a") {
            tl.to("#frame3-headline2", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame3Headline3.toLowerCase() != "n/a") {
            tl.to("#frame3-headline3", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        tl.to("#ctaWrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1")
            .to("#ctaWrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
            .to("#ctaWrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
            .to("#ctaWrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame3"] })
        //end frame 3
        if (defaultValues.frame3Headline.toLowerCase() != "n/a") {
            tl.to("#frame3-headline1", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "+=2.5")
        }
        if (defaultValues.frame2Headline2.toLowerCase() != "n/a") {
            tl.to("#frame3-headline2", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame2Headline3.toLowerCase() != "n/a") {
            tl.to("#frame3-headline3", 1, { opacity: 0, x: 200, ease: "endAnimation", force3D: true }, "-=0.8")
        }
    }
}


function getEnd(t) {
    takeScreenshot();
    const frameCountEnd = defaultValues.animationType + "end";
    switch (t) {
        case "frame1":
            if (defaultValues.frame2Headline.toLowerCase() != "n/a" &&
                defaultValues.animationType === "frame1" &&
                _loopCount == 2) {
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
            break;

        case "frame1end":
        console.log(defaultValues.animationType)
            if (defaultValues.frame2Headline.toLowerCase() === "n/a" &&
                defaultValues.frame3Headline.toLowerCase() === "n/a" && 
                defaultValues.animationType === "frame1"&&
                _loopCount == 1){
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
            break;

        case "frame2":
            if (defaultValues.frame2Headline.toLowerCase() != "n/a" &&
                defaultValues.frame3Headline.toLowerCase() != "n/a" &&
                defaultValues.animationType === "frame2"&&
                _loopCount == 2) {
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
            break;

        case "frame2end":
            if (defaultValues.frame2Headline.toLowerCase() != "n/a" &&
                defaultValues.frame3Headline.toLowerCase() === "n/a" &&
                defaultValues.animationType === "frame2"&&
                _loopCount == 1) {
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
            break;

        case "frame3":
            if (defaultValues.frame1Headline.toLowerCase() != "n/a" &&
                defaultValues.frame2Headline.toLowerCase() != "n/a" &&
                defaultValues.frame3Headline.toLowerCase() != "n/a" &&
                defaultValues.animationType === "frame3"&&
                _loopCount == 1) {
                gsap.globalTimeline.pause();
                tl.kill();
                adlibEnd();
                video.pause();
            }
            break;
    }
}

function additionalCustom() {
    _loopCount++;
}