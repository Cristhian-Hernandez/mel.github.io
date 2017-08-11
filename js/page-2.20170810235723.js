(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-12').unveil(50);
$('.js-13').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-11')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "1.00s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "3.50s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "6.00s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "7.80s", 1, 100);
wl.addAnimation($('.js-17')[0], "1.00s", "11.00s", 1, 100);
wl.addAnimation($('.js-18')[0], "1.00s", "8.80s", 1, 100);
wl.start();

});