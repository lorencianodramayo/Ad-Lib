'use strict';
//dynamic variables
var defaultValues = {
    animationType: "frame1",
    logo: "specsavers_320x400.png",
    frame1Headline: "Lorem ipsum dolor",
    frame1Headline2: "XX",
    frame1Headline3: "sit amet, consectetur",
    frame2Headline: "XX",
    frame2Headline2: "adipiscing elit, sed do",
    frame2Headline3: "eiusmod tempor",
    frame3Headline: "N/A",
    frame3Headline2: "N/A",
    frame3Headline3: "N/A",
    baseImage: "00063-Retargeting-ProgBanners-BookingFlow-Clinical-v1_320x400.jpg",
    frame1Image: "blank.png",
    frame1Background: "curve_320x320.png",
    currency: "N/A",
    ctaText: "CTA",
    ctaText2: "Final Call",
    ctaColor1: "Racing",
    ctaColor2: "Orange",
    fontSize1: "20, 40, 0",
    fontSize2: "40, 18, 0",
    fontSize3: "0, 0, 0",
    fontColor1: "Carbon, Racing, N/A",
    fontColor2: "Racing, Carbon, N/A",
    fontColor3: "N/A, N/A, N/A",
    customVariable: "Medium, Bold, N/A",
    customVariable2: "Bold, Regular, N/A",
    customVariable3: "N/A, N/A, N/A",
    cssAttrib: "/* custom css */",
    bgColor: "White",
    landingPage: "https://www.google.com",
    startDate: " ",
    endDate: " ",
    readableLabel: " ",
}
//DOM Elements
let llogoImg = document.querySelector("#logoImg"),
    baseImageImg = document.querySelector("#baseImageImg"),
    gradiantImg = document.querySelector("#gradiantImg"),
    _frame1headline1 = document.querySelector("#frame1-headline1"),
    _frame1headline2 = document.querySelector("#frame1-headline2"),
    _frame1headline3 = document.querySelector("#frame1-headline3"),
    _frame2headline1 = document.querySelector("#frame2-headline1"),
    _frame2headline2 = document.querySelector("#frame2-headline2"),
    _frame2headline3 = document.querySelector("#frame2-headline3"),
    _frame3headline1 = document.querySelector("#frame3-headline1"),
    _frame3headline2 = document.querySelector("#frame3-headline2"),
    _frame3headline3 = document.querySelector("#frame3-headline3"),
    finalcallCopy = document.querySelector("#finalcall-copy-text"),
    ctaCopy = document.querySelector("#cta-copy-text"),
    curve = document.querySelector("#curveImg"),
    finalcallHandler = document.querySelector("#finalcall-handler"),
    ctaHandler = document.querySelector("#cta-handler"),
    bgDiv = document.querySelector("#bgDiv");

function initDynamic() {
    if (Enabler.isServingInLiveEnvironment()) {
        studioInvocation();
    }
}

function populateElement() {
    const {
        animationType,
        logo,
        frame1Headline,
        frame1Headline2,
        frame1Headline3,
        frame2Headline,
        frame2Headline2,
        frame2Headline3,
        frame3Headline,
        frame3Headline2,
        frame3Headline3,
        baseImage,
        frame1Image,
        frame1Background,
        currency,
        ctaText,
        ctaText2,
        ctaColor1,
        ctaColor2,
        fontSize1,
        fontSize2,
        fontSize3,
        fontColor1,
        fontColor2,
        fontColor3,
        customVariable,
        customVariable2,
        customVariable3,
        cssAttrib,
        bgColor
    } = this;

    let frame1FontSizeprop = fontSize1.split(","),
        frame1FontColorprop = fontColor1.split(","),
        frame1FontFamilyprop = customVariable.split(","),
        frame2FontSizeprop = fontSize2.split(","),
        frame2FontColorprop = fontColor2.split(","),
        frame2FontFamilyprop = customVariable2.split(","),
        frame3FontSizeprop = fontSize3.split(","),
        frame3FontColorprop = fontColor3.split(","),
        frame3FontFamilyprop = customVariable3.split(",");

    /* custom */
    customCSS(cssAttrib);
    /* dynamic CSS */
    bgDiv.style.backgroundColor = colorPalette[bgColor];
    //---cta color
    Object.assign(ctaHandler.style, ctaCopyColor[ctaColor1]);
    Object.assign(finalcallHandler.style, ctaCopyColor[ctaColor2]);
    //---font size
    for (let i = 1; i <= 3; i++) {
        eval(`frame${i}FontSizeprop`).forEach((font, index) => {
            Object.assign(eval(`_frame${i}headline${index+1}`).style, {
                fontSize: `${parseInt(font)}px`,
                lineHeight: (parseInt(font) == 0) ? 0 : `${parseInt(font)+4}px`,
                display: (parseInt(font) == 0) ? "none" : "block",
                letterSpacing: `0.2px`,
                color: colorPalette[eval(`frame${i}FontColorprop`)[index].split(' ').join('')],
                fontFamily: fontProperty[eval(`frame${i}FontFamilyprop`)[index].split(' ').join('')],
            })
        })
    }


    logoImg.setAttribute("source", logo);
    baseImageImg.setAttribute("source", baseImage);

    _frame1headline1.innerHTML = hasCurrency(frame1Headline, frame1FontSizeprop[0]);
    _frame1headline2.innerHTML = hasCurrency(frame1Headline2, frame1FontSizeprop[1]);
    _frame1headline3.innerHTML = hasCurrency(frame1Headline3, frame1FontSizeprop[2]);
    _frame2headline1.innerHTML = hasCurrency(frame2Headline, frame2FontSizeprop[0]);
    _frame2headline2.innerHTML = hasCurrency(frame2Headline2, frame2FontSizeprop[1]);
    _frame2headline3.innerHTML = hasCurrency(frame2Headline3, frame2FontSizeprop[2]);
    _frame3headline1.innerHTML = hasCurrency(frame3Headline, frame3FontSizeprop[0]);
    _frame3headline2.innerHTML = hasCurrency(frame3Headline2, frame3FontSizeprop[1]);
    _frame3headline3.innerHTML = hasCurrency(frame3Headline3, frame3FontSizeprop[2]);

    ctaCopy.innerHTML = ctaText;
    finalcallCopy.innerHTML = ctaText2;

    curve.setAttribute("source", frame1Background);
    gradiantImg.setAttribute("source", frame1Image);
}