function $_freedom_(b)
{
	var i, a,c;
	if(arguments.length > 1){c = new Array(); for(i=0; i<arguments.length; i++) c.push(arguments[i]);}
	if(b instanceof Array){ c = b; }
	if(c instanceof Array){ a = new Array(); for(i=0; i<c.length; i++) a[i] = document.getElementById(c[i]);}
	else a = document.getElementById(b);
	return a;
}
function $_freedom_remove(a) { if(a && a.parentNode) a.parentNode.removeChild(a); }
function _freedom_addEvent(a, b, c, d, e)
{
	if(!a) return false;
	var f;
	if(typeof e != "undefined")
	{	
		if ( typeof(e) != 'string' ){ var g = []; for ( var i = 0; i < e.length; i++ ) g.push(e[i]); f = function(e) { c.apply(a,[e].concat(g)); };}
		else f = function(e) { c.apply(a, [e].concat(e)); };
	}
	else f = c;
	if (a.addEventListener){ addEventListener(b, f, d); return true; }
	else{ if (a.attachEvent) return a.attachEvent('on' + b, f); else a['on' + b] = f; }
};
function _freedom_getObjPosition(a)
{
	var b, c; a = $_freedom_(a); b = a.offsetLeft; c = a.offsetTop; var body = document.getElementsByTagName('body')[0];
	while (a.offsetParent && a!=body){ b += a.offsetParent.offsetLeft; c += a.offsetParent.offsetTop; a = a.offsetParent;}
	return {x: b, y:c};
}


var crossbrowser_BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) { if (dataString.indexOf(data[i].subString) != -1) return data[i].identity; }
			else if (dataProp) return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{ string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
		{  string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" },
		{ string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" },
		{ prop: window.opera, identity: "Opera" },
		{ string: navigator.vendor, subString: "iCab", identity: "iCab" },
		{ string: navigator.vendor, subString: "KDE", identity: "Konqueror" },
		{ string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
		{ string: navigator.vendor, subString: "Camino", identity: "Camino" },
		{ string: navigator.userAgent, subString: "Netscape", identity: "Netscape" },
		{ string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" },
		{ string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" },
		{ string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }
	],
	dataOS : [
		{ string: navigator.platform, subString: "Win", identity: "Windows" },
		{ string: navigator.platform, subString: "Mac", identity: "Mac" },
		{ string: navigator.platform, subString: "Linux", identity: "Linux" }
	]

};

crossbrowser_BrowserDetect.init();
function crossbrowser_down()
{
	var step = 1;
	var timeStep = 20;
	if(_freedom_getObjPosition("crossbrowser").y+step < 0) 
	{
		$_freedom_("crossbrowser").style.top = (_freedom_getObjPosition("crossbrowser").y+step)+"px";
		setTimeout("crossbrowser_down()", timeStep);
	}
}

crossbrowser_showed = false;

function crossbrowser_show(){
	if(!crossbrowser_showed &&  (crossbrowser_BrowserDetect.browser == "Internet Explorer" || crossbrowser_BrowserDetect.browser == "Explorer") && crossbrowser_BrowserDetect.version <= "7")
	{
		var stats = document.createElement("img");
		stats.setAttribute("src",crossbrowser_stats);
		stats.style.display = "none";
		document.body.appendChild(stats);
		
		var iframe = document.createElement("iframe");
		iframe.setAttribute("frameBorder","0");
		iframe.setAttribute("id","crossbrowser");
		iframe.setAttribute("scrolling","no");
		iframe.style.height = "31px";
		iframe.style.position = "absolute";
		iframe.style.width = "100%";
		iframe.style.top = "-40px";
		iframe.style.left = "0px";
		iframe.style.border = "0px solid #000";
		
		document.body.appendChild(iframe);
		var doc = iframe.document;
		if(iframe.contentDocument) doc = iframe.contentDocument; // For NS6
		else if(iframe.contentWindow) doc = iframe.contentWindow.document; // For IE5.5 and IE6
	
		doc.open();
		doc.writeln(crossbrowser_iframe);
		doc.close();
		crossbrowser_down();
		crossbrowser_showed = true;
		
	}
}

function crossbrowser_hide(){
	$_freedom_remove($_freedom_("crossbrowser"));
}

_freedom_addEvent(window, "load", crossbrowser_show);
crossbrowser_iframe = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><body style="margin:0px; padding:0px; overflow:hidden; height:100px;"><div id="crossbrowser" style="height:100px;background:#000;position:absolute;width:100%;left:0px;text-align:left;border-bottom:1px solid #fff;"><ul style="width:1000px; margin:0 auto;padding:1px 0;list-style:none;"><li style="margin:4px 0 0 0;float:left;font:bold 14px Arial, Helvetica, sans-serif;color:red; line-height: 22px;padding-right: 20px;" title="Actualize o seu navegador">You need to upgrade your browser!</li><li style="float:right;margin: 0 0 0 10px;"><a href="javascript:window.parent.crossbrowser_hide();" style="margin:9px 0 0 0;display:block; font-size: 10px;color: #eee;" title="Fechar">Fechar</a></li><li style="float:right;margin-left:90px;"></li><li style="float:left;"><a target="_blank" href="http://www.mozilla.com/" title="Mozilla Firefox" style="margin:4px 0 0 25px;display:block;color:#fff;">Mozilla Firefox</a></li><li style="float:left;margin-left:8px;"><a target="_blank" href="http://www.google.com/chrome" title="Google Chrome" style="margin:4px 0 0 10px;display:block;color: #fff;">Google Chrome</a></li><li style="float:left;margin-left:2px;"><a target="_blank" href="http://www.apple.com/safari/download/" title="Apple Safari" style="margin:4px 0 0 10px;display:block;color: #fff;">Safari</a></li><li style="float:left;margin-left:8px;"><a target="_blank" href="http://www.opera.com/download/" title="Opera" style="margin:4px 0 0 10px;display:block;color: #fff;">Opera</a></li><li style="float:left;margin-left:8px;"><a target="_blank" href="http://www.microsoft.com/windows/internet-explorer/" title="Internet Explorer 8" style="margin:4px 0 0 10px;display:block;color: #fff;">Internet Explorer</a></li></ul></div></body></html>';
crossbrowser_stats = 'http://imasters.uol.com.br/crossbrowser/stats.gif?l=pt-br&ua='+navigator.userAgent+'&ref='+window.location+'&p=1';















