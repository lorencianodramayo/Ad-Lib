CustomEase.create("startAnimation", "0, 0, 0, 0.995");
CustomEase.create("linear", "0.250, 0.250, 0.750, 0.750");
CustomEase.create("endAnimation", "1, 0.005, 1, 1");

let tl = gsap.timeline({ paused: true, repeat: 3, repeatDelay: 0.2 }),
    _loopCount = 0;
//initAnimation
gsap.set(".image-wrapper", { opacity: 0 });
gsap.set([".copy", ".cta-btn"], { opacity: 0, x: 100 });
gsap.set("#finalcall-wrapper", { opacity: 0 });

function animation(){
    customContainer();
    adlibStart();
    tl.play()
      if (defaultValues.frame1Headline.toLowerCase() != "n/a") {
        tl.to("#frame1-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true })

        if (defaultValues.frame1Headline2.toLowerCase() != "n/a") {
            tl.to("#frame1-headline2", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame1Headline3.toLowerCase() != "n/a") {
            tl.to("#frame1-headline3", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        
        tl.to("#cta-wrapper", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame1"] }, "-=0.8")
        if (defaultValues.frame1Headline2.toLowerCase() != "n/a" && defaultValues.frame1Headline3.toLowerCase() != "n/a") {
            if (defaultValues.ctaText2.toLowerCase() != "n/a") {
            tl.to("#cta-wrapper", 0.1, { opacity: 0, y: -4, ease: "startAnimation", force3D: true }, "+=1")
                .to("#finalcall-wrapper", 0.1, { opacity: 1, y: -4, ease: "startAnimation", force3D: true }, "-=0.1")
                .to("#finalcall-wrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
                .to("#finalcall-wrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
                .to("#finalcall-wrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: takeScreenshot })
                .to("#finalcall-wrapper", 0.1, { opacity: 0, y: -4, ease: "startAnimation", force3D: true }, "+=1.5")
                .to("#cta-wrapper", 0.1, { opacity: 1, y: -4, ease: "startAnimation", force3D: true }, "-=0.1")
        } else {
            tl.to("#cta-wrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1");
        }
        tl.to("#cta-wrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
            .to("#cta-wrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
            .to("#cta-wrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame1end"] })
        } else {
            tl.to("#cta-wrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1")
                .to("#cta-wrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
                .to("#cta-wrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
                .to("#cta-wrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame1end"] })
                .to("#finalcall-wrapper", 0, { x: 0, ease: "endAnimation", force3D: true })
        }
        
        //end frame 1
        if (defaultValues.frame1Headline.toLowerCase() != "n/a") {
            tl.to("#frame1-headline1", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "+=2.5")
        }
        if (defaultValues.frame1Headline2.toLowerCase() != "n/a") {
            tl.to("#frame1-headline2", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame1Headline3.toLowerCase() != "n/a") {
            tl.to("#frame1-headline3", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "-=0.8")
        }
    }

    //frame 2
    if (defaultValues.frame2Headline.toLowerCase() != "n/a") {
        tl.to("#frame2-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.1")

        if (defaultValues.frame2Headline2.toLowerCase() != "n/a") {
            tl.to("#frame2-headline2", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame2Headline3.toLowerCase() != "n/a") {
            tl.to("#frame2-headline3", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true, onComplete: takeScreenshot }, "-=0.8")
        }
        //final call
        tl.to("#cta-wrapper", 0.1, { x: 0, y: 0, onComplete: getEnd, onCompleteParams: ["frame2"] }, "+=0.1")
        if (defaultValues.ctaText2.toLowerCase() != "n/a") {
            tl.to("#cta-wrapper", 0.1, { opacity: 0, y: -4, ease: "startAnimation", force3D: true }, "+=1")
                .to("#finalcall-wrapper", 0.1, { opacity: 1, y: -4, ease: "startAnimation", force3D: true }, "-=0.1")
                .to("#finalcall-wrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
                .to("#finalcall-wrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
                .to("#finalcall-wrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: takeScreenshot })
                .to("#finalcall-wrapper", 0.1, { opacity: 0, y: -4, ease: "startAnimation", force3D: true }, "+=1.5")
                .to("#cta-wrapper", 0.1, { opacity: 1, y: -4, ease: "startAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame2end"] }, "-=0.1")
        } else {
            tl.to("#cta-wrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1");
        }
        tl.to("#cta-wrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
            .to("#cta-wrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
            .to("#cta-wrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame2end"] })

        //end frame 2
        if (defaultValues.frame2Headline.toLowerCase() != "n/a") {
            tl.to("#frame2-headline1", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "+=2.5")
        }
        if (defaultValues.frame2Headline2.toLowerCase() != "n/a") {
            tl.to("#frame2-headline2", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame2Headline3.toLowerCase() != "n/a") {
            tl.to("#frame2-headline3", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "-=0.8")
        }
    }
    //start frame 3
    if (defaultValues.frame3Headline.toLowerCase() != "n/a") {
        tl.to("#frame3-headline1", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.1")

        if (defaultValues.frame3Headline2.toLowerCase() != "n/a") {
            tl.to("#frame3-headline2", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame3Headline3.toLowerCase() != "n/a") {
            tl.to("#frame3-headline3", 1, { opacity: 1, x: 0, ease: "startAnimation", force3D: true }, "-=0.8")
        }
        tl.to("#cta-wrapper", 0.1, { y: -4, ease: "startAnimation", force3D: true }, "+=1")
            .to("#cta-wrapper", 0.1, { y: 0, opacity: 1, ease: "endAnimation", force3D: true })
            .to("#cta-wrapper", 0.1, { y: -2, ease: "startAnimation", force3D: true })
            .to("#cta-wrapper", 0.1, { y: 0, ease: "endAnimation", force3D: true, onComplete: getEnd, onCompleteParams: ["frame3"] })
        //end frame 3
        if (defaultValues.frame3Headline.toLowerCase() != "n/a") {
            tl.to("#frame3-headline1", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "+=2.5")
        }
        if (defaultValues.frame3Headline2.toLowerCase() != "n/a") {
            tl.to("#frame3-headline2", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "-=0.8")
        }
        if (defaultValues.frame3Headline3.toLowerCase() != "n/a") {
            tl.to("#frame3-headline3", 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true }, "-=0.8")
        }
    }
    tl.to(["#cta-wrapper", "#finalcall-wrapper"], 1, { opacity: 0, x: 100, ease: "endAnimation", force3D: true, onComplete: () => { _loopCount++ } }, "-=1")
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
            }
            break;
    }
}