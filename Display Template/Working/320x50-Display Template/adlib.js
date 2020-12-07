'use strict';
//dynamic variables
var defaultValues = {
    animationType: "frame1",
    logo: "specsavers_320x50.png",
    frame1Headline: "headline",
    frame1Headline2: "N/A",
    frame1Headline3: "N/A",
    frame2Headline: "subheadline",
    frame2Headline2: "N/A",
    frame2Headline3: "N/A",
    frame3Headline: "N/A",
    frame3Headline2: "N/A",
    frame3Headline3: "N/A",
    baseImage: "blank.png",
    frame1Image: "blank.png",
    frame1Background: "curve_320x50.png",
    currency: "N/A",
    ctaText: "Call to action",
    ctaText2: "N/A",
    ctaColor1: "Racing",
    ctaColor2: "N/A",
    fontSize1: "16, 0, 0",
    fontSize2: "16, 0, 0",
    fontSize3: "0, 0, 0",
    fontColor1: "Racing,  N/A, N/A",
    fontColor2: "Carbon, N/A, N/A",
    fontColor3: "N/A, N/A, N/A",
    customVariable: "Medium, N/A, N/A",
    customVariable2: "Regular, N/A, N/A",
    customVariable3: "N/A, N/A, N/A",
    cssAttrib: "/* custom css */",
    bgColor: "Light Grey",
    landingPage: "https://www.google.com",
    videoUrl: "222x50_Video_Gracie_01.mp4",
    imageTags: "222x50_Video_Gracie_01.mp4",
    startDate: " ",
    endDate: " ",
    readableLabel: " ",
}
//DOM Elements
let llogoImg = document.querySelector("#logoImg"),
    baseVideo = document.querySelector("#baseVideo"),
    baseImageImg = document.querySelector("#baseImageImg"),
    gradiantImg = document.querySelector("#gradiantImg"),
    _frame1headline1 = document.querySelector("#frame1-headline1"),
    _frame2headline1 = document.querySelector("#frame2-headline1"),
    _frame3headline1 = document.querySelector("#frame3-headline1"),
    ctaCopy = document.querySelector("#cta-copy-text"),
    curve = document.querySelector("#curveImg"),
    ctaHandler = document.querySelector("#ctaHandler"),
    bgDiv = document.querySelector("#bgDiv");

function initDynamic() {
    if (Enabler.isServingInLiveEnvironment()) {
        studioInvocation();
    }
}

function populate() {
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
        bgColor,
        videoUrl
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
    ctaHandler.style.color = colorPalette[ctaColor1];
    //---font size
    for (let i = 1; i <= 3; i++) {
        eval(`frame${i}FontSizeprop`).forEach((font, index) => {
            if (index <= 0) {
                Object.assign(eval(`_frame${i}headline${index+1}`).style, {
                    fontSize: `${parseInt(font)}px`,
                    lineHeight: (parseInt(font) == 0) ? 0 : `${parseInt(font)+4}px`,
                    display: (parseInt(font) == 0) ? "none" : "block",
                    letterSpacing: `0.2px`,
                    color: colorPalette[eval(`frame${i}FontColorprop`)[index].split(' ').join('')],
                    fontFamily: fontProperty[eval(`frame${i}FontFamilyprop`)[index].split(' ').join('')],
                })
            }
        })
    }


    logoImg.setAttribute("source", logo);
    baseImageImg.setAttribute("source", baseImage);
    baseVideo.setAttribute("sources", videoUrl);

    _frame1headline1.innerHTML = hasCurrency(frame1Headline, frame1FontSizeprop[0]);
    _frame2headline1.innerHTML = hasCurrency(frame2Headline, frame2FontSizeprop[0]);
    _frame3headline1.innerHTML = hasCurrency(frame3Headline, frame3FontSizeprop[0]);

    ctaCopy.innerHTML = ctaText;

    curve.setAttribute("source", frame1Background);
    gradiantImg.setAttribute("source", frame1Image);
}