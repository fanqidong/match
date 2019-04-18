//Rem
(function (win,doc){
    if (!win.addEventListener) return;
    var html=document.documentElement;
    function setFont() {
        var w = html.clientWidth,
            h = html.clientHeight;
        html.style.fontSize= w > h ? w/1334*100+"px" : w/750*100+"px"
    }
    setFont();

    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded',setFont,false);
    win.addEventListener('resize',setFont,false);
    win.addEventListener('load',setFont,false);
})(window,document);
function isIphoneX() {
    return /iphone/gi.test(navigator.userAgent) && ((screen.width == 812 && screen.height == 375) || (screen.width == 375 && screen.height == 812));
}
function isAlien() {
    var size =  [
        {
            w: 816,
            h: 393
        }, // MI8 SE /  // VIVO Y85A
        {
            w: 760,
            h: 360
        }, // VIVO X21A / COL-AL10
        {
            w: 2280,
            h: 1080
        }, // NOVA 3E / HUAWEI 9i
        {
            w: 2283,
            h: 1081
        }, // Red MI Pro 6
        {
            w: 2244,
            h: 1081
        }, // MI8 SE
        {
            w: 2250,
            h: 1081
        }, // MI8
        {
            w: 2283,
            h: 1081
        }, // Red MI Pro 6
        {
            w: 1520,
            h: 720
        }, // VIVO Y85A / VIVO X21A
        {
            w: 830,
            h: 393
        }, // Red MI 6
        {
            w: 748,
            h: 360
        },	// HUAWEI EML-AL00
        {
            w: 818,
            h: 393
        },	//MI8Ì½Ë÷°æ
        {
            w: 1496,
            h: 720
        },	// HUAWEI EML-AL00
        {
            w: 1494,
            h: 720
        }	// CLT-AL01

    ];
    var isAlien = false;
    size.map(function (item) {
        if ((screen.width == item.w && screen.height == item.h) || (screen.width == item.h && screen.height == item.w)) {
            isAlien = true;
        }
    });
    return isAlien;
}
