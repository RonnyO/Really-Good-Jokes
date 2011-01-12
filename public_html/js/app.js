/*
    app.js 
*/
/*zepto library by thomas fuchs*/
var Zepto=function(){function f(a){return a.filter(function(c){return c!==g&&c!==null})}function i(a){return a.replace(/-+(.)?/g,function(c,e){return e?e.toUpperCase():""})}function m(a,c){this.dom=a||[];this.selector=c||""}function b(a,c){if(a==d)return new m;else if(c!==g)return b(c).find(a);else if(typeof a==="function")return b(d).ready(a);else{var e;if(a instanceof m)e=a.dom;else{if(a instanceof Array)e=a;else{if(a instanceof Element||a===window)e=[a];else{if(p.test(a)){n.innerHTML=(""+a).trim();
e=h.call(n.childNodes);n.innerHTML="";e=e}else e=o(d,a);e=e}e=e}e=e}return new m(f(e),a)}}var h=[].slice,j,l,o,p,n,d=window.document,g;if(String.prototype.trim===g)String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")};p=/^\s*<.+>/;n=d.createElement("div");b.extend=function(a,c){for(j in c)a[j]=c[j];return a};b.qsa=o=function(a,c){return h.call(a.querySelectorAll(c))};b.fn={ready:function(a){d.addEventListener("DOMContentLoaded",a,false);return this},compact:function(){this.dom=
f(this.dom);return this},get:function(a){return a===g?this.dom:this.dom[a]},remove:function(){return this.each(function(a){a.parentNode.removeChild(a)})},each:function(a){this.dom.forEach(a);return this},filter:function(a){return b(this.dom.filter(function(c){return o(c.parentNode,a).indexOf(c)>=0}))},is:function(a){return this.dom.length>0&&b(this.dom[0]).filter(a).dom.length>0},first:function(){this.dom=f([this.dom[0]]);return this},last:function(){this.dom=f([this.dom[this.dom.length-1]]);return this},
find:function(a){return b(this.dom.map(function(c){return o(c,a)}).reduce(function(c,e){return c.concat(e)},[]))},closest:function(a){var c=this.dom[0].parentNode;for(a=o(d,a);c&&a.indexOf(c)<0;)c=c.parentNode;return b(c&&c!==d?c:[])},pluck:function(a){return this.dom.map(function(c){return c[a]})},show:function(){return this.css("display","block")},hide:function(){return this.css("display","none")},prev:function(){return b(this.pluck("previousElementSibling"))},next:function(){return b(this.pluck("nextElementSibling"))},
html:function(a){return a===g?this.dom.length>0?this.dom[0].innerHTML:null:this.each(function(c){c.innerHTML=a})},text:function(a){return a===g?this.dom.length>0?this.dom[0].innerText:null:this.each(function(c){c.innerText=a})},attr:function(a,c){return typeof a=="string"&&c===g?this.dom.length>0&&this.dom[0].nodeName==="INPUT"&&this.dom[0].type==="text"&&a==="value"?this.dom[0].value:this.dom.length>0?this.dom[0].getAttribute(a)||g:null:this.each(function(e){if(typeof a=="object")for(j in a)e.setAttribute(j,
a[j]);else e.setAttribute(a,c)})},offset:function(){var a=this.dom[0].getBoundingClientRect();return{left:a.left+d.body.scrollLeft,top:a.top+d.body.scrollTop,width:a.width,height:a.height}},css:function(a,c){if(c===g&&typeof a=="string")return this.dom[0].style[i(a)];l="";for(j in a)l+=j+":"+a[j]+";";if(typeof a=="string")l=a+":"+c;return this.each(function(e){e.style.cssText+=";"+l})},index:function(a){return this.dom.indexOf(b(a).get(0))},hasClass:function(a){return RegExp("(^|\\s)"+a+"(\\s|$)").test(this.dom[0].className)},
addClass:function(a){return this.each(function(c){!b(c).hasClass(a)&&(c.className+=(c.className?" ":"")+a)})},removeClass:function(a){return this.each(function(c){c.className=c.className.replace(RegExp("(^|\\s)"+a+"(\\s|$)")," ").trim()})},toggleClass:function(a,c){return this.each(function(e){c!==g&&!c||b(e).hasClass(a)?b(e).removeClass(a):b(e).addClass(a)})}};["width","height"].forEach(function(a){b.fn[a]=function(){return this.offset()[a]}});var k={append:"beforeEnd",prepend:"afterBegin",before:"beforeBegin",
after:"afterEnd"};for(j in k)b.fn[j]=function(a){return function(c){return this.each(function(e){e["insertAdjacent"+(c instanceof Element?"Element":"HTML")](a,c)})}}(k[j]);m.prototype=b.fn;return b}();"$"in window||(window.$=Zepto);
(function(f){function i(d,g,k,a){g=m(g);if(g.ns)var c=RegExp("(?:^| )"+g.ns.replace(" "," .* ?")+"(?: |$)");return(o[d._zid||(d._zid=p++)]||[]).filter(function(e){return e&&(!g.e||e.e==g.e)&&(!g.ns||c.test(e.ns))&&(!k||e.fn==k)&&(!a||e.sel==a)})}function m(d){d=(""+d).split(".");return{e:d[0],ns:d.slice(1).sort().join(" ")}}function b(d,g,k,a,c){var e=d._zid||(d._zid=p++),q=o[e]||(o[e]=[]);g.split(/\s/).forEach(function(r){r=f.extend(m(r),{fn:k,sel:a,del:c,i:q.length});q.push(r);d.addEventListener(r.e,
c||k,false)})}function h(d,g,k,a){var c=d._zid||(d._zid=p++);(g||"").split(/\s/).forEach(function(e){i(d,e,k,a).forEach(function(q){delete o[c][q.i];d.removeEventListener(q.e,q.del||q.fn,false)})})}function j(d){var g=f.extend({originalEvent:d},d);n.forEach(function(k){g[k]=function(){return d[k].apply(d,arguments)}});return g}var l=f.qsa,o={},p=1;f.event={add:function(d,g,k){b(d,g,k)},remove:function(d,g,k){h(d,g,k)}};f.fn.bind=function(d,g){return this.each(function(k){b(k,d,g)})};f.fn.unbind=function(d,
g){return this.each(function(k){h(k,d,g)})};var n=["preventDefault","stopImmediatePropagation","stopPropagation"];f.fn.delegate=function(d,g,k){return this.each(function(a){b(a,g,k,d,function(c){for(var e=c.target,q=l(a,d);e&&q.indexOf(e)<0;)e=e.parentNode;e&&e!==a&&e!==document&&k.call(e,f.extend(j(c),{currentTarget:e,liveFired:a}))})})};f.fn.undelegate=function(d,g,k){return this.each(function(a){h(a,g,k,d)})};f.fn.live=function(d,g){f(document.body).delegate(this.selector,d,g);return this};f.fn.die=
function(d,g){f(document.body).undelegate(this.selector,d,g);return this};f.fn.trigger=function(d){return this.each(function(g){var k=document.createEvent("Events");g.dispatchEvent(k,k.initEvent(d,true,false))})}})(Zepto);
(function(f){function i(b){var h={},j=b.match(/(Android)\s+([\d.]+)/),l=b.match(/(iPhone\sOS)\s([\d_]+)/),o=b.match(/(iPad).*OS\s([\d_]+)/);b=b.match(/(webOS)\/([\d.]+)/);if(j){h.android=true;h.version=j[2]}if(l){h.ios=true;h.version=l[2].replace(/_/g,".");h.iphone=true}if(o){h.ios=true;h.version=o[2].replace(/_/g,".");h.ipad=true}if(b){h.webos=true;h.version=b[2]}return h}f.os=i(navigator.userAgent);f.__detect=i;var m=navigator.userAgent.match(/WebKit\/([\d.]+)/);f.browser=m?{webkit:true,version:m[1]}:
{webkit:false}})(Zepto);(function(f){f.fn.anim=function(i,m,b){var h=[],j,l;for(l in i)if(l==="opacity")j=i[l];else h.push(l+"("+i[l]+")");return this.css({"-webkit-transition":"all "+(m!==undefined?m:0.5)+"s "+(b||""),"-webkit-transform":h.join(" "),opacity:j})}})(Zepto);
(function(f){var i={},m;f(document).ready(function(){f(document.body).bind("touchstart",function(b){var h=Date.now(),j=h-(i.last||h);i.target="tagName"in b.touches[0].target?b.touches[0].target:b.touches[0].target.parentNode;m&&clearTimeout(m);i.x1=b.touches[0].pageX;if(j>0&&j<=250)i.isDoubleTap=true;i.last=h}).bind("touchmove",function(b){i.x2=b.touches[0].pageX}).bind("touchend",function(){if(i.isDoubleTap){f(i.target).trigger("doubleTap");i={}}else if(i.x2>0){Math.abs(i.x1-i.x2)>30&&f(i.target).trigger("swipe")&&
f(i.target).trigger("swipe"+(i.x1-i.x2>0?"Left":"Right"));i.x1=i.x2=i.last=0}else if("last"in i)m=setTimeout(function(){m=null;f(i.target).trigger("tap");i={}},250)}).bind("touchcancel",function(){i={}})});["swipe","swipeLeft","swipeRight","doubleTap","tap"].forEach(function(b){f.fn[b]=function(h){return this.bind(b,h)}})})(Zepto);
(function(f){function i(){}f.ajax=function(b){b=b||{};var h=b.data,j=b.success||i,l=b.error||i,o=m[b.dataType],p=b.contentType,n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState==4)if(n.status>=200&&n.status<300||n.status==0)if(o=="application/json"){var d,g=false;try{d=JSON.parse(n.responseText)}catch(k){g=k}g?l(n,"parsererror",g):j(d,"success",n)}else j(n.responseText,"success",n);else l(n,"error")};n.open(b.type||"GET",b.url||window.location,true);o&&n.setRequestHeader("Accept",
o);if(h instanceof Object){h=JSON.stringify(h);p=p||"application/json"}p&&n.setRequestHeader("Content-Type",p);n.setRequestHeader("X-Requested-With","XMLHttpRequest");n.send(h)};var m=f.ajax.mimeTypes={json:"application/json",xml:"application/xml",html:"text/html",text:"text/plain"};f.get=function(b,h){f.ajax({url:b,success:h})};f.post=function(b,h,j,l){if(h instanceof Function){l=l||j;j=h;h=null}f.ajax({type:"POST",url:b,data:h,success:j,dataType:l})};f.getJSON=function(b,h){f.ajax({url:b,success:h,
dataType:"json"})};f.fn.load=function(b,h){if(!this.dom.length)return this;var j=this,l=b.split(/\s/),o;if(l.length>1){b=l[0];o=l[1]}f.get(b,function(p){j.html(o?f(document.createElement("div")).html(p).find(o).html():p);h&&h()});return this}})(Zepto);(function(f){var i=[],m;f.fn.remove=function(){return this.each(function(b){if(b.tagName=="IMG"){i.push(b);b.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";m&&clearTimeout(m);m=setTimeout(function(){i=[]},6E4)}b.parentNode.removeChild(b)})}})(Zepto);

var jokes = {
	currentPage: "top",
	refreshVotingButtons: function(){
		$('.vote').removeClass('spin');
		try {
			var storedVote = localStorage.getItem(currentJokeId);
			if(storedVote == 'like') {
				$('#like').addClass('active');
				$('#dislike').removeClass('active');
			} else if (storedVote == 'dislike') {
				$('#dislike').addClass('active');
				$('#like').removeClass('active');
			} else {
				$('.vote').removeClass('active');
			}
		}catch(e){}
	}
};
var currentJoke;

jokes.p = {
   obj : ''
   ,gen_width : ''
   ,gen_height : ''
};
jokes.reassign = function(){
   jokes.p.obj = $('#jokes');
   jokes.p.gen_width = $('#viewport').width();
   jokes.p.gen_height = (window.innerHeight - $('.voting').height() - $('nav').height() - 15);
};
jokes.calculate = function(){
    jokes.reassign();
    jokes.p.obj.css({'width':($('.joke').dom.length * jokes.p.gen_width)+'px','height':jokes.p.gen_height+'px'});
    $('.joke').css({'width':(jokes.p.gen_width*0.8)+'px','margin':'0 '+(jokes.p.gen_width*0.1)+'px','height':jokes.p.gen_height+'px'});
};
jokes.bindButtons = function(){
	// votes
	$('.vote').bind('click', function(ev){
		ev.preventDefault();
		var votedElement = $(this);
		currentJokeId = currentJoke.attr('id');
		var vote = $(this).attr('id');
		$('.vote').removeClass('spin');
		votedElement.addClass('spin');
		$.ajax({
			url: 'ajax.php?vote='+ vote +'&id=' + currentJokeId,
			success: function(){
			    try{
					localStorage.setItem(currentJokeId, vote);
					$('.vote').removeClass('active');
					$('#' + vote).addClass('active');
				} catch(e) {}
			}
		});
	});
	
	// submit tab
	$('#send').bind('click', function(ev){
		ev.preventDefault();
		myScroll.scrollToPage(0, 0, "500ms");
		$(document.body).attr('class', 'send');
	});
};

window.addEventListener('resize', jokes.calculate, true);
var myScroll,
	single_scroll;

jokes.calculate();

$(document).ready(function(){
	jokes.currentPage = $(document.body).attr('class');
	myScroll = new iScroll('jokes', {
		snap:true,
		momentum:false,
        desktopCompatibility:true,
		hScrollbar:false,
		onScrollEnd: function (e) {
            currentJoke = $($('#jokes li').dom[this.pageX]);
			currentJokeId = currentJoke.attr('id');
			if(currentJokeId == 'submitForm') {
				$('.voting').addClass('submitActive');
				$(document.body).attr('class', 'send');
			} else {
				$('.voting').removeClass('submitActive');
				$(document.body).attr('class', jokes.currentPage);
			}
			
			jokes.refreshVotingButtons();
			
            if(1){ //check if content exeeds the parent
                overfloated_obj = document.querySelector('#jokes li:nth-child(' + (this.pageX + 1) + ') div');
                single_scroll = new iScroll(overfloated_obj,{desktopCompatibility:true,ischildiscroll:true,vScrollbar:true,momentum:true});
            }else{
                single_scroll.destroy();
            }
		}
	 });
    myScroll.scrollToPage($('#jokes li').dom.length, 0,'0ms');
	
	jokes.bindButtons();
});