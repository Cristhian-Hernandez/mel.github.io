(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-19')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-21')[0], "1.00s", "1.30s", 1, 100);
wl.addAnimation($('.js-22')[0], "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.js-23')[0], "1.00s", "6.00s", 1, 100);
wl.addAnimation($('.js-24')[0], "1.00s", "12.00s", 1, 100);
wl.addAnimation($('.js-25')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});