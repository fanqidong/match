/**
 * Created by Administrator on 2018/9/28.
 */
(function (win,doc){
    if (!win.addEventListener) return;
    var html=document.documentElement;
    function setFont() {
        var w = html.clientWidth,
            h = html.clientHeight;
        html.style.fontSize= w > h ? w/1624*100+"px" : w/750*100+"px"
    }
    setFont();
    setTimeout(function () {
        setFont();
    }, 300);
    doc.addEventListener('DOMContentLoaded',setFont,false);
    win.addEventListener('resize',setFont,false);
    win.addEventListener('load',setFont,false);
})(window,document);