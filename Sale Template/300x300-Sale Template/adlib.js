window.gwd = {
    globalCopyProp: [],
    auto_PauseBtnClick: function(){gsap.globalTimeline.pause()},
    auto_PlayBtnClick: function(){gsap.globalTimeline.resume()},
    clickExit: function(){Enabler.exitOverride("Specsavers Sale Tempalte", defaultValues.landingPage)},
    customCSS: function(css){
        var style = document.createElement('style')
            style.innerText = css;
            document.head.appendChild(style)
    },
    hasCurrency: function(d, f){
        if (/^\+?(0|[1-9]\d*)$/.test(d)) {
            if (defaultValues.currency.toLowerCase() != "n/a") {
                if (defaultValues.currency === "%") {
                    return `${d}${defaultValues.currency}`;
                } else {
                    return `${d}<sup style="font-family:${fontProperty["Medium"]}; top: 1px; font-size: ${parseInt(f)/2}px; margin-left: 2px;">${defaultValues.currency}</sup>`;
                }
            } else {
                return d;
            }
        } else {
            return d;
        }
    }
}

var defaultValues = {
    animationType: "frame1",
    logo: "./assets/specsavers_300x300.png",
    frame1Headline: "Lorem ipsum dolor sit amet consetetur sadipscing elitrvero eos",
    frame1Headline2: "100",
    frame1Headline3: "N/A",
    frame2Headline: "Lorem ipsum dolor sit amet consetetur sadipscing elitrvero eos",
    frame2Headline2: "90",
    frame2Headline3: "N/A",
    frame3Headline: "Lorem ipsum dolor sit amet consetetur sadipscing elitrvero eos",
    frame3Headline2: "80",
    frame3Headline3: "N/A",
    baseImage: "./assets/udsalg_300x300.png",
    baseImage2: "./assets/300x300-static_curve.jpg",
    currency: "kr.",
    ctaText: "CTA",
    ctaText2: "Final Call",
    ctaColor1: "Racing",
    ctaColor2: "Orange",
    fontSize1: "18, 53, 0",
    fontSize2: "18, 53, 0",
    fontSize3: "18, 53, 0",
    fontColor1: "#666666, Racing, N/A",
    fontColor2: "#666666, Racing, N/A",
    fontColor3: "#666666, Racing, N/A",
    customVariable: "Medium, Bold, N/A",
    customVariable2: "Medium, Bold, N/A",
    customVariable3: "Medium, Bold, N/A",
    cssAttrib: "/* custom css */",
    landingPage: "https://www.specsavers.com/",
    startDate: " ",
    endDate: " ",
    readableLabel: " ",
};

//DOM Elements
let _finalcallWrapper = document.querySelector("#finalcall-wrapper"),
    _frame1headline1 = document.querySelector("#frame1-headline1"),
    _frame1headline2 = document.querySelector("#frame1-headline2"),
    _frame1headline3 = document.querySelector("#frame1-headline3"),
    _frame2headline1 = document.querySelector("#frame2-headline1"),
    _frame2headline2 = document.querySelector("#frame2-headline2"),
    _frame2headline3 = document.querySelector("#frame2-headline3"),
    _frame3headline1 = document.querySelector("#frame3-headline1"),
    _frame3headline2 = document.querySelector("#frame3-headline2"),
    _frame3headline3 = document.querySelector("#frame3-headline3"),
    _finalcall = document.querySelector("#finalcall-wrapper span"),
    _staticImageText = document.querySelector("#image-text"),
    _staticCurve = document.querySelector("#static-curve"),
    _logoImg = document.querySelector("#logo-wrapper img"),
    _ctaWrapper = document.querySelector("#cta-wrapper"),
    _cta = document.querySelector("#cta-wrapper span");

function initDynamic() {
    (Enabler.isServingInLiveEnvironment()) ? studioInvocation(): null;
}
//populate
function populate(){
    const{animationType,logo,frame1Headline,frame1Headline2,frame1Headline3,frame2Headline,frame2Headline2,frame2Headline3,frame3Headline,frame3Headline2,frame3Headline3,baseImage,baseImage2,currency,ctaText,ctaText2,ctaColor1,ctaColor2,fontSize1,fontSize2,fontSize3,fontColor1,fontColor2,fontColor3,customVariable,customVariable2,customVariable3,cssAttrib,}=this;
    let frame1FontSizeprop = fontSize1.split(","),
        frame1FontColorprop = fontColor1.split(","),
        frame1FontFamilyprop = customVariable.split(","),
        frame2FontSizeprop = fontSize2.split(","),
        frame2FontColorprop = fontColor2.split(","),
        frame2FontFamilyprop = customVariable2.split(","),
        frame3FontSizeprop = fontSize3.split(","),
        frame3FontColorprop = fontColor3.split(","),
        frame3FontFamilyprop = customVariable3.split(",");

    /* custom css*/
    gwd.customCSS(cssAttrib);
    //cta color
    Object.assign(_ctaWrapper.style, ctaCopyColor[ctaColor1]);
    Object.assign(_finalcallWrapper.style, ctaCopyColor[ctaColor2]);
    //---font size
    for (let i = 1; i <= 3; i++) {
        eval(`frame${i}FontSizeprop`).forEach((font, index) => {
            Object.assign(eval(`_frame${i}headline${index+1}`).style, {
                fontSize: `${parseInt(font)}px`,
                lineHeight: (parseInt(font) == 0) ? 0 : `${parseInt(font)+2}px`,
                display: (parseInt(font) == 0) ? "none" : "block",
                letterSpacing: `0.2px`,
                color: ((eval(`frame${i}FontColorprop`)[index].split(' ').join('')).indexOf("#")> -1)?eval(`frame${i}FontColorprop`)[index].split(' ').join(''):colorPalette[eval(`frame${i}FontColorprop`)[index].split(' ').join('')],
                fontFamily: fontProperty[eval(`frame${i}FontFamilyprop`)[index].split(' ').join('')],
            })
        })
    }

    _logoImg.setAttribute("src", logo);
    _staticImageText.setAttribute("src", baseImage);
    _staticCurve.setAttribute("src", baseImage2);

    _frame1headline1.innerHTML = gwd.hasCurrency(frame1Headline, frame1FontSizeprop[0]);
    _frame1headline2.innerHTML = gwd.hasCurrency(frame1Headline2, frame1FontSizeprop[1]);
    _frame1headline3.innerHTML = gwd.hasCurrency(frame1Headline3, frame1FontSizeprop[2]);

    _frame2headline1.innerHTML = gwd.hasCurrency(frame2Headline, frame2FontSizeprop[0]);
    _frame2headline2.innerHTML = gwd.hasCurrency(frame2Headline2, frame2FontSizeprop[1]);
    _frame2headline3.innerHTML = gwd.hasCurrency(frame2Headline3, frame2FontSizeprop[2]);

    _frame3headline1.innerHTML = gwd.hasCurrency(frame3Headline, frame3FontSizeprop[0]);
    _frame3headline2.innerHTML = gwd.hasCurrency(frame3Headline2, frame3FontSizeprop[1]);
    _frame3headline3.innerHTML = gwd.hasCurrency(frame3Headline3, frame3FontSizeprop[2]);

    _cta.innerHTML = ctaText;
    _finalcall.innerHTML = ctaText2;
}
//primary handler
function enablerInitHandler(){
    initDynamic();
    populate.call(defaultValues);
    //load image first
    Promise.all(Array.from(document.images).map(img => {
        if (img.complete)
            if (img.naturalHeight !== 0)
                return Promise.resolve();
            else
                return Promise.reject(img);
        return new Promise((resolve, reject) => {
            img.addEventListener('load', resolve);
            img.addEventListener('error', () => reject(img));
        });
    })).then(() => {
        //before animation
        gsap.set(".image-wrapper", { opacity: 1 });
        setTimeout(animation, 1000);
    }, badImg => {
        console.log('some image failed to load, others may still be loading');
        console.log('first broken image:', badImg);
    });
    

    var event = new CustomEvent("adinitialized");
    document.dispatchEvent(event);
}
//Auto height
function customContainer(){
    document.querySelectorAll(".copy-wrapper div div").forEach(function (e) {
        e.style.height = `${e.offsetHeight - 11}px`;
        e.style.marginTop = `${(e.offsetHeight > 0)? "15px" : "0px"}`;
    });

    //get max heigh of all copy wrappers
    document.querySelectorAll(".copy-wrapper").forEach(function(e) {
        gwd.globalCopyProp.push(e.offsetHeight);
    });

    //get max height 
    var max = gwd.globalCopyProp.reduce(function(a, b) {
        return Math.max(a, b);
    });

    //set height of all copy wrappers
    document.querySelectorAll(".copy-wrapper").forEach(function(e) {
        e.style.height = `${max}px`;
    });
}
//this functions will take screenshot per frame
function takeScreenshot() {
    var iframeWidth = window.innerWidth;
    var iframeHeight = window.innerHeight;
    try {
        var iframeX = window.parent.document.getElementById('adlib-screenshot-preview').offsetLeft;
        var iframeY = window.parent.document.getElementById('adlib-screenshot-preview').offsetTop;
        parent.postMessage({
            type: 'SCREENSHOT',
            data: {
                iframeX,
                iframeY,
                iframeHeight,
                iframeWidth
            }
        }, '*');
    } catch (e) {}
}
//parent listener when ad strats
function adlibStart() {
    parent.postMessage({
        type: 'SCREENSHOT_START',
        id: window.location.hash.split("=")[1] || 0
    }, '*');
}
//parent listener when ad ends
function adlibEnd() {
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id: window.location.hash.split("=")[1] || 0
    }, '*');
}
//click exit
['click','ontouchstart'].forEach( function(evt) {
    document.querySelector("#clickExit").addEventListener(evt, function(e){
        e.preventDefault();
        gwd.clickExit();
    }, false);
});

//onload
(function () {
    (Enabler.isInitialized()) ? enablerInitHandler(): Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
})();