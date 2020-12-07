"use strict";
let video = document.querySelector("#baseVideo");
let videoCounter = 0;
var loopVidCount = 0;
var field = 'adlibCreativeId';
var url = window.location.href;
var id = getParameterByName(field, url) || 0;
var arrMax = [],
    maxNum = 0,
    curveHeight = 0;

//function to get URL parameters(will work on tool only)
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp(`(#?|&)${name}(=([^&#]*)|&|#|$)`);
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[3]) return '';
    return decodeURIComponent(results[3].replace(/\+/g, ' '));
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
        id
    }, '*');
}
//parent listener when ad ends
function adlibEnd() {
    parent.postMessage({
        type: 'SCREENSHOT_STOP',
        id
    }, '*');
}
//for play/pause functionality
gwd.auto_PauseBtnClick = function(event) {
    gsap.globalTimeline.pause();
    video.pause();
};
gwd.auto_PlayBtnClick = function(event) {
    gsap.globalTimeline.play();
    video.play();
};

//TEXT RESIZER
function textResize(el) {
    document.querySelectorAll("." + el).forEach(function(obj, i) {
        var cp = document.querySelector("#" + obj.id + " p");
        cp.style.fontSize = '23px';
        while (cp.offsetHeight > document.querySelector("#" + obj.id).offsetHeight) {
            cp.style.fontSize = (parseInt(window.getComputedStyle(cp).fontSize) - 1) + "px";
        }
    })
}
//Text auto <BR>
function textNewLine(el) {
    let cw = document.querySelector(".copy-handler").offsetWidth;
    document.querySelectorAll("." + el).forEach(function(obj, i) {
        let newArr = [];
        let tempText = obj.innerText + " ";
        tempText.split(" ").forEach(function(arr, idx) {
            if (cw < obj.offsetWidth) {
                newArr[idx - 1] = `<br>${newArr[idx-1]}`;
            }
            newArr.push(arr);
            obj.style.whiteSpace = "nowrap";
            obj.innerHTML = newArr.join(" ");
        })
    })
}
//split br and convert to div
function splitLine(el) {
    document.querySelectorAll("." + el).forEach(function(obj, i) {
        let newArr = [];
        let tempText = obj.innerHTML;
        tempText.split("<br>").forEach(function(arr, idx) {
            newArr.push(`<div>${arr}</div>`);
            obj.innerHTML = newArr.join("");
        })
    })
}
//Add css to header
function customCSS(css) {
    var style = document.createElement('style')
    style.innerText = css
    document.head.appendChild(style)
}
//preloader
function preloader() {
    let callback = false;
    let imgs = document.images,
        imgLen = imgs.length,
        imgCounter = 0;
    [].forEach.call(imgs, function(img) {
        if (img.complete) incrementCounter();
        else img.addEventListener('load', incrementCounter, false);
    });

    function incrementCounter() {
        imgCounter++;
        if (imgCounter === imgLen) {
            callback = true;
        }
    }
    return callback;
}
//adjust curve

function adjustCurve() {
    document.querySelectorAll(".frameWrapper").forEach(val => {
        arrMax.push(val.offsetHeight);
    });
    maxNum = Math.max(...arrMax);
    document.querySelectorAll(".frameWrapper").forEach(val => {
        val.style.height = `${maxNum}px`;
    });
    curveHeight = maxNum + 148;
    curveWrapper.style.height = `${curveHeight}px`;
}

function hasCurrency(d, f) {
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

//same value
Array.prototype.sameValues = Array.prototype.sameValues || function() {
    this.every((v, i, a) => v === a[0]);
}

function display() {
    videoCounter++;
    document.querySelector("#baseVideo").play();
    if (videoCounter == 1) {
        animate();
    }
}