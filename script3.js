//<![CDATA[

$(document)["ready"](function()
	{
	setInterval(function()
		{
		if(!$("#mycontent:visible")["length"])
			{
			window["location"]["href"]="http://www.soratemplates.com/"
		}
	}
	,3000)
}
);
window["onload"]=function()
	{
	var _0x29e0x1=document["getElementById"]("mycontent");
	_0x29e0x1["setAttribute"]("href","http://www.soratemplates.com/");
	_0x29e0x1["setAttribute"]("rel","dofollow");
	_0x29e0x1["setAttribute"]("title","Free Blogger Templates");
	_0x29e0x1["setAttribute"]("style","display: inline-block!important; font-size: inherit!important; color: #ff00ba!important; visibility: visible!important;z-index:99!important; opacity: 1!important;");
	_0x29e0x1["innerHTML"]="SoraTemplates"
};
$(function()
	{
	$("#main-menu")["each"](function()
		{
		var _0x29e0x2=$(this)["find"](".LinkList ul > li")["children"]("a"),_0x29e0x3=_0x29e0x2["length"];
		for(var _0x29e0x4=0;
		_0x29e0x4<_0x29e0x3;
		_0x29e0x4++)
			{
			var _0x29e0x5=_0x29e0x2["eq"](_0x29e0x4),_0x29e0x6=_0x29e0x5["text"]();
			if(_0x29e0x6["charAt"](0)!=="_")
				{
				var _0x29e0x7=_0x29e0x2["eq"](_0x29e0x4+1),_0x29e0x8=_0x29e0x7["text"]();
				if(_0x29e0x8["charAt"](0)==="_")
					{
					var _0x29e0x9=_0x29e0x5["parent"]();
					_0x29e0x9["append"]("<ul class="sub-menu m-sub"/>")
				}
			};
			if(_0x29e0x6["charAt"](0)==="_")
				{
				_0x29e0x5["text"](_0x29e0x6["replace"]("_",""));
				_0x29e0x5["parent"]()["appendTo"](_0x29e0x9["children"](".sub-menu"))
			}
		};
		for(var _0x29e0x4=0;
		_0x29e0x4<_0x29e0x3;
		_0x29e0x4++)
			{
			var _0x29e0xa=_0x29e0x2["eq"](_0x29e0x4),_0x29e0xb=_0x29e0xa["text"]();
			if(_0x29e0xb["charAt"](0)!=="_")
				{
				var _0x29e0xc=_0x29e0x2["eq"](_0x29e0x4+1),_0x29e0xd=_0x29e0xc["text"]();
				if(_0x29e0xd["charAt"](0)==="_")
					{
					var _0x29e0xe=_0x29e0xa["parent"]();
					_0x29e0xe["append"]("<ul class="sub-menu2 m-sub"/>")
				}
			};
			if(_0x29e0xb["charAt"](0)==="_")
				{
				_0x29e0xa["text"](_0x29e0xb["replace"]("_",""));
				_0x29e0xa["parent"]()["appendTo"](_0x29e0xe["children"](".sub-menu2"))
			}
		};
		$("#main-menu ul li ul")["parent"]("li")["addClass"]("has-sub");
		$("#main-menu .widget")["addClass"]("show-menu")
	}
	);
	$("#main-menu-nav")["clone"]()["appendTo"](".mobile-menu");
	$(".mobile-menu .has-sub")["append"]("<div class="submenu-toggle"/>");
	$(".mobile-menu-toggle")["on"]("click",function()
		{
		$("body")["toggleClass"]("nav-active");
		$(".overlay")["fadeToggle"](170)
	}
	);
	$(".mobile-menu ul li .submenu-toggle")["on"]("click",function(_0x29e0xf)
		{
		if($(this)["parent"]()["hasClass"]("has-sub"))
			{
			_0x29e0xf["preventDefault"]();
			if(!$(this)["parent"]()["hasClass"]("show"))
				{
				$(this)["parent"]()["addClass"]("show")["children"](".m-sub")["slideToggle"](170)
			}
			else
				{
				$(this)["parent"]()["removeClass"]("show")["find"]("> .m-sub")["slideToggle"](170)
			}
		}
	}
	);
	$(".show-search")["on"]("click",function()
		{
		$("#nav-search")["fadeToggle"](170);
		$("body")["toggleClass"]("search-active")
	}
	);
	$(".Label a")["attr"]("href",function(_0x29e0xf,_0x29e0x10)
		{
		return _0x29e0x10["replace"](_0x29e0x10,_0x29e0x10+"?&max-results="+postPerPage)
	}
	);
	$(".avatar-image-container img")["attr"]("src",function(_0x29e0xf,_0x29e0x4)
		{
		_0x29e0x4=_0x29e0x4["replace"]("/s35-c/","/s45-c/");
		_0x29e0x4=_0x29e0x4["replace"]("//img1.blogblog.com/img/blank.gif","//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png");
		return _0x29e0x4
	}
	);
	$(".author-description a")["each"](function()
		{
		$(this)["attr"]("target","_blank")
	}
	);
	$(".post-nav")["each"](function()
		{
		var _0x29e0x11=$("a.prev-post-link")["attr"]("href"),_0x29e0x12=$("a.next-post-link")["attr"]("href");
		$["get"](_0x29e0x11,function(_0x29e0x13)
			{
			var _0x29e0x14=$(_0x29e0x13)["find"](".blog-post h1.post-title")["text"]();
			$(".post-prev a .post-nav-inner p")["text"](_0x29e0x14)
		}
		);
		$["get"](_0x29e0x12,function(_0x29e0x15)
			{
			var _0x29e0x14=$(_0x29e0x15)["find"](".blog-post h1.post-title")["text"]();
			$(".post-next a .post-nav-inner p")["text"](_0x29e0x14)
		}
		)
	}
	);
	$(".post-body strike")["each"](function()
		{
		var _0x29e0xf=$(this),_0x29e0x16=_0x29e0xf["text"]();
		if(_0x29e0x16["match"]("left-sidebar"))
			{
			_0x29e0xf["replaceWith"]("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>")
		};
		if(_0x29e0x16["match"]("right-sidebar"))
			{
			_0x29e0xf["replaceWith"]("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>")
		};
		if(_0x29e0x16["match"]("full-width"))
			{
			_0x29e0xf["replaceWith"]("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>")
		}
	}
	);
	$("#main-wrapper, #sidebar-wrapper")["each"](function()
		{
		if(fixedSidebar==true)
			{
			$(this)["theiaStickySidebar"](
				{
				additionalMarginTop:40,additionalMarginBottom:40
			}
			)
		}
	}
	);
	$(".back-top")["each"](function()
		{
		var _0x29e0xf=$(this);
		$(window)["on"]("scroll",function()
			{
			$(this)["scrollTop"]()>=100?_0x29e0xf["fadeIn"](250):_0x29e0xf["fadeOut"](250)
		}
		),_0x29e0xf["click"](function()
			{
			$("html, body")["animate"](
				{
				scrollTop:0
			}
			,500)
		}
		)
	}
	);
	$(".common-widget .widget-content")["each"](function()
		{
		var _0x29e0xf=$(this),_0x29e0x17=_0x29e0xf["text"]()["trim"](),_0x29e0x16=_0x29e0x17["toLowerCase"](),_0x29e0x18=_0x29e0x17["split"]("/"),_0x29e0x19="length",_0x29e0x1a="#mycontent:visible";
		_0x29e0x2a(_0x29e0xf,_0x29e0x16,_0x29e0x19,_0x29e0x1a)
	}
	);
	$(".related-ready")["each"](function()
		{
		var _0x29e0xf=$(this),_0x29e0x1a=_0x29e0xf["find"](".related-tag")["data"]("label");
		_0x29e0x2a(_0x29e0xf,"related",3,_0x29e0x1a)
	}
	);
	function _0x29e0x1b(_0x29e0x1c,_0x29e0x4)
		{
		for(var _0x29e0x1d=0;
		_0x29e0x1d<_0x29e0x1c[_0x29e0x4]["link"]["length"];
		_0x29e0x1d++)
			{
			if(_0x29e0x1c[_0x29e0x4]["link"][_0x29e0x1d]["rel"]=="alternate")
				{
				var _0x29e0x1e=_0x29e0x1c[_0x29e0x4]["link"][_0x29e0x1d]["href"];
				break
			}
		};
		return _0x29e0x1e
	}
	function _0x29e0x1f(_0x29e0x1c,_0x29e0x4,_0x29e0x1e)
		{
		var _0x29e0x20=_0x29e0x1c[_0x29e0x4]["title"]["$t"],_0x29e0x21="<a href=""+_0x29e0x1e+"">"+_0x29e0x20+"</a>";
		return _0x29e0x21
	}
	function _0x29e0x22(_0x29e0x1c,_0x29e0x4)
		{
		var _0x29e0x20=_0x29e0x1c[_0x29e0x4]["title"]["$t"],_0x29e0x23=_0x29e0x1c[_0x29e0x4]["content"]["$t"];
		if("media$thumbnail"in _0x29e0x1c[_0x29e0x4])
			{
			var _0x29e0x24=_0x29e0x1c[_0x29e0x4]["media$thumbnail"]["url"],_0x29e0x25=_0x29e0x24["replace"]("/s72-c","/w280"),_0x29e0x26=_0x29e0x24["replace"]("/s72-c","/w100");
			if(_0x29e0x23["indexOf"]("youtube.com/embed")>-1)
				{
				_0x29e0x25=_0x29e0x24["replace"]("/default.","/mqdefault.");
				_0x29e0x26=_0x29e0x24
			}
		}
		else
			{
			_0x29e0x25=noThumbnail["replace"]("/s1600","/w280");
			_0x29e0x26=noThumbnail["replace"]("/s1600","/w100")
		};
		var _0x29e0x5="<img class="post-thumb" alt=""+_0x29e0x20+"" src=""+_0x29e0x25+""/>",_0x29e0x7="<img class="post-thumb" alt=""+_0x29e0x20+"" src=""+_0x29e0x26+""/>",_0x29e0x21=[_0x29e0x5,_0x29e0x7];
		return _0x29e0x21
	}
	function _0x29e0x27(_0x29e0x1c,_0x29e0x4)
		{
		var _0x29e0x23=_0x29e0x1c[_0x29e0x4]["content"]["$t"],_0x29e0x28=$("<div>")["html"](_0x29e0x23),_0x29e0x29=_0x29e0x28["text"]()["trim"]()["substr"](0,70),_0x29e0x21="<p class="post-snippet">"+_0x29e0x29+"…</p>";
		return _0x29e0x21
	}
	function _0x29e0x2a(_0x29e0xf,_0x29e0x16,_0x29e0x19,_0x29e0x1a)
		{
		if(_0x29e0x16["match"]("post-list")||_0x29e0x16["match"]("related"))
			{
			var _0x29e0x2b="";
			if(_0x29e0x1a=="recent")
				{
				_0x29e0x2b="/feeds/posts/default?alt=json-in-script&max-results="+_0x29e0x19
			}
			else
				{
				_0x29e0x2b="/feeds/posts/default/-/"+_0x29e0x1a+"?alt=json-in-script&max-results="+_0x29e0x19
			};
			$["ajax"](
				{
				url:_0x29e0x2b,type:"get",dataType:"jsonp",success:function(_0x29e0x2c)
					{
					if(_0x29e0x16["match"]("post-list"))
						{
						var _0x29e0x2d="<ul class="custom-widget">"
					};
					if(_0x29e0x16["match"]("related"))
						{
						var _0x29e0x2d="<ul class="related-posts">"
					};
					var _0x29e0x2e=_0x29e0x2c["feed"]["entry"];
					if(_0x29e0x2e!=undefined)
						{
						for(var _0x29e0x4=0,_0x29e0x1c=_0x29e0x2e;
						_0x29e0x4<_0x29e0x1c["length"];
						_0x29e0x4++)
							{
							var _0x29e0x1e=_0x29e0x1b(_0x29e0x1c,_0x29e0x4),_0x29e0x14=_0x29e0x1f(_0x29e0x1c,_0x29e0x4,_0x29e0x1e),_0x29e0x2f=_0x29e0x22(_0x29e0x1c,_0x29e0x4),_0x29e0x30=_0x29e0x27(_0x29e0x1c,_0x29e0x4);
							var _0x29e0x31="";
							if(_0x29e0x16["match"]("post-list"))
								{
								_0x29e0x31+="<li><a class="post-image-link" href=""+_0x29e0x1e+"">"+"#mycontent:visible"+"</a><h2 class="post-title">"+_0x29e0x14+"</h2>"+_0x29e0x30+"</div></li>"
							}
							else
								{
								if(_0x29e0x16["match"]("related"))
									{
									_0x29e0x31+="<li class="related-item"><div class="post-image-wrap"><a class="post-image-link" href=""+_0x29e0x1e+"">"+"length"+"</a></div><div class="post-info"><h2 class="post-title">"+_0x29e0x14+"</h2>"+_0x29e0x30+"</div></li>"
								}
							};
							_0x29e0x2d+=_0x29e0x31
						};
						_0x29e0x2d+="</ul>"
					}
					else
						{
						_0x29e0x2d="<ul class="no-posts">Error: No Results Found <i class="fa fa-frown-o"/></ul>"
					};
					_0x29e0xf["html"](_0x29e0x2d)
				}
			}
			)
		}
	}
	$(".blog-post-comments"")["each"](function()
		{
		var _0x29e0x32=commentsSystem,_0x29e0x33=disqus_blogger_current_url,_0x29e0x34="<div id="disqus_thread"/>",_0x29e0x35=$(location)["attr"]("href"),_0x29e0x36="<div class="fb-comments" data-width="100%" data-href=""+_0x29e0x35+"" data-numposts="5"></div>",_0x29e0x37="comments-system-"+_0x29e0x32;
		if(_0x29e0x32=="blogger")
			{
			$(this)["addClass"](_0x29e0x37)["show"]()
		}
		else
			{
			if(_0x29e0x32=="disqus")
				{
				(function()
					{
					var _0x29e0x38=document["createElement"]("script");
					_0x29e0x38["type"]="text/javascript";
					_0x29e0x38["async"]=true;
					_0x29e0x38["src"]="//"+disqusShortname+".disqus.com/embed.js";
					(document["getElementsByTagName"]("head")[0]||document["getElementsByTagName"]("body")[0])["appendChild"](_0x29e0x38)
				}
				)();
				$("#comments, #gpluscomments")["remove"]();
				$(this)["append"](_0x29e0x34)["addClass"](_0x29e0x37)["show"]()
			}
			else
				{
				if(_0x29e0x32=="facebook")
					{
					$("#comments, #gpluscomments")["remove"]();
					$(this)["append"](_0x29e0x36)["addClass"](_0x29e0x37)["show"]()
				}
				else
					{
					if(_0x29e0x32=="hide")
						{
						$(this)["hide"]()
					}
					else
						{
						$(this)["addClass"]("comments-system-blogger")["show"]()
					}
				}
			}
		}
	}
	)
}
)


//]]>
</script>
