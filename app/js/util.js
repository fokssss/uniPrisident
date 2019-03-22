window.sara = (function(w, s){
	s.hideLoading = function(){
        var el = $summer.dom('.loading');
        if($summer.isElement(el)){
            $summer.addCls(el, 'loading_hide');
            setTimeout(function () {
                $summer.remove(el);
            }, 300);
        }
    }
    return s;
})(window, window.sara || {});

// 字体REM
(function (doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
        var clientWidth = docEl.clientWidth;
        //if (clientWidth >= 750) {
        //    clientWidth = 750;
       // };
        if (!clientWidth)
            return;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };
    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false); 

})(document, window);