/*
Cache: isotope, jquery-lazy, thickbox, dt-main, dt-language, dt-main-op-jquery, dt-plugins, jquery-blockui, waypoints, vc_carousel_js, vc_transition_bootstrap_js, qfe_composer_front_js
*/
/* qfe_composer_front_js: (http://www.shengfenghe.com/qfy-content/plugins/qfy_editor/assets/js/qfy_editor_front.js) */
document.documentElement.className += ' js_active ';

document.documentElement.className += 'ontouchstart' in document.documentElement ? ' vc_mobile ' : ' vc_desktop ';

(function(){

    var prefix = ['-webkit-','-o-','-moz-','-ms-',""];

    for (var i in prefix) { if(prefix[i]+'transform' in document.documentElement.style) document.documentElement.className += " vc_transform "; }

})();





function image_lazy_event(){

	if(jQuery("[data-delay-image='1']").length>0){

		 jQuery("[data-delay-image='1']").lazy(

			        {

			        	effect:'fadeIn',

			            effectTime:400,

			            threshold: 800,

			        }

			);

	}

}

function hexToRgb(hex) {

	if(hex=="transparent") return "transparent";

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? {

        r: parseInt(result[1], 16),

        g: parseInt(result[2], 16),

        b: parseInt(result[3], 16)

    } : null;

}

function vc_js_init(){

	//bind slidercontent

	if(!is_edit_model) {

		if (jQuery(".qfy-element.qfy-slidercontent").length > 0 && jQuery("a[href^='qfylinked_']").length > 0) {

			jQuery("a[href^='qfylinked_']:not(.loaded)").each(function () {

				jQuery(this).addClass("loaded");

				var url = jQuery(this).attr("href");

				url = url.replace("%5E", "^").replace("%5E", "^");



				if (url.indexOf("^") > -1) {

					url = url.substr(10);

					var url_tmp = url.split("^");

					var uuid = url_tmp[0];

					var type = url_tmp[1];

					var to = url_tmp[2];



					if (uuid) {

						var obj = jQuery("[qfyuuid='" + uuid + "']>.royalSlider_gallery_new");

						if (obj.length > 0) {

							if (type == "1") {

								jQuery(this).click(function (e) {

									e.preventDefault();

									e.stopPropagation();

								}).mouseenter(function (e) {

									var slider = obj.data('royalSlider');

									slider.goTo(to - 1);

								});

							} else {

								jQuery(this).click(function (e) {

									e.preventDefault();

									e.stopPropagation();

									var slider = obj.data('royalSlider');

									slider.goTo(to - 1);

								});

							}

						}

					}

				}

			});



		}

		//

		if (jQuery(".qfy-element.qfe_gallery").length > 0 && jQuery("a[href^='qfyrelaed_']").length > 0) {

			jQuery("a[href^='qfyrelaed_']:not(.loaded)").each(function () {

				jQuery(this).addClass("loaded");

				var url = jQuery(this).attr("href");

				url = url.replace("%5E", "^").replace("%5E", "^");

				if (url.indexOf("^") > -1) {

					url = url.substr(10);

					var url_tmp = url.split("^");

					var uuid = url_tmp[0];

					var type = url_tmp[1];

					var to = url_tmp[2];



					if (uuid) {



						if (type == "1") {



							jQuery(this).click(function (e) {

								e.preventDefault();

								e.stopPropagation();

							}).mouseenter(function (e) {

								var obj = jQuery("[qfyuuid='" + uuid + "'] .royalSlider_gallery");

								if (obj.length > 0) {

									var slider = obj.data('royalSlider');

									slider.goTo(to - 1);

								} else if (jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").length > 0) {

									jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").flexslider(to - 1);

								} else if (jQuery("[qfyuuid='" + uuid + "'] .swiper-container").length > 0) {

									jQuery("[qfyuuid='" + uuid + "'] .swiper-container").data('swiper').slideTo(to);

								}

							});

						} else {

							jQuery(this).click(function (e) {

								e.preventDefault();

								e.stopPropagation();

								var obj = jQuery("[qfyuuid='" + uuid + "'] .royalSlider_gallery");

								if (obj.length > 0) {

									var slider = obj.data('royalSlider');

									slider.goTo(to - 1);

								} else if (jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").length > 0) {

									jQuery("[qfyuuid='" + uuid + "'] .qfe_flexslider").flexslider(to - 1);

								} else if (jQuery("[qfyuuid='" + uuid + "'] .swiper-container").length > 0) {



									jQuery("[qfyuuid='" + uuid + "'] .swiper-container").data('swiper').slideTo(to);

								}

							});

						}

					}

				}

			});



		}

	}



	// BEGIN

	if(jQuery(".swiper-container:not(.loaded)").length>0){

		 if(typeof jQuery.fn.Swiper=="undefined"){

			 jQuery.onDemandScript("/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.js",function() {

				 jQuery('head').append('<link href="/FeiEditor/bitSite/js/swiper/swiper-4.1.0.min.css" rel="stylesheet" type="text/css" />');

				 swiper_event();

			 })

		 }else{

			 swiper_event();

		 }

	}

	image_lazy_event();



	vc_3d_photo();

	lottieReady(jQuery);

	shape_ready();



	jQuery("#shopping-cart-bitcommerce .carsize:not(.pulse1)").addClass("pulse1");



	jQuery(".srollupdown:not(.load)").each(function(){

		jQuery(this).addClass("load");

		var all = jQuery(this).attr("data-scroll-all");

		var num = jQuery(this).attr("data-scroll-num");

		var speed = jQuery(this).attr("data-scroll-speed");

		var delay = jQuery(this).attr("data-scroll-delay");

		var slideBox = jQuery(this).find("ul:first");



		var allheight = slideBox.css("height").replace("px","")*1;



		var delay = delay||1000,speed = speed||20;

		var tid = null,pause = false;

		var s = function(){		slideBox.attr("style","overflow:hidden !important;height:"+allheight+"px;");slideBox.find("li").removeClass("displaynone");tid=setInterval(slide_scroll, speed); }

		var slide_scroll = function(){

			if(pause) return;

			slideBox.scrollTop(slideBox.scrollTop()+ 2);

			var scrolltop = slideBox.scrollTop();

			if(num>1){

				var first_height = 0;

				var marginbottom =  0;

				slideBox.find("li").each(function(i){

					if(i<num){

						first_height = first_height*1 +jQuery(this).css("height").replace("px","")*1;

						marginbottom =  marginbottom*1 +jQuery(this).css("margin-bottom").replace("px","")*1;

					}

				})

			}else{

				var first_height = slideBox.find("li:eq(0)").css("height").replace("px","");

				var marginbottom =  slideBox.find("li:eq(0)").css("margin-bottom").replace("px","");

			}

			if(scrolltop>=first_height*1+marginbottom*1){

				clearInterval(tid);

				if(num>1){

					slideBox.find("li").each(function(i){

						if(i<num){

							slideBox.append(slideBox.find("li")[0]);

						}

					})

				}else{

					slideBox.append(slideBox.find("li")[0]);

				}

				slideBox.scrollTop(0);

				setTimeout(s, delay);

				}

		}

		slideBox[0].onmouseover=function(){pause=true;}

		slideBox[0].onmouseout=function(){pause=false;}

		setTimeout(s, delay);

	});

	jQuery('.qfy_datatable_event:not(.loaded)').each(function(){

		$this = jQuery(this);

		if(typeof jQuery.fn.DataTable=="undefined"){

			jQuery.onDemandScript("/FeiEditor/bitSite/js/dataTables/jquery.dataTables.js",function() {

				 qfy_dataTable_event($this);

			 })

		}else{

			qfy_dataTable_event($this);

		}

	})

	jQuery(".opentip:not(.played)").each(function(){

		var $this = jQuery(this);

		var imageurl = jQuery(this).attr("op-image");

		if(imageurl&& imageurl.indexOf("http://")>-1){

			imageurl = imageurl.replace("http://","//");

		}

		var title = jQuery(this).attr("op-title");

		var data_pop = jQuery(this).attr("op-style");

		var titlealign = jQuery(this).attr("op-titlealign");

		var stylealign = jQuery(this).attr("op-stylealign");

		var tiptitle= "";

		var download = false;

		if(imageurl){



			tiptitle +="<img style='max-width:100%;' src='"+imageurl+"'  />";

		}

		if(title){

			tiptitle +="<div style='margin-top:5px;text-align:"+titlealign+"'>"+title+"</div>";

		}

		if(stylealign){

			var data = { tipJoint:stylealign, fixed:true,style: data_pop };

		}else{

			var data = { style: data_pop };

		}

		if(imageurl){

			jQuery("<img />").attr("src", imageurl).load(function(){

				setTimeout(function(){new Opentip( $this, tiptitle, data);},1500);

			})

			$this.addClass("played");



		}else{

			new Opentip( $this, tiptitle, data);

			$this.addClass("played");

		}

	})





	if(	jQuery('.qfy-jiathis').length>0){

		if(typeof jQuery.fn.share !="function"){

			 jQuery.onDemandScript("/FeiEditor/bitSite/js/share/jquery.share.min.js",function() {

				 jQuery('head').append('<link href="/FeiEditor/bitSite/js/share/css/share.min.css" rel="stylesheet" type="text/css" />');

				 jQuery('.qfy-jiathis .share').share();

			 })

		}else{

			 jQuery('.qfy-jiathis .share').share();

		}

	}



	var video_len = jQuery('.video.preload:not(.played)').length;

	if(video_len>0){

		jQuery('.video.preload:not(.played)').each(function(){

			if(jQuery("body").width()<760 && video_len==1 ){

				jQuery(this).addClass("played").attr("src",jQuery(this).attr("data-src"));

			}else{

				jQuery(this).waypoint({

					handler: function(direction) {

						jQuery(this).addClass("played").attr("src",jQuery(this).attr("data-src"));

					},

					triggerOnce: true,

					offset: "95%",

				})

			}

		})

	}







	vc_royalSlider_gallery_init();



	if(!is_edit_model){

		accordioncontent();

	}

	if( jQuery('.qfy-accordioncontent').length>0){

		if(typeof accordioncontent_init !="function"){

			jQuery.onDemandScript("js/a-accord.js",function() {

				accordioncontent_init();

			});

		}else{

			accordioncontent_init();

		}

	}





	jQuery( ".dl-qfymobile-menu:not(.loaded)" ).each(function(){

		var backCap = jQuery(this).find(".menu-back").html();

		jQuery(this).find(".children.dl-submenu").prepend("<li class='menu-item dl-back'><a href='#'><span>"+backCap+"</a></li>");

		jQuery(this).addClass("loaded").dlmenu();

	})



   if(!is_edit_model){

		jQuery( ".background-media.mediagallery:not(.loaded)" ).each(function(){

			var $this = jQuery(this);

			jQuery(this).addClass("loaded On");

			var imagebgs = jQuery(this).attr("data-imagebgs");



			var imagebgs_arr = imagebgs.split("|^|");

			var imagebgs_count = imagebgs_arr.length;

			var imagebgs_current = 0;

			var time =  jQuery(this).attr("data-time")?jQuery(this).attr("data-time"):3;

			var thishtml = $this.prop("outerHTML");

			var tmp = "";

			for(var i=0;i<imagebgs_count-1;i++){

				$this.before(thishtml);

				$this.prev().css({'opacity':'0','background-image': 'url('+imagebgs_arr[i]+')'}).removeAttr("data-imagebgs").removeClass("On");

			}

			var p =  jQuery(this).parent();

			setInterval(function(){

				if(p.attr("id")){

					imagebgs_current = p.find(".background-media.On").index('#'+p.attr("id")+'>.background-media');

				}else{

					var p_class= p.attr("class");

					var tmpclass = p_class.split(" ");

					var currclass = "";

					for(var i =0;i<tmpclass.length;i++){

						if(tmpclass[i].indexOf("qfy-row")>-1){

							currclass = tmpclass[i];

						}

					}

					if(currclass){

						imagebgs_current = p.find(".background-media.On").index('.'+currclass+' .background-media');

					}else{

						imagebgs_current = p.find(".background-media.On").index('.background-media');

					}

				}

				p.find(".background-media.On").removeClass("On").css({'opacity':'0'})

				if(imagebgs_current==imagebgs_count-1){

					p.find(".background-media:eq(0)").addClass("On").css({'opacity':'1'});

				}else{

					p.find(".background-media:eq("+(imagebgs_current+1)+")").addClass("On").css({'opacity':'1'});

				}

			},time*1000);



		})



	     if(jQuery(".qfy-comments .commentlist:hidden").length>0){

			jQuery(".qfy-comments").each(function(){



				var p = jQuery(this);

				if(p.find(".commentlist:visible").length>0) return;

				var loadhtml = "<div class='commentlist_loading' style='text-align:center;height:30px;margin:15px auto;' ><img src='/qfy-content/plugins/qfbook/templates/default/images/loader.gif' /></div>";

				p.find(".commentlist").after(loadhtml);



				var form =p.find("form#commentform");

				var comment_post_ID = form.find("#comment_post_ID").val();

				var url  = form.attr("action");



				jQuery.post(url,{action:"search",comment_post_ID:comment_post_ID,short_atts:p.attr("data-atts")},function(data){

					if(data.indexOf("success")>-1){



						var tmp = data.split('|<result>|');

						var commentlist = $(tmp).find(".commentlist");

						p.find(".commentlist").html(commentlist.html());

					}

					p.find(".commentlist").show();

					p.find(".commentlist_loading").remove();

				})



			})

		}

	}

	if(typeof qfy_canvas_animale_run=="function"){

		qfy_canvas_animale_run();

	}

	var objs = jQuery(".qfy-icons_list .qfy-icon");

	objs.each(function(){

		var obj = jQuery(this);

		var name = obj.attr("data-desc");

		var bg = obj.attr("data-bg");

		var bgstyle= "";

		if(bg ){

			bgstyle = "background:"+bg+";margin:-20px;padding:20px;";

		}

		var image = obj.attr("data-image");

		var tj = obj.attr("data-tj")=="0"?"top":"bottom";

		var ta = obj.attr("data-ta");

		var width = obj.attr("data-width");

		var align="left";

		if(ta=="1") align="right";

		else if(ta=="2") align="center";

		obj.attr("title", '');

		var text = "";

		if(name){

			text ="<div style='text-align:"+align+";'>"+base64_decode(name)+"</div>";

		}

		if(image){

			if(width){

				var title ="<div style='width:"+width+"px;text-align:center;"+bgstyle+"'><img src='"+image+"' style='max-width:100%;' /><div style='word-break: break-all;'>"+text+"</div></div>";

			}else{

				var title ="<div style='text-align:center; "+bgstyle+" '><img src='"+image+"' width='160' style='max-width:100%;' /><div style='word-break: break-all;'>"+text+"</div></div>";

			}

			var img = new Image();

	        img.onload = img.onerror =function() {

	        	var data = { tipJoint: tj,style: "dark" };

				setTimeout(function(){

						new Opentip(obj, title, data);



					},300);





	        };

	        img.src = image;



		}else if(text){

			if(width){

				var last = "<div style='width:"+width+"px;word-break: break-all;"+bgstyle+"'>"+text+"</div>";

			}else{

				var last = "<div style='word-break: break-all;"+bgstyle+"'>"+text+"</div>";

			}



			var data = { tipJoint: tj,style: "dark" };

			new Opentip(obj, last, data);



		}





	})

	jQuery(".qfyvideo").unbind().mouseenter(function(){

		 if(! jQuery(this).parent().hasClass("list_popup")){

			 jQuery(this).get(0).play();

		 }

     }).mouseleave(function(){

    	 if(! jQuery(this).parent().hasClass("list_popup")){

	    	 if(jQuery(this).get(0).currentTime>0){

	    		 jQuery(this).get(0).load();

	    	 }

    	 }

     })





	 jQuery('[data-ride="vc-carousel"]').each(function(){

				qfy_carousel_fun(jQuery(this))

		})

	jQuery(".qfy_scroll_box:not(.load)").each(function(){

		jQuery(this).addClass("load");

		var box = jQuery(this).attr("id");

		var delay = jQuery(this).attr("data-delay");

		var speed = jQuery(this).attr("data-speed");

		var h = jQuery(this).attr("data-h");

		slideLine(box,"div",delay,speed,h);

	});

	if(!is_edit_model){

		jQuery("a[href^='qfy_notice']").each(function(){

			var id = jQuery(this).attr("href");

			jQuery(this).attr("data-href",id);

			jQuery(this).removeAttr("href");

			jQuery(this).unbind().click(function(e){

				e.preventDefault();

				e.stopPropagation();



				if(jQuery("#"+id).length>0){

					notice_pre_event("#"+id+" .notice_warp","preview");

				}

			})

		});

	}else{

		jQuery("a[href^='qfy_notice']").unbind().click(function(e){

			 e.preventDefault();

			 e.stopPropagation();

			 var id = jQuery(this).attr("href");

			 if(jQuery("#"+id).length>0){

				 notice_pre_event("#"+id+" .notice_warp","preview");

			 }

		})

	}



	jQuery(".qfyanimate:not(.qfyanimated)").each(function(){

		var animaleinbegin =  jQuery(this).attr("data-animaleinbegin");

		if(!animaleinbegin) animaleinbegin = "bottom-in-view";

 		jQuery(this).waypoint({

			handler: function(direction) {

				var delay = jQuery(this).attr("data-delay");

				var duration = jQuery(this).attr("data-duration");

				if(delay===""){

					// 列使用

					if(jQuery(this).hasClass("qfy-column-inner")){

						delay = jQuery(this).index()*0.1/2;

					}

				}

				var animalename = jQuery(this).attr("data-animalename");

				if(duration){

					jQuery(this).css("animation-duration",duration+"s");

				}

				jQuery(this).css("animation-delay",delay+"s").css("animation-name",animalename).css("visibility","visible");

				jQuery(this).addClass("qfyanimated");

			},

			triggerOnce: true,

			offset: animaleinbegin,

		})

	})

	jQuery(".clippathanimate:not(.clippathanimated)").each(function(){



		jQuery(this).waypoint({

			handler: function(direction) {

				jQuery(this).addClass("clippathanimated");

			},

			offset: "bottom-in-view",

		})

	});



	if( jQuery(".auto_tab_menu").length>0){

		jQuery(".auto_tab_menu").each(function(){

			auto_tab_menu(jQuery(this));

		});

	}



	typed_event();



	prenext_event();

	// END

}

function vc_js_init2(){

	 // console.trace();

	 init_usermange_detail();

	  vc_slidersBehaviour();

	  vc_waypoints();

	  vc_teaserGrid();

	  vc_carouselBehaviour();

	  vc_plugin_flexslider();

	  resizefullpageheader();

	  bitLibLayout();

	  bit_circliful();

	  bit_counter();

	  bit_counterdown();

	  bit_newgallery();

	  qfy_jplayer_init();

	  bit_myaccountLayout();

	  bit_qfbook();

	  bit_qfbookform();

	  setTimeout(function(){  bit_reloadiframevideo();},1000);

}

var is_edit_model = false;

try{

	if( parent.jQuery("#vc-inline-frame").length==1 ){

		is_edit_model = true;

	}

}catch(e){

}

jQuery(document).ready(function($) {



  if(!is_edit_model){

	  vc_js_init();

	  vc_js_init2();

  }

  jQuery(document).click(function(e) {

	 if(jQuery("body.clicktoaddmodel").length>0){

		 var target = jQuery(e.target);

		 if(target.closest(".vc-element.vc-vc_row").length==0){

			jAlert("亲，您点在了不能插入区块的地方。请选择内容区域的一个区块。");

			return false;

		 }

	 }

  });



}); // END jQuery(document).ready

jQuery(window).resize(function() {

	 // 手机上滚动会触发这个resize

	 var body_width = jQuery("body").width();

	 if(body_width>768){

		 bitLibLayout();

	 }

	 var maxwidth = 0;

	 jQuery(".qfe_gallery .qfe_gallery_slides").find('img').each(function(){

		if(jQuery(this).width()>maxwidth){

			maxwidth = jQuery(this).width();

		}

	 })

	 if(maxwidth>body_width) {

		 vc_plugin_flexslider();

	 }

});

jQuery(window).on("debouncedresize", function() {

		jQuery(".ts-circliful-counter").each(function() {

			if ("true" == jQuery(this).attr("data-responsive")) {

				var t = jQuery(this),

					e = parseInt(jQuery(this).parent().width()),

					a = parseInt(jQuery(this).attr("data-size"));

				e != a && (t.empty(), t.circliful())

			}

		})

});

function resizefullpageheader(){

	if(jQuery(".bit-html .fullscreenpage.fullpage_layout2").length>0||jQuery(".bit-html .fullscreenpage.fullpage_layout3").length>0||jQuery(".bit-html .fullscreenpage.fullpage_layout4").length>0){

		jQuery(".bit-html .fullscreenpage #fullscreenheader").css("margin-top","-"+(jQuery(".bit-html .fullscreenpage #fullscreenheader").height()/2)+"px");

	}

}

function typed_event(){

	if(jQuery(".qfy-simple_header:not(.loaded)").length==0) return;

	if(typeof Typed!="function"){

		 jQuery.onDemandScript("/FeiEditor/bitSite/js/typed.min.js",function() {

			 _typed_event();

		 })

	 }else{

		 _typed_event();

	 }

}

function prenext_event(){

	var lrmiddlelayout = jQuery(".lrmiddlelayout:first:not(.loaded)");

	 var body_width = jQuery("body").width();



	if(lrmiddlelayout.length>0 ){



		lrmiddlelayout.addClass("loaded");

		 jQuery(".lrmiddlelayout.wrap").remove();

		var pre_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;left:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';

		pre_html += lrmiddlelayout.find(".pre_inner").prop("outerHTML");

		pre_html += '</div></div>';

		var next_html = '<div class="lrmiddlelayout wrap" style="position: fixed;top:35%;right:0px;z-index:4;display:table;"><div class="prenext_inner" style="width:auto;">';

		next_html += lrmiddlelayout.find(".next_inner.first").prop("outerHTML");

		next_html += '</div></div>';

		if(lrmiddlelayout.hasClass("mobileHidden") && body_width<768){



		}else if(lrmiddlelayout.hasClass("desktopHidden") && body_width>768){



		}else{

			jQuery("body").append(pre_html+next_html);

		}

	}

	if( jQuery(".lrmiddlelayout").length==0){

		jQuery(".lrmiddlelayout.wrap").remove();

	}

}

function bit_circliful(obj){



	if( "undefined" != typeof obj ){

		obj = obj.find(".ts-circliful-counter:not(.loaded)");

	}else{

		obj	= jQuery(".ts-circliful-counter:not(.loaded)");

	}

	if(obj.length==0) return;

	if(typeof jQuery.fn.circliful=="undefined"){

		jQuery.onDemandScript("/qfy-content/plugins/qfy_editor/js/jquery.circliful.min.js",function() {

			_bit_circliful(obj);

		 })

	}else{

		_bit_circliful(obj);

	}



}

function _bit_circliful(obj){

	"undefined" != typeof jQuery.fn.waypoint && "undefined" != typeof jQuery.fn.circliful && obj.each(function() {

		jQuery(this).bind("inview", function(t, e, a, i) {

			if (e) {

				var r = jQuery(this);

				"top" == i || "bottom" == i || r.addClass("ts-circliful-visible")

			} else {

				var r = jQuery(this);

				r.removeClass("ts-circliful-visible")

			}

		})



		jQuery(this).addClass("loaded").circliful();



	});

}

function formatNumber(s,o){

	 s = s+"";

	 if(/[^0-9\.]/.test(s)) return false;

        s=s.replace(/^(\d*)$/,"$1.");

        s=s.replace(".",o);

        var re=/(\d)(\d{3},)/;

        while(re.test(s))

                s=s.replace(re,"$1,$2");

        s=s.replace(/,(\d\d)$/,".$1");

		s=s.substring(0,s.length-1);

        return s;

}

function bit_counter(obj){

	if( "undefined" != typeof obj ){

		obj = obj.find(".ts-icon-counter");

		if(obj.length==0) return false;

	}else{

		obj	= jQuery(".ts-icon-counter");

	}

	if(obj.length==0) return;

	 if(typeof jQuery.fn.countTo=="undefined"){

		 jQuery.onDemandScript("/qfy-content/plugins/qfy_editor/js/jquery.countto.min.js",function() {

			 _bit_counter(obj);

		 })

	 }else{

		 _bit_counter(obj);

	 }

}

function bit_newgallery(obj){

	if( "undefined" != typeof obj ){

		obj = obj.find(".royalSlider_gallery");

		if(obj.length==0) return false;

	}else{

		obj	= jQuery(".royalSlider_gallery");

	}

	 if(obj.length==0) return;

	 if(typeof jQuery.fn.royalSlider=="undefined"){

		 jQuery.onDemandScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js",function() {

			 _bit_newgallery(obj);

		 })

	 }else{

		 _bit_newgallery(obj);

	 }

}

function fullscreenclick(obj){

	jQuery(obj).closest(".royalSlider_gallery").find(".rsFullscreenIcn").click();

}

function bit_myaccountLayout(){

	var defaultindex=getCookie("qfy_order_index");



	if(jQuery(".qfy_account.tablayout").length>0 && jQuery(".qfy_account.tablayout.ontab").length==0){

		jQuery(".qfy_account > .bitcommerce").append('<div class="bitcommerce-tabs tabbed-content bitcommerce-tabs-info" style="min-height:500px;"><ul class="tabs"></ul></div>	');



		jQuery(".qfy_account .my_account_orders_h2").each(function(i){

			var name = jQuery(this);

			var content = jQuery(this).next();

			if(content.hasClass("my_account_orders_h2")||content.hasClass("bitcommerce-tabs-info")||content.length==0){

				content_html = '<div style="min-height:400px;"></div>';

			}else{

				content_html = content.prop('outerHTML');

				content.remove();

			}

			jQuery( '.bitcommerce-tabs-info ul.tabs' ).append('<li class="description_tab active"><a href="#tab-info-'+i+'" class="no-opennew">'+name.text()+'</a></li>');

			jQuery( '.bitcommerce-tabs-info ul.tabs' ).after('<div style="word-break: break-all; display: block;" id="tab-info-'+i+'" class="panel entry-content">'+content_html+'</div>');

			name.remove();



		});

		jQuery(".qfy_account.tablayout").addClass("ontab");

		var titlesize = jQuery(".qfy_account.tablayout").attr("data-size");

		if(titlesize){

			jQuery( '.bitcommerce-tabs-info ul.tabs li a' ).css("font-size",titlesize+"px");

		}

		jQuery( '.bitcommerce_account_subscriptions').hide();

		jQuery( '.bitcommerce-tabs-info .panel' ).hide();

		jQuery( '.bitcommerce-tabs-info ul.tabs li a' ).click( function() {



			var $tab = jQuery( this ),

				$tabs_wrapper = $tab.closest( '.bitcommerce-tabs-info' );



			jQuery( 'ul.tabs li', $tabs_wrapper ).removeClass( 'active' );

			jQuery( 'div.panel', $tabs_wrapper ).hide();

			jQuery( 'div' + $tab.attr( 'href' ), $tabs_wrapper).show();

			$tab.parent().addClass( 'active' );

			var index = $tab.parent().index();

			qfy_setCookie("qfy_order_index",index);

			return false;

		});

		if(defaultindex>0){

			jQuery( '.bitcommerce-tabs-info ul.tabs li:eq('+defaultindex+') a' ).click();

		}else{

			jQuery( '.bitcommerce-tabs-info ul.tabs li:first a').click();

		}

	}



}

function bit_qfbook(){

	setTimeout(function(){

		jQuery(".QFBOOKCalendar-text-message").each(function(){

			var $this = jQuery(this);

			var id = $this.attr("id");

			var val = $this.val();

			jQuery("#QFBOOKCalendar"+id).QFBOOKCalendar(jQuery.parseJSON(val));



		})

		jQuery(".QFBOOKCalendar-search-message").each(function(){

			var $this = jQuery(this);

			var id = $this.attr("id");

			var val = $this.val();

			jQuery(".QFBOOKSearch-wrapper"+id).QFBOOKSearch(jQuery.parseJSON(val));



		})

	},500)

}

function bit_qfbookform(){

	if(jQuery('#QFBOOKSearch-check-in-input').length>0){

		jQuery('#QFBOOKSearch-check-in-input').datepicker({minDate: new Date(), onSelect:function(dateText,inst){

	       jQuery("#QFBOOKSearch-check-out-input").datepicker("option","minDate",dateText);

	    }});

	}

	if(jQuery('#QFBOOKSearch-check-out-input').length>0){

	    jQuery('#QFBOOKSearch-check-out-input').datepicker({minDate: new Date(), onSelect:function(dateText,inst){

	       jQuery("#QFBOOKSearch-check-in-input").datepicker("option","maxDate",dateText);

	    }});

	}

}

function bit_reloadiframevideo(time){

	if(jQuery("div.ts_html5_video_frame_insert").length>0){

		jQuery("div.ts_html5_video_frame_insert").each(function(){

			var $this = jQuery(this);

			var auto_play = $this.attr("data-auto-play");

			if(auto_play=="true") {

				$this = $this.changeTag("iframe");

			}else if(auto_play=="2"){

				$this.parent().mouseenter(function(){

					$this.changeTag("iframe").attr("data-auto-play","true");

				});

			}else if(auto_play=="3"){

				$this.waypoint(function () {

					$this.changeTag("iframe").attr("data-auto-play","true");

				}, {offset: '85%'});

			}else{

				$this.unbind().click(function(){

					$this.changeTag("iframe").attr("data-auto-play","true");

				})

			}

		})

	}

	if(jQuery(".ts_html5_video_frame .video-box video.visible_play").length>0){

		jQuery(".ts_html5_video_frame .video-box video.visible_play").each(function(){

			var video = jQuery(this).get(0);

			jQuery(this).waypoint(function () {

				if (video.paused === false) {

					video.pause();

				} else {

					video.play();

				}

			}, {offset: '85%'});

		});

	}

}

function qfy_jplayer_init(){

	 if( jQuery(".vc_jplayer_container:not(.played)").length==0) return;

	 if(typeof jQuery.fn.videoPlayer=="undefined"){

			 jQuery.when(

				 jQuery.getScript( "/FeiEditor/bitSite/js/jsplayer/jplayer/jquery.jplayer.min.js" ),

				 jQuery.getScript( "/FeiEditor/bitSite/js/jsplayer/jplayer/jplayer.cleanskin.js" ),

				 jQuery.Deferred(function( deferred ){

					 jQuery( deferred.resolve );

			    })

			).done(function(){

				 _qfy_jplayer_init();

			});



	 }else{

		 _qfy_jplayer_init();

	 }



}

function _qfy_jplayer_init(){

	// 音频

	jQuery(".vc_jplayer_container:not(.played)").each(function(){

		var title = jQuery.trim(jQuery(this).find(">.audio-info").html());

		var mp3 = jQuery(this).find(">.audio-info").attr("data-mp3");

		var autoplay =  jQuery(this).find(">.audio-info").attr("data-auto");

		if(autoplay!=1) autoplay=null;

		var loop =  jQuery(this).find(">.audio-info").attr("data-loop");

		if(loop==1){loop=true;}else{loop=false;};

		jQuery(this).find('>.webPlayer').videoPlayer({

				"name": title,

				"autoplay":autoplay,

				"keyEnabled":false,

				"loop":loop,

				"swfPath":"/FeiEditor/bitSite/js/jsplayer/jplayer",

				"size": {"width": "100%",},

				"media": {"mp3": mp3}

				});

		jQuery(this).addClass("played");

	})

}

function bit_counterdown(){

	 if(jQuery(".ts-countdown-parent").length==0) return;

	 if(typeof jQuery.fn.countEverest=="undefined"){

		 jQuery.onDemandScript("/FeiEditor/bitSite/js/jquery.vcsc.counteverest.min.js",function() {

			 jQuery('head').append('<link href="/FeiEditor/bitSite/css/jquery.vcsc.counteverest.min.css" rel="stylesheet" type="text/css" />');

			 _bit_counterdown();

		 })

	 }else{

		 _bit_counterdown();

	 }

}



function bitLibLayout(obj){

   jQuery(".old-ie [backgroundSize='true']").css({backgroundSize: "cover"});



   if (typeof obj === 'undefined') {

		obj = jQuery(".qfe_images_lib_isotope")

   }



   obj.each(function () {

	   var current_obj = jQuery(this);

	   var curr_action = current_obj.attr("data-liblayout");

	   var filter = jQuery(this).parent().find(".isotope_image");

	   filter.each(function(){

			jQuery(this).unbind("click").bind("click",function(){

				 var f = jQuery(this).attr("data-filter");

				 var c = jQuery(this).closest(".vcgroup").attr("data-color");

				 var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");

				 filter.removeClass("on");

				 filter.css("color",c);

				 jQuery(this).addClass("on");

				 jQuery(this).css("color",hc);

				if(curr_action=="" || curr_action=="undefined"){

					current_obj.find(">.vc-item").hide();

					current_obj.find(f).show();

				}else{



				   current_obj.isotope({

					filter: f

				   });

				}

		   }).bind("mouseover",function(){

				 var hc = jQuery(this).closest(".vcgroup").attr("data-hovercolor");

				 if( !jQuery(this).hasClass("on")){

					jQuery(this).css("color",hc);

				 }



		   }).bind("mouseout",function(){

				 var c = jQuery(this).closest(".vcgroup").attr("data-color");

				 if( !jQuery(this).hasClass("on")){

					jQuery(this).css("color",c);

				 }



		   })

	   });

   });



	if(typeof jQuery.fn.isotope!="undefined") {

		var action = obj.attr("data-liblayout");

		var columnWidth = obj.attr("data-width");



		if (obj.length == 0 || action == "" || action == "undefined") {

			return false;

		}

		obj.isotope({

			itemSelector: '.vc-item',

			layoutMode: action,

			filter: ".images,.templates"



		});



		var all_load = true;



		obj.find('img').each(function () {

			if (!jQuery(this).prop('complete')) {

				all_load = false;

			}

		});



		if (!all_load) {

			window.setTimeout(function () {

				bitLibLayout(obj);

			}, 500);

			return;

		}

		obj.isotope("reLayout");

	}

}





if ( typeof window['vc_plugin_flexslider'] !== 'function' ) {

	function vc_plugin_flexslider() {

		if (jQuery('.qfe_flexslider').length == 0) return;

		if (typeof jQuery.fn.flexslider == "undefined") {

			jQuery.onDemandScript("/qfy-content/plugins/qfy_editor/assets/lib/flexslider/jquery.flexslider-min.js",function () {

				jQuery('head').append('<link href="/qfy-content/plugins/qfy_editor/assets/lib/flexslider/flexslider.css" rel="stylesheet" type="text/css" />');

				_vc_plugin_flexslider();

			})

		} else {

			_vc_plugin_flexslider();

		}

	}

}

function qfy_carousel_fun($carousel) {



	var is_carousel_ok = true;

	$carousel.find('img').each(function () {

		if (!jQuery(this).prop('complete')) {

			is_carousel_ok = false;

		}



	})

	if (!is_carousel_ok) {

		window.setTimeout(function () {

			qfy_carousel_fun($carousel);

		}, 500);

		return;

	}



	$carousel.carousel($carousel.data());

}





/*

 * Waypoints magic ----------------------------------------------------------

 */

if (typeof window['vc_waypoints'] !== 'function') {

	function qfe_animate_fun($this) {



		var p = jQuery($this).closest(".qfy-element");

		var delay = p.attr("css_animation_delay");

		var anitime = p.attr("data-anitime");

		var anilength = p.attr("data-anilength");

		var iteration_count = p.attr("data-ani_iteration_count");

		if (anitime && anitime > 0) {

			jQuery($this).css("animation-duration", anitime + "s");

			jQuery($this).css("-webkit-animation-duration", anitime + "s");

		}

		jQuery($this).removeClass("anlength1 anlength2");

		if (anilength && anilength != 0) {

			jQuery($this).addClass(anilength);

		}

		if (iteration_count == "-1") {

			jQuery($this).css("animation-iteration-count", "infinite");

		} else if (iteration_count > 0) {

			jQuery($this).css("animation-iteration-count", iteration_count);

		}

		if (delay) {

			//出现这里需要

			setTimeout(function () {

				jQuery($this).addClass('qsa');

			}, delay * 1000);

		} else {

			if (jQuery($this).hasClass("delay1")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 1000);

			} else if (jQuery($this).hasClass("delay0.5")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 500);

			} else if (jQuery($this).hasClass("delay1.5")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 1500);

			} else if (jQuery($this).hasClass("delay2")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 2000);

			} else if (jQuery($this).hasClass("delay3")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 3000);

			} else if (jQuery($this).hasClass("delay4")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 4000);

			} else if (jQuery($this).hasClass("delay5")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 5000);

			} else if (jQuery($this).hasClass("delay6")) {

				setTimeout(function () {

					jQuery($this).addClass('qsa');

				}, 6000);

			} else {

				jQuery($this).addClass('qsa');

			}

		}



	}



	function qfe_animate_fun_new($this, type) {



		var p = jQuery($this).closest(".qfy-element");

		var delay = p.attr("data-anidelay_" + type);

		var anitime = p.attr("data-anitime_" + type);

		var anilength = p.attr("data-anilength_" + type);

		var iteration_count = p.attr("data-ani_iteration_count_" + type);



		if (anitime && anitime > 0) {

			jQuery($this).css("animation-duration", anitime + "s");

			jQuery($this).css("-webkit-animation-duration", anitime + "s");

		}

		jQuery($this).removeClass("anlength1 anlength2");

		if (anilength && anilength != 0) {

			jQuery($this).addClass(anilength);

		}



		if (delay) {

			jQuery($this).css("animation-delay", delay + "s");

			jQuery($this).css("-webkit-animation-delay", delay + "s");

		}

		if (iteration_count == "-1") {

			jQuery($this).css("animation-iteration-count", "infinite");

		} else if (iteration_count > 0) {

			jQuery($this).css("animation-iteration-count", iteration_count);

		}



	}



	var qfy_animateEvent_start = function () {

		var el = document.createElement('div');

		var map = {

			animation: 'animationstart',

			MozAnimation: 'animationstart',

			WebkitAnimation: 'webkitAnimationStart'

		};



		for (var name in map) {

			if (el.style[name] !== undefined) {

				return map[name];

			}

		}

	}();

	var qfy_animateEvent_end = function () {

		var el = document.createElement('div');

		var map = {

			animation: 'animationend',

			MozAnimation: 'animationend',

			WebkitAnimation: 'webkitAnimationEnd'

		};



		for (var name in map) {

			if (el.style[name] !== undefined) {

				return map[name];

			}

		}

	}();



	function qfy_animate_out($this) {

		var outs = new Array("qfe_ttbout", "qfe_ttbout-1", "qfe_ttbout-2", "qfe_bttout", "qfe_bttout-1", "qfe_bttout-2", "qfe_ltrout", "qfe_ltrout-1", "qfe_ltrout-2", "qfe_rtlout", "qfe_rtlout-1", "qfe_rtlout-2", "SlideOutDown", "SlideOutLeft", "SlideOutRight", "popOut", "popOutUp", "popOutDown", "popOutLeft", "popOutRight", "fadeOut", "fadeOutUp", "fadeOutDown", "fadeOutLeft", "fadeOutRight", "zoomOut", "zoomOutUp", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "flipOutX", "flipOutY", "hinge", "rotateOut");

		jQuery($this)[0].addEventListener(qfy_animateEvent_end, function (e) {

			if (jQuery.inArray(e.animationName, outs) > -1) {

				jQuery($this).addClass("anihide");

			}

		}, false);

	}



	function vc_waypoints() {



		if (typeof resetSectionHeight !== 'undefined') resetSectionHeight();

		if (typeof jQuery.fn.waypoint !== 'undefined') {

			jQuery('.qfe_animate_when_almost_visible:not(.qsa)').waypoint(function () {

				if (jQuery(this).hasClass("qfe_tohide")) {

					if (!is_edit_model) {

						jQuery(this).closest(".qfy-element").addClass("anihide");

					}

					jQuery(this).addClass('qsa');



				} else {

					qfe_animate_fun(this);

					if (!is_edit_model) {

						qfy_animate_out(this);

					}

				}

			}, {offset: '85%'});



		}

		jQuery("[data-ani_c]").each(function () {



			var to = jQuery(this).attr("data-ani_c_element");

			var c_fun = function ($this) {

				if (jQuery($this).attr("data-ani_c") == "tohide") {

					if (!is_edit_model) {

						jQuery($this).addClass("anihide");

					}

					return;

				}

				jQuery($this).addClass("qfe_" + jQuery($this).attr("data-ani_c") + "_c");

				qfe_animate_fun_new($this, "c");

				jQuery($this).removeClass('qsa qsa_c qsa_h qsa_l');

				setTimeout(function () {

					jQuery($this).addClass("qsa_c").removeClass("anihide");

				}, 30);

			};

			var $this = this;

			if (to) {

				if (jQuery($this).parent().hasClass("bitWidgetFrame")) {

					jQuery('#' + to).click(function () {

						c_fun($this);



					});

				} else {

					jQuery('[qfyuuid="' + to + '"]').click(function () {

						c_fun($this);



					});

				}



			} else {

				jQuery(this).click(function () {

					c_fun($this);



				});

			}

			if (!is_edit_model) {

				qfy_animate_out($this);

			}

		});

		jQuery("[data-ani_h]").each(function () {

			var to = jQuery(this).attr("data-ani_h_element");

			var h_fun = function ($this) {

				if (jQuery($this).attr("data-ani_h") == "tohide") {

					if (!is_edit_model) {

						jQuery($this).addClass("anihide");

					}

					return;

				}

				jQuery($this).addClass("qfe_" + jQuery($this).attr("data-ani_h") + "_h");

				qfe_animate_fun_new($this, "h");

				jQuery($this).removeClass('qsa qsa_c qsa_h qsa_l');

				setTimeout(function () {

					jQuery($this).addClass("qsa_h").removeClass("anihide");

				}, 30);

			};

			var $this = this;

			if (to) {

				if (jQuery($this).parent().hasClass("bitWidgetFrame")) {

					jQuery('#' + to).mouseenter(function () {

						h_fun($this);



					});

				} else {

					jQuery('[qfyuuid="' + to + '"]').mouseenter(function () {

						h_fun($this);



					});

				}

			} else {

				jQuery(this).mouseenter(function () {

					h_fun($this);



				});

			}

			if (!is_edit_model) {

				qfy_animate_out($this);

			}

		});



		jQuery("[data-ani_l]").each(function () {

			var to = jQuery(this).attr("data-ani_l_element");

			var h_fun = function ($this) {

				if (jQuery($this).attr("data-ani_l") == "tohide") {

					if (!is_edit_model) {

						jQuery($this).addClass("anihide");

					}

					return;

				}

				jQuery($this).addClass("qfe_" + jQuery($this).attr("data-ani_l") + "_l");

				qfe_animate_fun_new($this, "l");

				jQuery($this).removeClass('qsa qsa_c qsa_h qsa_l');

				setTimeout(function () {

					jQuery($this).addClass("qsa_l").removeClass("anihide");

				}, 30);

			};

			var $this = this;

			if (to) {

				if (jQuery($this).parent().hasClass("bitWidgetFrame")) {

					jQuery('#' + to).mouseleave(function () {

						h_fun($this);



					});

				} else {

					jQuery('[qfyuuid="' + to + '"]').mouseleave(function (e) {

						h_fun($this);

					});

				}

			} else {

				jQuery(this).mouseleave(function (e) {

					h_fun($this);

				});

			}

			if (!is_edit_model) {

				qfy_animate_out($this);

			}

		});





	}

}



/*

 * Teaser grid: isotope

 * ----------------------------------------------------------

 */

if (typeof window['vc_teaserGrid'] !== 'function') {



	function vc_teaserGrid() {



		var layout_modes = {

			fitrows: 'fitRows',

			masonry: 'masonry'

		}

		if (jQuery(".list-style9").length > 0) {

			jQuery(".list-style9").each(function () {

				vc_isotope_init_load(jQuery(this).find(".vc-carousel-slideline-inner"));

			})



		}

		if (jQuery("body.compose-mode").length == 1) {

			jQuery(".vc-element .vc_ca_post_id a:not(.cate)").each(function () {

				if (!jQuery(this).hasClass("thickbox")) {

					var href = jQuery(this).attr("href");

					jQuery(this).removeAttr("href");

					var p = jQuery(this).closest(".vc_ca_post_id");

					jQuery(this).unbind("click").bind("click", function () {

						top.menuRedirect(href, p);

						return false;

					})

				}

			})



			if (top.jQuery && !top.jQuery("body").hasClass("caterole")) {

				jQuery(".content-wrapper .vc-element .vc_ca_post_id").mouseenter(function () {



					jQuery(this).css("outline", "2px dotted #5E87B0");

					if (jQuery(this).find(".vc_list_edit_button").length == 0) {

						if (jQuery(this).find(".blog-media .toEditor,#item_block .toEditor").length == 0) {

							jQuery(this).find(".blog-media,#item_block").append("<span class='toEditor' ><span class='edit e_copy' style='display:inline' onclick='toCopy(this)'>复制</span><span class='edit e_edit' style='display:inline' onclick='toVisit(this)'>打开</span><!--<span class='edit e_delete' style='display:inline' onclick='toDelete(this)'>删除</span>--></span>");

						}

						if (jQuery(this).closest(".vc-element").attr("data-model-id")) {

							var editname = "更换图片";

							if (jQuery(this).closest(".qfy-element").attr("data-post") == "attachment") {

								editname = "编辑";

							}

							jQuery(this).find(".blog-media").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_scrolllist_image_element\")' title='修改样式，格式'>设置</span>");

							jQuery(this).find(".item_img").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_advanced_image_element\")' title='修改样式，格式'>设置</span>");

							var p = jQuery(this);

							if (p.find(".post-title").length > 0 && p.find(".post-title .vc_list_edit_action").length == 0) {

								var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="修改样式，格式"></span>';

								var title = p.find(".post-title");



								if (p.find(".post-title >a").length > 0) {

									var title = jQuery(this).find(".post-title >a");

									if (title.html() && title.html().length > 15) {

										var newtitle = title.html().substr(0, title.html().length - 6);

										title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")

									}

									p.find(".post-title >a:first").append(actionstr);

								} else {

									var title = jQuery(this).find(".post-title >span:first");

									if (title.html() && title.html().length > 15) {

										var newtitle = title.html().substr(0, title.html().length - 6);

										title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")

									}

									p.find(".post-title >span:first").append(actionstr);

								}

							}

							if (p.find(".post_excerpt").length > 0 && p.find(".post_excerpt .vc_list_edit_action").length == 0) {

								var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_text_element\')" title="修改样式，格式"></span>';

								if (p.find(".post_excerpt >p").length > 0) {

									p.find(".post_excerpt >p").append(actionstr);

								} else {

									p.find(".post_excerpt").append(actionstr);

								}



							}



							if (jQuery(this).find(".title").length > 0 && jQuery(this).find(".title .vc_list_edit_action").length == 0) {

								var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_title_element\')" title="修改样式，格式"></span>';

								jQuery(this).find(".title").append(actionstr);



							}

							if (jQuery(this).find(".details").length > 0 && jQuery(this).find(".details .vc_list_edit_action").length == 0) {

								var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_details_element\')" title="修改样式，格式"></span>';

								jQuery(this).find(".details").append(actionstr);



							}

							if (jQuery(this).find(".subtitle").length > 0 && jQuery(this).find(".subtitle .vc_list_edit_action").length == 0) {

								var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_subtitle_element\')" title="修改样式，格式"></span>';

								jQuery(this).find(".subtitle").append(actionstr);



							}



							if (jQuery(this).find(".post_date").length > 0 && jQuery(this).find(".post_date .vc_list_edit_action").length == 0) {

								var actionstr = '<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_postdate_element\')" title="修改样式，格式"></span>';

								jQuery(this).find(".post_date").append(actionstr);



							}



							if (jQuery(this).find(".price_warp").length > 0 && jQuery(this).find(".price_warp .vc_list_edit_action").length == 0) {

								var current_pid = jQuery(this).attr("data-postid");

								var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit(' + current_pid + ',\'设置商品\', \'product\');" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_advanced_list_price_element\')" title="修改样式，格式"></span>';

								jQuery(this).find(".price_warp").append(actionstr);



							}

						}

					}

				}).mouseleave(function () {

					jQuery(this).css("outline", "0").find(".vc_list_edit_action").remove();

					jQuery(this).find(".blog-media,#item_block").find(".toEditor").remove();

					jQuery(this).find(".edittitle").remove();

					jQuery(this).find(".hidetitle").each(function () {

						var t = jQuery(this).html();

						jQuery(this).parent().html(t);

					})

				});



				if (jQuery(".product-content.single-product").length == 0) {

					jQuery(".bitcommerce-main-image,.wd_product_wrapper .product_a").mouseenter(function () {

						jQuery(this).removeAttr("href").append("<span class='toEditor' style='right:0;width:100px;'><span class='edit' style='display:inline' onclick='toEditProduct(this)'><i class='glyphicon glyphicon-edit'></i>数据</span><span style='display:inline' class='delete' onclick='toRedirectProduct(this)'><i class='glyphicon glyphicon-forward'></i>页面</span></span>");

					}).mouseleave(function () {

						jQuery(this).find(".toEditor").remove();

					});

				}

			}

			jQuery('.content-wrapper .qfy-listcatecontrols li').each(function () {

				var $li = jQuery(this);

				$li.mouseenter(function () {

					jQuery(this).css("outline", "1px dotted #5E87B0");

					if (jQuery(this).find(".toEditor").length == 0) {

						jQuery(this).append("<span class='toEditor' style='border:0;padding:0;'><span  style='display:inline;border:0;padding:0;background:transparent;' onclick='toDeleteCate(this)'><img src='//f.goodq.top/FeiEditor/bitSite/images/close_hover.png' /></span>");

					}

				}).mouseleave(function () {

					jQuery(this).css("outline", "0");

					jQuery(this).find(".toEditor").remove();

				});



			});

		}





		jQuery('.qfe_grid .teaser_grid_container:not(.qfe_carousel), .qfe_filtered_grid .teaser_grid_container:not(.qfe_carousel)').each(function () {

			var $container = jQuery(this);



			var $thumbs = $container.find('.qfe_thumbnails');

			var layout_mode = $thumbs.attr('data-layout-mode');



			// ..

			if (jQuery("body.compose-mode").length == 1) {

				var p = $container.closest(".qfy-element");

				var iscontent = $container.closest(".content-wrapper");

				// && $thumbs.closest(".vc-element").length>0

				if (self!=top && typeof top.jQuery=="function" && !top.jQuery("body").hasClass("caterole")) {

					$thumbs.find(".isotope-item").mouseenter(function () {

						if (iscontent.length == 0) return;

						jQuery(this).css("outline", "2px dotted #5E87B0");

						if (jQuery(this).find(".vc_list_edit_button").length == 0) {

							var editor_html = "<span class='toEditor' ><span class='edit e_set' style='display:inline' onclick='parent.toeditlistmore(this,event,\"vc_list_element_ui\");'>设置</span><span class='edit e_copy' style='display:inline' onclick='toCopy(this)'>复制</span><span class='edit e_edit' style='display:inline' onclick='toVisit(this)'>打开</span><!--<span class='edit e_delete' style='display:inline' onclick='toDelete(this)'>删除</span>--></span>"



							jQuery(this).append(editor_html);

							// <span class='edit' style='display:inline'

							// onclick='toEditor(this)'><i class='glyphicon

							// glyphicon-edit'></i>编辑</span>

							if ($container.closest(".vc-element").attr("data-model-id")) {

								jQuery(this).find(".post-thumb").css("position", "relative");

								var editname = "更换图片";

								if (jQuery(this).closest(".qfy-element").attr("data-post") == "attachment") {

									editname = "编辑";

								}

								jQuery(this).find(".post-thumb").append("<span class='vc_list_edit_button vc_list_edit_action' style='display:inline;'><span style='display:inline;' onclick='toEditor(this,event)'>" + editname + "</span><span style='display:inline;' onclick='parent.toeditlistmore(this,event,\"vc_list_image_element\")' title='修改样式，格式'>设置</span>");

								if (jQuery(this).find(".post-title").length > 0 && jQuery(this).find(".post-title .vc_list_edit_action").length == 0) {

									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;" onclick="parent.toeditlistmore(this,event,\'vc_list_title_element\')" title="修改样式，格式"></span>';

									if (jQuery(this).find(".post-title >a").length > 0) {

										var title = jQuery(this).find(".post-title >a");

										if (title.html() && title.html().length > 15) {

											var newtitle = title.html().substr(0, title.html().length - 6);

											title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")

										}

										jQuery(this).find(".post-title >a:first").append(actionstr);

									} else {

										var title = jQuery(this).find(".post-title >span:first");

										if (title.html() && title.html().length > 15) {

											var newtitle = title.html().substr(0, title.html().length - 6);

											title.html("<span class='hidetitle' style='display:none'>" + title.html() + "</span><span class='edittitle' >" + newtitle + "</span>")

										}

										jQuery(this).find(".post-title >span:first").append(actionstr);



									}

									if (jQuery(this).find(".post-title i.glyphicon").length > 0) {

										jQuery(this).find(".post-title i.glyphicon").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_icon_element\')" title="修改样式，格式"></span>');

									}

								}





								if (jQuery(this).find(".post_excerpt").length > 0) {

									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="编辑内容"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_text_element\')" title="修改内容样式，格式"></span>';

									if (jQuery(this).find(".post_excerpt >p").length > 0 && jQuery(this).find(".post_excerpt .vc_list_edit_action").length == 0) {

										jQuery(this).find(".post_excerpt >p").append(actionstr);

									} else {

										jQuery(this).find(".post_excerpt").append(actionstr);

									}

								}

								if (jQuery(this).find(".subtitle").length > 0 && jQuery(this).find(".subtitle .vc_list_edit_action").length == 0) {

									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;" onclick="toEditor(this,event)" title="编辑内容"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_subtitle_element\')" title="修改样式，格式"></span>';

									jQuery(this).find(".subtitle").append(actionstr);



								}

								if (jQuery(this).find(".price_warp").length > 0 && jQuery(this).find(".price_warp .vc_list_edit_action").length == 0) {

									var current_pid = jQuery(this).attr("data-postid");

									var actionstr = '<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.bitSettingsEdit(' + current_pid + ',\'设置商品\', \'product\');" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;display:inline;z-index:2;position:relative;" onclick="parent.toeditlistmore(this,event,\'vc_list_price_element\')" title="修改样式，格式"></span>';

									jQuery(this).find(".price_warp").append(actionstr);



								}

								if (jQuery(this).find(".post-comment").length > 0 && jQuery(this).find(".post-comment .vc_list_edit_action").length == 0) {

									jQuery(this).find(".post-comment").append('<span class="fa fa-pencil vc_list_edit_action"  style="margin-left:10px;display:inline;" onclick="toEditor(this,event)" title="编辑"></span><span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_comment_element\')" title="修改样式，格式"></span>');

								}

								if (jQuery(this).find(".vc_read_more").length > 0 && jQuery(this).find(".vc_read_more .vc_list_edit_action").length == 0) {

									jQuery(this).find(".vc_read_more").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_readmore_element\')" title="修改样式，格式"></span>');

								}

							}



						}

					}).mouseleave(function () {

						jQuery(this).css("outline", "0");

						jQuery(this).find(".toEditor,.vc_list_edit_action").remove();

						jQuery(this).find(".edittitle").remove();

						jQuery(this).find(".hidetitle").each(function () {

							var t = jQuery(this).html();

							jQuery(this).parent().html(t);

						})



					});





					if (p.find(".mypages").length > 0) {

						p.find(".mypages").mouseenter(function () {

							if (p.find(".mypages .vc_list_edit_action").length == 0) {

								p.find(".mypages").append('<span class="fa fa-cog vc_list_edit_action" style="margin-left:10px;" onclick="parent.toeditlistmore(this,event,\'vc_list_pagenav_element\')" title="修改样式，格式"></span>');

							}

						}).mouseleave(function () {

							p.find(".vc_list_edit_action").remove();

						});



					}



				}

				$thumbs.find("a:not(.cate)").each(function () {

					if (!jQuery(this).hasClass("thickbox")) {

						var href = jQuery(this).attr("href");

						jQuery(this).removeAttr("href");

						var p = jQuery(this).closest(".isotope-item");

						jQuery(this).unbind("click").bind("click", function () {

							top.menuRedirect(href, p);

							return false;

						})

					}

				})

			}



			$container.find('.categories_filter a:not(.link)').data('isotope', $thumbs).click(function (e) {

				e.preventDefault();

				var $thumbs = jQuery(this).data('isotope');

				jQuery(this).parent().parent().find('.active').removeClass('active');

				jQuery(this).parent().addClass('active');

				if (!$container.hasClass("noanimale")) {

					$thumbs.isotope({

						filter: jQuery(this).attr('data-filter'),

						itemSelector: '.isotope-item',

						layoutMode: 'fitRows'

					});

				} else {

					var filter = jQuery(this).data('filter');

					if (filter == "*") {

						$thumbs.find(">li").show();

					} else {

						$thumbs.find(">li").hide();

						$thumbs.find(filter).show();

					}

				}



			});

			if (!jQuery(this).hasClass("noanimale")) {

				vc_isotope_init_load($thumbs);

			}



		});

	}





}



function vc_isotope_init_load(obj) {



	if (obj.find('.post-thumb img,.item_img img').length == 0) {

		obj.isotope({

			filter: '*',

			itemSelector: '.isotope-item',

			layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows'

		});

		obj.parent().find(".isotope_loading").remove();

		return;

	}

	var all_load = true;



	obj.find('.post-thumb img,.post-thumb video,.item_img img').each(function () {

		if (!jQuery(this).prop('complete')) {

			all_load = false;

		}

	});



	if (!all_load) {

		window.setTimeout(function () {

			vc_isotope_init_load(obj);

		}, 500);

		return;

	}

	obj.isotope({

		filter: '*',

		itemSelector: '.isotope-item',

		layoutMode: obj.attr("data-layout-mode") ? obj.attr("data-layout-mode") : 'fitRows'

	},function(){

		obj.parent().find(".isotope_loading").remove();

	});



}



if (typeof window['vc_carouselBehaviour'] !== 'function') {

	function vc_carouselBehaviour() {

		jQuery(".qfe_carousel").each(function () {

			var $this = jQuery(this);

			if ($this.data('carousel_enabled') !== true && $this.is(':visible')) {

				$this.data('carousel_enabled', true);

				var carousel_width = jQuery(this).width(),

					visible_count = getColumnsCount(jQuery(this)),

					carousel_speed = 500;

				if (jQuery(this).hasClass('columns_count_1')) {

					carousel_speed = 900;

				}

				var carousele_li = jQuery(this).find('.qfe_thumbnails-fluid li');

				carousele_li.css({"margin-right": carousele_li.css("margin-left"), "margin-left": 0});



				jQuery(this).find('.qfe_wrapper:eq(0)').jCarouselLite({

					btnNext: jQuery(this).find('.next'),

					btnPrev: jQuery(this).find('.prev'),

					visible: visible_count,

					speed: carousel_speed

				})

					.width('100%');// carousel_width



				var fluid_ul = jQuery(this).find('ul.qfe_thumbnails-fluid');

				fluid_ul.width(fluid_ul.width() + 300);



				jQuery(window).resize(function () {

					var before_resize = screen_size;

					screen_size = getSizeName();

					if (before_resize != screen_size) {

						window.setTimeout('location.reload()', 20);

					}

				});

			}



		});

	}

}



if (typeof window['vc_slidersBehaviour'] !== 'function') {

	function vc_slidersBehaviour() {

		// var sliders_count = 0;

		jQuery('.qfe_gallery_slides').each(function (index) {

			var this_element = jQuery(this);

			var ss_count = 0;

			if (this_element.hasClass('qfe_slider_nivo')) {

				var sliderSpeed = 800,

					sliderTimeout = this_element.attr('data-interval') * 1000;



				if (sliderTimeout == 0) sliderTimeout = 9999999999;

				this_element.find('.nivoSlider').nivoSlider({

					effect: 'boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse', // Specify

					// sets

					// like:

					// 'fold,fade,sliceDown'

					slices: 15, // For slice animations

					boxCols: 8, // For box animations

					boxRows: 4, // For box animations

					animSpeed: sliderSpeed, // Slide transition speed

					pauseTime: sliderTimeout, // How long each slide will show

					startSlide: 0, // Set starting Slide (0 index)

					directionNav: true, // Next & Prev navigation

					directionNavHide: true, // Only show on hover

					controlNav: true, // 1,2,3... navigation

					keyboardNav: false, // Use left & right arrows

					pauseOnHover: true, // Stop animation while hovering

					manualAdvance: false, // Force manual transitions

					prevText: 'Prev', // Prev directionNav text

					nextText: 'Next' // Next directionNav text

				});

			} else if (this_element.hasClass('qfe_image_grid')) {

				var isotope = this_element.find('.qfe_image_grid_ul');

				isotope.isotope({

					// options

					itemSelector: '.isotope-item',

					layoutMode: 'fitRows'

				});

				jQuery(window).load(function () {

					isotope.isotope("reLayout");

				});

			}

		});

	}

}



function getColumnsCount(el) {

	var find = false,

		i = 1;



	while (find == false) {

		if (el.hasClass('columns_count_' + i)) {

			find = true;

			return i;

		}

		i++;

	}

}



var screen_size = getSizeName();



function getSizeName() {

	var screen_size = '',

		screen_w = jQuery(window).width();



	if (screen_w > 1170) {

		screen_size = "desktop_wide";

	} else if (screen_w > 960 && screen_w < 1169) {

		screen_size = "desktop";

	} else if (screen_w > 768 && screen_w < 959) {

		screen_size = "tablet";

	} else if (screen_w > 300 && screen_w < 767) {

		screen_size = "mobile";

	} else if (screen_w < 300) {

		screen_size = "mobile_portrait";

	}

	return screen_size;

}



function loadScript(url, $obj, callback) {

	var script = document.createElement("script")

	script.type = "text/javascript";



	if (script.readyState) {  // IE

		script.onreadystatechange = function () {

			if (script.readyState == "loaded" ||

				script.readyState == "complete") {

				script.onreadystatechange = null;

				callback();

			}

		};

	} else {

	}



	script.src = url;

	$obj.get(0).appendChild(script);

}

function qfe_prepare_tab_content(event, ui) {

	var panel = ui.panel || ui.newPanel;

	vc_carouselBehaviour();

	var $ui_panel = jQuery(panel).find('.isotope'),

		$google_maps = jQuery(panel).find('.qfe_gmaps_widget');

	if ($ui_panel.length > 0) {

		$ui_panel.isotope("reLayout");

	}



	if ($google_maps.length && !$google_maps.is('.map_ready')) {

		var $frame = $google_maps.find('iframe');

		$frame.attr('src', $frame.attr('src'));

		$google_maps.addClass('map_ready');

	}

}



jQuery(window).resize(function () {

	bitResizeImageTextInit();

});

jQuery(window).ready(function () {

	setTimeout(function () {

		bitResizeImageTextInit();

	}, 300);

});



function bitResizeImageTextInit() {



	jQuery(".bitImageControlDiv .bit-tp-caption.wf-mobile-hidden").each(function () {



		var dataorgipara = jQuery(this).attr("dataorgipara");

		if (dataorgipara) {

			var $this = this;

			var p = jQuery(this).parent().parent();

			var img = p.find(".bitImageParentDiv img");

			if (img.length > 0) {

				var imgW = img.width();

				var imgH = img.height();

			} else {

				var imgW = p.find(".bitImageParentDiv .banner-img").width();

				var imgH = p.find(".bitImageParentDiv .banner-img").height();

			}



			if (imgW > 760) {

				initTextposition(dataorgipara, imgW, imgH, this);

			}

		}

	})

}



function initTextposition(dataorgipara, imgW, imgH, obj) {

	dataorgipara = dataorgipara.split("\|");

	var textOrgLeft = dataorgipara[0];

	var textOrgTop = dataorgipara[1];

	var width = dataorgipara[2];

	var s = dataorgipara[3];

	var textOrgRight = dataorgipara[4];

	var textOrgBottom = dataorgipara[5];

	if (imgW != width && imgW > 0) {



		var n = (width / imgW).toFixed(4);



		// if(s/n<10){n=s/10;}

		jQuery(obj).css("font-size", s / n).css("line-height", "auto").css("min-height", "0").css("min-width", "0");

		jQuery(obj).find("slideText").css("line-height", "auto");

		var textW = jQuery(obj).width();

		var textH = jQuery(obj).height();

		var paddingLeft = jQuery(obj).css("padding-left");

		if (paddingLeft && paddingLeft.indexOf("px")) {

			paddingLeft = paddingLeft.replace("px", "")

		}

		;

		var paddingTop = jQuery(obj).css("padding-top");

		if (paddingTop && paddingTop.indexOf("px")) {

			paddingTop = paddingTop.replace("px", "")

		}

		;

		var s = jQuery(obj).css("left");

		if (textOrgLeft != 0) {

			if (s.indexOf("px") > -1) {

				s = s.replace("px", "");

				jQuery(obj).css("left", textOrgLeft * imgW - textW / 2 - paddingLeft);

			}

		}

		if (textOrgRight == 1) {

			jQuery(obj).css("right", "0").css("left", "auto");

		}

		var s = jQuery(obj).css("top");



		if (textOrgTop != 0) {

			if (s.indexOf("px") > -1) {

				s = s.replace("px", "");

				jQuery(obj).css("top", textOrgTop * imgH - textH / 2 - paddingTop);

			}

		}

		if (textOrgBottom == 1) {

			jQuery(obj).css("bottom", "0").css("top", "auto");

		}



	} else {



		var css = jQuery(obj).attr("style");

		if (css) {

			css = css.replace(/font-size[^p]*px;/, "");

			css = css.replace(/right: 0px/, "");

			css = css.replace(/bottom: 0px/, "");

			css = css.replace(/line-height[^;]*;/, "");

			jQuery(obj).attr("style", css);

			var left = jQuery(obj).attr("dataleft");

			jQuery(obj).css("left", left + "px");

			var top = jQuery(obj).attr("datatop");

			jQuery(obj).css("top", top + "px");

		}

	}

	jQuery(obj).addClass("on").show();



}





;

/* vc_transition_bootstrap_js: (http://www.shengfenghe.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/transition.js) */
+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);
;

/* vc_carousel_js: (http://www.shengfenghe.com/qfy-content/plugins/qfy_editor/assets/lib/vc_carousel/js/vc_carousel.js) */
/* ========================================================================
 * VC: carousel.js v0.4.5
 * Fork Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


;(function($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
	if($(window).width()<768 &&  $(element).hasClass("vc-carousel vc-slide")){
		options.interval = 0;

	}
	if(!options.viewnum) options.viewnum=0;
    this.$element    = $(element)
    this.$indicators = this.$element.find('.vc-carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
    this._build() // new
  }

  Carousel.DEFAULTS = {
    mode: 'horizontal'
  , partial: false
  , interval: 5000
  , pause: 'hover'
  , wrap: false
  , autoHeight: true
  , perView: 1
  , hideOnEnd: false
  }
  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options&&this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      this.touch_start_position = 0;
    return this
  }
  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.vc-item.vc-active')
    if(!this.$active.length) this.$active = this.$element.find('.vc-item:first').addClass('vc-active')
    this.$items  = this.$active.parent().children()
    return this.$items.index(this.$active)
  }
  Carousel.prototype.showHideControl = function(index) {
    if(typeof index === 'undefined') var index = this.getActiveIndex()
    //this.$left_control[index===0 ? 'hide' : 'show']()
    //this.$right_control[index===this.items_count-1 ? 'hide' : 'show']()
  }
  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element && this.$element.find('.vc-next, .vc-prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
	
    var $active   = this.$element.find('.vc-item.vc-active')
    var $next     = next || $active[type]();
	
   if(type=="prev" && $next.index() == -1 && this.options.viewnum>0){	
		$next = this.$element.find('.vc-item:eq("'+(this.items_count-this.options.viewnum*1)+'")');
   }
    var isCycling = this.interval
    var direction = type == 'next' ? 'vc-left' : 'vc-right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this
    if (!$next.length) {
      if (!this.options.wrap) {
        this.returnSwipedSlide()
        return
      }
      $next = this.$element.find('.vc-item')[fallback]()
    }

    this.sliding = true
	//mobile don't move
	if($(window).width()<768 && this.$element.hasClass("vc-carousel vc-slide")){
		return;
	}

    isCycling && this.pause()
	
    var e = $.Event('slide.vc.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('vc-active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.vc-active').removeClass('vc-active')
      this.$indicators.find('.vc-partial').removeClass('vc-partial')
      this.$element.one('slid', function () {
        var index = that.getActiveIndex(),
            $nextIndicator = $(that.$indicators.children().slice(index, that.getActiveIndex() + that.options.perView))
        $nextIndicator && $nextIndicator.addClass('vc-active')
        that.options.partial && $nextIndicator && (index+1 < that.items_count ? $nextIndicator.last().next().addClass('vc-partial') : $nextIndicator.first().prev().addClass('vc-partial'))
        if(that.options.hideOnEnd) that.showHideControl(index)
      })
    }
    this.current_index = $next.index()
    if(this.current_index > this.items_count-this.options.viewnum*1) {
      this.current_index = 0;
	

    } else if(this.current_index < 0) {
      this.current_index = this.items_count -1
    }
    if(this.options.autoHeight) {
      this.current_pos_value = -1 * this._step * this.current_index
    } else {
      this.current_pos_value = -1 * $next.position()[this.animation_position]
    }
    if(this.options.partial && this.current_index >= this.items_count-1) {
      this.current_pos_value += this._step*(1-this.partial_part)
    }
    if ($.support.transition && this.$element.hasClass('vc-slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      this.$slideline_inner
        .addClass('vc-transition')
        .css(this.animation_position,  this.current_pos_value + that.pos_units)
      if(!this.options.autoHeight) this.recalculateSlidelineHeight($next.height(), true)
      this.$slideline_inner.one($.support.transition.end, function(){
        $next.addClass('vc-active')
        $active.removeClass('vc-active')
        that.$slideline_inner.removeClass([type, 'vc-transition'].join(' '))
        that.sliding = false
        that.removeSwipeAnimationSpeed()
        setTimeout(function () { that.$element.trigger('slid') }, 0)
      }).emulateTransitionEnd(this.transition_speed)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('vc-active')
      $next.addClass('vc-active')
      this.sliding = false
      this.$slideline_inner.css(this.animation_position, this.current_pos_value + that.pos_units)
    }
    isCycling && this.cycle()
	if( this.current_index==0 && this.options.viewnum>0){
		 $next.removeClass('vc-active');
		 if(type=="next"){
			this.$element.find('.vc-item:first').addClass("vc-active");
		 }
	}
    return this
  }
  Carousel.prototype.setSwipeAnimationSpeed = function() {
    this.$slideline_inner.addClass('vc-swipe-transition')
  }
  Carousel.prototype.removeSwipeAnimationSpeed = function() {
    this.$slideline_inner.removeClass('vc-swipe-transition')

  }
    /**
     * Velocity
     * @param   {Number}    delta_time
     * @param   {Number}    delta_x
     * @param   {Number}    delta_y
     * @returns {Object}    velocity
     */
    Carousel.prototype.velocity =  function(time, x) {
      return {
          x: Math.abs(x / time) || 0
      }
    }
    Carousel.prototype.recalculateSlidelineHeight = function(height, animate) {
      if(animate === true) {
        this.$slideline.animate({height: height})
      } else {
        this.$slideline.height(height)
      }
    }
    /**
     * Change layout size after resizing of window.
     */
    Carousel.prototype.resizeAction = function() {
      var max_height = 0,
          new_slideline_height = 0
      if(this.options.mode === 'horizontal') {
        this.el_effect_size = this.$element.width() * ( this.options.partial ? this.partial_part : 1 )
        this.$slideline.width(this.items_count*this.el_effect_size)
      
      }

      if (this.options.autoHeight) {
        this.$items.height('auto')
        this.$items.each(function(){
          var item_height = $(this).height()
          if(item_height > max_height) max_height = item_height
        })
        this.$items.height(max_height)
      } else {
        this.recalculateSlidelineHeight(this.$active.height())
      }
      if(this.options.mode === 'vertical') {
        this._step = this.$active.height()
        new_slideline_height = this.$active.height() * this.options.perView * (this.options.partial ? (1 + 1-this.partial_part) : 1)
        this.recalculateSlidelineHeight(new_slideline_height, false)
        this.$slideline_inner.css({top: -1 * this.$active.position().top})
        this.el_effect_size = this._step
      }
    }
    Carousel.prototype.returnSwipedSlide = function() {
      var params = {}
      params[this.animation_position] = this.current_pos_value + this.pos_units
      this.$slideline_inner.animate(params)
    }
    Carousel.prototype._build = function() {
    	//mobile don't build
    	if($(window).width()<768 && this.$element.hasClass("vc-carousel vc-slide")){
    		return;
    	}
      var el                      = this.$element.get(0),
          _touch_start_position   = false,
          _touch_start_time       = 0,
          _pos_before_touch      = 0,
          _diff                   = 0,
          _moved                  = false,
          that                    = this,
          mode                    = this.options.mode
      this.getActiveIndex()

      this.el_width               = 0
      this.items_count            = this.$items.length

      this.$slideline             = this.$element.find('.vc-carousel-slideline')
      this.slideline              = this.$slideline.get(0)
      this.$slideline_inner       = this.$slideline.find('> div')
      this.slideline_inner        = this.$slideline_inner.get(0)

      this.partial_part           = 0.8
      this._slide_width           = 0
      this.swipe_velocity         = 0.7
      this.current_pos_value      = 0
      this.current_index          = 0 // TODO: default start position by options
      this.el_effect_size         = 0
      this.transition_speed       = 600
	
      this.$left_control = this.$element.find('.vc-left.vc-carousel-control')
      this.$right_control = this.$element.find('.vc-right.vc-carousel-control')

      // Enable autoHeight if partial
      if(this.options.partial) this.options.autoHeight = true
      // Add Css classes for perView > 1
      if(this.options.perView > 1) this.$element.addClass('vc-per-view-more vc-per-view-' + this.options.perView)

      if( mode === 'horizontal') {
        this.pos_units = '%'
        this._step = 100.00/this.items_count/this.options.perView
        this.animation_position = 'left'
        this.$items.width(this._step + this.pos_units)
        this.touch_direction = 'pageX'
      } else {
        this.pos_units = 'px'
        this.animation_position = 'top'
        this.touch_direction = 'pageY'
      }
      // Hide first control if this.current_index === 0
      if(this.options.hideOnEnd) this.showHideControl()
      // Add partial css class if partial
      if(this.options.partial) this.$element.addClass('vc_partial')
      // Set indicator
      if(this.$indicators.length) {
        var $active_indecators = that.$indicators.children()
                                                 .slice(this.current_index, this.current_index + this.options.perView)
                                                 .addClass('vc-active')
        this.options.partial && $active_indecators.last().next().addClass('vc_partial')
      }
      $(window).resize(this.resizeAction.bind(this)); this.resizeAction()
	 if(el.addEventListener){

          //IE 8 or lower
		  el.addEventListener("touchstart", function(e){
			_touch_start_position = parseFloat(e[that.touch_direction])
			_touch_start_time = e.timeStamp
			_pos_before_touch = that.$slideline_inner.position()[that.animation_position]
		  }.bind(this), false)
		  el.addEventListener('touchmove', function(e){
			_diff = parseFloat(e[that.touch_direction]) - _touch_start_position
			_moved = Math.abs(_diff) > 0
			if(!_moved) return true
			e.preventDefault()
			that.slideline_inner.style[that.animation_position] = (_pos_before_touch + _diff) + 'px'
		  }, false)
		  el.addEventListener('touchend', function(e){
			var time,part,velocity
			if(_moved) {
			  time= (e.timeStamp-_touch_start_time)/1000
			  part = _diff/ that.el_effect_size
			  velocity = that.velocity(time, part)
			  if((velocity.x > that.swipe_velocity && part < 0) || part <= -0.7) {
				that.setSwipeAnimationSpeed()
				that.next()
			  } else if(velocity.x > that.swipe_velocity || part >= 0.7) {
				that.setSwipeAnimationSpeed()
				that.prev()
			  } else {
				that.returnSwipedSlide()
			  }
			  _moved = false
			}
		  }, false)
	  }
      this.$element.addClass('vc-build')
		 
      return this
    }
  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('vc.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('vc.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).off('click.vc.carousel.data-api').on('click.vc.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false
    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('vc.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="vc-carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

})(window.jQuery);
;

/* waypoints: (http://www.shengfenghe.com/qfy-content/plugins/qfy_editor/assets/lib/jquery-waypoints/waypoints.min.js) */
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);;

/* jquery-blockui: (http://www.shengfenghe.com/qfy-content/plugins/bitcommerce/assets/js/jquery-blockui/jquery.blockUI.min.js) */
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */(function(){"use strict";function e(e){function a(i,a){var l,h,m=i==window,g=a&&a.message!==undefined?a.message:undefined;a=e.extend({},e.blockUI.defaults,a||{});if(a.ignoreIfBlocked&&e(i).data("blockUI.isBlocked"))return;a.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,a.overlayCSS||{});l=e.extend({},e.blockUI.defaults.css,a.css||{});a.onOverlayClick&&(a.overlayCSS.cursor="pointer");h=e.extend({},e.blockUI.defaults.themedCSS,a.themedCSS||{});g=g===undefined?a.message:g;m&&o&&f(window,{fadeOut:0});if(g&&typeof g!="string"&&(g.parentNode||g.jquery)){var y=g.jquery?g[0]:g,b={};e(i).data("blockUI.history",b);b.el=y;b.parent=y.parentNode;b.display=y.style.display;b.position=y.style.position;b.parent&&b.parent.removeChild(y)}e(i).data("blockUI.onUnblock",a.onUnblock);var w=a.baseZ,E,S,x,T;n||a.forceIframe?E=e('<iframe class="blockUI" style="z-index:'+w++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+a.iframeSrc+'"></iframe>'):E=e('<div class="blockUI" style="display:none"></div>');a.theme?S=e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+w++ +';display:none"></div>'):S=e('<div class="blockUI blockOverlay" style="z-index:'+w++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');if(a.theme&&m){T='<div class="blockUI '+a.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(w+10)+';display:none;position:fixed">';a.title&&(T+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(a.title||"&nbsp;")+"</div>");T+='<div class="ui-widget-content ui-dialog-content"></div>';T+="</div>"}else if(a.theme){T='<div class="blockUI '+a.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(w+10)+';display:none;position:absolute">';a.title&&(T+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(a.title||"&nbsp;")+"</div>");T+='<div class="ui-widget-content ui-dialog-content"></div>';T+="</div>"}else m?T='<div class="blockUI '+a.blockMsgClass+' blockPage" style="z-index:'+(w+10)+';display:none;position:fixed"></div>':T='<div class="blockUI '+a.blockMsgClass+' blockElement" style="z-index:'+(w+10)+';display:none;position:absolute"></div>';x=e(T);if(g)if(a.theme){x.css(h);x.addClass("ui-widget-content")}else x.css(l);a.theme||S.css(a.overlayCSS);S.css("position",m?"fixed":"absolute");(n||a.forceIframe)&&E.css("opacity",0);var N=[E,S,x],C=m?e("body"):e(i);e.each(N,function(){this.appendTo(C)});a.theme&&a.draggable&&e.fn.draggable&&x.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var k=s&&(!e.support.boxModel||e("object,embed",m?null:i).length>0);if(r||k){m&&a.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%");if((r||!e.support.boxModel)&&!m)var L=v(i,"borderTopWidth"),A=v(i,"borderLeftWidth"),O=L?"(0 - "+L+")":0,M=A?"(0 - "+A+")":0;e.each(N,function(e,t){var n=t[0].style;n.position="absolute";if(e<2){m?n.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+a.quirksmodeOffsetHack+') + "px"'):n.setExpression("height",'this.parentNode.offsetHeight + "px"');m?n.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):n.setExpression("width",'this.parentNode.offsetWidth + "px"');M&&n.setExpression("left",M);O&&n.setExpression("top",O)}else if(a.centerY){m&&n.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');n.marginTop=0}else if(!a.centerY&&m){var r=a.css&&a.css.top?parseInt(a.css.top,10):0,i="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+r+') + "px"';n.setExpression("top",i)}})}if(g){a.theme?x.find(".ui-widget-content").append(g):x.append(g);(g.jquery||g.nodeType)&&e(g).show()}(n||a.forceIframe)&&a.showOverlay&&E.show();if(a.fadeIn){var _=a.onBlock?a.onBlock:t,D=a.showOverlay&&!g?_:t,P=g?_:t;a.showOverlay&&S._fadeIn(a.fadeIn,D);g&&x._fadeIn(a.fadeIn,P)}else{a.showOverlay&&S.show();g&&x.show();a.onBlock&&a.onBlock()}c(1,i,a);if(m){o=x[0];u=e(a.focusableElements,o);a.focusInput&&setTimeout(p,20)}else d(x[0],a.centerX,a.centerY);if(a.timeout){var H=setTimeout(function(){m?e.unblockUI(a):e(i).unblock(a)},a.timeout);e(i).data("blockUI.timeout",H)}}function f(t,n){var r,i=t==window,s=e(t),a=s.data("blockUI.history"),f=s.data("blockUI.timeout");if(f){clearTimeout(f);s.removeData("blockUI.timeout")}n=e.extend({},e.blockUI.defaults,n||{});c(0,t,n);if(n.onUnblock===null){n.onUnblock=s.data("blockUI.onUnblock");s.removeData("blockUI.onUnblock")}var h;i?h=e("body").children().filter(".blockUI").add("body > .blockUI"):h=s.find(">.blockUI");if(n.cursorReset){h.length>1&&(h[1].style.cursor=n.cursorReset);h.length>2&&(h[2].style.cursor=n.cursorReset)}i&&(o=u=null);if(n.fadeOut){r=h.length;h.stop().fadeOut(n.fadeOut,function(){--r===0&&l(h,a,n,t)})}else l(h,a,n,t)}function l(t,n,r,i){var s=e(i);if(s.data("blockUI.isBlocked"))return;t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)});if(n&&n.el){n.el.style.display=n.display;n.el.style.position=n.position;n.parent&&n.parent.appendChild(n.el);s.removeData("blockUI.history")}s.data("blockUI.static")&&s.css("position","static");typeof r.onUnblock=="function"&&r.onUnblock(i,r);var o=e(document.body),u=o.width(),a=o[0].style.width;o.width(u-1).width(u);o[0].style.width=a}function c(t,n,r){var i=n==window,s=e(n);if(!t&&(i&&!o||!i&&!s.data("blockUI.isBlocked")))return;s.data("blockUI.isBlocked",t);if(!i||!r.bindEvents||t&&!r.showOverlay)return;var u="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(u,r,h):e(document).unbind(u,h)}function h(t){if(t.type==="keydown"&&t.keyCode&&t.keyCode==9&&o&&t.data.constrainTabKey){var n=u,r=!t.shiftKey&&t.target===n[n.length-1],i=t.shiftKey&&t.target===n[0];if(r||i){setTimeout(function(){p(i)},10);return!1}}var s=t.data,a=e(t.target);a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t);return a.parents("div."+s.blockMsgClass).length>0?!0:a.parents().children().filter("div.blockUI").length===0}function p(e){if(!u)return;var t=u[e===!0?u.length-1:0];t&&t.focus()}function d(e,t,n){var r=e.parentNode,i=e.style,s=(r.offsetWidth-e.offsetWidth)/2-v(r,"borderLeftWidth"),o=(r.offsetHeight-e.offsetHeight)/2-v(r,"borderTopWidth");t&&(i.left=s>0?s+"px":"0");n&&(i.top=o>0?o+"px":"0")}function v(t,n){return parseInt(e.css(t,n),10)||0}e.fn._fadeIn=e.fn.fadeIn;var t=e.noop||function(){},n=/MSIE/.test(navigator.userAgent),r=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),i=document.documentMode||0,s=e.isFunction(document.createElement("div").style.setExpression);e.blockUI=function(e){a(window,e)};e.unblockUI=function(e){f(window,e)};e.growlUI=function(t,n,r,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>");n&&s.append("<h2>"+n+"</h2>");r===undefined&&(r=3e3);var o=function(t){t=t||{};e.blockUI({message:s,fadeIn:typeof t.fadeIn!="undefined"?t.fadeIn:700,fadeOut:typeof t.fadeOut!="undefined"?t.fadeOut:1e3,timeout:typeof t.timeout!="undefined"?t.timeout:r,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};o();var u=s.css("opacity");s.mouseover(function(){o({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop();t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})};e.fn.block=function(t){if(this[0]===window){e.blockUI(t);return this}var n=e.extend({},e.blockUI.defaults,t||{});this.each(function(){var t=e(this);if(n.ignoreIfBlocked&&t.data("blockUI.isBlocked"))return;t.unblock({fadeOut:0})});return this.each(function(){if(e.css(this,"position")=="static"){this.style.position="relative";e(this).data("blockUI.static",!0)}this.style.zoom=1;a(this,t)})};e.fn.unblock=function(t){if(this[0]===window){e.unblockUI(t);return this}return this.each(function(){f(this,t)})};e.blockUI.version=2.66;e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var o=null,u=[]}typeof define=="function"&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})();;

/* dt-plugins: (http://www.shengfenghe.com/qfy-content/themes/qfy-01/js/plugins.js) */
/*jquery-parallax*/

/*scroll 用到*/

if(typeof jQuery.easing["jswing"]=="undefined"){jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t+n;return-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t+n;return r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t+n;return-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){if((t/=i/2)<1)return r/2*t*t*t*t*t+n;return r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){if(t==0)return n;if(t==i)return n+r;if((t/=i/2)<1)return r/2*Math.pow(2,10*(t-1))+n;return r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){if((t/=i/2)<1)return-r/2*(Math.sqrt(1-t*t)-1)+n;return r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i)==1)return n+r;if(!o)o=i*.3;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158;var o=0;var u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;if(!o)o=i*.3*1.5;if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);if(t<1)return-.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n;return u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;return r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){if(s==undefined)s=1.70158;if((t/=i/2)<1)return r/2*t*t*(((s*=1.525)+1)*t-s)+n;return r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){if((t/=i)<1/2.75){return r*7.5625*t*t+n}else if(t<2/2.75){return r*(7.5625*(t-=1.5/2.75)*t+.75)+n}else if(t<2.5/2.75){return r*(7.5625*(t-=2.25/2.75)*t+.9375)+n}else{return r*(7.5625*(t-=2.625/2.75)*t+.984375)+n}},easeInOutBounce:function(e,t,n,r,i){if(t<i/2)return jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n;return jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}})}



/**

 * jquery.dlmenu.js v1.0.0

 * http://www.codrops.com

 *

 * Licensed under the MIT license.

 * http://www.opensource.org/licenses/mit-license.php

 * 

 * Copyright 2013, Codrops

 * http://www.codrops.com

 */

;( function( $, window, undefined ) {



	// global

	var Modernizr = window.Modernizr, $body = $( 'body' );



	$.DLMenu = function( options, element ) {

		this.$el = $( element );

		this._init( options );

	};



	// the options

	$.DLMenu.defaults = {

		// classes for the animation effects

		animationClasses : { animIn : 'dl-animate-in-2', animOut : 'dl-animate-out-2' }

	};



	$.DLMenu.prototype = {

		_init : function( options ) {



			// options

			this.options = $.extend( true, {}, $.DLMenu.defaults, options );

			// cache some elements and initialize some variables

			this._config();

			

			var animEndEventNames = {

					'WebkitAnimation' : 'webkitAnimationEnd',

					'OAnimation' : 'oAnimationEnd',

					'msAnimation' : 'MSAnimationEnd',

					'animation' : 'animationend'

				},

				transEndEventNames = {

					'WebkitTransition' : 'webkitTransitionEnd',

					'MozTransition' : 'transitionend',

					'OTransition' : 'oTransitionEnd',

					'msTransition' : 'MSTransitionEnd',

					'transition' : 'transitionend'

				};

			// animation end event name

			this.animEndEventName = animEndEventNames[  'animation' ] + '.dlmenu';

			// transition end event name

			this.transEndEventName = transEndEventNames[  'transition' ] + '.dlmenu',

			// support for css animations and css transitions

			this.supportAnimations = true,

			this.supportTransitions = true;



			this._initEvents();



		},

		_config : function() {

			this.open = false;

			this.$trigger = this.$el.find( '#mobile-menu' );

/* ! !changed */

			this.openCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden phone-text">'+this.$el.find( '.menu-open' ).html()+"</span><span class='mobile_icon glyphicon glyphicon-icon-angle-down' ></span>";

			this.closeCap = '<span class="wf-phone-visible">&nbsp;</span><span class="wf-phone-hidden  phone-text">'+this.$el.find( '.menu-close' ).html()+"</span><span class='mobile_icon  glyphicon glyphicon-icon-angle-down' ></span>";

/* !changed: end */

			

			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$trigger.closest(".qfy-listcatecontrols").length==0){

				this.$menu = jQuery( '.floatwarpper ul.dl-menu' );

			}else{

				this.$menu = this.$el.find( 'ul.dl-menu' );

			}

			this.$menuitems = this.$menu.find( 'li:not(.dl-back)' );

			

		



			this.$back = this.$menu.find( 'li.dl-back' );

			this.$menuitems.each(function(){

				var $item_new = $(this),

						$submenu_new = $item_new.children( 'ul.dl-submenu' );

						 $item_new.siblings(".new-column").find("> a").remove();

					var new_col_sub = $item_new.siblings(".new-column").find("> ul.dl-submenu").unwrap();

						new_col_sub.find("> a, > .dl-back").remove();

					new_col_sub.children().unwrap().appendTo($submenu_new);

					$item_new.siblings(".new-column").remove();

					if( $item_new.find("> a").attr("href")=="#"){

						$item_new.find("> a").removeAttr("href");

					}

			});

		},

		_initEvents : function() {



			var self = this;

			self.not_close_menu = false;

			if(self.$trigger.parent().hasClass("notcloseparent")) {

				self.not_close_menu = true;

				self.$trigger.parent().find(".menu-item.dl-back").remove();

			}

			this.$trigger.unbind().on( 'click.dlmenu', function(event) {



				if( self.open ) {

					if(self.not_close_menu){

						if($(event.currentTarget).hasClass("dropCenterStyle")){

							self._closeMenu();

						}

					}else{

						self._closeMenu();

					}

				}

				else {

					self._openMenu();

					// clicking somewhere else makes the menu close



					if(self.$trigger.hasClass("leftbtnmenu")) {

						if (jQuery("body >.dl-menu-film").length == 0) {

							jQuery("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");

						}

						jQuery("body >.dl-menu-film").off('click').on('click.dlmenu', function () {

							self._closeMenu();

						});

					}else if(self.not_close_menu) {

						//...

					}else{

						$body.off( 'click' ).on( 'click.dlmenu', function() {

							self._closeMenu() ;

						} );

					}

					

				}

				return false;



			} );

			

			this.$menuitems.on( 'click.dlmenu', function( event ) {

				if($(this).closest(".dl-menuwrapper").css("visibility")=="hidden"){

					return;

				}

				event.stopPropagation();



				var $item = $(this),$submenu = $item.children( 'ul.dl-submenu' );

				

				

				if( $submenu.length > 0 ) {

					var xx=event.pageX;

					var width = $submenu.width();

				

					var isclick = width-xx>35;



					if($item.closest("#dl-menu").find(">#mobile-menu").hasClass("firstopensub") || jQuery("#dl-menu >#mobile-menu").hasClass("firstopensub")){

						var textw = $item.find(">a>span").width()*1+$item.find(">a>span").offset().left*1;

						isclick = xx<textw;

					}

					if(!$item.find(">a").attr("href")){

						//无链接

						isclick = false;

					}

					if(isclick){

						if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#")>-1){

							//self._closeMenu();

						}

					}else{

						//...



						if(	$(this).closest(".dl-menuwrapper").hasClass("leftbtnmenu") || 	self.not_close_menu){

							if($submenu.css("display")!="block"){

								var h  = $submenu.height();

								$submenu.show().css("height",0).animate({ height: h }, 150,function(){

									$submenu.attr("style","display:block;");

								});

								$item.addClass( 'dl-subviewopen' );

							}else{

								$submenu.animate({ height: 0 }, 150,function(){

									$submenu.hide();

								});

								

								$item.removeClass( 'dl-subviewopen' )

							}

						}else{

							$("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);



							var $flyin = $submenu.clone().insertAfter( self.$menu ).addClass( self.options.animationClasses.animIn ),

								onAnimationEndFn = function() {

									self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.animOut ).addClass( 'dl-subview' );

									$item.addClass( 'dl-subviewopen' ).parents( '.dl-subviewopen:first' ).removeClass( 'dl-subviewopen' ).addClass( 'dl-subview' );

									$item.addClass( 'qfy-subviewopen' );

									$flyin.remove();

								};



							self.$menu.addClass( self.options.animationClasses.animOut );





							if( self.supportAnimations ) {

								self.$menu.on( self.animEndEventName, onAnimationEndFn );

							}

							else {

								onAnimationEndFn.call();

							}

							

							

						}



					

						

						return false;

					}



				}else{



					if($item.find("a").attr("href") && $item.find("a").attr("href").indexOf("#")>-1 && !self.not_close_menu){

						self._closeMenu();

					}

					

				}

			} );



			this.$back.on( 'click.dlmenu', function( event ) {



				$("html, body").animate({ scrollTop: self.$el.offset().top - 20 }, 150);



				var $this = $( this ),

					$submenu = $this.parents( 'ul.dl-submenu:first' ),

					$item = $submenu.parent(),





					$flyin = $submenu.clone().insertAfter( self.$menu ).addClass( self.options.animationClasses.animOut );



				var onAnimationEndFn = function() {

					self.$menu.off( self.animEndEventName ).removeClass( self.options.animationClasses.animIn );

					$flyin.remove();

				};



				self.$menu.addClass( self.options.animationClasses.animIn );



				if( self.supportAnimations ) {

					self.$menu.on( self.animEndEventName, onAnimationEndFn );

				}

				else {

					onAnimationEndFn.call();

				}



				$item.removeClass( 'dl-subviewopen' ).removeClass("qfy-subviewopen");

				

				var $subview = $this.parents( '.dl-subview:first' );

				if( $subview.is( 'li' ) ) {

					$subview.addClass( 'dl-subviewopen' ).addClass("qfy-subviewopen");

				}

				$subview.removeClass( 'dl-subview' );



				return false;



			} );

			

		},

		_closeMenu : function() {

			var self = this,

				onTransitionEndFn = function() {

					self.$menu.off( self.transEndEventName );

					self._resetMenu();

				};



			this.$menu.removeClass( 'dl-menuopen' );

			this.$menu.parent().removeClass("dl-menuopen-parent");

			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$trigger.closest(".qfy-listcatecontrols").length==0){

				$(".mobilefloatmenu.dl-menu-open #page").removeAttr("style");

				$(".dl-menu-open .floatwarpper").removeAttr("style");

				$(".floatwarpper .dl-container").removeAttr("style");

				$("#page #dl-menu").removeAttr("style");

				$("body > #dl-menu").remove();

				var element_right = $("#mobile-menu").attr("data-right");

				if(element_right){

					$("#dl-menu").css("right",element_right+"px");

				}

				var element_top = $("#mobile-menu").attr("data-top");

				if(element_top){

					$("#dl-menu").css("top",element_top+"px");

				}

			}

			$("body").removeClass("dl-menu-open");

			this.$menu.addClass( 'dl-menu-toggle' );

			if(this.$menu.closest("section.section").length>0){

				var style = this.$menu.closest("section.section").attr("style");

				style = style.replace(/min-height:\s*\d+px;*/g,"");

				this.$menu.closest("section.section").attr("style",style);

			}

			this.$trigger.removeClass( 'dl-active' ).html(this.openCap);

			

			if( this.supportTransitions ) {

				this.$menu.on( this.transEndEventName, onTransitionEndFn );

			}

			else {

				onTransitionEndFn.call();

			}



			this.open = false;



/*

			this.$el.css({

				position : "fixed",

				top : ""

			});

*/

		},

		_openMenu : function() {



			this.$menu.parent().addClass("dl-menuopen-parent");

			this.$menu.addClass( 'dl-menuopen dl-menu-toggle' ).on( this.transEndEventName, function() {

				$( this ).removeClass( 'dl-menu-toggle' );

			} );

			if($("body").hasClass("mobilefloatmenu") && this.$trigger.closest(".floatmenu,.fullfloatmenu").length>0 && this.$menu.closest(".qfy-listcatecontrols").length==0){



				var $this = this;

				$("body").addClass("dl-menu-open");

				var width =  $('html').width();

				if($("#mobile-menu").hasClass("fullfloatmenu")){

					var w= width;

				}else{

					var w = width - 60;

				}

				

				if(!$(".floatwarpper").hasClass("leftbtnmenu")){

					$(".mobilefloatmenu.dl-menu-open #page").css('transform','translate3d(-'+w+'px, 0px, 0px)').css('-webkit-transform','translate3d(-'+w+'px,0,0)');

					$(".dl-menu-open .floatwarpper").css('transform','translate3d(-'+w+'px, 0px, 0px)').css('-webkit-transform','translate3d(-'+w+'px,0,0)');

					$(".floatwarpper").width(w).css("right","-"+w+"px");

				}

				$(".floatwarpper .dl-container").css("max-width","100%");

				var element_top = $("#mobile-menu").attr("data-top");

				var element_right = $("#mobile-menu").attr("data-right");

				if(element_top){

					$("#page #dl-menu").css("top",element_top+"px");

					$("body > #dl-menu").css("top",element_top+"px");

				}

				setTimeout(function(){

					if(!$(".floatwarpper").hasClass("leftbtnmenu")){

						$("#page #dl-menu").removeClass("dl-menu-hidden");

						var menu_html =$("#page #dl-menu").prop("outerHTML");

						$("body").prepend(menu_html);

						if(element_top){

							$("body > #dl-menu").css("top",element_top+"px");

						}

						$("#page #dl-menu").addClass("dl-menu-hidden");

						

						if($("#mobile-menu").hasClass("fullfloatmenu")){

							$("body > #dl-menu").css("right",element_right+"px");

						}else{

							$("body > #dl-menu").css("right",(1*w+8)+"px");

						}

					}

					$("body > #dl-menu").unbind().bind("click",function(e){

						 e.stopPropagation();

						$this.$trigger.click();

						return false;

					});

				

				},200)



			}

			this.$trigger.addClass( 'dl-active' ).html(this.closeCap);

			this.open = true;

			if(this.$menu.closest("section.section").length>0){

				var minheight = this.$menu.height();

				this.$menu.closest("section.section").css("min-height",minheight+"px");

			}

			if(!$(".floatwarpper").hasClass("leftbtnmenu")){

				$("html, body").animate({ scrollTop: this.$el.offset().top - 20 }, 150);

			}

		},

		// resets the menu to its original state (first level of options)

		_resetMenu : function() {

			if(!this.$menu.closest(".dl-menuwrapper").hasClass("leftbtnmenu") && !this.not_close_menu){

				this.$menu.removeClass( 'dl-subview' );

				this.$menuitems.removeClass( 'dl-subview dl-subviewopen' );

			}

		}

	};



	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );

		}

	};



	$.fn.dlmenu = function( options ) {

		if ( typeof options === 'string' ) {

			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {

				var instance = $.data( this, 'dlmenu' );

				if ( !instance ) {

					logError( "cannot call methods on dlmenu prior to initialization; " +

					"attempted to call method '" + options + "'" );

					return;

				}

				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for dlmenu instance" );

					return;

				}

				instance[ options ].apply( instance, args );

			});

		} 

		else {

			this.each(function() {	

				var instance = $.data( this, 'dlmenu' );

				if ( instance ) {

					instance._init();

				}

				else {

					instance = $.data( this, 'dlmenu', new $.DLMenu( options, this ) );

				}

			});

		}

		return this;

	};



} )( jQuery, window );

/****************************************************************************************************************************/

 /* !- Tooltip*/  

 function simple_tooltip(e,t){jQuery(e).each(function(e){jQuery("body").append("<div class='"+t+"' id='"+t+e+"'>"+jQuery(this).find("span.tooltip-c").html()+"</div>");var n=jQuery("#"+t+e);jQuery(this).removeAttr("title").mouseover(function(){n.css({opacity:1,display:"none"}).fadeIn(400)}).mousemove(function(e){var t=jQuery(window).scrollTop();var r=jQuery(window).width();var i;var s;var o=15;if(r-o*2>=n.width()+e.pageX){i=e.pageX+o}else{i=r-n.width()-o}if(t+o*2>=e.pageY-n.height()){s=t+o}else{s=e.pageY-n.height()-2.2*o}n.css({left:i,top:s})}).mouseout(function(){n.css({left:"-9999px"})})})}

 

/* !Sandbox */



/*!

 * jquery.customSelect() - v0.4.1

 * http://adam.co/lab/jquery/customselect/

 * 2013-05-13

 *

 * Copyright 2013 Adam Coulombe

 * @license http://www.opensource.org/licenses/mit-license.html MIT License

 * @license http://www.gnu.org/licenses/gpl.html GPL2 License

 */

jQuery(document).ready(function(a) {a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup."+b("Open"))},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("update",function(){f(g,h);var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup",function(j){if(!h.hasClass(b("Open"))){g.blur();g.focus()}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown",function(j){h.removeClass(b("Changed"))}).on("mouseup",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.focus()}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup."+b("Open"),function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.blur()}else{f(g,h)}})}}}).focus(function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).blur(function(){h.removeClass(b("Focus")+" "+b("Open"))}).hover(function(){h.addClass(b("Hover"))},function(){h.removeClass(b("Hover"))}).trigger("update")})}})});





/**

 * jquery.hoverdir.js v1.1.0

 * http://www.codrops.com

 *

 * Licensed under the MIT license.

 * http://www.opensource.org/licenses/mit-license.php

 * 

 * Copyright 2012, Codrops

 * http://www.codrops.com

 */

;( function( $, window, undefined ) {

	

	'use strict';



	$.HoverDir = function( options, element ) {

		

		this.$el = $( element );

		this._init( options );



	};



	// the options

	$.HoverDir.defaults = {

		speed : 300,

		easing : 'ease',

		hoverDelay : 0,

		inverse : false

	};



	$.HoverDir.prototype = {



		_init : function( options ) {

			

			// options

			this.options = $.extend( true, {}, $.HoverDir.defaults, options );

			// transition properties

			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;

			// support for CSS transitions

			this.support = Modernizr.csstransitions;

			// load the events

			this._loadEvents();



		},

		_loadEvents : function() {



			var self = this;

			

			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {

				

				var $el = $( this ),

					$hoverElem = $el.find( 'div.rollover-content, div.fs-entry-content' ),

					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),

					styleCSS = self._getStyle( direction );

				

				if( event.type === 'mouseenter' ) {

					

					$hoverElem.hide().css( styleCSS.from );

					clearTimeout( self.tmhover );



					self.tmhover = setTimeout( function() {

						

						$hoverElem.show( 0, function() {

							

							var $el = $( this );

							if( self.support ) {

								$el.css( 'transition', self.transitionProp );

							}

							self._applyAnimation( $el, styleCSS.to, self.options.speed );



						} );

						

					

					}, self.options.hoverDelay );

					

				}

				else {

				

					if( self.support ) {

						$hoverElem.css( 'transition', self.transitionProp );

					}

					clearTimeout( self.tmhover );

					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );

					

				}

					

			} );



		},

		// credits : http://stackoverflow.com/a/3647634

		_getDir : function( $el, coordinates ) {

			

			// the width and height of the current div

			var w = $el.width(),

				h = $el.height(),



				// calculate the x and y to get an angle to the center of the div from that x and y.

				// gets the x value relative to the center of the DIV and "normalize" it

				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),

				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),

			

				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);

				// first calculate the angle of the point,

				// add 180 deg to get rid of the negative values

				// divide by 90 to get the quadrant

				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/

				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;

			

			return direction;

			

		},

		_getStyle : function( direction ) {

			

			var fromStyle, toStyle,

				slideFromTop = { left : '0px', top : '-100%' },

				slideFromBottom = { left : '0px', top : '100%' },

				slideFromLeft = { left : '-100%', top : '0px' },

				slideFromRight = { left : '100%', top : '0px' },

				slideTop = { top : '0px' },

				slideLeft = { left : '0px' };

			

			switch( direction ) {

				case 0:

					// from top

					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;

					toStyle = slideTop;

					break;

				case 1:

					// from right

					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;

					toStyle = slideLeft;

					break;

				case 2:

					// from bottom

					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;

					toStyle = slideTop;

					break;

				case 3:

					// from left

					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;

					toStyle = slideLeft;

					break;

			};

			

			return { from : fromStyle, to : toStyle };

					

		},

		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support

		_applyAnimation : function( el, styleCSS, speed ) {



			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;

			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );



		},



	};

	

	var logError = function( message ) {



		if ( window.console ) {



			window.console.error( message );

		

		}



	};

	

	$.fn.hoverdir = function( options ) {



		var instance = $.data( this, 'hoverdir' );

		

		if ( typeof options === 'string' ) {

			

			var args = Array.prototype.slice.call( arguments, 1 );

			

			this.each(function() {

			

				if ( !instance ) {



					logError( "cannot call methods on hoverdir prior to initialization; " +

					"attempted to call method '" + options + "'" );

					return;

				

				}

				

				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {



					logError( "no such method '" + options + "' for hoverdir instance" );

					return;

				

				}

				

				instance[ options ].apply( instance, args );

			

			});

		

		} 

		else {

		

			this.each(function() {

				

				if ( instance ) {



					instance._init();

				

				}

				else {



					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );

				

				}



			});

		

		}

		

		return instance;

		

	};

	

} )( jQuery, window );



/**

 * Cookie plugin

 *

 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)

 * Dual licensed under the MIT and GPL licenses:

 * http://www.opensource.org/licenses/mit-license.php

 * http://www.gnu.org/licenses/gpl.html

 *

 */

jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options=$.extend({},options);options.expires=-1;}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}expires='; expires='+date.toUTCString();}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}return cookieValue;}};



/* Sandbox: end */;

/* dt-main-op-jquery: (http://www.shengfenghe.com/FeiEditor/bitSite/js/opentip-jquery.min.js) */
// Opentip v2.4.6
// Copyright (c) 2009-2012
// www.opentip.org
// MIT Licensed
var Opentip,firstAdapter,i,mouseMoved,mousePosition,mousePositionObservers,position,vendors,_i,_len,_ref,__slice=[].slice,__indexOf=[].indexOf||function(t){for(var e=0,i=this.length;i>e;e++)if(e in this&&this[e]===t)return e;return-1},__hasProp={}.hasOwnProperty;for(Opentip=function(){function t(e,i,o,s){var n,r,a,h,p,d,l,u,c,g,f,m,v,b,w=this;if(this.id=++t.lastId,this.debug("Creating Opentip."),t.tips.push(this),this.adapter=t.adapter,n=this.adapter.data(e,"opentips")||[],n.push(this),this.adapter.data(e,"opentips",n),this.triggerElement=this.adapter.wrap(e),this.triggerElement.length>1)throw Error("You can't call Opentip on multiple elements.");if(1>this.triggerElement.length)throw Error("Invalid element.");this.loaded=!1,this.loading=!1,this.visible=!1,this.waitingToShow=!1,this.waitingToHide=!1,this.currentPosition={left:0,top:0},this.dimensions={width:100,height:50},this.content="",this.redraw=!0,this.currentObservers={showing:!1,visible:!1,hiding:!1,hidden:!1},s=this.adapter.clone(s),typeof i=="object"?(s=i,i=o=void 0):typeof o=="object"&&(s=o,o=void 0),o!=null&&(s.title=o),i!=null&&this.setContent(i),s["extends"]==null&&(s["extends"]=s.style!=null?s.style:t.defaultStyle),h=[s],b=s;while(b["extends"]){if(d=b["extends"],b=t.styles[d],b==null)throw Error("Invalid style: "+d);h.unshift(b),b["extends"]==null&&d!=="standard"&&(b["extends"]="standard")}for(s=(f=this.adapter).extend.apply(f,[{}].concat(__slice.call(h))),s.hideTriggers=function(){var t,e,i,o;for(i=s.hideTriggers,o=[],t=0,e=i.length;e>t;t++)r=i[t],o.push(r);return o}(),s.hideTrigger&&s.hideTriggers.length===0&&s.hideTriggers.push(s.hideTrigger),m=["tipJoint","targetJoint","stem"],l=0,c=m.length;c>l;l++)p=m[l],s[p]&&typeof s[p]=="string"&&(s[p]=new t.Joint(s[p]));for(!s.ajax||s.ajax!==!0&&s.ajax||(s.ajax=this.adapter.tagName(this.triggerElement)==="A"?this.adapter.attr(this.triggerElement,"href"):!1),s.showOn==="click"&&this.adapter.tagName(this.triggerElement)==="A"&&this.adapter.observe(this.triggerElement,"click",function(t){return t.preventDefault(),t.stopPropagation(),t.stopped=!0}),s.target&&(s.fixed=!0),s.stem===!0&&(s.stem=new t.Joint(s.tipJoint)),s.target===!0?s.target=this.triggerElement:s.target&&(s.target=this.adapter.wrap(s.target)),this.currentStem=s.stem,s.delay==null&&(s.delay=s.showOn==="mouseover"?.2:0),s.targetJoint==null&&(s.targetJoint=new t.Joint(s.tipJoint).flip()),this.showTriggers=[],this.showTriggersWhenVisible=[],this.hideTriggers=[],s.showOn&&s.showOn!=="creation"&&this.showTriggers.push({element:this.triggerElement,event:s.showOn}),s.ajaxCache!=null&&(s.cache=s.ajaxCache,delete s.ajaxCache),this.options=s,this.bound={},v=["prepareToShow","prepareToHide","show","hide","reposition"],u=0,g=v.length;g>u;u++)a=v[u],this.bound[a]=function(t){return function(){return w[t].apply(w,arguments)}}(a);this.adapter.domReady(function(){return w.activate(),w.options.showOn==="creation"?w.prepareToShow():void 0})}return t.prototype.STICKS_OUT_TOP=1,t.prototype.STICKS_OUT_BOTTOM=2,t.prototype.STICKS_OUT_LEFT=1,t.prototype.STICKS_OUT_RIGHT=2,t.prototype["class"]={container:"opentip-container",opentip:"opentip",header:"ot-header",content:"ot-content",loadingIndicator:"ot-loading-indicator",close:"ot-close",goingToHide:"ot-going-to-hide",hidden:"ot-hidden",hiding:"ot-hiding",goingToShow:"ot-going-to-show",showing:"ot-showing",visible:"ot-visible",loading:"ot-loading",ajaxError:"ot-ajax-error",fixed:"ot-fixed",showEffectPrefix:"ot-show-effect-",hideEffectPrefix:"ot-hide-effect-",stylePrefix:"style-"},t.prototype._setup=function(){var t,e,i,o,s,n,r,a,h,p,d;for(this.debug("Setting up the tooltip."),this._buildContainer(),this.hideTriggers=[],h=this.options.hideTriggers,o=s=0,r=h.length;r>s;o=++s){if(e=h[o],i=null,t=this.options.hideOn instanceof Array?this.options.hideOn[o]:this.options.hideOn,typeof e=="string")switch(e){case"trigger":t=t||"mouseout",i=this.triggerElement;break;case"tip":t=t||"mouseover",i=this.container;break;case"target":t=t||"mouseover",i=this.options.target;break;case"closeButton":break;default:throw Error("Unknown hide trigger: "+e+".")}else t=t||"mouseover",i=this.adapter.wrap(e);i&&this.hideTriggers.push({element:i,event:t,original:e})}for(p=this.hideTriggers,d=[],n=0,a=p.length;a>n;n++)e=p[n],d.push(this.showTriggersWhenVisible.push({element:e.element,event:"mouseover"}));return d},t.prototype._buildContainer=function(){return this.container=this.adapter.create('<div id="opentip-'+this.id+'" class="'+this["class"].container+" "+this["class"].hidden+" "+this["class"].stylePrefix+this.options.className+'"></div>'),this.adapter.css(this.container,{position:"absolute"}),this.options.ajax&&this.adapter.addClass(this.container,this["class"].loading),this.options.fixed&&this.adapter.addClass(this.container,this["class"].fixed),this.options.showEffect&&this.adapter.addClass(this.container,""+this["class"].showEffectPrefix+this.options.showEffect),this.options.hideEffect?this.adapter.addClass(this.container,""+this["class"].hideEffectPrefix+this.options.hideEffect):void 0},t.prototype._buildElements=function(){var t,e;return this.tooltipElement=this.adapter.create('<div class="'+this["class"].opentip+'"><div class="'+this["class"].header+'"></div><div class="'+this["class"].content+'"></div></div>'),this.backgroundCanvas=this.adapter.wrap(document.createElement("canvas")),this.adapter.css(this.backgroundCanvas,{position:"absolute"}),typeof G_vmlCanvasManager!="undefined"&&G_vmlCanvasManager!==null&&G_vmlCanvasManager.initElement(this.adapter.unwrap(this.backgroundCanvas)),t=this.adapter.find(this.tooltipElement,"."+this["class"].header),this.options.title&&(e=this.adapter.create("<h1></h1>"),this.adapter.update(e,this.options.title,this.options.escapeTitle),this.adapter.append(t,e)),this.options.ajax&&!this.loaded&&this.adapter.append(this.tooltipElement,this.adapter.create('<div class="'+this["class"].loadingIndicator+'"><span>↻</span></div>')),__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(this.closeButtonElement=this.adapter.create('<a href="javascript:undefined;" class="'+this["class"].close+'"><span>Close</span></a>'),this.adapter.append(t,this.closeButtonElement)),this.adapter.append(this.container,this.backgroundCanvas),this.adapter.append(this.container,this.tooltipElement),this.adapter.append(document.body,this.container),this._newContent=!0,this.redraw=!0},t.prototype.setContent=function(t){return this.content=t,this._newContent=!0,typeof this.content=="function"?(this._contentFunction=this.content,this.content=""):this._contentFunction=null,this.visible?this._updateElementContent():void 0},t.prototype._updateElementContent=function(){var t;return(this._newContent||!this.options.cache&&this._contentFunction)&&(t=this.adapter.find(this.container,"."+this["class"].content),t!=null&&(this._contentFunction&&(this.debug("Executing content function."),this.content=this._contentFunction(this)),this.adapter.update(t,this.content,this.options.escapeContent)),this._newContent=!1),this._storeAndLockDimensions(),this.reposition()},t.prototype._storeAndLockDimensions=function(){var t;if(this.container)return t=this.dimensions,this.adapter.css(this.container,{width:"auto",left:"0px",top:"0px"}),this.dimensions=this.adapter.dimensions(this.container),this.dimensions.width+=1,this.adapter.css(this.container,{width:""+this.dimensions.width+"px",top:""+this.currentPosition.top+"px",left:""+this.currentPosition.left+"px"}),this._dimensionsEqual(this.dimensions,t)?void 0:(this.redraw=!0,this._draw())},t.prototype.activate=function(){return this._setupObservers("hidden","hiding")},t.prototype.deactivate=function(){return this.debug("Deactivating tooltip."),this.hide(),this._setupObservers("-showing","-visible","-hidden","-hiding")},t.prototype._setupObservers=function(){var t,e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m=this;for(o=arguments.length>=1?__slice.call(arguments,0):[],n=0,p=o.length;p>n;n++)if(i=o[n],e=!1,i.charAt(0)==="-"&&(e=!0,i=i.substr(1)),this.currentObservers[i]!==!e)switch(this.currentObservers[i]=!e,t=function(){var t,i,o;return t=arguments.length>=1?__slice.call(arguments,0):[],e?(i=m.adapter).stopObserving.apply(i,t):(o=m.adapter).observe.apply(o,t)},i){case"showing":for(c=this.hideTriggers,r=0,d=c.length;d>r;r++)s=c[r],t(s.element,s.event,this.bound.prepareToHide);t(document.onresize!=null?document:window,"resize",this.bound.reposition),t(window,"scroll",this.bound.reposition);break;case"visible":for(g=this.showTriggersWhenVisible,a=0,l=g.length;l>a;a++)s=g[a],t(s.element,s.event,this.bound.prepareToShow);break;case"hiding":for(f=this.showTriggers,h=0,u=f.length;u>h;h++)s=f[h],t(s.element,s.event,this.bound.prepareToShow);break;case"hidden":break;default:throw Error("Unknown state: "+i)}return null},t.prototype.prepareToShow=function(){return this._abortHiding(),this._abortShowing(),this.visible?void 0:(this.debug("Showing in "+this.options.delay+"s."),this.container==null&&this._setup(),this.options.group&&t._abortShowingGroup(this.options.group,this),this.preparingToShow=!0,this._setupObservers("-hidden","-hiding","showing"),this._followMousePosition(),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this._showTimeoutId=this.setTimeout(this.bound.show,this.options.delay||0))},t.prototype.show=function(){var e=this;return this._abortHiding(),this.visible?void 0:(this._clearTimeouts(),this._triggerElementExists()?(this.debug("Showing now."),this.container==null&&this._setup(),this.options.group&&t._hideGroup(this.options.group,this),this.visible=!0,this.preparingToShow=!1,this.tooltipElement==null&&this._buildElements(),this._updateElementContent(),!this.options.ajax||this.loaded&&this.options.cache||this._loadAjax(),this._searchAndActivateCloseButtons(),this._startEnsureTriggerElement(),this.adapter.css(this.container,{zIndex:t.lastZIndex++}),this._setupObservers("-hidden","-hiding","-showing","-visible","showing","visible"),this.options.fixed&&!this.options.target&&(this.initialMousePosition=mousePosition),this.reposition(),this.adapter.removeClass(this.container,this["class"].hiding),this.adapter.removeClass(this.container,this["class"].hidden),this.adapter.addClass(this.container,this["class"].goingToShow),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var t;if(e.visible&&!e.preparingToHide)return e.adapter.removeClass(e.container,e["class"].goingToShow),e.adapter.addClass(e.container,e["class"].showing),t=0,e.options.showEffect&&e.options.showEffectDuration&&(t=e.options.showEffectDuration),e.setCss3Style(e.container,{transitionDuration:""+t+"s"}),e._visibilityStateTimeoutId=e.setTimeout(function(){return e.adapter.removeClass(e.container,e["class"].showing),e.adapter.addClass(e.container,e["class"].visible)},t),e._activateFirstInput()}),this._draw()):this.deactivate())},t.prototype._abortShowing=function(){return this.preparingToShow?(this.debug("Aborting showing."),this._clearTimeouts(),this._stopFollowingMousePosition(),this.preparingToShow=!1,this._setupObservers("-showing","-visible","hiding","hidden")):void 0},t.prototype.prepareToHide=function(){return this._abortShowing(),this._abortHiding(),this.visible?(this.debug("Hiding in "+this.options.hideDelay+"s"),this.preparingToHide=!0,this._setupObservers("-showing","visible","-hidden","hiding"),this._hideTimeoutId=this.setTimeout(this.bound.hide,this.options.hideDelay)):void 0},t.prototype.hide=function(){var t=this;return this._abortShowing(),this.visible&&(this._clearTimeouts(),this.debug("Hiding!"),this.visible=!1,this.preparingToHide=!1,this._stopEnsureTriggerElement(),this._setupObservers("-showing","-visible","-hiding","-hidden","hiding","hidden"),this.options.fixed||this._stopFollowingMousePosition(),this.container)?(this.adapter.removeClass(this.container,this["class"].visible),this.adapter.removeClass(this.container,this["class"].showing),this.adapter.addClass(this.container,this["class"].goingToHide),this.setCss3Style(this.container,{transitionDuration:"0s"}),this.defer(function(){var e;return t.adapter.removeClass(t.container,t["class"].goingToHide),t.adapter.addClass(t.container,t["class"].hiding),e=0,t.options.hideEffect&&t.options.hideEffectDuration&&(e=t.options.hideEffectDuration),t.setCss3Style(t.container,{transitionDuration:""+e+"s"}),t._visibilityStateTimeoutId=t.setTimeout(function(){return t.adapter.removeClass(t.container,t["class"].hiding),t.adapter.addClass(t.container,t["class"].hidden),t.setCss3Style(t.container,{transitionDuration:"0s"}),t.options.removeElementsOnHide?(t.debug("Removing HTML elements."),t.adapter.remove(t.container),delete t.container,delete t.tooltipElement):void 0},e)})):void 0},t.prototype._abortHiding=function(){return this.preparingToHide?(this.debug("Aborting hiding."),this._clearTimeouts(),this.preparingToHide=!1,this._setupObservers("-hiding","showing","visible")):void 0},t.prototype.reposition=function(){var t,e,i,o=this;return t=this.getPosition(),t==null||(e=this.options.stem,this.options.containInViewport&&(i=this._ensureViewportContainment(t),t=i.position,e=i.stem),this._positionsEqual(t,this.currentPosition))?void 0:(this.options.stem&&!e.eql(this.currentStem)&&(this.redraw=!0),this.currentPosition=t,this.currentStem=e,this._draw(),this.adapter.css(this.container,{left:""+t.left+"px",top:""+t.top+"px"}),this.defer(function(){var t,e;return t=o.adapter.unwrap(o.container),t.style.visibility="hidden",e=t.offsetHeight,t.style.visibility="visible"}))},t.prototype.getPosition=function(t,e,i){var o,s,n,r,a,h,p,d,l;if(this.container)return t==null&&(t=this.options.tipJoint),e==null&&(e=this.options.targetJoint),r={},this.options.target?(p=this.adapter.offset(this.options.target),h=this.adapter.dimensions(this.options.target),r=p,e.right?(d=this.adapter.unwrap(this.options.target),d.getBoundingClientRect!=null?r.left=d.getBoundingClientRect().right+((l=window.pageXOffset)!=null?l:document.body.scrollLeft):r.left+=h.width):e.center&&(r.left+=Math.round(h.width/2)),e.bottom?r.top+=h.height:e.middle&&(r.top+=Math.round(h.height/2)),this.options.borderWidth&&(this.options.tipJoint.left&&(r.left+=this.options.borderWidth),this.options.tipJoint.right&&(r.left-=this.options.borderWidth),this.options.tipJoint.top?r.top+=this.options.borderWidth:this.options.tipJoint.bottom&&(r.top-=this.options.borderWidth))):r=this.initialMousePosition?{top:this.initialMousePosition.y,left:this.initialMousePosition.x}:{top:mousePosition.y,left:mousePosition.x},this.options.autoOffset&&(a=this.options.stem?this.options.stemLength:0,n=a&&this.options.fixed?2:10,o=t.middle&&!this.options.fixed?15:0,s=t.center&&!this.options.fixed?15:0,t.right?r.left-=n+o:t.left&&(r.left+=n+o),t.bottom?r.top-=n+s:t.top&&(r.top+=n+s),a&&(i==null&&(i=this.options.stem),i.right?r.left-=a:i.left&&(r.left+=a),i.bottom?r.top-=a:i.top&&(r.top+=a))),r.left+=this.options.offset[0],r.top+=this.options.offset[1],t.right?r.left-=this.dimensions.width:t.center&&(r.left-=Math.round(this.dimensions.width/2)),t.bottom?r.top-=this.dimensions.height:t.middle&&(r.top-=Math.round(this.dimensions.height/2)),r},t.prototype._ensureViewportContainment=function(e){var i,o,s,n,r,a,h,p,d,l,u,c;if(h=this.options.stem,s={position:e,stem:h},!this.visible||!e)return s;if(p=this._sticksOut(e),!p[0]&&!p[1])return s;if(l=new t.Joint(this.options.tipJoint),this.options.targetJoint&&(d=new t.Joint(this.options.targetJoint)),a=this.adapter.scrollOffset(),u=this.adapter.viewportDimensions(),c=[e.left-a[0],e.top-a[1]],i=!1,u.width>=this.dimensions.width&&p[0])switch(i=!0,p[0]){case this.STICKS_OUT_LEFT:l.setHorizontal("left"),this.options.targetJoint&&d.setHorizontal("right");break;case this.STICKS_OUT_RIGHT:l.setHorizontal("right"),this.options.targetJoint&&d.setHorizontal("left")}if(u.height>=this.dimensions.height&&p[1])switch(i=!0,p[1]){case this.STICKS_OUT_TOP:l.setVertical("top"),this.options.targetJoint&&d.setVertical("bottom");break;case this.STICKS_OUT_BOTTOM:l.setVertical("bottom"),this.options.targetJoint&&d.setVertical("top")}return i?(this.options.stem&&(h=l),e=this.getPosition(l,d,h),o=this._sticksOut(e),n=!1,r=!1,o[0]&&o[0]!==p[0]&&(n=!0,l.setHorizontal(this.options.tipJoint.horizontal),this.options.targetJoint&&d.setHorizontal(this.options.targetJoint.horizontal)),o[1]&&o[1]!==p[1]&&(r=!0,l.setVertical(this.options.tipJoint.vertical),this.options.targetJoint&&d.setVertical(this.options.targetJoint.vertical)),n&&r?s:((n||r)&&(this.options.stem&&(h=l),e=this.getPosition(l,d,h)),{position:e,stem:h})):s},t.prototype._sticksOut=function(t){var e,i,o,s;return i=this.adapter.scrollOffset(),s=this.adapter.viewportDimensions(),e=[t.left-i[0],t.top-i[1]],o=[!1,!1],0>e[0]?o[0]=this.STICKS_OUT_LEFT:e[0]+this.dimensions.width>s.width&&(o[0]=this.STICKS_OUT_RIGHT),0>e[1]?o[1]=this.STICKS_OUT_TOP:e[1]+this.dimensions.height>s.height&&(o[1]=this.STICKS_OUT_BOTTOM),o},t.prototype._draw=function(){var e,i,o,s,n,r,a,h,p,d,l,u,c,g,f,m,v,b,w,_=this;if(this.backgroundCanvas&&this.redraw){if(this.debug("Drawing background."),this.redraw=!1,this.currentStem){for(v=["top","right","bottom","left"],f=0,m=v.length;m>f;f++)u=v[f],this.adapter.removeClass(this.container,"stem-"+u);this.adapter.addClass(this.container,"stem-"+this.currentStem.horizontal),this.adapter.addClass(this.container,"stem-"+this.currentStem.vertical)}return r=[0,0],a=[0,0],__indexOf.call(this.options.hideTriggers,"closeButton")>=0&&(n=new t.Joint(((b=this.currentStem)!=null?b+"":void 0)==="top right"?"top left":"top right"),r=[this.options.closeButtonRadius+this.options.closeButtonOffset[0],this.options.closeButtonRadius+this.options.closeButtonOffset[1]],a=[this.options.closeButtonRadius-this.options.closeButtonOffset[0],this.options.closeButtonRadius-this.options.closeButtonOffset[1]]),o=this.adapter.clone(this.dimensions),s=[0,0],this.options.borderWidth&&(o.width+=this.options.borderWidth*2,o.height+=this.options.borderWidth*2,s[0]-=this.options.borderWidth,s[1]-=this.options.borderWidth),this.options.shadow&&(o.width+=this.options.shadowBlur*2,o.width+=Math.max(0,this.options.shadowOffset[0]-this.options.shadowBlur*2),o.height+=this.options.shadowBlur*2,o.height+=Math.max(0,this.options.shadowOffset[1]-this.options.shadowBlur*2),s[0]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[0]),s[1]-=Math.max(0,this.options.shadowBlur-this.options.shadowOffset[1])),i={left:0,right:0,top:0,bottom:0},this.currentStem&&(this.currentStem.left?i.left=this.options.stemLength:this.currentStem.right&&(i.right=this.options.stemLength),this.currentStem.top?i.top=this.options.stemLength:this.currentStem.bottom&&(i.bottom=this.options.stemLength)),n&&(n.left?i.left=Math.max(i.left,a[0]):n.right&&(i.right=Math.max(i.right,a[0])),n.top?i.top=Math.max(i.top,a[1]):n.bottom&&(i.bottom=Math.max(i.bottom,a[1]))),o.width+=i.left+i.right,o.height+=i.top+i.bottom,s[0]-=i.left,s[1]-=i.top,this.currentStem&&this.options.borderWidth&&(w=this._getPathStemMeasures(this.options.stemBase,this.options.stemLength,this.options.borderWidth),g=w.stemLength,c=w.stemBase),e=this.adapter.unwrap(this.backgroundCanvas),e.width=o.width,e.height=o.height,this.adapter.css(this.backgroundCanvas,{width:""+e.width+"px",height:""+e.height+"px",left:""+s[0]+"px",top:""+s[1]+"px"}),h=e.getContext("2d"),h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,e.width,e.height),h.beginPath(),h.fillStyle=this._getColor(h,this.dimensions,this.options.background,this.options.backgroundGradientHorizontal),h.lineJoin="miter",h.miterLimit=500,l=this.options.borderWidth/2,this.options.borderWidth?(h.strokeStyle=this.options.borderColor,h.lineWidth=this.options.borderWidth):(g=this.options.stemLength,c=this.options.stemBase),c==null&&(c=0),d=function(t,e,i){return i&&h.moveTo(Math.max(c,_.options.borderRadius,r[0])+1-l,-l),e?(h.lineTo(t/2-c/2,-l),h.lineTo(t/2,-g-l),h.lineTo(t/2+c/2,-l)):void 0},p=function(t,e,i){var o,s,n,a;return t?(h.lineTo(-c+l,0-l),h.lineTo(g+l,-g-l),h.lineTo(l,c-l)):e?(a=_.options.closeButtonOffset,n=r[0],i%2!==0&&(a=[a[1],a[0]],n=r[1]),o=Math.acos(a[1]/_.options.closeButtonRadius),s=Math.acos(a[0]/_.options.closeButtonRadius),h.lineTo(-n+l,-l),h.arc(l-a[0],-l+a[1],_.options.closeButtonRadius,-(Math.PI/2+o),s,!1)):(h.lineTo(-_.options.borderRadius+l,-l),h.quadraticCurveTo(l,-l,l,_.options.borderRadius-l))},h.translate(-s[0],-s[1]),h.save(),function(){var e,i,o,s,r,a,l,u,c,g,f;for(f=[],i=c=0,g=t.positions.length/2;g>=0?g>c:c>g;i=g>=0?++c:--c)r=i*2,a=i===0||i===3?0:_.dimensions.width,l=2>i?0:_.dimensions.height,u=Math.PI/2*i,o=i%2===0?_.dimensions.width:_.dimensions.height,s=new t.Joint(t.positions[r]),e=new t.Joint(t.positions[r+1]),h.save(),h.translate(a,l),h.rotate(u),d(o,s.eql(_.currentStem),i===0),h.translate(o,0),p(e.eql(_.currentStem),e.eql(n),i),f.push(h.restore());return f}(),h.closePath(),h.save(),this.options.shadow&&(h.shadowColor=this.options.shadowColor,h.shadowBlur=this.options.shadowBlur,h.shadowOffsetX=this.options.shadowOffset[0],h.shadowOffsetY=this.options.shadowOffset[1]),h.fill(),h.restore(),this.options.borderWidth&&h.stroke(),h.restore(),n?function(){var t,e,i,o,s;return i=e=_.options.closeButtonRadius*2,n+""=="top right"?(s=[_.dimensions.width-_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]+l,s[1]-l]):(s=[_.options.closeButtonOffset[0],_.options.closeButtonOffset[1]],t=[s[0]-l,s[1]-l]),h.translate(t[0],t[1]),o=_.options.closeButtonCrossSize/2,h.save(),h.beginPath(),h.strokeStyle=_.options.closeButtonCrossColor,h.lineWidth=_.options.closeButtonCrossLineWidth,h.lineCap="round",h.moveTo(-o,-o),h.lineTo(o,o),h.stroke(),h.beginPath(),h.moveTo(o,-o),h.lineTo(-o,o),h.stroke(),h.restore(),_.adapter.css(_.closeButtonElement,{left:""+(s[0]-o-_.options.closeButtonLinkOverscan)+"px",top:""+(s[1]-o-_.options.closeButtonLinkOverscan)+"px",width:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px",height:""+(_.options.closeButtonCrossSize+_.options.closeButtonLinkOverscan*2)+"px"})}():void 0}},t.prototype._getPathStemMeasures=function(t,e,i){var o,s,n,r,a,h,p;if(r=i/2,n=Math.atan(t/2/e),o=n*2,a=r/Math.sin(o),s=2*a*Math.cos(n),p=r+e-s,0>p)throw Error("Sorry but your stemLength / stemBase ratio is strange.");return h=Math.tan(n)*p*2,{stemLength:p,stemBase:h}},t.prototype._getColor=function(t,e,i,o){var s,n,r,a,h;if(o==null&&(o=!1),typeof i=="string")return i;for(n=o?t.createLinearGradient(0,0,e.width,0):t.createLinearGradient(0,0,0,e.height),r=a=0,h=i.length;h>a;r=++a)s=i[r],n.addColorStop(s[0],s[1]);return n},t.prototype._searchAndActivateCloseButtons=function(){var t,e,i,o;for(o=this.adapter.findAll(this.container,"."+this["class"].close),e=0,i=o.length;i>e;e++)t=o[e],this.hideTriggers.push({element:this.adapter.wrap(t),event:"click"});return this.currentObservers.showing&&this._setupObservers("-showing","showing"),this.currentObservers.visible?this._setupObservers("-visible","visible"):void 0},t.prototype._activateFirstInput=function(){var t;return t=this.adapter.unwrap(this.adapter.find(this.container,"input, textarea")),t!=null?typeof t.focus=="function"?t.focus():void 0:void 0},t.prototype._followMousePosition=function(){return this.options.fixed?void 0:t._observeMousePosition(this.bound.reposition)},t.prototype._stopFollowingMousePosition=function(){return this.options.fixed?void 0:t._stopObservingMousePosition(this.bound.reposition)},t.prototype._clearShowTimeout=function(){return clearTimeout(this._showTimeoutId)},t.prototype._clearHideTimeout=function(){return clearTimeout(this._hideTimeoutId)},t.prototype._clearTimeouts=function(){return clearTimeout(this._visibilityStateTimeoutId),this._clearShowTimeout(),this._clearHideTimeout()},t.prototype._triggerElementExists=function(){var t;t=this.adapter.unwrap(this.triggerElement);while(t.parentNode){if(t.parentNode.tagName==="BODY")return!0;t=t.parentNode}return!1},t.prototype._loadAjax=function(){var t=this;if(!this.loading)return this.loaded=!1,this.loading=!0,this.adapter.addClass(this.container,this["class"].loading),this.setContent(""),this.debug("Loading content from "+this.options.ajax),this.adapter.ajax({url:this.options.ajax,method:this.options.ajaxMethod,onSuccess:function(e){return t.debug("Loading successful."),t.adapter.removeClass(t.container,t["class"].loading),t.setContent(e)},onError:function(e){var i;return i=t.options.ajaxErrorMessage,t.debug(i,e),t.setContent(i),t.adapter.addClass(t.container,t["class"].ajaxError)},onComplete:function(){return t.adapter.removeClass(t.container,t["class"].loading),t.loading=!1,t.loaded=!0,t._searchAndActivateCloseButtons(),t._activateFirstInput(),t.reposition()}})},t.prototype._ensureTriggerElement=function(){return this._triggerElementExists()?void 0:(this.deactivate(),this._stopEnsureTriggerElement())},t.prototype._ensureTriggerElementInterval=1e3,t.prototype._startEnsureTriggerElement=function(){var t=this;return this._ensureTriggerElementTimeoutId=setInterval(function(){return t._ensureTriggerElement()},this._ensureTriggerElementInterval)},t.prototype._stopEnsureTriggerElement=function(){return clearInterval(this._ensureTriggerElementTimeoutId)},t}(),vendors=["khtml","ms","o","moz","webkit"],Opentip.prototype.setCss3Style=function(t,e){var i,o,s,n,r;t=this.adapter.unwrap(t),r=[];for(i in e)__hasProp.call(e,i)&&(o=e[i],t.style[i]!=null?r.push(t.style[i]=o):r.push(function(){var e,r,a;for(a=[],e=0,r=vendors.length;r>e;e++)s=vendors[e],n=""+this.ucfirst(s)+this.ucfirst(i),t.style[n]!=null?a.push(t.style[n]=o):a.push(void 0);return a}.call(this)));return r},Opentip.prototype.defer=function(t){return setTimeout(t,0)},Opentip.prototype.setTimeout=function(t,e){return setTimeout(t,e?e*1e3:0)},Opentip.prototype.ucfirst=function(t){return t==null?"":t.charAt(0).toUpperCase()+t.slice(1)},Opentip.prototype.dasherize=function(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})},mousePositionObservers=[],mousePosition={x:0,y:0},mouseMoved=function(t){var e,i,o,s;for(mousePosition=Opentip.adapter.mousePosition(t),s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],s.push(e());return s},Opentip.followMousePosition=function(){return Opentip.adapter.observe(document.body,"mousemove",mouseMoved)},Opentip._observeMousePosition=function(t){return mousePositionObservers.push(t)},Opentip._stopObservingMousePosition=function(t){var e;return mousePositionObservers=function(){var i,o,s;for(s=[],i=0,o=mousePositionObservers.length;o>i;i++)e=mousePositionObservers[i],e!==t&&s.push(e);return s}()},Opentip.Joint=function(){function t(t){t!=null&&(t instanceof Opentip.Joint&&(t+=""),this.set(t))}return t.prototype.set=function(t){return t=t.toLowerCase(),this.setHorizontal(t),this.setVertical(t),this},t.prototype.setHorizontal=function(t){var e,i,o,s,n,r,a;for(i=["left","center","right"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.horizontal=e.toLowerCase());for(this.horizontal==null&&(this.horizontal="center"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.horizontal===e?e:void 0);return a},t.prototype.setVertical=function(t){var e,i,o,s,n,r,a;for(i=["top","middle","bottom"],o=0,n=i.length;n>o;o++)e=i[o],~t.indexOf(e)&&(this.vertical=e.toLowerCase());for(this.vertical==null&&(this.vertical="middle"),a=[],s=0,r=i.length;r>s;s++)e=i[s],a.push(this[e]=this.vertical===e?e:void 0);return a},t.prototype.eql=function(t){return t!=null&&this.horizontal===t.horizontal&&this.vertical===t.vertical},t.prototype.flip=function(){var t,e;return e=Opentip.position[this.toString(!0)],t=(e+4)%8,this.set(Opentip.positions[t]),this},t.prototype.toString=function(t){var e,i;return t==null&&(t=!1),i=this.vertical==="middle"?"":this.vertical,e=this.horizontal==="center"?"":this.horizontal,i&&e&&(e=t?Opentip.prototype.ucfirst(e):" "+e),""+i+e},t}(),Opentip.prototype._positionsEqual=function(t,e){return t!=null&&e!=null&&t.left===e.left&&t.top===e.top},Opentip.prototype._dimensionsEqual=function(t,e){return t!=null&&e!=null&&t.width===e.width&&t.height===e.height},Opentip.prototype.debug=function(){var t;return t=arguments.length>=1?__slice.call(arguments,0):[],Opentip.debug&&(typeof console!="undefined"&&console!==null?console.debug:void 0)!=null?(t.unshift("#"+this.id+" |"),console.debug.apply(console,t)):void 0},Opentip.findElements=function(){var t,e,i,o,s,n,r,a,h,p;for(t=Opentip.adapter,h=t.findAll(document.body,"[data-ot]"),p=[],r=0,a=h.length;a>r;r++){i=h[r],n={},e=t.data(i,"ot"),(e===""||e==="true"||e==="yes")&&(e=t.attr(i,"title"),t.attr(i,"title","")),e=e||"";for(o in Opentip.styles.standard)s=t.data(i,"ot"+Opentip.prototype.ucfirst(o)),s!=null&&(s==="yes"||s==="true"||s==="on"?s=!0:(s==="no"||s==="false"||s==="off")&&(s=!1),n[o]=s);p.push(new Opentip(i,e,n))}return p},Opentip.version="2.4.6",Opentip.debug=!1,Opentip.lastId=0,Opentip.lastZIndex=100,Opentip.tips=[],Opentip._abortShowingGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i._abortShowing()):r.push(void 0);return r},Opentip._hideGroup=function(t,e){var i,o,s,n,r;for(n=Opentip.tips,r=[],o=0,s=n.length;s>o;o++)i=n[o],i!==e&&i.options.group===t?r.push(i.hide()):r.push(void 0);return r},Opentip.adapters={},Opentip.adapter=null,firstAdapter=!0,Opentip.addAdapter=function(t){return Opentip.adapters[t.name]=t,firstAdapter?(Opentip.adapter=t,t.domReady(Opentip.findElements),t.domReady(Opentip.followMousePosition),firstAdapter=!1):void 0},Opentip.positions=["top","topRight","right","bottomRight","bottom","bottomLeft","left","topLeft"],Opentip.position={},_ref=Opentip.positions,i=_i=0,_len=_ref.length;_len>_i;i=++_i)position=_ref[i],Opentip.position[position]=i;Opentip.styles={standard:{"extends":null,title:void 0,escapeTitle:!0,escapeContent:!1,className:"standard",stem:!0,delay:null,hideDelay:.1,fixed:!1,showOn:"mouseover",hideTrigger:"trigger",hideTriggers:[],hideOn:null,removeElementsOnHide:!1,offset:[0,0],containInViewport:!0,autoOffset:!0,showEffect:"appear",hideEffect:"fade",showEffectDuration:.3,hideEffectDuration:.2,stemLength:5,stemBase:8,tipJoint:"top left",target:null,targetJoint:null,cache:!0,ajax:!1,ajaxMethod:"GET",ajaxErrorMessage:"There was a problem downloading the content.",group:null,style:null,background:"#fff18f",backgroundGradientHorizontal:!1,closeButtonOffset:[5,5],closeButtonRadius:7,closeButtonCrossSize:4,closeButtonCrossColor:"#d2c35b",closeButtonCrossLineWidth:1.5,closeButtonLinkOverscan:6,borderRadius:5,borderWidth:1,borderColor:"#f2e37b",shadow:!0,shadowBlur:10,shadowOffset:[3,3],shadowColor:"rgba(0, 0, 0, 0.1)"},glass:{"extends":"standard",className:"glass",background:[[0,"rgba(252, 252, 252, 0.8)"],[.5,"rgba(255, 255, 255, 0.8)"],[.5,"rgba(250, 250, 250, 0.9)"],[1,"rgba(245, 245, 245, 0.9)"]],borderColor:"#eee",closeButtonCrossColor:"rgba(0, 0, 0, 0.2)",borderRadius:15,closeButtonRadius:10,closeButtonOffset:[8,8]},dark:{"extends":"standard",className:"dark",borderRadius:13,borderColor:"#444",closeButtonCrossColor:"rgba(240, 240, 240, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(30, 30, 30, 0.7)"],[.5,"rgba(30, 30, 30, 0.8)"],[.5,"rgba(10, 10, 10, 0.8)"],[1,"rgba(10, 10, 10, 0.9)"]]},alert:{"extends":"standard",className:"alert",borderRadius:1,borderColor:"#AE0D11",closeButtonCrossColor:"rgba(255, 255, 255, 1)",shadowColor:"rgba(0, 0, 0, 0.3)",shadowOffset:[2,2],background:[[0,"rgba(203, 15, 19, 0.7)"],[.5,"rgba(203, 15, 19, 0.8)"],[.5,"rgba(189, 14, 18, 0.8)"],[1,"rgba(179, 14, 17, 0.9)"]]}},Opentip.defaultStyle="standard",typeof module!="undefined"&&module!==null?module.exports=Opentip:window.Opentip=Opentip;var __slice=[].slice;(function(t){var e;return t.fn.opentip=function(t,e,i){return new Opentip(this,t,e,i)},e=function(){function e(){}return e.prototype.name="jquery",e.prototype.domReady=function(e){return t(e)},e.prototype.create=function(e){return t(e)},e.prototype.wrap=function(e){if(e=t(e),e.length>1)throw Error("Multiple elements provided.");return e},e.prototype.unwrap=function(e){return t(e)[0]
},e.prototype.tagName=function(t){return this.unwrap(t).tagName},e.prototype.attr=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).attr.apply(o,e)},e.prototype.data=function(){var e,i,o;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],(o=t(i)).data.apply(o,e)},e.prototype.find=function(e,i){return t(e).find(i).get(0)},e.prototype.findAll=function(e,i){return t(e).find(i)},e.prototype.update=function(e,i,o){return e=t(e),o?e.text(i):e.html(i)},e.prototype.append=function(e,i){return t(e).append(i)},e.prototype.remove=function(e){return t(e).remove()},e.prototype.addClass=function(e,i){return t(e).addClass(i)},e.prototype.removeClass=function(e,i){return t(e).removeClass(i)},e.prototype.css=function(e,i){return t(e).css(i)},e.prototype.dimensions=function(e){return{width:t(e).outerWidth(),height:t(e).outerHeight()}},e.prototype.scrollOffset=function(){return[window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop]},e.prototype.viewportDimensions=function(){return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}},e.prototype.mousePosition=function(t){return t==null?null:{x:t.pageX,y:t.pageY}},e.prototype.offset=function(e){var i;return i=t(e).offset(),{left:i.left,top:i.top}},e.prototype.observe=function(e,i,o){return t(e).bind(i,o)},e.prototype.stopObserving=function(e,i,o){return t(e).unbind(i,o)},e.prototype.ajax=function(e){var i,o;if(e.url==null)throw Error("No url provided");return t.ajax({url:e.url,type:(i=(o=e.method)!=null?o.toUpperCase():void 0)!=null?i:"GET"}).done(function(t){return typeof e.onSuccess=="function"?e.onSuccess(t):void 0}).fail(function(t){return typeof e.onError=="function"?e.onError("Server responded with status "+t.status):void 0}).always(function(){return typeof e.onComplete=="function"?e.onComplete():void 0})},e.prototype.clone=function(e){return t.extend({},e)},e.prototype.extend=function(){var e,i;return i=arguments[0],e=arguments.length>=2?__slice.call(arguments,1):[],t.extend.apply(t,[i].concat(__slice.call(e)))},e}(),Opentip.addAdapter(new e)})(jQuery);

/* dt-language: (http://www.shengfenghe.com/qfy-content/themes/qfy-01/js/language.js) */
jQuery(function(){

	 if(jQuery.datepicker){

		 jQuery.datepicker.regional['zh-CN'] = {

			 closeText: '关闭',

			 prevText: '&#x3c;上月',

			 nextText: '下月&#x3e;',

			 currentText: '今天',

			 monthNames: ['一月','二月','三月','四月','五月','六月',

				 '七月','八月','九月','十月','十一月','十二月'],

			 monthNamesShort: ['一月','二月','三月','四月','五月','六月',

				 '七月','八月','九月','十月','十一月','十二月'],

			 dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],

			 dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],

			 dayNamesMin: ['日','一','二','三','四','五','六'],

			 weekHeader: '周',

			 dateFormat: 'yy-mm-dd',

			 firstDay: 1,

			 isRTL: false,

			 showMonthAfterYear: true,

			 yearSuffix: '年'};



		 jQuery.datepicker.regional['zh-TW'] = {

		        clearText: '清除',

		        clearStatus: '清除已選日期',

		        closeText: '關閉',

		        closeStatus: '不改變當前選擇',

		        prevText: '<上月',

		        prevStatus: '顯示上月',

		        prevBigText: '<<',

		        prevBigStatus: '顯示上壹年',

		        nextText: '下月>',

		        nextStatus: '顯示下月',

		        nextBigText: '>>',

		        nextBigStatus: '顯示下壹年',

		        currentText: '今天',

		        currentStatus: '顯示本月',

		        monthNames: ['壹月','二月','三月','四月','五月','六月', '七月','八月','九月','十月','十壹月','十二月'],

		        monthNamesShort: ['壹','二','三','四','五','六', '七','八','九','十','十壹','十二'],

		        monthStatus: '選擇月份',

		        yearStatus: '選擇年份',

		        weekHeader: '周',

		        weekStatus: '年內周次',

		        dayNames: ['星期日','星期壹','星期二','星期三','星期四','星期五','星期六'],

		        dayNamesShort: ['周日','周壹','周二','周三','周四','周五','周六'],

		        dayNamesMin: ['日','壹','二','三','四','五','六'],

		        dayStatus: '設置 DD 為壹周起始',

		        dateStatus: '選擇 m月 d日, DD',

		        dateFormat: 'yy-mm-dd',

		        firstDay: 1,

		        initStatus: '請選擇日期',

		        isRTL: false};



		if(dtGlobals.language==""){

			jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-CN']);

		}else if(dtGlobals.language=="2"){

			jQuery.datepicker.setDefaults(jQuery.datepicker.regional['zh-TW']); 

		}

	 }

	 if(jQuery.timepicker){

		jQuery.timepicker.regional['zh-CN'] = {

				currentText: '当前时间',

				closeText: '确认',

				timeOnlyTitle: '选择时间',

				timeText: '时间',

				hourText: '小时',

				minuteText: '分钟',

				secondText: '秒',

				millisecText: '毫秒',

				timezoneText: '时区',

		        isRTL: false}; 

		 jQuery.timepicker.regional['zh-TW'] = {

				currentText: '當前時間',

				closeText: '確認',

				timeOnlyTitle: '選擇時間',

				timeText: '時間',

				hourText: '小時',

				minuteText: '分鐘',

				secondText: '秒',

				millisecText: '毫秒',

				timezoneText: '時區',

		        isRTL: false}; 

		if(dtGlobals.language==""){

			jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-CN']); 

		}else if(dtGlobals.language=="2"){

			jQuery.timepicker.setDefaults(jQuery.timepicker.regional['zh-TW']); 

		}

	 }

	

})

;

/* dt-main: (http://www.shengfenghe.com/qfy-content/themes/qfy-01/js/main.js) */
//悬浮效果
(function($){$.fn.floatAd=function(l){var m={customhtml:"",close:1,closeHTML:"",speed:30,id_class:"",x:"0",y:"0"};var n=false;var l=$.extend(m,l);var o="<div id='qfy_float_ad' class='"+l.id_class+"' style='position:absolute;left:0px;top:0px;z-index:1000000;cleat:both;'>";o+=l.customhtml;if(l.close=="1"){if(l.closeHTML==""){o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' style='position:absolute;width:30px;height:16px;top:-18px;right:0px;cursor:pointer;float:right;font-size:14px'>关闭</div></div>"}else{o+="<div id='qfy_close_f_ad' class='"+l.id_class+"' >"+l.closeHTML+"</div></div>"}}$('body').append(o);function qfy_ad_init(){var x=l.x,y=l.y+$(window).scrollTop();var g=true,yin=true;var h=1;var i=10;var j=$("#qfy_float_ad."+l.id_class);var k=function(){var L=0,T=$(window).scrollTop();var a=j.width();var b=j.height();var c=$(window).width();var d=$(window).height()+$(window).scrollTop();x=x+h*(g?1:-1);if(x<L){g=true;x=L}if(x>c-a-1){g=false;x=c-a-1}y=y+h*(yin?1:-1);if(y>d-b-10){yin=false;y=d-b-10}if(y<T){yin=true;y=T}var e=x;var f=y;j.css({'top':f,'left':e})};n=setInterval(k,l.speed);$('#qfy_float_ad.'+l.id_class).mouseover(function(){if(n){clearInterval(n)}});$('#qfy_float_ad.'+l.id_class).mouseout(function(){n=setInterval(k,l.speed)})}qfy_ad_init();$('#qfy_close_f_ad.'+l.id_class).click(function(){jQuery("body").removeClass('dialog-open');$('#qfy_float_ad.'+l.id_class+',#QFY_overlay.'+l.id_class).remove();clearInterval(n)})}})(jQuery);

function get_browser_name(){var e=window.navigator.userAgent;return-1<e.indexOf("Opera")||-1<e.indexOf("OPR/")?"Opera":-1<e.indexOf("Edge")?"Edge":-1<e.indexOf("Chrome")?"Chrome":-1<e.indexOf("Safari")?"Safari":-1<e.indexOf("Firefox")?"Firefox":-1<e.indexOf("MSIE")||-1<e.indexOf("Trident/7")?"IE":"Other"}

//背景图片自适应
//https://css-tricks.com/almanac/properties/o/object-fit/
(function($){
	function coverFillSwitch(container,img,invert){if(!container||!img){return false}var imgHeight=img.naturalHeight||img.videoHeight;var imgWidth=img.naturalWidth||img.videoWidth;var containerRatio=container.offsetWidth/container.offsetHeight;var imgRatio=imgWidth/imgHeight;var ratioComparison=false;if(imgRatio>=containerRatio){ratioComparison=true}if(invert){ratioComparison=!ratioComparison}if(ratioComparison){img.style.height="100%";img.style.width="auto"}else{img.style.height="auto";img.style.width="100%"}}function objectFitResize(){var i,img,container;var imgsCover=document.getElementsByClassName("section-background-video");for(i=0;i<imgsCover.length;i++){img=imgsCover[i];container=img.parentElement;if(container.classList.contains("background-media")){coverFillSwitch(container,img)}}}function applyStandardProperties(container,img){var containerStyle=window.getComputedStyle(container);if(containerStyle.overflow!=="hidden"){container.style.overflow="hidden"}if(containerStyle.position!=="relative"&&containerStyle.position!=="absolute"&&containerStyle.position!=="fixed"){container.style.position="relative"}img.style.position="absolute";img.style.top="50%";img.style.left="50%";img.style.transform="translate(-50%,-50%)"}function objectFitInt(){var imgs=document.getElementsByClassName("section-background-video");for(var i=0;i<imgs.length;i++){var type="cover";var img=imgs[i];var container=img.parentElement;switch(type){case"container":break;case"cover":coverFillSwitch(container,img);applyStandardProperties(container,img);break;case"contain":coverFillSwitch(container,img,true);applyStandardProperties(container,img);break;case"fill":img.style.height="100%";img.style.width="100%";applyStandardProperties(container,img);break;case"none":img.style.height="auto";img.style.width="auto";applyStandardProperties(container,img);break;case"scale-down":img.style.maxHeight="100%";img.style.maxWidth="100%";img.style.height="auto";img.style.width="auto";applyStandardProperties(container,img);break;default:break}}}var resizeTimeout;function resizeThrottler(){if(!resizeTimeout){resizeTimeout=setTimeout(function(){resizeTimeout=null;objectFitResize()},66)}}
	var $ua = get_browser_name();
	if(($ua=="Edge" || $ua=="IE") && !is_edit_model ){
		resizeThrottler();
		window.addEventListener("resize",resizeThrottler,false);
	}
})(jQuery);
window.onload = function() {
    if(!document.hasOwnProperty("ontouchstart")) {
    	 jQuery("html").addClass("no-touch");
    }
};

function resetSectionHeight() {
	var h = jQuery(window).height();
	var body_w = jQuery("body").width();
	var na = ".section.minperheight";
	var tl = ":not(.fixheight)";
	var heights = [5, 10, 15, 20, 30, 40, 50, 60, 70, 80, 90, 100];

	if (body_w > 760) {
		for(var i=0; i<heights.length; i++){
			var L = heights[i];
			if (jQuery(na+L+tl).length > 0) {
				jQuery(na+L+tl).css("min-height", h*(L/100) + "px");
			}
		}
		jQuery(".section.fixheight").each(function() {
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if (w > 0) {
				var h = w * fixheight;
				jQuery(this).height(h);
				jQuery(this).css("min-height", h + "px");
			}
		});
		jQuery(".qfy-column-inner.fixheight").each(function() {
			var fixheight = jQuery(this).attr("data-fixheight");
			var w = jQuery(this).width();
			if (w > 0) {
				var h = w * fixheight;
				if (jQuery(this).closest(".section.fixheight").length > 0) {
					h = jQuery(this).closest(".section.fixheight").height();
				}
				jQuery(this).height(h);
				jQuery(this).css("min-height", h + "px");
				jQuery(this).find(">.column_inner").css("min-height", h + "px");
			}
		})
	} else {
		for(var i=0; i<heights.length; i++){
			var L = heights[i];
			if (jQuery(na+L).length > 0) {
				jQuery(na+L).css("min-height", h/(L/100) + "px");
			}
		}
	}
}

var last_size_mobile = false;
var size_mobile = false;
function resizeDefaultObjSize(){
	if(dtGlobals.isMobile==false){
		 if(jQuery("body").width()<768){
			 size_mobile = "mobile";
			 if(!last_size_mobile) last_size_mobile ="mobile";
		 }else{
			 size_mobile = "pc";
			 if(!last_size_mobile) last_size_mobile ="pc";
		 }
		 if(size_mobile!=last_size_mobile){
			 last_size_mobile = size_mobile;
			 jQuery(".qfy-element").each(function(){
					var m_padding = jQuery(this).attr("m-padding");
					var p_padding = jQuery(this).attr("p-padding");
					if(size_mobile=="mobile"){
						if(m_padding ){
							jQuery(this).css("padding",m_padding);
						}
					}else{
						if(p_padding ){
							jQuery(this).css("padding",p_padding);
						}
					}

			 });

		 }
	}


	if(jQuery(".qfe_map_wraper iframe").length>0){
			jQuery(".qfe_map_wraper iframe").each(function(){
				var oh = jQuery(this).parent().attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).parent().height((width*2/4)+"px");
					}
				}
			})
		}
		if(jQuery(".vc_bit_raw_video").length>0){
			jQuery(".vc_bit_raw_video").each(function(){
				var oh = jQuery(this).attr("style");
				if(typeof(oh) =="undefined"){
					var width = jQuery(this).width();
					if(width>0){
						jQuery(this).height((width*2/4)+"px");
					}
				}
			})
		}
		resetSectionHeight();
		column_init_align();
}
function resize_royalSlider_gallery_new(org_obj){
	jQuery(".qfy-tabcontent .royalSlider_gallery_new").each(function(){
		var obj = jQuery(this);
		setTimeout(function(){
			var h1 = obj.find(".rsOverflow").height();
			var h2 = obj.find(".rsSlide.rsActiveSlide").height();
			if(h2>0 && h1!=h2){
				obj.find(".rsOverflow").height(h2);
			}
		},200);
	})

}
function searchForm(obj){
	if(typeof(obj)=="undefined"){
		obj = jQuery('.site_tooler .searchform .submit,.search_contain .searchform .submit');
	}

	/*--search*/
	obj.unbind().on('click', function(e) {
		e.preventDefault();
		jQuery(this).siblings('input.searchsubmit').click();
		return false;
	});

}
function qfy_setCookie(c_name, value, exdays) {
	  var exdate = new Date();
	  exdate.setDate(exdate.getDate() + exdays);
	  var c_value = encodeURIComponent(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
	  document.cookie = c_name + "=" + c_value;

	}
function mobile_menu_fix(){
	if(jQuery("#dl-menu").length==0){
		return;
	}
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery("#dl-menu").offset().top + jQuery("#dl-menu").height();

	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;

		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery("#dl-menu").addClass("positionFixed");
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery("#dl-menu").removeClass("positionFixed");
		};
		top_scrTop = jQuery(window).scrollTop();

	});
}
function mobile_menu_fix_2(){
	var top_scrTop = 0,top_scrDir = 0,top_scrUp = false,top_scrDown = false,top_isMoved = false;
	var top_threshold = jQuery(".dl-menu-fixedheader").height();
	if( jQuery(".dl-menu-fixed-blank").length==0 && jQuery("#page").css("position")!="absolute"){
	jQuery(".dl-menu-fixedheader").after("<div class='dl-menu-fixed-blank' style='display:none;height:"+top_threshold+"px;'></div>");
	}

	jQuery(window).on("scroll", function() {
		var top_tempCSS = {},top_tempScrTop = jQuery(window).scrollTop();

		top_scrDir = top_tempScrTop - top_scrTop;

		if(top_scrDir>0){
			jQuery("body").removeClass("scroll-uping").addClass("scroll-downing");
		}else if(top_scrDir<0){
			jQuery("body").addClass("scroll-uping").removeClass("scroll-downing");
		}
		if (top_tempScrTop > top_threshold && top_isMoved === false) {
			top_isMoved = true;
			jQuery(".dl-menu-fixedheader").css("position","fixed");
			jQuery("body").addClass("fixedheadering");
			jQuery(".dl-menu-fixed-blank").show();
		}
		else if (top_tempScrTop <= top_threshold && top_isMoved === true) {
			top_isMoved = false;
			jQuery(".dl-menu-fixedheader").css("position","relative");
			jQuery("body").removeClass("fixedheadering");
			jQuery("body").removeClass("fixedheadering scroll-uping scroll-downing");
			jQuery(".dl-menu-fixed-blank").hide();
		};
		top_scrTop = jQuery(window).scrollTop();

	});
}
function _image_popup_flexslider(startAt){
	jQuery(".image_popup .qfe_flexslider").flexslider({
	       animation: "slide",
	       slideshow: false,
	       slideshowSpeed: 10000,
	       sliderSpeed: 800,
	       controlNav: 1,
	       directionNav: 1,
	       smoothHeight: true,
		   startAt:startAt,
		   start: function(){
			   var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   if(localvideo.length>0){
				   if(localvideo.get(0).currentTime==0){
					   jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
				   }
			   }
			  var videoiframe =  jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
			  if(videoiframe.length>0 && !videoiframe.attr("src") ){
				  videoiframe.attr("src",videoiframe.attr("data-src"));
			  }
		   },
		   before: function(){
			   //var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   //if(localvideo.length>0){
					 //jQuery(".image_popup .flex-active-slide video.localvideo").get(0).stop();
			  // }
		   },
		   after: function(){
			   var localvideo =  jQuery(".image_popup .flex-active-slide video.localvideo");
			   if(localvideo.length>0){
				   if(localvideo.get(0).currentTime==0){
					   jQuery(".image_popup .flex-active-slide video.localvideo").get(0).play();
				   }
			   }
			   var videoiframe =  jQuery(".image_popup .flex-active-slide iframe.media-cloud-iframe");
			   if(videoiframe.length>0 && !videoiframe.attr("src") ){
				  videoiframe.attr("src",videoiframe.attr("data-src"));
			   }
		   },
	     });
}
function initmouseover(){

	jQuery(".mouseHover").live({
	  mouseenter: function() {
		jQuery(this).addClass("hover");

	  },
	  mouseleave: function() {
		jQuery(this).removeClass("hover");
	  }
	});
	jQuery("a.bitButton").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).css("background",backgroundhovercolor);
					jQuery(this).css("transition",str);
					jQuery(this).removeAttr('onmouseover');
					jQuery(this).removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).css("border","1px solid "+borderhovercolor);
					jQuery(this).css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).css("border-color",bordercolor);
				}
		  }
		});

	jQuery("a.bitIcon").live({
		  mouseenter: function() {
			  	var delay = jQuery(this).attr("delay");
				var str = "";
				if(delay &&delay!="0"){
					str = "all "+delay+" linear";
				}
			  	var texthovercolor=jQuery(this).attr("texthovercolor");
				if(texthovercolor){
					jQuery(this).find(".iconText").css("color",texthovercolor);
					jQuery(this).find(".iconText").css("transition",str);
				}
				var iconhovercolor=jQuery(this).attr("iconhovercolor");
				if(iconhovercolor){
					jQuery(this).find("i.glyphicon").css("color",iconhovercolor);
					jQuery(this).find("i.glyphicon").css("transition",str);
				}
				var backgroundhovercolor=jQuery(this).attr("backgroundhovercolor");
				if(backgroundhovercolor){
					jQuery(this).find("b").css("background",backgroundhovercolor);
					jQuery(this).find("b").css("transition",str);
					jQuery(this).find("b").removeAttr('onmouseover');
					jQuery(this).find("b").removeAttr('onmouseout');
				}
				var borderhovercolor=jQuery(this).attr("borderhovercolor");
				if(borderhovercolor){
					jQuery(this).find("b").css("border","1px solid "+borderhovercolor);
					jQuery(this).find("b").css("transition",str);
				}
		  },
		  mouseleave: function() {
			   jQuery(this).css("transition","");
			  	var textcolor=jQuery(this).attr("textcolor");
				if(textcolor){
					jQuery(this).find(".iconText").css("color",textcolor);
				}
				var iconcolor=jQuery(this).attr("iconcolor");
				if(iconcolor){
					jQuery(this).find("i.glyphicon").css("color",iconcolor);
				}
				var backgroundcolor=jQuery(this).attr("backgroundcolor");
				if(backgroundcolor){
					jQuery(this).find("b").css("background",backgroundcolor);
				}
				var bordercolor=jQuery(this).attr("bordercolor");
				if(bordercolor){
					jQuery(this).find("b").css("border-color",bordercolor);
				}
		  }
		});

	if(jQuery("a.list_popup").length>0){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/list_popup.js", function(){initQfyPopup()});
	};

	//
	jQuery("a.qfy_thickbox").live({
		  click: function(e) {
			  e.preventDefault();
			  if( top.jQuery(".qfy_gallerys").length>0){
				  return false;
			  }
			  var default_img = jQuery(this).attr("href");
			  var thumbPath = jQuery(this).attr("thumbPath");
			  if(!thumbPath) thumbPath = default_img;
			  var i = 0;
			  var qfy_imglists= Array();
			  jQuery("a.qfy_thickbox").each(function(){
				var href = jQuery(this).attr("href");
				var thumbPath = jQuery(this).attr("thumbPath");
				if(!thumbPath) 	thumbPath = href;

				if(href!=default_img && href!= undefined){
					 qfy_imglists[i] = href+"|^|"+thumbPath;
					 i++;
				}
			  })

			  top.jQuery("body").append('<div class="qfy_gallerys" style="position:fixed;top:0;left:0;width:100%;height:0;z-index:20000;"><iframe src="/FeiEditor/bitSite/gallerys?bgcolor='+encodeURIComponent(dtGlobals.gallery_bgcolor)+'&tfamily='+encodeURIComponent(dtGlobals.gallery_tfamily)+'&dfamily='+encodeURIComponent(dtGlobals.gallery_dfamily)+'&blankclose='+encodeURIComponent(dtGlobals.gallery_blankclose)+"&arrowstyle="+encodeURIComponent(dtGlobals.gallery_arrowstyle)+'&showthumbs='+dtGlobals.gallery_showthumbs+'&style='+dtGlobals.gallery_style+'&autoplay='+dtGlobals.gallery_autoplay+'&playspeed='+dtGlobals.gallery_playspeed+'&imagesize='+dtGlobals.gallery_imagesize+'&imageheight='+dtGlobals.gallery_imageheight+'&stopbutton='+dtGlobals.gallery_stopbutton+'&thumbsposition='+dtGlobals.gallery_thumbsposition+'&tsize='+dtGlobals.gallery_tsize+'&tcolor='+encodeURIComponent(dtGlobals.gallery_tcolor)+'&dsize='+dtGlobals.gallery_dsize+'&dcolor='+encodeURIComponent(dtGlobals.gallery_dcolor)+'&default_img='+default_img+'&thumbPath='+thumbPath+'&time='+Math.random()+'" width="100%" height="100%" border=0 style="border:0;" /></div>')
			  top.jQuery(".qfy_gallerys").animate({height:"100%"});
			  return false;
		  }
		});


	qfy_a_video_event();
}

//可以单独加载，有视频的时候
function qfy_a_video_event(){


	if(!jQuery("body").hasClass("compose-mode") && !is_edit_model){
		var $is_has_video = false;
		jQuery("a").each(function(){
			var href = jQuery(this).attr("href");
			if(href) href = href.toLowerCase();
			if(href && href.indexOf("/api/video-server/play.php")>-1){
				$is_has_video = true;
			}else if(href && href.indexOf("iframe.php?video_mp4_local=")>-1 && href.indexOf("size=")>-1 && href.indexOf("&auto=")>-1){
				$is_has_video = true;
			}
		})
		if($is_has_video){
			jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-video.js", function(){
				qfy_a_video_event_init();
			});
		}
	}


}

function qfy_custom_select(){
	jQuery(".qfy_custom_select").each(function(){
		var fun = jQuery(this).attr("data-fun");
		var ids = '['+jQuery(this).attr("data-ids")+']';
		var urls = jQuery(this).attr("data-urls");
		if(ids!=""){
			jQuery(this).cxSelect({
				  selects: eval(ids),
				  required: true,
				  url: eval(urls),
				});
		}
	})
}

function thebackground(qfy_bg_images,time) {
	if(screen.width<760){
		return false;
	}
	var tmp_qfy_bg_images = qfy_bg_images.split("|^^|");
	var str ="";
	var bodyColor = jQuery("body").css("background-color");
	var bodyrepeat = jQuery("body").css("background-repeat");
	var bodyattachment = jQuery("body").css("background-attachment");
	var bodyposition = jQuery("body").css("background-position");
	var bodysize = jQuery("body").css("background-size");


	for(i=0;i<tmp_qfy_bg_images.length;i++){
		var img = tmp_qfy_bg_images[i];
		if(i==0){
			str += '<div style="position: absolute;opacity: 1;height:100%;width:100%;background:url('+img+')"  class="show"></div>';
		}else{
			str += '<div style="position: absolute;opacity: 0;height:100%;width:100%;background:url('+img+')"  ></div>';
		}
	}
	jQuery("body").prepend('<div class="qfy_body_background" style="width:100%;height:100%;left: 0;;position: fixed;top: 0;z-index: -1;"> '+str+'</div>');
	jQuery("body .qfy_body_background > div").css("background-color",bodyColor).css("background-repeat",bodyrepeat).css("background-attachment",bodyattachment).css("background-position",bodyposition).css("background-size",bodysize);
	jQuery('div.qfy_body_background div').css({opacity: 0.0});
	jQuery('div.qfy_body_background div:first').css({opacity: 1.0});

	setInterval(function(){
		var current = (jQuery('div.qfy_body_background div.show')? jQuery('div.qfy_body_background div.show') : jQuery('div.qfy_body_background div:first'));
		if ( current.length == 0 ) current = jQuery('div.qfy_body_background div:first');
		var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div.qfy_body_background div:first') :current.next()) : jQuery('div.qfy_body_background div:first'));
		next.css({opacity: 0.0})
		.addClass('show')
		.animate({opacity: 1.0}, 1000);
		current.animate({opacity: 0.0}, 1000)
		.removeClass('show');
	},time*1000);


}

function vc_3d_photo(){
	if(jQuery(".qfy-360viewer").length>0) {
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-3d-photo.js", function () {
			vc_3d_photo_init();
		});
	}
}

function vc_element_init(){
	if(dtGlobals.isMobile==false && jQuery("body").width()<768){
		jQuery(".qfy-element").each(function(){
			var m_padding = jQuery(this).attr("m-padding");
			if(m_padding ){
				jQuery(this).css("padding",m_padding);
			}
		});
	}
}
function right_nav_bar(){
	if( jQuery(".right_nav_bar").length>0 && document.domain){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-right-navbar.js", function(){
			right_nav_bar_init();
		});
	}
}


function dropdownmenu_event(obj){

	 var $this = jQuery(obj);
	 var p = $this.closest(".dropdown_container");
	 if(p.find(".list-content").hasClass("active")){
		 p.find(".list-content").removeClass("active");
		 p.closest("section").removeClass("overflowauto");
		 p.closest(".qfy-column-inner").removeClass("overflowauto");
	 }else{
		 p.find(".list-content").addClass("active");
		 p.closest("section").addClass("overflowauto");
		 p.closest(".qfy-column-inner").addClass("overflowauto");
	 }

}
function column_init_align(){

	var w = jQuery("body").width();
	jQuery('.qfy-column-inner.column_middle').each(function(){

		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var section = jQuery(this).closest("section.section");
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");
		var pheight = section.height();
		var padding = 0;
		if(pheight<heigth ) pheight = heigth;
		if(t1>0 || t2>0){
			if( (pheight*1-heigth) < (t1-t2)){
				if(pheight*1==heigth){
					padding = (t2*1-t1*1)/2;
				}else{
					padding = (t2*1-t1*1-heigth)/2;
				}
			}else if( (pheight*1-heigth) < (t2-t1)){
				padding = t2*1-t1*1+(heigth-pheight)/2;
			}else{
				padding = (t2*1-t1*1)/2;
			}
		}

		if(jQuery(this).siblings(".qfy-column-inner").length>0){
			if(w>760){
				jQuery(this).css("margin-top",((pheight-heigth)/2 + padding)+"px");
			}
		}else{
			jQuery(this).css("margin-top",((pheight-heigth)/2+ padding)+"px");
		}

	})
	jQuery('.qfy-column-inner.column_bottom').each(function(){
		var section = jQuery(this).closest("section.section");
		jQuery(this).css("margin-top",0).css("margin-bottom",0);
		var heigth = jQuery(this).height();
		var t1 = section.css("padding-top").replace("px","");
		var t2 = section.css("padding-bottom").replace("px","");

		var $this = this;
		if(is_edit_model){
			setTimeout(function(){
				var pheight = section.height();
				if(pheight<heigth) pheight = heigth;
				if(section.find(".qfy-column-inner").length>1){
					if(w>760){
						jQuery($this).css("margin-top",(pheight-heigth)+"px");
					}
				}else{
					jQuery($this).css("margin-top",(pheight-heigth)+"px");
				}
			},80);
		}else{
			var pheight = section.height();
			if(pheight<heigth) pheight = heigth;
			if(section.find(".qfy-column-inner").length>1){
				if(w>760){
					jQuery(this).css("margin-top",(pheight-heigth)+"px");
				}
			}else{
				jQuery(this).css("margin-top",(pheight-heigth)+"px");
			}
		}

	})

}
function vc_royalSlider_gallery_init(){
	if(  jQuery('.royalSlider_gallery_new').length==0 ){
		return;
	}

	 if(typeof jQuery.fn.royalSlider=="undefined"){
		 jQuery.onDemandScript("/FeiEditor/bitSite/js/jquery.royalslider.min.js",function() {
			 _vc_royalSlider_gallery_init();
		 })
	 }else{
		 _vc_royalSlider_gallery_init();
	 }
}

function accordioncontent(){
	 jQuery('.qfy-accordioncontent:not(.changed)').each(function(){
		 jQuery(this).addClass("changed").find('.a_content').each(function(){
			 var p = jQuery(this).parent();
			 jQuery(this).find('> section').each(function(index){
				 var curr = p.find(".a_header h4:eq("+index+")");
				 var text = curr.html();
				 if(text){
					jQuery(this).before('<h4 class="panel-title" >'+text+'</h4>');
					jQuery(this).prev().find(".line").remove();
				 }

				 if(curr.find(".line").length>0){
					 var line = "<h5 class='qfydownline' style='position:relative;z-index:5;margin:0;padding:0;opacity:1;'>"+curr.find(".line").clone().prop("outerHTML")+"</h5>";
					 jQuery(this).after(line);
				 }
			 })
		 })
	 })


}
jQuery(window).load(function() {
	if(!is_edit_model){
		resizeDefaultObjSize();
	}
});
//处理锚点
var hash = window.location.hash;
_menu_link_event(hash);

function lottieReady($){
	if($(".animentor-lottie-widget").length==0){
		return;
	}
	if(typeof lottie=="undefined"){
		$.onDemandScript("/FeiEditor/bitSite/js/lottie.min.js",function() {
			_lottieReady($);
		})
	}else{
		_lottieReady($);
	}
}
function mousemove_animate_fun($){

	$(document).bind('mousemove', function (e) {
		var document_width = $(window).width();
		var document_height = $(window).height();
		var scroll = $(document).scrollTop();
		var per_x = (e.pageX / document_width).toFixed(3);
		var per_y = ((e.pageY - scroll) / document_height).toFixed(3);
		$('[data-mouse-animate="move"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
			var z = $(this).attr("data-mouse-z") ? $(this).attr("data-mouse-z") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			var dw = $(this).attr("data-mouse-dw") == 1 ? "vw" : "px";
			if(type==0){
				var n_x = x * 1 + (x1 - x) * per_x;
				var n_y = y * 1 + (y1 - y) * per_y;
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
				var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "translate3d(" + n_x + dw + ", " + n_y + dw + ", 0)");
			//.....
			if($(this).hasClass("qfy-element")){
				$(this).parents(".section").addClass("overflowauto");
			}

		})
		$('[data-mouse-animate="scale"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			if(type==0) {
				var n_x = x * 1 + (x1 - x) *(per_x>per_y?per_x:per_y);
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "scale("+n_x+")");
			if($(this).hasClass("qfy-element")) {
				$(this).parents(".section").addClass("overflowauto");
			}
		});
		$('[data-mouse-animate="rotate"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
			var z = $(this).attr("data-mouse-z") ? $(this).attr("data-mouse-z") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
			var z1 = $(this).attr("data-mouse-z1") ? $(this).attr("data-mouse-z1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			if(type==0){
				var n_x = x * 1 + (x1 - x) * per_x;
				var n_y = y * 1 + (y1 - y) * per_y;
				var n_z = z * 1 + (z1 - z) * per_x;
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
				var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
				var n_z = z * 1 + (z1 - z) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "rotateX(" + n_x + "deg) rotateY(" + n_z + "deg) rotateZ(" + n_y + "deg) ");
			if($(this).hasClass("qfy-element")) {
				$(this).parents(".section").addClass("overflowauto");
			}
		});
		$('[data-mouse-animate="skew"]').each(function () {
			var x = $(this).attr("data-mouse-x") ? $(this).attr("data-mouse-x") : 0;
			var y = $(this).attr("data-mouse-y") ? $(this).attr("data-mouse-y") : 0;
			var x1 = $(this).attr("data-mouse-x1") ? $(this).attr("data-mouse-x1") : 0;
			var y1 = $(this).attr("data-mouse-y1") ? $(this).attr("data-mouse-y1") : 0;
			var type = $(this).attr("data-mouse-animate-type") ? $(this).attr("data-mouse-animate-type") : 0;
			if(type==0) {
				var n_x = x * 1 + (x1 - x) * per_x;
				var n_y = y * 1 + (y1 - y) * per_y;
			}else{
				var n_x = x * 1 + (x1 - x) * (type == "1" ? per_x : per_y);
				var n_y = y * 1 + (y1 - y) * (type == "1" ? per_x : per_y);
			}
			$(this).css("transform", "skew(" + n_x + "deg, " + n_y + "deg)");
			if($(this).hasClass("qfy-element")) {
				$(this).parents(".section").addClass("overflowauto");
			}
		});
	});
}
function scroll_animate_fun($){
	var ismobile = /Mobile/.test(navigator.userAgent);
	$(document).bind('scroll', function (e) {
		var curr_p = $(this).scrollTop();
		var scollheight = $(document).height() - $(window).height();
		if ($(document).width() < 760) {
			ismobile = true;
		}
		var per_x = (curr_p / scollheight).toFixed(3);
		$('[data-scroll-animate="move"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
			var dw = $(this).attr("data-scroll-dw") == 1 ? "vw" : "px";
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			var n_x = x * 1 + (x1 - x) * per_x;
			var n_y = y * 1 + (y1 - y) * per_x;
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "translate3d(" + n_x + dw + ", " + n_y + dw + ", 0)");
				if($(this).hasClass("qfy-element")) {
					$(this).parents(".section").addClass("overflowauto");
				}
			}

		})
		$('[data-scroll-animate="scale"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var n_x = x * 1 + (x1 - x) * per_x;
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "scale(" + n_x + ")");
				if($(this).hasClass("qfy-element")) {
					$(this).parents(".section").addClass("overflowauto");
				}
			}
		});
		$('[data-scroll-animate="rotate"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
			var z = $(this).attr("data-scroll-z") ? $(this).attr("data-scroll-z") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
			var z1 = $(this).attr("data-scroll-z1") ? $(this).attr("data-scroll-z1") : 0;
			var n_x = x * 1 + (x1 - x) * per_x;
			var n_y = y * 1 + (y1 - y) * per_x;
			var n_z = z * 1 + (z1 - z) * per_x;
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "rotateX(" + n_x + "deg) rotateY(" + n_z + "deg) rotateZ(" + n_y + "deg) ");
				if($(this).hasClass("qfy-element")) {
					$(this).parents(".section").addClass("overflowauto");
				}
			}
		});
		$('[data-scroll-animate="skew"]').each(function () {
			var x = $(this).attr("data-scroll-x") ? $(this).attr("data-scroll-x") : 0;
			var y = $(this).attr("data-scroll-y") ? $(this).attr("data-scroll-y") : 0;
			var x1 = $(this).attr("data-scroll-x1") ? $(this).attr("data-scroll-x1") : 0;
			var y1 = $(this).attr("data-scroll-y1") ? $(this).attr("data-scroll-y1") : 0;
			var type = $(this).attr("data-scroll-animate-type") ? $(this).attr("data-scroll-animate-type") : 0;
			var n_x = x * 1 + (x1 - x) * per_x;
			var n_y = y * 1 + (y1 - y) * per_x;
			var si = $(this).attr("data-scroll-i") ? $(this).attr("data-scroll-i") : '';
			if ((ismobile && (si != 1)) || (!ismobile && (si != 2))) {
				$(this).css("transform", "skew(" + n_x + "deg, " + n_y + "deg)");
				if($(this).hasClass("qfy-element")){
					$(this).parents(".section").addClass("overflowauto");
				}
			}
		});
	});
}

function shape_ready(){
	if(jQuery(".shape_image_svg").length==0){
		return;
	}
	if(typeof anime=="undefined"){
		jQuery.onDemandScript("/FeiEditor/bitSite/js/anime.min.js",function() {
			jQuery(".shape_image_svg:not(.loaded)").each(function(){
				var shapeEl = jQuery(this).find("path")[0];
				var pos = jQuery(this).attr("data-path");
				var duration = jQuery(this).attr("data-t");
				var begin = jQuery(this).attr("data-begin");
				var end = jQuery(this).attr("data-end");
				if(pos==99){
					if(begin && end && begin.indexOf(",")>-1&& end.indexOf(",")>-1){
						shape_loop_init(shapeEl,pos,duration*1,begin,end,jQuery(this).parent().hasClass("background-shapes"));
					}
				}else{
					shape_loop_init(shapeEl,pos-1,duration*1,"","",jQuery(this).parent().hasClass("background-shapes"));
				}

				jQuery(this).addClass("loaded");
			})
		})
	}else{

		jQuery(".shape_image_svg:not(.loaded)").each(function(){
			var shapeEl = jQuery(this).find("path")[0];
			var pos = jQuery(this).attr("data-path");
			var duration = jQuery(this).attr("data-t");
			var begin = jQuery(this).attr("data-begin");
			var end = jQuery(this).attr("data-end");

			if(pos==99){
				if(begin && end && begin.indexOf(",")>-1&& end.indexOf(",")>-1){
					shape_loop_init(shapeEl,pos,duration*1,begin,end,jQuery(this).parent().hasClass("background-shapes"));
				}
			}else{
				shape_loop_init(shapeEl,pos-1,duration*1,"","",jQuery(this).parent().hasClass("background-shapes"));
			}
			jQuery(this).addClass("loaded");
		})
	}


}


jQuery(document).ready(function($) {

	if( $('[data-mouse-animate]').length>0 || is_edit_model ){
		mousemove_animate_fun($);
	}
	if( $('[data-scroll-animate]').length>0 || is_edit_model) {
		scroll_animate_fun($);
	}
	//滚动...
	if($("#phantom").css("display")=="block"){
		var floatMenuH = $("#phantom").height();
	}else{
		var floatMenuH = 0;
	}
	var urlHash = "#" + window.location.href.split("#")[1];
	if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
		if(urlHash!= "#undefined"){
			$("html").animate({
				scrollTop: $(".one-page-row div[data-anchor='" + urlHash + "']").offset().top - floatMenuH + 1
			}, 600, function(){
				$("body").removeClass("is-scroll");
			});
		}
	}else{
		if(urlHash.indexOf("=")<0 && $(urlHash).length > 0){
			$("body").addClass("is-scroll");
			setTimeout(function(){
				$("html").animate({
					scrollTop:  $(urlHash).offset().top
				}, 600, function(){
					jQuery("#parallax-nav a[href='"+urlHash+"']").closest("li").addClass("active");
					$("body").removeClass("is-scroll");
					parallax_scroll_fun();
				});
			},500);

		}else{
			parallax_scroll_fun();
		}
	}
	//滚动...end
	//...check body
	vc_element_init();
	//侧边栏
	right_nav_bar();
	//底部菜单
	jQuery(".footerbar-menu .menu-item-has-children>a").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		var submenu = jQuery(this).next(".sub-menu");
		if(submenu.css("display")=="none"){
			submenu.css("display","block");
		}else{
			submenu.css("display","none");
		}
	})
	//背景多个图片切换
	if(typeof(qfy_bg_images)!= "undefined"){
		thebackground(qfy_bg_images,qfy_bg_images_int);
	}
	//图片加载完再执行一下resize
	if(jQuery(".preloadimg:not('.loaded')").length>0){
		setTimeout(function(){
				jQuery(".preloadimg:not('.loaded')").each(function(){
					var newurl = jQuery(this).attr("org-src");
					jQuery(this).attr("src",newurl).addClass("loaded").load(function(){
						var newscrset = jQuery(this).attr("org-srcset");
						if(newscrset){
							jQuery(this).attr("srcset",newscrset);
						}
						resizeDefaultObjSize();
					});
				});
		},300);
	}

	//多级选择
	qfy_custom_select();


	if(!is_edit_model){
		$(".qfy-text a[url-flagtarget='_blank']").attr("target","_blank");
		$(".qfy-text a[url-flagtarget='']").removeAttr("target");
	}
	if(top!=self){
		  function closeOpenPanel(){
			  if(top.jQuery(".boxy-wrapper:visible").length>0){
					top.jQuery(".boxy-wrapper:visible .buttonClass1").click();
		    	}
				if(parent.jQuery("#qfbody-content>.panel:visible").length>0){
					parent.jQuery("#qfbody-content>.panel:visible .vc-close").click();
		    	}
				if(top.jQuery(".bitPopIframe:visible").length>0){
					top.jQuery(".bitPopIframe:visible .btn-default").click();
		    	}
		  }
		  var ctrlDown = false;
		  var escDown = false;
		  var ctrlKey = 17, vKey = 86, cKey = 67,escKey=27,zkey=90,ykey=89;
		  $(document).keydown(function(e){
	  			if (e.keyCode == escKey){
	  				closeOpenPanel();
	  				 top.jQuery.unblockUI();
	  			}
	  			if(e.ctrlKey && (e.keyCode== zkey|| e.keyCode== ykey)){
	  				top.restorePage();
	  			}
		  })
		  try{
			  $(top.document).keydown(function(e){
							if (e.keyCode == escKey){
								closeOpenPanel();
							}
							if(e.ctrlKey  && (e.keyCode== zkey|| e.keyCode== ykey)){
								top.restorePage();
							}
			 })
			  $(parent.document).keydown(function(e){
							if (e.keyCode == escKey){
								closeOpenPanel();
							}
			 })
		 }catch(e){}
	  }else{
		  $(document).keydown(function(e){
	  			if (e.keyCode == "27"){
	  				 jQuery.unblockUI();
	  			}
		  })


	  }
	$(".dropdown-toggle").unbind("click").bind("click",function(){
		 var obj =jQuery(this).parent().find(".dropdown-menu");
		 if(obj.css("display") == "none"){
			obj.show();
			if(obj.closest(".vc_user_lp").length>0){
				obj.closest("section").addClass("overflowauto");
			}
		 }else{
			obj.hide();
		 }
	})
	initmouseover();
	resizeDefaultObjSize();
	toolTip();
	weiBoAndWeiXinToolTip();

	/*--Set variable for floating menu*/



	/*--Detect iphone phone*/
	if(dtGlobals.isiPhone){
		$("body").addClass("is-iphone");
	};
	if(!is_edit_model){
		if($(".bitMainTopSider .vc-no-content-helper").length==0 && $(".bitMainTopSider").length>0  && $(".bitMainTopSider").height()==0){
			$(".bitMainTopSider").parent().parent().remove();
			//$(".bitMainTopSider-wrapper").css("padding-top",0);
		}
	}
	$.fn.exists = function() {
		if ($(this).length > 0) {
			return true;
		} else {
			return false;
		}
	}
	$.fn.loaded = function(callback, jointCallback, ensureCallback){
		var len	= this.length;
		if (len > 0) {
			return this.each(function() {
				var	el		= this,
					$el		= $(el),
					blank	= "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

				$el.on("load.dt", function(event) {
					$(this).off("load.dt");
					if (typeof callback == "function") {
						callback.call(this);
					}
					if (--len <= 0 && (typeof jointCallback == "function")){
						jointCallback.call(this);
					}
				});

				if (!el.complete || el.complete === undefined) {
					el.src = el.src;
				} else {
					$el.trigger("load.dt")
				}
			});
		} else if (ensureCallback) {
			if (typeof jointCallback == "function") {
				jointCallback.call(this);
			}
			return this;
		}
	};
	$.fn.animateSkills = function() {
		$(".skill-value", this).each(function () {
			var $this = $(this),
				$this_data = $this.data("width");

			$this.css({
				width: $this_data + '%'
			});
		});
	};

	if(dtGlobals.isWindowsPhone){
		$("body").addClass("windows-phone");
	}

	$(".mini-nav select").change(function() {
		window.location.href = $(this).val();
	});


	dtGlobals.isHovering = false;

	mainmenu_event();
	searchForm();
	/* !-Navigation widget */
	var customTimeoutShow
	$(".custom-nav > li > a").click(function(e){
		$menuItem = $(this).parent();
		if ($menuItem.hasClass("has-children")) e.preventDefault();
			if ($(this).attr("class") != "active"){
					$(".custom-nav > li > ul").stop(true, true).slideUp(400);
					$(this).next().stop(true, true).slideDown(500);
					$(".custom-nav > li > a").removeClass("active");
					$(this).addClass('active');
			}else{
					$(this).next().stop(true, true).slideUp(500);
					$(this).removeClass("active");
			}

			$menuItem.siblings().removeClass("act");
			$menuItem.addClass("act");
	});
	$(".custom-nav > li > ul").each(function(){
		clearTimeout(customTimeoutShow);
		$this = $(this);
		$thisChildren = $this.find("li");
		if($thisChildren.hasClass("act")){
			$this.prev().addClass("active");
			$this.parent().siblings().removeClass("act");
			$this.parent().addClass("act");
			$(this).slideDown(500);
		}
	});

	var mtResizeTimeout;

	$(window).on("resize", function() {
		resizeDefaultObjSize();
		clearTimeout(mtResizeTimeout);
		mtResizeTimeout = setTimeout(function() {
			$(window).trigger( "metroresize" );
		}, 200);
		try{
			if( parent.jQuery("#mobile_iframe_preivew").length==1){
				parent.setMobileDocumentInit();
			}
		}catch(e){
		}
		if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
			var v1 = jQuery("#header #branding").width();
			var v2 = jQuery("#header .assistive-info").width();
			jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");

		}

	});
	try{
		if( parent.jQuery("#mobile_iframe_preivew").length==1){
			setTimeout(function(){
				parent.setMobileDocumentInit();
			},1000);
		}
	}catch(e){}
	if(jQuery(".zh_tw_lang").length>0){
		StranBody(jQuery(".zh_tw_lang")[0]);
		var href = jQuery(".selected_template_a").attr("href");
		var nhref = Traditionalized(href);
		jQuery(".selected_template_a").attr("href",nhref);
	}
	//翻译简繁体
	tranlanguage(jQuery("html"));
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-top').removeClass('off').addClass('on');
		}
		else {
			$('.scroll-top').removeClass('on').addClass('off');
		}
	});
	$(".scroll-top").click(function(e) {
		e.preventDefault();
		$("html").animate({ scrollTop: 0 }, "slow");
		return false;
	});



	// !- Animation "onScroll" loop
	function doAnimation() {

		if(dtGlobals.isMobile){
			$(".skills").animateSkills();
		}
		if($("html").hasClass("old-ie")){
			$(".skills").animateSkills();
		};
	};
	// !- Fire animation
	doAnimation();
	/* Skills:end */
	// Create the dropdown base 12.02.14
	$("<select />").prependTo(".mini-nav .menu-select");

	// Create default option "Select"
	$("<option />", {
		"selected"  :  "selected",
		"value"     :  "",
		"text"      :  "———"
	}).appendTo(".mini-nav .menu-select select");

	// Populate dropdown with menu items
	$('.bitcommerce-ordering-div select').each(function(){
		$(this).customSelect();
	});
	jQuery(window).load(function(){
		if(jQuery('#load').length){
			jQuery('#load').fadeOut().remove();
		}
	});

	$("#main-nav .menu-item a,.dl-menu li a").not(".dl-menu li.dl-back a[href^='#']").each(function(){
			var $_this = $(this),selector = $_this.attr("href");

		if(selector && selector.indexOf("#")>-1 && selector.indexOf("/")<0 && selector!="#"){
			//if(selector.indexOf("#")!=0){
				selector = jQuery.trim(selector);
				var tmpselecter = selector.split("#");
				selector = "#"+tmpselecter[tmpselecter.length-1];
			//}

			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					var $_this = $(this),selector = $_this.attr("href");

					//手机下菜单是#，子菜单无法点击
					var mobilemenu =$_this.closest("#dl-menu").find("#mobile-menu").length;
					if( mobilemenu>0 && $_this.parent().hasClass("has-children")){
						var $submenu = $_this.parent().find( 'ul.dl-submenu:first' );
						if($submenu.length>0){
							var xx=event.pageX;
							var width = $submenu.width();
							var isclick = width-xx>35;
							if(!isclick) return;
						}
					}

					if($("body >.dl-menuwrapper.floatmenu").length>0){
						$("#dl-menu #mobile-menu .phone-text").click();
					}

					$("body").addClass("is-scroll");


					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}

					//if(selector.indexOf("#")!=0){
						var tmpselecter = selector.split("#");
						selector = "#"+tmpselecter[tmpselecter.length-1];
					//}
					$_this.closest("#dl-menu").find(".wf-phone-hidden.phone-text").click();
					var base_speed  = 600,
						speed       = base_speed;
					if(selector.indexOf("=")<0 &&  $(selector).length > 0){
						var this_offset = $_this.offset(),
							that_offset = $(selector).offset(),
							offset_diff = Math.abs(that_offset.top - this_offset.top),
							speed       = (offset_diff * base_speed) / 1000;
					}

					$(".one-page-row .menu-item a").parent("li").removeClass("act");
					if($(".one-page-row").length>0){
						$_this.parent("li").addClass("act");
					}
					if(selector == "#" && ($(".one-page-row").length > 0)){
						$("html").animate({
							scrollTop: 0
						}, speed, function(){
							$("body").removeClass("is-scroll");
							$_this.parent().siblings(".onepage").removeClass("act onepage");
						});
					}else{
						if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
							$("html").animate({
								scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
							}, speed, function(){
								$("body").removeClass("is-scroll");
							});
						}else{
							if(selector.indexOf("=")<0 &&  $(selector).length > 0){
								$("html").animate({
									scrollTop:  $(selector).offset().top - floatMenuH + 1
								}, speed, function(){
									$("body").removeClass("is-scroll");

									$_this.parent().siblings(".onepage").removeClass("act onepage");
									$_this.parent().addClass("act onepage");
									_menu_link_event(selector);

								});
							}
						}
					}
					return false;
				});

			}

		}

	});
	$("ul.menu a,.tabcontent-inner>ul a").each(function(){
		var $_this = $(this),selector = $_this.attr("href");
		if(selector && selector.indexOf("#")>-1 && selector.indexOf("/")<0 && selector!="#"){

			selector = jQuery.trim(selector);
			var tmpselecter = selector.split("#");
			selector = "#"+tmpselecter[tmpselecter.length-1];
			if(selector!="#" &&  selector.indexOf("=")<0 && $(selector).length>0){
				$(this).on('click',function(e){
					$("body").addClass("is-scroll");
					if($("#phantom").css("display")=="block"){
						var floatMenuH = $("#phantom").height();
					}else{
						var floatMenuH = 0;
					}
					var base_speed  = 600,speed       = base_speed;
					var this_offset = $_this.offset(),that_offset = $(selector).offset(),offset_diff = Math.abs(that_offset.top - this_offset.top),speed       = (offset_diff * base_speed) / 1000;

					$("html").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
						_menu_link_event(selector);
					});

				});
			}
		}
	});
	$(".logo-box a[href^='#'], #branding a[href^='#'], #branding-bottom a[href^='#']").on('click',function(e){
		$("body").addClass("is-scroll");
		if($("#phantom").css("display")=="block"){
			var floatMenuH = $("#phantom").height();
		}else{
			var floatMenuH = 0;
		}
		var $_this = $(this),
			selector 	= $_this.attr("href");

		var base_speed  = 600,
			speed       = base_speed;
		if($(selector).length > 0){
			var this_offset = $_this.offset(),
				that_offset = $(selector).offset(),
				offset_diff = Math.abs(that_offset.top - this_offset.top),
				speed       = (offset_diff * base_speed) / 1000;
		}
		if(selector == "#"){
			$("html").animate({
				scrollTop: 0
			}, speed, function(){
				$("body").removeClass("is-scroll");
			});
		}else{
			if($(".one-page-row").length && $(".one-page-row div[data-anchor^='#']").length ){
				$("html").animate({
					scrollTop: $(".one-page-row div[data-anchor='" + selector + "']").offset().top - floatMenuH + 1
				}, speed, function(){
					$("body").removeClass("is-scroll");
				});
			}else{
				if($(selector).length > 0){
					$("html").animate({
						scrollTop:  $(selector).offset().top - floatMenuH + 1
					}, speed, function(){
						$("body").removeClass("is-scroll");
					});
				}
			}
		}
		return false;
	});
	//float
	 floatmenu_create();

	 let menu_has_href = false;
	 $(".mainmenu >.menu-item > a").each(function(){
		var href =jQuery(this).attr("href");
		if(href.indexOf("#")>-1 &&href!="#" ){
			menu_has_href = true;
		}
	});
	if(menu_has_href){
	    $.onDemandScript("/qfy-content/themes/qfy-01/js/a-menu-href.js",function() {
			mainmenu_href_event();
		})
	}
	if( $(".yy_website_notice").length>0){
		var hasnotice=getCookie("yy_website_notice");
		//console.log("hasnotice="+hasnotice);
		if(hasnotice!="1"){
			var begin = $(".yy_website_notice").attr("data-begin");
			var end = $(".yy_website_notice").attr("data-end");
			var timestamp = 8*3600+Date.parse(new Date())/1000;
			if( (begin && timestamp<begin) || (end && timestamp>end)  ) {
				//pass

			}else{
				setTimeout(function(){
					$("body").addClass("is-showing-notice");
				},100);
			}
		}
		$(".yy_website_notice_close").click(function(){
			var type = $(this).attr("data-close");
			if(type==1){
				setCookie("yy_website_notice",1,1);
			}else if(type==2){
				setCookie("yy_website_notice",1,-1);
			}else{
				setCookie("yy_website_notice",1,365);

			}
			$(".yy_website_notice").remove();
			$("body").removeClass("is-showing-notice");
		})
	}

//ready end
});

function floatmenu_create(){
	var $ = jQuery;
	if(jQuery("#header.logo-left-right #navigation ul.ab-center").length>0){
		var v1 = jQuery("#header #branding").width();
		var v2 = jQuery("#header .assistive-info .top-bar-right").width();
		jQuery("#header #navigation #main-nav").css("text-align","center").css("left",(v2-v1)/2+"px");
	}
	if($("#header.newrightmenu,#header.newleftmenu").length>0){
		if($("#page.bodyheader40,#page.bodyheader0").length>0){
			$("#header").css("position","fixed").css("top","0");
			return;
		}
	};

	if (dtGlobals.isMobile && !dtGlobals.isiPad) smartMenu = false;
	if (smartMenu && $("#header").length>0 ) {
		$.onDemandScript("/qfy-content/themes/qfy-01/js/a-menu-float.js",function() {
			floatmenu_create_init();
		})
	}

}

function _menu_link_event(hash){
	$ = jQuery;
	//处理主菜单
	var ishash = false;
	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0 && jQuery(hash).length>0 ){
		$(".mainmenu").each(function(){
			$(this).find("a").each(function(){
				var href = jQuery(this).attr("href");
				if(href){
					var start = href.indexOf(hash);
					if(href.substr(start)==hash && ishash==false){
						ishash = true;
						var ul =  jQuery(this).closest(".mainmenu");
						ul.find(".act").removeClass("act");
						var currli = jQuery(this).closest("li");
						 currli.addClass("act");
						 currli.parents("li").addClass("act");
					}
				}
			})
		})

	}else{
		$(".mainmenu .sub-nav .act").each(function(){
			var href = $(this).find(">a").attr("href");
			if(href.indexOf("#")>-1){
				$(this).removeClass("act");
			}
		})

	}
	//处理其他菜单
	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0&& jQuery(hash).length>0 ){
		$(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function(){
			var ismenuhash = false;
			$(this).find("a").each(function(){
				var href = jQuery(this).attr("href");
				if(href){
					var start = href.indexOf(hash);
					if(href.substr(start)==hash && ismenuhash==false){
						ismenuhash = true;
						var ul =  jQuery(this).closest("ul.menu");
						ul.find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
						var currli = jQuery(this).closest("li");
						 currli.addClass("current-menu-item");
						 currli.parents("li").addClass("current-menu-item");
					}
				}
			})
		})

	}else{
		$(".widget_nav_menu ul.menu,.qfy-listmenuvertical ul.menu,.widget_nav_menuhorizontal ul.menu").each(function(){
			$(this).find(">li.current-menu-item").each(function(i){
				if(i>0){
					$(this).removeClass("current-menu-item current-menu-ancestor");
					$(this).find(".current-menu-item").removeClass("current-menu-item current-menu-ancestor");
				}
			});
		})
	}

	if(hash.indexOf("#")==0  &&  hash!="#" && hash.indexOf("=")<0 && jQuery(hash).length>0 ){
		$(".tabcontent-inner>ul").each(function(){
			var ismenuhash = false;
			$(this).find("a").each(function(){
				var href = $(this).attr("href");
				if(href){
					var start = href.indexOf(hash);
					if(href.substr(start)==hash && ismenuhash==false){
						ismenuhash = true;
						var ul =  jQuery(this).closest(".tabcontent-inner");
						ul.find(".active").removeClass("active");
						$(this).addClass("active");
					}
				}
			})
		})
	}
}
function mainmenu_event(){
	$ = jQuery;
	//custom menu
	if($("body").hasClass("u-body")){
		return;
	}

	$("#mobile-menu").removeAttr("style").wrap("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible main-mobile-menu' style='display:none' />");
		if($("#mobile-menu").hasClass("dropTopStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("body").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropTopStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}

				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

			}else if($("#mobile-menu").hasClass("dropCenterStyle")){
				$("#mobile-menu").removeClass("glyphicon glyphicon-icon-align-justify").append('<span class="mobile_icon glyphicon glyphicon-icon-angle-down" ></span>');
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible dropCenterStyle_containter' >"+menu_html+"</div>");
				menu_html = null;
				if($("#mobile-menu").hasClass("left")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
				}else if($("#mobile-menu").hasClass("right")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
				}else{
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
				}
				var padding = $("#mobile-menu").attr("data-padding");
				if(padding){
					$("#dl-menu:not(.dl-qfymobile-menu)").css("padding-left",padding+"px").css("padding-right",padding+"px");
				}
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}


			}else if($("#header").hasClass("wf-mobile-hidden")){
				var menu_html = $("#dl-menu:not(.dl-qfymobile-menu)").html();
				$("#dl-menu:not(.dl-qfymobile-menu)").remove();
				$("#header").after("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible mobiledefault_containter' style='text-align:center;margin:0px auto;' >"+menu_html+"</div>");
				if($("#mobile-menu").hasClass("positionFixed")){
					mobile_menu_fix();
				}

			}else{
				//default
				if($("#mobile-menu").hasClass("positionFixed")){
					$("#dl-menu:not(.dl-qfymobile-menu)").addClass("mobiledefault_containter");
					mobile_menu_fix();
				}

		}

	$(".underline-hover > li > a > span").not(".underline-hover > li > a > span.mega-icon").append("<i class='underline'></i>");
	$("#main-nav .menu-nav > li > a > span").append("<i class='underline'></i>");

	var $mainNav = $("#main-nav,.mini-nav");

	var	$mobileNav = $mainNav.clone();
	var	$mobileTopNav = $(".mini-nav").clone();
	var backCap = $("#mobile-menu > .menu-back").html();

	$mobileNav
		.attr("id", "")
		.attr("class", "dl-menu")
		.find(".sub-nav")
			.addClass("dl-submenu")
			.removeClass("sub-nav")
			.prepend("<li class='menu-item dl-back'><a href='#'><span>"+backCap+"</a></li>");


	$mobileNav.appendTo("#dl-menu:not(.dl-qfymobile-menu)").wrap("<div class='dl-container' />");


	$("body").removeClass("mobilefloatmenu");
	$("body >.dl-menu-film,body >.dl-menu-fixedheader").remove();
	if($("#mobile-menu").hasClass("floatmenu") ||$("#mobile-menu").hasClass("fullfloatmenu") || $("#mobile-menu").hasClass("leftbtnmenu")){
		$("body").addClass("mobilefloatmenu");
		var menu_content = $("#dl-menu:not(.dl-qfymobile-menu) .dl-container").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) .dl-container").remove();
		$("body").prepend("<div  class='dl-menuwrapper  wf-mobile-visible floatmenu floatwarpper' >"+menu_content+"</div>");
		var menu_html = $("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").prop("outerHTML");
		$("#dl-menu:not(.dl-qfymobile-menu) #mobile-menu").remove();
		$("body #page").prepend("<div id='dl-menu' class='dl-menuwrapper wf-mobile-visible floatmenu' >"+menu_html+"</div>");

		if($("#mobile-menu").hasClass("fullfloatmenu")){
			$(".dl-menuwrapper.floatmenu").addClass("fullfloatmenu");
		}else	if($("#mobile-menu").hasClass("leftbtnmenu")){
			$("body").addClass("mobileleftbtnmenu");
			$(".dl-menuwrapper.floatmenu").addClass("leftbtnmenu").find(".dl-container").prepend( jQuery(".menu_displaynone").html() ).append( jQuery(".menu_displaynone_footer").html()  );
			if($("body >.dl-menu-film").length==0){
				$("body").prepend("<div class='dl-menu-film wf-mobile-visible'></div>");
			}
			if($("body >.dl-menu-fixedheader").length==0 && $(".leftbtnmenu #mobile-menu.displaynone").length==0){

				if($(".yy_website_notice").length>0){
					$(".yy_website_notice").after("<div class='dl-menu-fixedheader wf-mobile-visible'>"+ jQuery(".menu_displaynone_header").html()+"</div>");
				}else{
					$("body").prepend("<div class='dl-menu-fixedheader wf-mobile-visible'>"+ jQuery(".menu_displaynone_header").html()+"</div>");
				}
			}
			if(top!=self && jQuery("body").hasClass("compose-mode")){
				 jQuery("body").find(".qfyheadercontent [bitDataAction='site_widget_container'] .site_tooler").each(
						function() {
							parent.widgetHover(this,  jQuery("body"));
						})
				 jQuery("body").find(".qfyheadercontent [bitDataAction='site_fix_container']").each(function() {
					 parent.widgetFixEvent(this);
				})
			}
			jQuery("body").addClass("moble_menufixed");
			mobile_menu_fix_2();
			if ( jQuery(window).scrollTop()> jQuery(".dl-menu-fixedheader").height()) {
				jQuery(".dl-menu-fixedheader").css("position","fixed");
				jQuery("body").addClass("fixedheadering");
			}else{
				jQuery(".dl-menu-fixedheader").css("position","relative");
				jQuery("body").removeClass("fixedheadering");
			}
		}
		if($("#mobile-menu").hasClass("left")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("left");
			$(".floatwarpper").addClass("left");
		}else if($("#mobile-menu").hasClass("right")){
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("right");
			$(".floatwarpper").addClass("right");
		}else{
			$("#dl-menu:not(.dl-qfymobile-menu)").addClass("center");
			$(".floatwarpper").addClass("center");
		}
		var padding = $("#mobile-menu").attr("data-padding");
		if(padding){
			$(".floatwarpper").css("padding-left",padding+"px").css("padding-right",padding+"px");
		}
		var element_right = $("#mobile-menu").attr("data-right");
		if(element_right){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("right",element_right+"px");
		}
		var element_top = $("#mobile-menu").attr("data-top");
		if(element_top){
			$("#dl-menu:not(.dl-qfymobile-menu)").css("top",element_top+"px");
		}

	}

	if (!$("html").hasClass("old-ie")) $( "#dl-menu:not(.dl-qfymobile-menu)" ).dlmenu();

	var timeouthidden = new Array();
	$(".qfy-sub-div.MenuAnimIn_js", $mainNav).parent().each(function(i) {
		var $this = jQuery(this);


		jQuery(this).on("mouseenter", function(e) {

			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			var h = obj.children().height();
			var t = obj.attr("data-time");
			if(!obj.hasClass("ing") && !obj.hasClass("ed")){
				obj.stop().addClass("ing").removeClass("ending").css({"visibility":"visible","height": 0}).animate({"height": h}, t*1000,function(){
					jQuery(this).removeClass("ing").addClass("ed").css({"visibility":"visible"});
				});
			}

		}).on("mouseleave", function(e) {

			var obj = jQuery(this).find(".qfy-sub-div:first");
			if(timeouthidden[i]){
				clearTimeout(timeouthidden[i]);
			}
			timeouthidden[i] = setTimeout(function(){
				if(obj.hasClass("ending") || obj.hasClass("ing") ) return;
				obj.addClass("ending").removeClass("ed").animate({"height": 0}, 500,function(){jQuery(this).removeClass("ending ed").css({"visibility":"hidden","height": 0});});
			},300);
		});
	});

	$(".sub-nav", $mainNav).parent().each(function() {
	var $this = $(this);
	if(dtGlobals.isMobile || dtGlobals.isWindowsPhone){
		$this.find("> a").on("click tap", function(e) {
			if (!$(this).hasClass("dt-clicked")) {
				e.preventDefault();
				$mainNav.find(".dt-clicked").removeClass("dt-clicked");
				$(this).addClass("dt-clicked");
			} else {
				e.stopPropagation();
			}

		});
	};

	var menuTimeoutShow,
		menuTimeoutHide;

	if($this.hasClass("dt-mega-menu")){

		$this.on("mouseenter tap", function(e) {
			if(e.type == "tap") e.stopPropagation();
			var $ = jQuery;
			var $this = jQuery(this);
			$this.addClass("dt-hovered");

			dtGlobals.isHovering = true;


			var $_this = jQuery(this),
				$_this_h = $this.height();

			var $_this_ofs_top = $this.position().top;
				$this.find("> .sub-nav").css({
					top: $_this_ofs_top+$_this_h
				});


			if($this.hasClass("mega-auto-width")){
				var $_this = $(this),
					$_this_sub = $_this.find(" > .sub-nav > li"),
					coll_width = $("#main .wf-wrap").width()/5,
					$_this_par_width = $_this.parent().width(),
					$_this_parents_ofs = $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left;

				$_this.find(" > .sub-nav").css({
					left: $_this_parents_ofs,
					"marginLeft": -($_this.find(" > .sub-nav").width()/2 - $_this.width()/2)
				});
			}
			if($this.is(':first-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: $_this.offset().left - $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").offset().left,
					"marginLeft": 0
				});
			}else if($this.is(':last-child') && $this.hasClass("mega-auto-width")){
				$this.find(" > .sub-nav").css({
					left: "auto",
					right: $this.parents("#header .wf-table, .ph-wrap-inner, .logo-center #navigation, .logo-classic #navigation, .logo-classic-centered #navigation").width() - ( $this.position().left + $this.width() ),
					"marginLeft": 0
				});
			};

			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
				$this.children("ul").addClass("right-overflow");
			};
			if($this.position().left < ($this.children("ul").width()/2)) {
				$this.children("ul").addClass("left-overflow");
			}

			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutShow = setTimeout(function() {
				if($this.hasClass("dt-hovered")){
					$this.find("ul").stop().css("visibility", "visible").animate({
						"opacity": 1
					}, 150);
				}
			}, 100);
		});

		$this.on("mouseleave", function(e) {
			var $this = $(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			menuTimeoutHide = setTimeout(function() {
				if(!$this.hasClass("dt-hovered")){
					$this.children("ul").stop().animate({
						"opacity": 0
					}, 150, function() {
						jQuery(this).css("visibility", "hidden");

						jQuery(this).find("ul").stop().css("visibility", "hidden").animate({
							"opacity": 0
						}, 10);
					});

					setTimeout(function() {
						if(!$this.hasClass("dt-hovered")){
							$this.children("ul").removeClass("right-overflow");
							$this.children("ul").removeClass("left-overflow");
						}
					}, 400);

				}
			}, 150);

			$this.find("> a").removeClass("dt-clicked");
		});
	}else{

		$this.on("mouseenter tap", function(e) {
			if(e.type == "tap") e.stopPropagation();
			var $ = jQuery;
			var $this = jQuery(this);
			$this.addClass("dt-hovered");
			if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - $this.children("ul").width() < 0) {
			//if ($("#page").width() - ($this.children("ul").offset().left - $("#page").offset().left) - 240 < 0) {
				$this.children("ul").addClass("right-overflow");
			}
			dtGlobals.isHovering = true;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);

			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0){
				menuTimeoutShow = setTimeout(function() {
					if($this.hasClass("dt-hovered")){
						if($this.closest("#main-nav").attr("data-sliderdown")){
							var h = $this.children('ul').height();
							$this.children('ul').stop().css({"visibility":"visible","opacity":"1","overflow":"hidden","max-height":"0"}).animate({
								"max-height": h
							}, 300,function(){
								jQuery(this).css({"overflow":"inherit"})
							});
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children('ul').stop().css("opacity", "1").css("visibility", "visible").css("margin-top", "0");
						}else{
							$this.children('ul').stop().css("visibility", "visible").animate({
								"opacity": 1
							}, 150);
						}


					}
				}, 100);
			}
		});

		$this.on("mouseleave", function(e) {
			var $this = jQuery(this);
			$this.removeClass("dt-hovered");

			dtGlobals.isHovering = false;
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			if($this.find(".qfy-sub-div").length==0 && $this.closest(".qfyheaderul").length==0 ){
				menuTimeoutHide = setTimeout(function() {
					if(!$this.hasClass("dt-hovered")){

						if($this.closest("#main-nav").attr("data-sliderdown")){
							$this.children("ul").stop().removeAttr("style");
						}else if($this.closest("#main-nav").hasClass("sub-sliderup")){
							$this.children("ul").stop().removeAttr("style");
						}else{
							$this.children("ul").stop().animate({
								"opacity": 0
							}, 150, function() {
								jQuery(this).css("visibility", "hidden");
							});

						}

						setTimeout(function() {
							if(!$this.hasClass("dt-hovered")){
								$this.children("ul").removeClass("right-overflow");
							}
						}, 400);
					}
				}, 150);
			}

			$this.find("> a").removeClass("dt-clicked");
		});
	};
});

/* Main navigation: end */

}
function floatmenucontrols_mouseenter(){
	 if(typeof(parent.floatmenucontrols_mouseenter)=="function"){
			parent.floatmenucontrols_mouseenter();
	 }
}
function floatmenucontrols_mouseout(){
	 if(typeof(parent.floatmenucontrols_mouseout)=="function"){
			parent.floatmenucontrols_mouseout();
	 }
}

function base64_encode(str){var str=toUTF8(str);var base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");var out,i,j,len,r,l,c;i=j=0;len=str.length;r=len%3;len=len-r;l=(len/3)<<2;if(r>0){l+=4}out=new Array(l);while(i<len){c=str.charCodeAt(i++)<<16|str.charCodeAt(i++)<<8|str.charCodeAt(i++);out[j++]=base64EncodeChars[c>>18]+base64EncodeChars[c>>12&63]+base64EncodeChars[c>>6&63]+base64EncodeChars[c&63]}if(r==1){c=str.charCodeAt(i++);out[j++]=base64EncodeChars[c>>2]+base64EncodeChars[(c&3)<<4]+"=="}else{if(r==2){c=str.charCodeAt(i++)<<8|str.charCodeAt(i++);out[j++]=base64EncodeChars[c>>10]+base64EncodeChars[c>>4&63]+base64EncodeChars[(c&15)<<2]+"="}}return out.join("")};
function base64_decode(str){var base64DecodeChars=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];var c1,c2,c3,c4;var i,j,len,r,l,out;len=str.length;if(len%4!=0){return""}if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(str)){return""}if(str.charAt(len-2)=="="){r=1}else{if(str.charAt(len-1)=="="){r=2}else{r=0}}l=len;if(r>0){l-=4}l=(l>>2)*3+r;out=new Array(l);i=j=0;while(i<len){c1=base64DecodeChars[str.charCodeAt(i++)];if(c1==-1){break}c2=base64DecodeChars[str.charCodeAt(i++)];if(c2==-1){break}out[j++]=String.fromCharCode((c1<<2)|((c2&48)>>4));c3=base64DecodeChars[str.charCodeAt(i++)];if(c3==-1){break}out[j++]=String.fromCharCode(((c2&15)<<4)|((c3&60)>>2));c4=base64DecodeChars[str.charCodeAt(i++)];if(c4==-1){break}out[j++]=String.fromCharCode(((c3&3)<<6)|c4)}return toUTF16(out.join(""))};
function toUTF8(str){if(str.match(/^[\x00-\x7f]*$/)!=null){return str.toString()}var out,i,j,len,c,c2;out=[];len=str.length;for(i=0,j=0;i<len;i++,j++){c=str.charCodeAt(i);if(c<=127){out[j]=str.charAt(i)}else{if(c<=2047){out[j]=String.fromCharCode(192|(c>>>6),128|(c&63))}else{if(c<55296||c>57343){out[j]=String.fromCharCode(224|(c>>>12),128|((c>>>6)&63),128|(c&63))}else{if(++i<len){c2=str.charCodeAt(i);if(c<=56319&&56320<=c2&&c2<=57343){c=((c&1023)<<10|(c2&1023))+65536;if(65536<=c&&c<=1114111){out[j]=String.fromCharCode(240|((c>>>18)&63),128|((c>>>12)&63),128|((c>>>6)&63),128|(c&63))}else{out[j]="?"}}else{i--;out[j]="?"}}else{i--;out[j]="?"}}}}}return out.join("")};
function toUTF16(str){if((str.match(/^[\x00-\x7f]*$/)!=null)||(str.match(/^[\x00-\xff]*$/)==null)){return str.toString()}var out,i,j,len,c,c2,c3,c4,s;out=[];len=str.length;i=j=0;while(i<len){c=str.charCodeAt(i++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:out[j++]=str.charAt(i-1);break;case 12:case 13:c2=str.charCodeAt(i++);out[j++]=String.fromCharCode(((c&31)<<6)|(c2&63));break;case 14:c2=str.charCodeAt(i++);c3=str.charCodeAt(i++);out[j++]=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));break;case 15:switch(c&15){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:c2=str.charCodeAt(i++);c3=str.charCodeAt(i++);c4=str.charCodeAt(i++);s=((c&7)<<18)|((c2&63)<<12)|((c3&63)<<6)|(c4&63)-65536;if(0<=s&&s<=1048575){out[j++]=String.fromCharCode(((s>>>10)&1023)|55296,(s&1023)|56320)}else{out[j++]="?"}break;case 8:case 9:case 10:case 11:i+=4;out[j++]="?";break;case 12:case 13:i+=5;out[j++]="?";break}}}return out.join("")};


function weiBoAndWeiXinToolTip(){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	 var objs = jQuery(".soc-ico .weixin");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weixin/"+name+"'  width='160'/><div>请扫二维码关注微信</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
	var objs = jQuery(".soc-ico .weibo");
	objs.each(function(){
		var obj = jQuery(this);
		var name = obj.attr("data-href");
		obj.attr("title", '');
		var title="<img src='/FeiEditor/public_api/getImageFromWebApi/weibo/"+name+"' width='160' /><div>请扫二维码关注微博</div>";
		var data = { tipJoint: "bottom",style: "dark" };
		new Opentip(obj, title, data);
	})
}
function toolTip(objs){
	//ie8不支持
	if(jQuery("html#ie8").length==1){
		return false;
	}
	 if(typeof(objs)=="undefined"){
		objs = jQuery("[data-tooltip='on']");
	 }
	 Opentip.styles.stemsDemo = {
        stem: true,
        containInViewport: false,
        borderWidth: 2,
        borderColor: "#a7c1c5",
        background: "#EFF7F0"
      };
	objs.each(function(){
		var obj = jQuery(this);
		var title = jQuery(this).attr("data-original-title");
		if(!title) title="";
		var image = jQuery(this).attr("data-original-image");
		var imagewidth = jQuery(this).attr("data-original-imagewidth");
		var imageheight = jQuery(this).attr("data-original-imageheight");
		if(image){
			if(!imagewidth)	imagewidth=150;
			if(!imageheight) imageheight=150;
			title = "<div>"+title+"</div>"+"<img src='"+image+"'  style='width:"+imagewidth+"px;height:"+imageheight+"px'/>";
		}
		var cate =  jQuery(this).attr("data-tooltip-cate");
		var data ="";
		if(cate==1){
			data = { tipJoint: "bottom"};
		}else if(cate==2){
			data = { tipJoint: "bottom",style: "alert"};
		}else if(cate==3){
			data = { tipJoint: "bottom",style: "dark" };
		}else if(cate==4){
			data = { tipJoint: "bottom",style: "glass" };
		}else if(cate==5){
			data = { tipJoint: "bottom right",style: "dark"};
		}else if(cate==6){
			data = { tipJoint: "bottom left",style: "dark" };
		}else if(cate==7){
			data = { tipJoint: "top right",style: "dark" };
		}else if(cate==8){
			data = { style: "stemsDemo", tipJoint: "bottom right", stem: "bottom right", stemLength: 10, stemBase: 30 };
		}else if(cate==9){
			data = { style: "stemsDemo", tipJoint: "bottom left", stem: "bottom left", stemLength: 10, stemBase: 30 };
		}else if(cate==10){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "top", borderColor: "#317CC5" };
		}else if(cate==11){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom", borderColor: "#317CC5" };
		}else if(cate==12){
			data = { borderWidth: 5, stemLength: 18, stemBase: 20, style: "glass", target: true, tipJoint: "bottom left", borderColor: "#317CC5" }
		}
		if(data!=""){
			new Opentip(obj, title, data);
		}
	})
}
function toVisit(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	var post_id = p.attr("data-postid");
	var pt = p.find('[data-title="true"]');
	var title = "";
	if(pt.length>0){
		var title =jQuery.trim(pt.text());
	}
	jConfirm("确认是否离开当前页面，访问页面【"+title+"】？",function(){
				top.$('#pageUrl').val(post_id).change();
	});

}
function toEditor(obj,e){
	if(e){
		 e.preventDefault();
		 e.stopPropagation();
	}
	parent.toEditor(obj);
}
function toCopy(obj){
	var p  = jQuery(obj).closest(".qfy_item_post");
	var id=p.closest(".vc-element").attr("data-model-id");


	var post_id = p.attr("data-postid");
	parent.bitSettingsEdit(post_id, "复制一个页面", "copyPage","COPY");
}
function toDelete(obj){
	parent.toDelete(obj);
}
function toEditProduct(obj){
	parent.toEditProduct(obj);
	return false;
}
function toRedirectProduct(obj){
	parent.toRedirectProduct(obj);
	return false;
}
function toDeleteCate(obj){
	parent.toDeleteCate(obj);
}
function pageNav(paged,aobj){
	if(aobj && jQuery(aobj).closest("#sitetop_pagehtml").length>0){
		top.pageNav(paged,aobj);
		return;
	}
	var obj =top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(url.indexOf("paged")>-1){
		var tmp = url.split("&paged");
		url = tmp[0]+"&paged="+paged;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&paged="+paged;
		}else{
			url = url+"?paged="+paged;
		}
	}
	obj.attr("src",url);
}
function pageCate(page_id,cate_id){
	var obj = top.jQuery("#site-content-iframe");
	var url  =obj.attr("src");
	if(cate_id==0) cate_id="";
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&categories="+cate_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&categories="+cate_id;
		}else{
			url = url+"?post_id="+page_id+"&categories="+cate_id;
		}
	}
	jConfirm("确认是否需要打开该分类列表页面？",function(){
		obj.attr("src",url);
	});

	return false;
}
function searchResult(p){
	var obj = top.jQuery("#site-content-iframe");
	if(obj.length>0){
		var action = jQuery(p).attr("action");
		var search = jQuery(p).find("[name='search']").val();
		var page_id = jQuery(p).find("[name='page_id']").val();
		var searchtype = jQuery(p).find("[name='searchtype']").val();
		var ep_search = jQuery(p).find("[name='ep_search']").val();
		var qfyuuid = jQuery(p).find("[name='qfyuuid']").val();
		var ep_relevancy = jQuery(p).find("[name='ep_relevancy']").val();

		var url  = obj.attr("src");
		if(url.indexOf("post_id")>-1){
			var tmp = url.split("&post_id");
			url = tmp[0]+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
		}else{
			if(url.indexOf("?")>-1){
				url = url+"&post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}else{
				url = url+"?post_id="+page_id+"&search="+encodeURIComponent(search)+"&searchtype="+searchtype;
			}
		}
		if(ep_search && qfyuuid){
			url = url+"&ep_search=1&qfyuuid"+qfyuuid;
			if(ep_relevancy){
				url = url+"&ep_relevancy=1";
			}
		}
		obj.attr("src",url);
		return false;
	}
}

function toorderview(id){
	id = id.replace("#","");
	var obj = top.jQuery("#site-content-iframe");
	var page_id = top.jQuery("#pageUrl").val();
	var  url=obj.attr("src");
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id+"&view-order="+id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id+"&view-order="+id;
		}else{
			url = url+"?post_id="+page_id+"&view-order="+id;
		}
	}
	obj.attr("src",url);
}

function toorderpage(page_id){

	var obj = top.jQuery("#site-content-iframe");
	var  url=obj.attr("src");
	if(url.indexOf("post_id")>-1){
		var tmp = url.split("&post_id");
		url = tmp[0]+"&post_id="+page_id;
	}else{
		if(url.indexOf("?")>-1){
			url = url+"&post_id="+page_id;
		}else{
			url = url+"?post_id="+page_id;
		}
	}
	obj.attr("src",url);
}
function jConfirm(msg,yes,no,title){
	if(top!=self){
		top.jConfirm(msg,yes,no,title);
	}
}
function jAlert(msg,title){
	if(!is_edit_model){
		alert(msg);
	}else{
		top.jAlert(msg,title);
	}
}

function setCookie(cname, cvalue,exdays)		//cookies设置
{
	var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+";path=/";
}

function getCookie(Name)			//cookies读取
{
	var search = Name + "="
	if(document.cookie.length > 0)
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1)
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) return unescape(decodeURI(r[2])); return null;
}
function tobigimage(obj){
	var bigimage = jQuery(obj).parents(".qfy_showbox").find(".bigImage");
	var height = bigimage.find("img").height();
	var src = jQuery(obj).find("img").attr("src");
	jQuery(obj).parents(".qfy_imgList").find("img").css("border","0");
	jQuery(obj).find("img").css("border","2px solid #f63");
	src = src.replace("-150x150","");
	bigimage.find("img").attr("src",src).height(height);
}
function slideLine(box,stf,delay,speed,h){

	if(jQuery("#"+box+" div").length ==0){
		return false;
	}

	var slideBox = document.getElementById(box);
	var delay = delay||1000,speed = speed||20,h = h||20;
	var tid = null,pause = false;
	var s = function(){tid=setInterval(slide, speed);}
	var slide = function(){
	if(pause) return;
	slideBox.scrollTop += 1;
	if(slideBox.scrollTop%h == 0){
		clearInterval(tid);
		slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
		slideBox.scrollTop = 0;
		setTimeout(s, delay);
		}
	}
	slideBox.onmouseover=function(){pause=true;}
	slideBox.onmouseout=function(){pause=false;}
	setTimeout(s, delay);
}

function vc_gallery_relat(){
	jQuery(".qfe_gallery.rela_other .vc-carousel .qfy_image_vc_item img").each(function(){
		var img = jQuery(this);
		var src = img.attr("src");
		img.css("cursor","pointer");
		src = src.replace(/-[\d]*x[\d]*/g,"");
		img.unbind("click").bind("click",function(){
			jQuery(".qfe_gallery.rela_other .slides").each(function(){
				var obj = jQuery(this);
				var index = 0;
				obj.find("img").each(function(){
					var toimg = jQuery(this);
					var tosrc = toimg.attr("src");
					tosrc = tosrc.replace(/-[\d]*x[\d]*/g,"");
					var p = toimg.closest("li");

					if(!p.hasClass("clone")){
						index++;
					}

					if(!p.hasClass("clone") && src == tosrc){
						p.siblings().removeClass("flex-active-slide");

						p.addClass("flex-active-slide");
						var width = p.width();

						p.parent().css("-webkit-transition-duration","0.6s");
						p.parent().css("transition-duration","0.6s");
						p.parent().css("-webkit-transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');
						p.parent().css("transform",'translate3d(-'+(index*width)+'px, 0px, 0px)');

						return;
					}
				})
			})

		})
	});
}
function qfbookformSubmit(obj){
	if(!is_edit_model){
		var p = jQuery(obj).closest(".QFBOOKSearchsimpleformdiv");
		var url = p.attr("action");
		var t1 = p.find("[name='QFBOOKSearch-check-in-view']").val();
		var t2 = p.find("[name='QFBOOKSearch-check-out-view']").val();
		if(url.indexOf("?")>-1){
			location.href = url+"&QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}else{
			location.href = url+"?QFBOOKSearch-check-in-view="+t1+"&QFBOOKSearch-check-out-view="+t2;
		}

	}
}



//有侧栏的时候再加载这个函数
function parallax_scroll_fun(){
	if(jQuery("#parallax-nav").length>0){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-scroll.js",function() {
			parallax_scroll_fun_init();
		})
	}
}
function checkAdvertising(){
	var uuid=dtGlobals.id;var href="http://www.qifeiye.com?tcode=freesite&uuid="+uuid;if(dtGlobals.qfymodel){href="#"}var jAdObj=jQuery(".qfy_advertising");var style="display:block !important;opacity: 1 !important;position:fixed !important;bottom:40px !important;left:0 !important;width:116px !important;height:25px !important;line-height:24px !important;background:#23282D !important;z-index:2147483647 !important;text-align:center;color:#fff !important;font-size:12px;border-top-right-radius:3px;border-bottom-right-radius:3px;";if(!jAdObj.hasClass("band")){var content="BY 起飞页自助建站"}else{var content="起飞页提供免费流量"}if(jAdObj.length==0){var tmphtml='<a class="wf-mobile-hidden qfy_advertising" target=_blank style="'+style+'"  rel="external nofollow" href="'+href+'" >'+content+"</a>";jQuery("#page").append(tmphtml)}var opacity=jAdObj.css("opacity");if(opacity!="1"){jAdObj.attr("style",style)}if(jAdObj.css("position")!="fixed"){jAdObj.attr("style",style)}if(jAdObj.css("bottom")!="40px"){jAdObj.attr("style",style)}if(jAdObj.css("left")!="0px"){jAdObj.attr("style",style)}var bgcolor=jAdObj.css("background-color");if(bgcolor!="#000000"&&bgcolor!="rgb(0, 0, 0)"){jAdObj.attr("style",style)}var color=jAdObj.css("color");if(color!="#ffffff"&&color!="rgb(255, 255, 255)"){jAdObj.attr("style",style)}var marginLeft=jAdObj.css("margin-left");if(marginLeft!="0px"){jAdObj.attr("style",style)}var marginTop=jAdObj.css("margin-top");if(marginTop!="0px"){jAdObj.attr("style",style)}var zindex=jAdObj.css("z-index");if(zindex!="2147483647"){jAdObj.attr("style",style)}var width=jAdObj.css("width");if(width!="116px"){jAdObj.attr("style",style)}var height=jAdObj.css("height");if(height!="20px"){jAdObj.attr("style",style)}var transform=jAdObj.css("transform");if(transform!="none"){jAdObj.attr("style",style)}var visible=jAdObj.css("visibility");if(visible!="visible"){jAdObj.attr("style",style)}var display=jAdObj.css("display");if(display!="block"&&jQuery("body").width()>760){jAdObj.attr("style",style)}if(jAdObj.attr("href")!=href){jAdObj.attr("href",href)}if(jAdObj.html()!=content){jAdObj.html(content)}if(top!=self){try{if(top.window.location.host!=window.location.host){location.href="http://www.qifeiye.com"}}catch(e){location.href="http://www.qifeiye.com"}}jQuery("#footer_band").hide();
}
function clickscode(obj){
	jQuery(obj).attr('src','/api/scode.php'+'?'+Math.random());
}

function nav_pagemore(obj){
	if(jQuery(obj).hasClass("vc")){
		jAlert("编辑情况下，无法点击，请在预览情况下使用！");
		return;
	}
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	if(jQuery(obj).hasClass("notmore")){
		return ;
	}
	var type=0;
	if(jQuery(obj).parent().hasClass("bitcommerce-pagination")){
		var p = jQuery(obj).closest(".bitcommerce").parent();
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] ul.products>div";
		var childClass = "ul.products>div";
	}else if(jQuery(obj).closest(".qfy_images_list").length>0){
		var p = jQuery(obj).closest(".qfy_images_list");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .qfe_images_list";
		var childClass = ".qfe_images_list";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".qfe_images_lib").length>0){
		var p = jQuery(obj).closest(".qfe_images_lib");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'] .qfe_images_lib_isotope";
		var childClass = ".qfe_images_lib_isotope";
		if(jQuery(luClass).find(".more.mypages").length>0){
			type = 1;
		}
	}else if(jQuery(obj).closest(".advanced_list").length>0){
		var p = jQuery(obj).closest(".advanced_list");
		var id = p.attr("qfyuuid");
		if(p.find(".vc-carousel-slideline-inner:visible").length>0){
		    var luClass = "[qfyuuid='"+id+"'] .vc-carousel-slideline-inner ";
		    var childClass = ".vc-carousel-slideline-inner";
		}else{
			var luClass = "[qfyuuid='"+id+"'] .qfe_wrapper ";
			var childClass = ".qfe_wrapper";
		}
		type = 0;
		if(p.find(".list-style7").length>0){
			//type = 1;
		}
	}else{
		var p = jQuery(obj).closest(".qfe_teaser_grid");
		var id = p.attr("qfyuuid");
		var luClass = "[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
		var childClass = "ul.qfe_thumbnails";
	}

	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	var list_id = p.find(".qfe_teaser_grid.qfe_content_element").attr("id");

	p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");
	if(url.indexOf("?")>-1){
		url = url+"&isappend=1";
	}else{
		url = url+"?isappend=1";
	}
	var loadtext = jQuery(obj).attr("data-loadtext");
	var old_html = jQuery(obj).find("a").html();
	jQuery(obj).hide();
	if(typeof global_image_loading!="undefined"){

		jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">'+global_image_loading+'</div>');
	}else{
		jQuery(obj).after('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;"><img src="/FeiEditor/bitSite/images/spinner.gif"><span style="color:#808080;font-size:12px;position: relative; top: -3px;">&nbsp;'+loadtext+'</span></div>');

	}

	jQuery.get(url,function(data){
		if(list_id){
			var nowlistobj =jQuery(data).find("#"+list_id+" ul.qfe_thumbnails");
		}else{
			var nowlistobj =jQuery(data).find(luClass);
		}
		var pagemore = nowlistobj.closest(".qfy-element").find(".more.mypages");

		var style = nowlistobj.find(">li").attr("style");
		p.find(childClass).append(nowlistobj.html());
		if(p.hasClass("noanimale")  || p.find(".noanimale").length>0) {
			p.find(childClass).height("auto");
			p.find(childClass+">li:not(.mobile_list_inner)").attr("style",style).css("transform","none").css("top","auto").css("position","relative");
		}
		jQuery(obj).show();
		//jQuery("html").animate({ scrollTop:  jQuery(obj).offset().top - jQuery(window).height()/2 }, "fast");

		var curr_postion = p.find("div.qfy_list_loading").offset().top+100;
		var curr_height = p.height();
		p.find("div.qfy_list_loading").remove();
		if(type=="1"){
			jQuery(obj).remove();
		}

		if(pagemore.length>0){
			jQuery(obj).attr("data-url",pagemore.attr("data-url"));
			jQuery(obj).attr("style",pagemore.attr("style"));
		}else{
			jQuery(obj).remove();
			p.find(".has_no_more").show();
		}

		if(p.find(".categories_filter").length>0){
			p.find(".categories_filter a[data-filter='*']").click();
		}

		if(p.attr("data-open")=="1")
			changelistlinkfun(p);

		vc_js_init();
		tranlanguage(p);

		list_more_waypoint();

		if(!p.hasClass("noanimale") && p.find(".isotope-item").length>0 && p.find(".noanimale").length==0) {
			p.find(childClass).isotope( 'reloadItems' ).isotope();
		}

		if(p.find(".qfe_gallery_slides.qfe_flexslider").length>0){
			vc_plugin_flexslider();
		}
	})
}


function nav_pagecate_confirm(obj){
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}

	var li = jQuery(obj).closest("li");
	var li_id = li.attr("data-id");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var type = c.attr("type");
	var id = c.attr("to_qfyuuid");
	if(!id ||!type){
		jAlert("没有找到对应的列表");
		return ;
	}

	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children") ){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}

	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0 ) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var p = jQuery("[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element").parent();
	var model_id = p.attr("data-model-id");
	if(model_id && parent){
		parent.ajaxBeforeLoading(0,p);
		var model =  parent.vc.shortcodes.get(model_id);
		var params = model.get('params');
		if(type)
			params.post_type = type;
		if(type=="products"){
			var pro_old = params.pro_categories;
			params.pro_categories = li_id;
		}else if(type=="product"){
			var product_old = params.product_categories;
			params.product_categories = li_id;
		}else{
			var post_old = params.post_categories;
			params.post_categories = li_id;
		}
		if(params.parse_url)
			var parse_url_old =  params.parse_url;
		if(params.parse_search)
			var parse_search_old =  params.parse_search;
		params.parse_url ="0";
		params.parse_search ="0";

		model.save({params: params});
        parent.vc.ShortcodesBuilder.update(model);
		if(type=="products"){
			params.pro_categories = pro_old;
		}else if(type=="product"){
			params.product_categories = product_old;
		}else{
			params.post_categories = post_old;
		}
		if(parse_url_old)
			params.parse_url = parse_url_old;
		if(parse_search_old)
			params.parse_search = parse_search_old;
		model.save({params: params});
	}

}

function nav_customsearch(obj,customurl){
	if(top.jQuery("#site-html #site-body").length>0){
		top.jAlert("请在预览下查看");
		return;
	}
	if(jQuery(".qfy_custom_search").length>0){
		if(typeof nav_customsearch_click!="function"){
			jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-customsearch.js",function() {
				nav_customsearch_click(obj,customurl);
			})
		}else{
			nav_customsearch_click(obj,customurl);
		}
	}
}
function tranlanguage(htm){
	if(jQuery("body.qfy_slw_tzh").length==1){
		StranBody(htm[0]);

	}else if(jQuery("body.qfy_slw_szh").length==1){
		StranBody(htm[0],0);
	}
}
function nav_pagecate(obj,flag){
	if(jQuery(obj).find(".loading").length>0){
		return ;
	}
	var type=0;
	var li = jQuery(obj).closest("li");
	var c = jQuery(obj).closest(".qfy-listcatecontrols");
	var id = c.attr("to_qfyuuid");
	var p = jQuery("[qfyuuid='"+id+"']");
	if(p.length==0 && jQuery(obj).attr("data-bindurl")){
		location.href = jQuery(obj).attr("data-bindurl");
		return;
	}else if(flag=="direct"){
		location.href = jQuery(obj).attr("data-url");
		return;
	}

	var luClass = "[qfyuuid='"+id+"'].qfe_teaser_grid.qfe_content_element ul.qfe_thumbnails";
	var childClass = "ul.qfe_thumbnails";
	if(p.find("div.qfy_list_loading").length>0){
		return ;
	}
	if(jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").length>0 && !li.hasClass("has-children")){
		jQuery(obj).closest(".dl-menuwrapper.dropCenterStyle_containter").find("a.dropCenterStyle").click();
	}
	p.find(".qfe_teaser_grid.qfe_content_element .teaser_grid_container").addClass("noanimale");
	p.find(luClass+" li").css("transform","none").css("top","auto").css("position","relative");
	var url = jQuery(obj).attr("data-url");


	c.find(".current-cat").removeClass("current-cat current-menu-item");
	li.addClass("current-cat current-menu-item");
	if(c.attr("data-child")=="1"){
		c.find(".list-content .children").hide();
		li.parents("li,ul").show();
		if(li.hasClass("cat-parent") && li.closest(".list-content").length>0) li.find(">.children").show();
	}
	if(c.find(".item_a").length>0){
		c.find(".item_a").removeClass("active");
		li.find(".item_a").addClass("active");
	}
	var image_src = "//f.goodq.top/qfy-content/plugins/qfy_form/admin/images/loading.gif";
	var w = "";
	if(p.attr("data-loading")){
		image_src = p.attr("data-loading");
		w = p.attr("data-loading-w");
	}

	var text = jQuery.trim(jQuery(obj).text());
	jQuery(obj).closest(".dl-menuwrapper").find(".phone-text").html(text);


	if(typeof global_image_loading!="undefined"){
		p.html('<div class="qfy_list_loading"  style="margin:0 auto;text-align:center;">'+global_image_loading+'</div>');
	}else{
		p.html('<div class="qfy_list_loading"  style="margin:50px auto;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');
	}
	jQuery.get(url,function(data){
		var nowlistobj =jQuery(data).find("[qfyuuid='"+id+"']");
		if(nowlistobj.length>0){
			p.replaceWith(nowlistobj);
			window.vc_js_init2();
			window.vc_js_init();
			 if(p.find(".noResult").length==0){
				 jQuery('[data-ride="vc-carousel"]').each(function(){
					qfy_carousel_fun(jQuery(this))
				 })
			 }
			 tranlanguage(p);
		}
		if(nowlistobj.attr("data-open")=="1")
			changelistlinkfun(nowlistobj);

		list_more_waypoint();

		if(typeof  nav_pagecate_callback=="function"){
			nav_pagecate_callback();
		}

	})
}

function preventDefaultFn(event) {
	event.preventDefault();
}

function qfy_notice_event(){
	if(jQuery(".qfy-element.qfy_notice .notice_warp").length > 0 || jQuery("a[href^='qfy_notice']").length > 0){
		if (typeof window['_qfy_notice_event'] !== 'function'){
			jQuery.onDemandScript("/FeiEditor/bitSite/js/notices.js").done(function() {
				_qfy_notice_event();
			})
		}else{
			_qfy_notice_event();
		}
	}
}
function changeURLArg(url,arg,arg_val){
	var pattern=arg+'=([^&]*)';
	var replaceText=arg+'='+arg_val;
	if(url.match(pattern)){
		var tmp='/('+ arg+'=)([^&]*)/gi';
		tmp=url.replace(eval(tmp),replaceText);
		return tmp;
	}else{
		if(url.match('[\?]')){
			return url+'&'+replaceText;
		}else{
			return url+'?'+replaceText;
		}
	}
	return url+'\n'+arg+'\n'+arg_val;
}
function gototab(obj){
	var p = jQuery(obj).closest(".qfy-tabcontent");
	p.find(".tabcontent-header-menu li.item button").removeClass("active");
	jQuery(obj).find("button").addClass("active");
	var index = p.find(".tabcontent-header-menu li.item").index(jQuery(obj));
	if(p.find(".royalSlider_gallery_new").attr("transitiontype")=="none"){
		if(p.find(".royalSlider_gallery_new>.vc-element").length>0){
			p.find(".royalSlider_gallery_new>.vc-element").removeClass("edittabshow").addClass("edittabhide");
			p.find(".royalSlider_gallery_new>.vc-element:eq("+index+")").removeClass("edittabhide").addClass("edittabshow");
		}else{
			p.find(".royalSlider_gallery_new>section").hide();
			p.find(".royalSlider_gallery_new>section:eq("+index+")").show().css("height","100%");
		}
	}else{
		p.find(".rsBullets .rsNavItem:eq("+index+")").click();
	}
}
function backlistbtn(obj){
	var $this = jQuery(obj).closest(".qfe_teaser_grid.qfe_content_element");
	var h = $this.find(".list_hidden_btn");
	h.siblings().show();
	if(h.siblings(".mypages").length>0){
		var mstyle =h.siblings(".mypages").attr("style");
		if(mstyle) mstyle = mstyle.replace("display: block;","");
		h.siblings(".mypages").attr("style",mstyle);
	}
	h.hide();
	vc_teaserGrid();
	if(curr_scrollbar) jQuery(window).scrollTop(curr_scrollbar);
}
var curr_scrollbar = 0;
function changelistlinkfun($this,$flag){
	$this.find("a.link_title:not(.a_file),a.link_image:not(.a_file),a.vc_read_more:not(.a_file),a.item_link,a.item_a_link,.prenext_inner a,>a").click(function(event) {
			event.preventDefault();
			event.stopPropagation();
			curr_scrollbar =  jQuery(window).scrollTop();
			var link = jQuery(this).attr("href");
			if($flag=="again"){
				$this = jQuery(this).closest(".list_hiddencontent").closest(".qfy-element");
				if(link=="#" ||  !link) return false;
			}
			var h = $this.find(".list_hidden_btn");
			var slider = h.attr("data-slider");
			h.find(".backbtn").hide();
			h.siblings().hide();
			h.show();
			var image_src = "//f.goodq.top/qfy-content/plugins/qfy_form/admin/images/loading.gif";
			var w = "";
			if(h.closest(".qfy-element").attr("data-loading")){
				image_src = h.closest(".qfy-element").attr("data-loading");
				w = h.closest(".qfy-element").attr("data-loading-w");
			}

			h.find(".list_hiddencontent").html('<div class="qfy_list_loading"  style="margin:0 auto;padding:100px 0;text-align:center;"><img style="width:'+w+'px" src="'+image_src+'"></div>');
			var pt = h.closest(".qfy-element").offset().top;
			if(curr_scrollbar > pt){
				jQuery("html").animate({ scrollTop: pt }, "fast");
			}

			jQuery.get(link,function(data){
				var htm =jQuery(data).find(".content-wrapper").html();
				if(!htm) htm ="";
				if(slider=="1"){
					var htm_prev = "";
					var htm_next = "";
					if(jQuery(data).find(".bitMainTopSider").length>0){
						htm_prev = "<div class='bmts' style='position:relative;width:100%'>"+jQuery(data).find(".bitMainTopSider").html()+"</div>";
					}
					if(jQuery(data).find(".bitMainBottomSider").length>0){
						htm_next = "<div class='bmbs'  style='position:relative;width:100%'>"+jQuery(data).find(".bitMainBottomSider").html()+"</div>";
					}
					htm = htm_prev+htm+htm_next;
				}
				h.find(".list_hiddencontent").html(htm);
				h.find(".backbtn").show();
				 window.vc_js_init2();
				 window.vc_js_init();
				 qfy_notice_event();
				 tranlanguage(h);
				 //。。。。。
				 changelistlinkfun(jQuery(".list_hiddencontent .teaser_grid_container,.list_hiddencontent .advanced_list,.list_hiddencontent .qfy-prenext,.list_hiddencontent .mypages.pagenav"),"again");
			});

			return false;//阻止链接跳转
	 });
}
function list_more_waypoint(){
	if(jQuery(".qfe_teaser_grid .more.auto").length>0){
		jQuery(".qfe_teaser_grid .more.auto").waypoint('destroy');
		jQuery(".qfe_teaser_grid .more.auto").waypoint({
			handler: function(direction) {
					jQuery(this).click();
			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
	}
}

var qfy_template_waypoint;
jQuery(document).ready(function($) {

	if(dtGlobals.isWindowsPhone){$("body").addClass("ie-mobile")}if(!$("html").hasClass("old-ie")){dtGlobals.isPhone=false;dtGlobals.isTablet=false;dtGlobals.isDesktop=false;try{var size=top.window.getComputedStyle(top.document.body,":after").getPropertyValue("content");if(size.indexOf("phone")!=-1&&dtGlobals.isMobile){dtGlobals.isPhone=true}else if(size.indexOf("tablet")!=-1&&dtGlobals.isMobile){dtGlobals.isTablet=true}else{dtGlobals.isDesktop=true}}catch(e){}};


	jQuery(".mobile_variation_warp").closest("section").css("z-index","100");
	jQuery("#dl-menu .qfy-sub-div").remove();


	jQuery(".qfy-sub-div").each(function(){
		if(jQuery(this).attr("data-full")=="1"){
			var bw = jQuery("body").width();
			var offsetleft = jQuery(this).closest("li").offset().left;
            jQuery(this).hide();
			jQuery(this).css("width","100vw").css("margin-left","-"+(offsetleft)+"px");

		}
	})

	jQuery("#main-nav .hassubdiv").mouseenter(function(){
		jQuery(this).find(".qfy-sub-div").each(function(){
			if(jQuery(this).attr("data-full")=="1"){
				var bw = jQuery("body").width();
				var offsetleft = jQuery(this).closest("li").offset().left;
				let $this = this;
				jQuery(this).css("width","100vw").css("margin-left","-"+(offsetleft)+"px");
				setTimeout(function() {
					jQuery($this).show();
				},150);
			}
		});
		$(window).trigger('resize');
	})


	if(jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").length>0){
		jQuery(".qfy-listcatecontrols[data-child='1'],.qfy-listmenuvertical[data-child='1']").each(function(){
			var cur = jQuery(this).find(".list-content .current-cat");
			jQuery(this).find(".list-content .children").hide();
			cur.parents("li,ul").show();
			if(cur.hasClass("cat-parent") && cur.closest(".list-content").length>0 ) cur.find(">.children").show();
		})

	}
	if(jQuery(".qfy_template_lib .viewmoretemplate").length>0){
		jQuery(".qfy_template_lib .viewmoretemplate").waypoint({
			handler: function(direction) {
				if(jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").length>0){
					jQuery(".qfy_template_lib .viewmoretemplate .viewmoretemplate_inner").click();
				}

			},
			triggerOnce: true,
			offset: "bottom-in-view",
		})
	}

	if(!is_edit_model){
		jQuery(".qfe_teaser_grid.qfe_content_element[data-open='1']").each(function(){
			var $this =  jQuery(this);
			changelistlinkfun($this);
		})
		qfy_notice_event();
		list_more_waypoint();
	}
	if(jQuery("body.free_public").length>0){
		checkAdvertising();
		setTimeout("checkAdvertising()",3000);
		setTimeout("checkAdvertising()",6000);
		setTimeout("checkAdvertising()",10000);
		setTimeout("checkAdvertising()",20000);
		setTimeout("checkAdvertising()",30000);
		setTimeout("checkAdvertising()",100000);
	}

	jQuery(".qfytemplateslist .qfypreloadimg").each(function(){
		var newurl = jQuery(this).attr("data-src");
		var $this = jQuery(this);
		jQuery('<img src="'+newurl+'">').load(function(){
			$this.attr("src",newurl);
		})
	})
	jQuery(".qfy_scroll_box:not(.load)").each(function(){
		jQuery(this).addClass("load");
		var box = jQuery(this).attr("id");
		var delay = jQuery(this).attr("data-delay");
		var speed = jQuery(this).attr("data-speed");
		var h = jQuery(this).attr("data-h");
		slideLine(box,"div",delay,speed,h);
	});

	vc_gallery_relat();
	//特殊处理一些网站
	if(jQuery(".re_second_user_class").length>0 && jQuery.trim(jQuery(".re_second_user_span").text())==""){
		jQuery(".re_second_user_class").hide();
	}

	if(jQuery(".addon-custom-datepicker" ).length>0 ){
		jQuery(".addon-custom-datepicker" ).datepicker({
						dateFormat: "yy-mm-dd",
						numberOfMonths: 1,
		});
	}
	if(jQuery(".addon-custom-datetimepicker" ).length>0 ){
		jQuery(".addon-custom-datetimepicker" ).datetimepicker({
					dateFormat: "yy-mm-dd",
					numberOfMonths: 1,
					showTime: true,
					constrainInput: false
		});
	}
	//模板列表
	if(jQuery(".qfytemplateslist").length>0 ){
		$.onDemandScript("/qfy-content/themes/qfy-01/js/a-template.js",function() {
			template_list_init();
		});
	}
	var current_page_id = jQuery('body').attr('data-pid');
	var current_page_key = jQuery('body').attr('data-pkey');
	if(current_page_id != '' && current_page_id != 'undefined' && current_page_key != '' && current_page_key != 'undefined' && document.domain){
		var multlocal = getCookie("bit_current_currency");
	    jQuery.ajax({
	        url: '/FeiEditor/traffic/log',
	        type: 'post',
	        async: true,
			dataType: "JSON",
	        data: {
	        	st_pid: current_page_id,
	        	st_pkey: current_page_key,
				st_ip:  (!is_edit_model && dtGlobals.visit_country_enable==1)?1:0,
				st_currency:  (!is_edit_model && dtGlobals.cny_auto_ip==1 && !multlocal)?1:0,
	        },
			success: function(rlt) {
				if(rlt.redirect && rlt.redirect!=""){
					location.href = rlt.redirect;
				}else if( rlt.country && rlt.country.currency ){
					if(!multlocal ) {
						setCookie("bit_current_currency",rlt.country.currency);
						var site_url =window.location.href;
						var basetmp = site_url.split("#")[0].split("?");

						if(basetmp.length>1){
							var tmps = basetmp[1].split("&");
							var news = [];
							for(var i=0;i<tmps.length;i++){
								if( tmps[i].indexOf("bit-currency=")>-1  ){
								}else{
									news.push(tmps[i]);
								}
							}
							if(news){
								site_url = basetmp[0]+"?"+news.join("&");
							}else{
								site_url = basetmp[0]+"?";
							}
							site_url = site_url + '&bit-currency='+rlt.country.currency;
						}else{
							site_url = site_url.split("#")[0] + '?bit-currency='+rlt.country.currency;
						}

						window.location.href = site_url;
					}

				}else if(rlt.flag==0){
					jQuery.onDemandScript("/FeiEditor/bitSite/js/log.js",function() {
						var fingerprint = new Fingerprint({canvas: true}).get();
						fingerprint  = window.btoa(fingerprint);
						fingerprint  = window.btoa(fingerprint);
						jQuery.ajax({
							url: '/FeiEditor/traffic/log_r',
							type: 'post',
							async: true,
							data: {
								fprint:fingerprint
							}
						});
					})
				}
			}
	    });
	}
	setTimeout(function(){
		try{
			if(top!=self && !jQuery("body").hasClass("compose-mode")){
				if(top.jQuery('#pageUrl').length>0 && parent.jQuery("#vc-post-id").val()!=dtGlobals.curr_id){
					if(parent.jQuery("#vc-post-id").val()){
						top.jQuery('#pageUrl').val(dtGlobals.curr_id).change();
						return;
					}else if(jQuery("#vc-post-id").length==0){
						top.jAlert("页面过期，正尝试自动刷新！");
						setTimeout(function(){top.location.reload();},1000);
						return;
					}
				}
			}
		}catch(e){}
	},1000);
	position_follow_function();
	//ready end
})


function qfy_popinfo_fun(htm,timetoclose){
	jQuery(".qfy_popinfo").remove();
	if(htm){
		var msg = '<div class="qfy_popinfo" ><div class="md-content">'+htm+'</div></div>';
		jQuery("body").append(msg);
		setTimeout(function(){ jQuery(".qfy_popinfo").addClass("qfy_show"); },500);
		if(timetoclose){
			setTimeout(function(){ jQuery(".qfy_popinfo").removeClass("qfy_show"); },timetoclose*1000);
		}
	}
}
function weixin_auto_redirect(){
	//第三方补全信息页面，不要跳
	if(jQuery('.qfyuser[data-template="changeinfo"]').length>0){
		return;
	}
	jQuery.post("/admin/admin-ajax.php",{action:"weixin_auto_redirect"},function(data){
		if(data.indexOf("http")==0){
			location.href=data;
		}
	});
}
function openheaderbtn(obj){
	if(jQuery("#page,#phantom").hasClass("menuopen")){
		jQuery("#page,#phantom").removeClass("menuopen");
	}else{
		jQuery("#page,#phantom").addClass("menuopen");
	}
}
function before_quick_search(obj){
	var search =jQuery(obj).find("[name='search']").val();
	if(search==""){
		return false;
	}
}
function quick_search(obj){
	var v = jQuery(obj).val();
	var pageid = jQuery(obj).attr("data-pageid");
	var title = jQuery(obj).attr("data-title")? jQuery(obj).attr("data-title"):"搜索";
	var placeholder = jQuery(obj).attr("data-placeholder")?jQuery(obj).attr("data-placeholder"):"请输入关键词";
	var btn1 = jQuery(obj).attr("data-btn1")?jQuery(obj).attr("data-btn1"):"确认";
	var btn2 = jQuery(obj).attr("data-btn2")?jQuery(obj).attr("data-btn2"):"取消";
	var  posttype =  jQuery(obj).attr("data-posttype");
	var postcate = jQuery(obj).attr("data-postcate");
	var bw = jQuery("body").width();
	var bh = jQuery(window).height();
	var message="<div><form action='/'  onsubmit='return before_quick_search(this)'><input type='hidden'  name='searchtype' value='"+posttype+"' /><input type='hidden'  name='searchcate' value='"+postcate+"' /><input type='hidden' name='page_id' value='"+pageid+"'><div style='box-sizing: border-box;padding: 26px 24px 5px 24px;font-size: 18px;font-weight: 500;line-height: 24px;text-align: left;'>"+title+"</div>";
	if( jQuery(obj).attr("data-es")=="1"){
		message +='<input type="hidden"  name="ep_search" value="1" />';
		message +='<input type="hidden"  name="qfyuuid" value="'+ jQuery(obj).attr("data-es-uuid")+'" />';
		if( jQuery(obj).attr("data-es-relevancy")=="1"){
			message +='<input type="hidden"  name="ep_relevancy" value="1" />';
		}
	}
	message +='<div  style="height: 80px;box-sizing: border-box;padding: 0 24px;overflow-y: auto;font-size: 15px;line-height: 1.5;color: rgba(0,0,0,.7);"><input style="border-width: 1px;border-style: solid;padding: 15px;background: #f2f2f2;width: 100%;text-indent: 6px;box-sizing: border-box;margin-top: 5px;border-radius: 0;outline:0;border-color:#ececec;" placeholder="'+placeholder+'" type="search" name="search"></div>';
	message +='<div class="pop_search_btn_div" style="padding: 0 20px;text-align: right;box-sizing: border-box;"><button type="submit" style="min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;font-size:14px;">'+btn1+'</button><button type="button" onclick="unblockUI()" style="font-size:14px;min-width: 64px;display: inline-block;height: 36px;padding: 0 16px;text-align: center;text-decoration: none;vertical-align: middle;border-radius: 2px;background:transparent;border:0;">'+btn2+'</button></div></form></div>';
	if(bw<768){
		var w = bw - 40;
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-"+(w/2)+"px",width:w+"px",height:"180px"},message:message});
	}else{
		jQuery.blockUI({onOverlayClick: top.jQuery.unblockUI,css: {"cursor":"auto","top":"30%","left":"50%","margin-left":"-360px",width:"720px",height:"180px"},message:message});
	}
	jQuery('body').css('cursor', 'auto');
}
function unblockUI(){
	jQuery.unblockUI();
}
function beforeOnclick(e,msg){
	if(confirm(msg)){
	}else{
		 e.preventDefault();
		 e.stopPropagation();
		 return false;
	}
}
function login_button_click(id,link){
	if(self!=top && typeof parent.jAlert =="function"){
		jAlert("在编辑模式下，不允许使用该功能，请到预览模式下使用。");
		return false;
	}
	var back = location.href;
	try{if(location.href.indexOf('qfy-login.php')>0) back = document.loginform.redirect_to.value;}catch(e){back = '/';}
	location.href=(link?link:'/')+'?connect='+id+'&action=login&qfy_nocache=true&back='+escape(back);
}
function play_qfy_video(obj){
	//click
	if(typeof play_qfy_video_init !="function"){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-popvideo.js",function() {
			play_qfy_video_init(obj);
		});
	}else{
		play_qfy_video_init(obj);
	}
}
function play_local_video(obj){
	//click
	if(typeof play_local_video_init !="function"){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-popvideo.js",function() {
			play_local_video_init(obj);
		});
	}else{
		play_local_video_init(obj);
	}
}

function init_usermange_detail(){
	if(jQuery("#usermanage_container").length <= 0) return;
	if (typeof window['_init_usermange_detail'] !== 'function'){
		jQuery.onDemandScript("/FeiEditor/bitSite/js/users.js",function() {
			_init_usermange_detail();
		})
	}else{
		_init_usermange_detail();
	}
}

function qfy_secode_check(obj){
	if(typeof qfy_scode_check_init !="function"){
		jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-scode.js",function() {
			qfy_scode_check_init(obj);
		});
	}else{
		qfy_scode_check_init(obj);
	}
}

if(typeof(position_follow_function)!='function'){
	function position_follow_function(){
		//手机，编辑，自由区块不适用。添加类position-follow
		if(is_edit_model){
			return;
		}
		if( jQuery(".position-follow").length>0){
			jQuery.onDemandScript("/qfy-content/themes/qfy-01/js/a-follow.js",function() {
				position_follow_init();
			});
		}
	}
}

var pop_scrollTop = 0;
function pop_stopScroll() {
	if( jQuery(window).width()>760){
		return;
	}
	pop_scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	// 使body脱离文档流
	jQuery("body").addClass('dialog-open');
	jQuery("body").css('top',-pop_scrollTop + 'px');
}
function pop_recoverScroll() {
	if( jQuery(window).width()>760){
		return;
	}
	jQuery("body").removeClass('dialog-open');
	document.body.scrollTop = document.documentElement.scrollTop = pop_scrollTop;
}
function open_menu_pop_content(){
	if( jQuery("body").hasClass("pop-content") ){
		jQuery("body").removeClass("pop-content");
	}else{
		jQuery("body").addClass("pop-content");
	}
}

function auto_tab_menu($this) {

		if(!$this.hasClass("active")){
			$this.addClass("active");
		}else{
			return;
		}
		if( !$this.attr("data-param")){
			return;
		}


		var data = JSON.parse($this.attr("data-param"));
		if(!data.scope){
			data.scope = "#"+$this.closest("section").attr("id");
		}

		if(!data.level){
			return;
		}
		if($(data.scope).length==0){
			return;
		}



		var isTakeOverByClick = false;
		var idList=[];
		var a = $(data.scope).find(data.level.join(","));

		$.each(a,function(index,value){

			idList.push(index);
			var anchor = document.createElement('a');
			anchor.setAttribute('id', data.name + index);
			$(data.location).append("<div class='w-toc "+value.localName+"' id='cl"+index+"'>"+value.innerText+"</div>");
			value.parentNode.insertBefore(anchor, value);
			$(data.location+" #cl"+index).click(function(){
				isTakeOverByClick = true;
				window.location.href="#"+data.name+index;
				$(data.location+' .w-toc style').remove();
				$(this).append("<style>"+data.location+" #cl"+index+":before{background-color: "+data.activeBackground+"}</style>");
				$(data.location+' .w-toc').css("color",""+data.color+"");
				$(this).css("color",""+data.activeColor+"");
			})
		})
		if(data.title==null || data.title==""){
			$this.find(".table-content .title").text("");
		}else{
			$this.find(".table-content .title").text(data.title);
		}
		if(data.hidetitle==1){
			$this.find(".table-content .title").hide();
		}
		$(data.location+" .w-toc").css({"padding":"5px 2px","color":""+data.color+""});
		$(data.location).append("<style>"+data.location+" .w-toc:before{content:' ';display:inline-block;height:100%;left:0;margin-top:-1px;position:absolute;width:3px;}</style>");


		for(let i=0;i<data.level.length;i++){
			$(data.scope+" ."+data.level[i]).css({"padding-left":(10*i+10)+"px","font-family":data.font,"font-size":data.size[i]+"px","margin-bottom":data.margin[i]+"px"});
		}

	    $this.find(".table-content").css({"max-width":""+data.maxWidth+"","background-color":""+data.background+"","box-shadow":"0 0 10px #ccc","overflow":"hidden"});
		$this.find(".table-content .title").attr("style",data.fontstyle);
		// $(data.location+" .table-title").click(function(){
		// 	$(data.location).toggle();
		// }),
	   var width = $this.find(".table-content").width();

	   var height = $this.find(".table-content").height();
	   var container_h = $(data.scope).offset().top*1+ $(data.scope).height();
		$(window).scroll(function () {
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			!isTakeOverByClick && $.each(idList, function (index, id) {
				var head = $(data.scope+' #'+data.name + id);
				var item = $(data.location+' #cl' + id);
				var offsetTopHead = head.offset().top;
				if (scrollTop >= offsetTopHead) {
					$(data.location+' .w-toc style').remove();
					item.append("<style>"+data.location+" #cl"+index+":before{background-color: "+data.activeBackground+"}</style>");
					$(data.location+' .w-toc').css("color",""+data.color+"");
					item.css("color",""+data.activeColor+"");
				}
			});
			isTakeOverByClick = false;




			var offsetTopHeads = $this.offset().top;
			if (scrollTop >= offsetTopHeads  ) {
				$this.find(".table-content").css({"position":"fixed","top": "0","width":width+"px"});
				$this.closest("section").addClass("sectiontopIndex");
				if(scrollTop>container_h-height){
					$this.find(".table-content").css({"position":"fixed","top": -(scrollTop-(container_h-height))+"px","width":width+"px"});
				}
			}else{
				$this.find(".table-content").css("position","initial");
				$this.closest("section").removeClass("sectiontopIndex");
			}
		});
	}


;

/* thickbox: (http://www.shengfenghe.com/qfy-includes/js/thickbox/thickbox.js) */
/*
 * Thickbox 3.1 - One Box To Rule Them All.
 * By Cody Lindley (http://www.codylindley.com)
 * Copyright (c) 2007 cody lindley
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

if ( typeof tb_pathToImage != 'string' ) {
	var tb_pathToImage = thickboxL10n.loadingAnimation;
}

/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/

//on page load call tb_init
jQuery(document).ready(function(){
	tb_init('a.thickbox, area.thickbox, input.thickbox');//pass where to apply thickbox
	
});

//add thickbox to href & area elements that have a class of .thickbox
function tb_init(domChunk){
	jQuery('body').on('click', domChunk, tb_click);
}

function tb_click(){
	var t = this.title || this.name || null;
	var a = this.href || this.alt;
	var g = this.rel || false;
	tb_show(t,a,g);
	this.blur();
	return false;
}

function tb_show(caption, url, imageGroup) {//function called when the user clicks on a thickbox link

	imgLoader = new Image();// preload image
	imgLoader.src = tb_pathToImage;
	try {
		if (typeof document.body.style.maxHeight === "undefined") {//if IE 6
			jQuery("body","html").css({height: "100%", width: "100%"});
			jQuery("html").css("overflow","hidden");
			if (document.getElementById("TB_HideSelect") === null) {//iframe to hide select elements in ie6
				jQuery("body").append("<iframe id='TB_HideSelect'>"+thickboxL10n.noiframes+"</iframe><div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}else{//all others
			if(document.getElementById("TB_overlay") === null){
				jQuery("body").append("<div id='TB_overlay'></div><div id='TB_window'></div>");
				jQuery("#TB_overlay").click(tb_remove);
			}
		}

		if(tb_detectMacXFF()){
			jQuery("#TB_overlay").addClass("TB_overlayMacFFBGHack");//use png overlay so hide flash
		}else{
			jQuery("#TB_overlay").addClass("TB_overlayBG");//use background and opacity
		}

		if(caption===null){caption="";}
		jQuery("body").append("<div id='TB_load'><img src='"+imgLoader.src+"' width='60' /></div>");//add loader to the page

		jQuery('#TB_load').show();//show loader

		var baseURL;
	   if(url.indexOf("?")!==-1){ //ff there is a query string involved
			baseURL = url.substr(0, url.indexOf("?"));
	   }else{
	   		baseURL = url;
	   }

	   var urlString = /\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/;
	   var urlType = baseURL.toLowerCase().match(urlString);

		if(urlType == '.jpg' || urlType == '.jpeg' || urlType == '.png' || urlType == '.gif' || urlType == '.bmp'){//code to show images

			TB_PrevCaption = "";
			TB_PrevURL = "";
			TB_PrevHTML = "";
			TB_NextCaption = "";
			TB_NextURL = "";
			TB_NextHTML = "";
			TB_imageCount = "";
			TB_FoundURL = false;
			if(imageGroup){
				TB_TempArray = jQuery("a[rel="+imageGroup+"]").get();
				for (TB_Counter = 0; ((TB_Counter < TB_TempArray.length) && (TB_NextHTML === "")); TB_Counter++) {
					var urlTypeTemp = TB_TempArray[TB_Counter].href.toLowerCase().match(urlString);
						if (!(TB_TempArray[TB_Counter].href == url)) {
							if (TB_FoundURL) {
								TB_NextCaption = TB_TempArray[TB_Counter].title;
								TB_NextURL = TB_TempArray[TB_Counter].href;
								TB_NextHTML = "<span id='TB_next'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.next+"</a></span>";
							} else {
								TB_PrevCaption = TB_TempArray[TB_Counter].title;
								TB_PrevURL = TB_TempArray[TB_Counter].href;
								TB_PrevHTML = "<span id='TB_prev'>&nbsp;&nbsp;<a href='#'>"+thickboxL10n.prev+"</a></span>";
							}
						} else {
							TB_FoundURL = true;
							TB_imageCount = thickboxL10n.image + ' ' + (TB_Counter + 1) + ' ' + thickboxL10n.of + ' ' + (TB_TempArray.length);
						}
				}
			}

			imgPreloader = new Image();
			imgPreloader.onload = function(){
			imgPreloader.onload = null;

			// Resizing large images - orginal by Christian Montoya edited by me.
			var pagesize = tb_getPageSize();
			var x = pagesize[0] - 50;
			var y = pagesize[1] - 20;
			var imageWidth = imgPreloader.width;
			var imageHeight = imgPreloader.height;
			if (imageWidth > x) {
				imageHeight = imageHeight * (x / imageWidth);
				imageWidth = x;
				if (imageHeight > y) {
					imageWidth = imageWidth * (y / imageHeight);
					imageHeight = y;
				}
			} else if (imageHeight > y) {
				imageWidth = imageWidth * (y / imageHeight);
				imageHeight = y;
				if (imageWidth > x) {
					imageHeight = imageHeight * (x / imageWidth);
					imageWidth = x;
				}
			}
			// End Resizing

			TB_WIDTH = imageWidth + 30;
			TB_HEIGHT = imageHeight + 60;
			jQuery("#TB_window").append("<a href='' id='TB_ImageOff' title='"+thickboxL10n.close+"'><img id='TB_Image' src='"+url+"' width='"+imageWidth+"' height='"+imageHeight+"' alt='"+caption+"'/></a>" + "<div id='TB_caption'>"+caption+"<div id='TB_secondLine'>" + TB_imageCount + TB_PrevHTML + TB_NextHTML + "</div></div><div id='TB_closeWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div>");

			jQuery("#TB_closeWindowButton").click(tb_remove);

			if (!(TB_PrevHTML === "")) {
				function goPrev(){
					if(jQuery(document).unbind("click",goPrev)){jQuery(document).unbind("click",goPrev);}
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_PrevCaption, TB_PrevURL, imageGroup);
					return false;
				}
				jQuery("#TB_prev").click(goPrev);
			}

			if (!(TB_NextHTML === "")) {
				function goNext(){
					jQuery("#TB_window").remove();
					jQuery("body").append("<div id='TB_window'></div>");
					tb_show(TB_NextCaption, TB_NextURL, imageGroup);
					return false;
				}
				jQuery("#TB_next").click(goNext);

			}

			jQuery(document).bind('keydown.thickbox', function(e){
				e.stopImmediatePropagation();

				if ( e.which == 27 ){ // close
					if ( ! jQuery(document).triggerHandler( 'qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

				} else if ( e.which == 190 ){ // display previous image
					if(!(TB_NextHTML == "")){
						jQuery(document).unbind('thickbox');
						goNext();
					}
				} else if ( e.which == 188 ){ // display next image
					if(!(TB_PrevHTML == "")){
						jQuery(document).unbind('thickbox');
						goPrev();
					}
				}
				return false;
			});

			tb_position();
			jQuery("#TB_load").remove();
			jQuery("#TB_ImageOff").click(tb_remove);
			jQuery("#TB_window").css({'visibility':'visible'}); //for safari using css instead of show
			};

			imgPreloader.src = url;
		}else{//code to show html

			var queryString = url.replace(/^[^\?]+\??/,'');
			var params = tb_parseQuery( queryString );

			TB_WIDTH = (params['width']*1) + 30 || 630; //defaults to 630 if no paramaters were added to URL
			TB_HEIGHT = (params['height']*1) + 40 || 440; //defaults to 440 if no paramaters were added to URL
			ajaxContentW = TB_WIDTH - 30;
			ajaxContentH = TB_HEIGHT - 45;

			if(url.indexOf('TB_iframe') != -1){// either iframe or ajax window
					urlNoQuery = url.split('TB_');
					jQuery("#TB_iframeContent").remove();
					if(params['modal'] != "true"){//iframe no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton' title='"+thickboxL10n.close+"'><div class='tb-close-icon'></div></a></div></div><iframe allowFullScreen=true allowFullScreen  frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;' >"+thickboxL10n.noiframes+"</iframe>");
					}else{//iframe modal
					jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<iframe frameborder='0' hspace='0' src='"+urlNoQuery[0]+"' id='TB_iframeContent' name='TB_iframeContent"+Math.round(Math.random()*1000)+"' onload='tb_showIframe()' style='width:"+(ajaxContentW + 29)+"px;height:"+(ajaxContentH + 17)+"px;'>"+thickboxL10n.noiframes+"</iframe>");
					}
			}else{// not an iframe, ajax
					if(jQuery("#TB_window").css("visibility") != "visible"){
						if(params['modal'] != "true"){//ajax no modal
						jQuery("#TB_window").append("<div id='TB_title'><div id='TB_ajaxWindowTitle'>"+caption+"</div><div id='TB_closeAjaxWindow'><a href='#' id='TB_closeWindowButton'><div class='tb-close-icon'></div></a></div></div><div id='TB_ajaxContent' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px'></div>");
						}else{//ajax modal
						jQuery("#TB_overlay").unbind();
						jQuery("#TB_window").append("<div id='TB_ajaxContent' class='TB_modal' style='width:"+ajaxContentW+"px;height:"+ajaxContentH+"px;'></div>");
						}
					}else{//this means the window is already up, we are just loading new content via ajax
						jQuery("#TB_ajaxContent")[0].style.width = ajaxContentW +"px";
						jQuery("#TB_ajaxContent")[0].style.height = ajaxContentH +"px";
						jQuery("#TB_ajaxContent")[0].scrollTop = 0;
						jQuery("#TB_ajaxWindowTitle").html(caption);
					}
			}

			jQuery("#TB_closeWindowButton").click(tb_remove);

				if(url.indexOf('TB_inline') != -1){
					jQuery("#TB_ajaxContent").append(jQuery('#' + params['inlineId']).children());
					jQuery("#TB_window").bind('tb_unload', function () {
						jQuery('#' + params['inlineId']).append( jQuery("#TB_ajaxContent").children() ); // move elements back when you're finished
					});
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else if(url.indexOf('TB_iframe') != -1){
					tb_position();
					jQuery("#TB_load").remove();
					jQuery("#TB_window").css({'visibility':'visible'});
				}else{
					jQuery("#TB_ajaxContent").load(url += "&random=" + (new Date().getTime()),function(){//to do a post change this load method
						tb_position();
						jQuery("#TB_load").remove();
						tb_init("#TB_ajaxContent a.thickbox");
						jQuery("#TB_window").css({'visibility':'visible'});
					});
				}

		}

		if(!params['modal']){
			jQuery(document).bind('keyup.thickbox', function(e){

				if ( e.which == 27 ){ // close
					e.stopImmediatePropagation();
					if ( ! jQuery(document).triggerHandler( 'qf_CloseOnEscape', [{ event: e, what: 'thickbox', cb: tb_remove }] ) )
						tb_remove();

					return false;
				}
			});
		}

	} catch(e) {
		//nothing here
	}
}

//helper functions below
function tb_showIframe(){
	jQuery("#TB_load").remove();
	jQuery("#TB_window").css({'visibility':'visible'});
}

function tb_remove() {
 	jQuery("#TB_imageOff").unbind("click");
	jQuery("#TB_closeWindowButton").unbind("click");
	jQuery("#TB_window").fadeOut("fast",function(){jQuery('#TB_window,#TB_overlay,#TB_HideSelect').trigger("tb_unload").unbind().remove();});
	jQuery("#TB_load").remove();
	if (typeof document.body.style.maxHeight == "undefined") {//if IE 6
		jQuery("body","html").css({height: "auto", width: "auto"});
		jQuery("html").css("overflow","");
	}
	jQuery(document).unbind('.thickbox');
	return false;
}

function tb_position() {
	
var isIE6 = typeof document.body.style.maxHeight === "undefined";
jQuery("#TB_window").css({marginLeft: '-' + parseInt((TB_WIDTH / 2),10) + 'px', width: TB_WIDTH + 'px'});
	if ( ! isIE6 ) { // take away IE6
		jQuery("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
	}
}

function tb_parseQuery ( query ) {
   var Params = {};
   if ( ! query ) {return Params;}// return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) {continue;}
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}

function tb_getPageSize(){
	var de = document.documentElement;
	var w = window.innerWidth || self.innerWidth || (de&&de.clientWidth) || document.body.clientWidth;
	var h = window.innerHeight || self.innerHeight || (de&&de.clientHeight) || document.body.clientHeight;
	arrayPageSize = [w,h];
	return arrayPageSize;
}

function tb_detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}
;

/* jquery-lazy: (http://www.shengfenghe.com/qfy-includes/js/jquery.lazy.min.js) */
/*! jQuery & Zepto Lazy v1.7.6 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
!function(t,e){"use strict";function r(r,a,i,u,l){function f(){L=t.devicePixelRatio>1,i=c(i),a.delay>=0&&setTimeout(function(){s(!0)},a.delay),(a.delay<0||a.combined)&&(u.e=v(a.throttle,function(t){"resize"===t.type&&(w=B=-1),s(t.all)}),u.a=function(t){t=c(t),i.push.apply(i,t)},u.g=function(){return i=n(i).filter(function(){return!n(this).data(a.loadedName)})},u.f=function(t){for(var e=0;e<t.length;e++){var r=i.filter(function(){return this===t[e]});r.length&&s(!1,r)}},s(),n(a.appendScroll).on("scroll."+l+" resize."+l,u.e))}function c(t){var i=a.defaultImage,o=a.placeholder,u=a.imageBase,l=a.srcsetAttribute,f=a.loaderAttribute,c=a._f||{};t=n(t).filter(function(){var t=n(this),r=m(this);return!t.data(a.handledName)&&(t.attr(a.attribute)||t.attr(l)||t.attr(f)||c[r]!==e)}).data("plugin_"+a.name,r);for(var s=0,d=t.length;s<d;s++){var A=n(t[s]),g=m(t[s]),h=A.attr(a.imageBaseAttribute)||u;g===N&&h&&A.attr(l)&&A.attr(l,b(A.attr(l),h)),c[g]===e||A.attr(f)||A.attr(f,c[g]),g===N&&i&&!A.attr(E)?A.attr(E,i):g===N||!o||A.css(O)&&"none"!==A.css(O)||A.css(O,"url('"+o+"')")}return t}function s(t,e){if(!i.length)return void(a.autoDestroy&&r.destroy());for(var o=e||i,u=!1,l=a.imageBase||"",f=a.srcsetAttribute,c=a.handledName,s=0;s<o.length;s++)if(t||e||A(o[s])){var g=n(o[s]),h=m(o[s]),b=g.attr(a.attribute),v=g.attr(a.imageBaseAttribute)||l,p=g.attr(a.loaderAttribute);g.data(c)||a.visibleOnly&&!g.is(":visible")||!((b||g.attr(f))&&(h===N&&(v+b!==g.attr(E)||g.attr(f)!==g.attr(F))||h!==N&&v+b!==g.css(O))||p)||(u=!0,g.data(c,!0),d(g,h,v,p))}u&&(i=n(i).filter(function(){return!n(this).data(c)}))}function d(t,e,r,i){++z;var o=function(){y("onError",t),p(),o=n.noop};y("beforeLoad",t);var u=a.attribute,l=a.srcsetAttribute,f=a.sizesAttribute,c=a.retinaAttribute,s=a.removeAttribute,d=a.loadedName,A=t.attr(c);if(i){var g=function(){s&&t.removeAttr(a.loaderAttribute),t.data(d,!0),y(T,t),setTimeout(p,1),g=n.noop};t.off(I).one(I,o).one(D,g),y(i,t,function(e){e?(t.off(D),g()):(t.off(I),o())})||t.trigger(I)}else{var h=n(new Image);h.one(I,o).one(D,function(){t.hide(),e===N?t.attr(C,h.attr(C)).attr(F,h.attr(F)).attr(E,h.attr(E)):t.css(O,"url('"+h.attr(E)+"')"),t[a.effect](a.effectTime),s&&(t.removeAttr(u+" "+l+" "+c+" "+a.imageBaseAttribute),f!==C&&t.removeAttr(f)),t.data(d,!0),y(T,t),h.remove(),p()});var m=(L&&A?A:t.attr(u))||"";h.attr(C,t.attr(f)).attr(F,t.attr(l)).attr(E,m?r+m:null),h.complete&&h.trigger(D)}}function A(t){var e=t.getBoundingClientRect(),r=a.scrollDirection,n=a.threshold,i=h()+n>e.top&&-n<e.bottom,o=g()+n>e.left&&-n<e.right;return"vertical"===r?i:"horizontal"===r?o:i&&o}function g(){return w>=0?w:w=n(t).width()}function h(){return B>=0?B:B=n(t).height()}function m(t){return t.tagName.toLowerCase()}function b(t,e){if(e){var r=t.split(",");t="";for(var a=0,n=r.length;a<n;a++)t+=e+r[a].trim()+(a!==n-1?",":"")}return t}function v(t,e){var n,i=0;return function(o,u){function l(){i=+new Date,e.call(r,o)}var f=+new Date-i;n&&clearTimeout(n),f>t||!a.enableThrottle||u?l():n=setTimeout(l,t-f)}}function p(){--z,i.length||z||y("onFinishedAll")}function y(t,e,n){return!!(t=a[t])&&(t.apply(r,[].slice.call(arguments,1)),!0)}var z=0,w=-1,B=-1,L=!1,T="afterLoad",D="load",I="error",N="img",E="src",F="srcset",C="sizes",O="background-image";"event"===a.bind||o?f():n(t).on(D+"."+l,f)}function a(a,o){var u=this,l=n.extend({},u.config,o),f={},c=l.name+"-"+ ++i;return u.config=function(t,r){return r===e?l[t]:(l[t]=r,u)},u.addItems=function(t){return f.a&&f.a("string"===n.type(t)?n(t):t),u},u.getItems=function(){return f.g?f.g():{}},u.update=function(t){return f.e&&f.e({},!t),u},u.force=function(t){return f.f&&f.f("string"===n.type(t)?n(t):t),u},u.loadAll=function(){return f.e&&f.e({all:!0},!0),u},u.destroy=function(){return n(l.appendScroll).off("."+c,f.e),n(t).off("."+c),f={},e},r(u,l,a,f,c),l.chainable?a:u}var n=t.jQuery||t.Zepto,i=0,o=!1;n.fn.Lazy=n.fn.lazy=function(t){return new a(this,t)},n.Lazy=n.lazy=function(t,r,i){if(n.isFunction(r)&&(i=r,r=[]),n.isFunction(i)){t=n.isArray(t)?t:[t],r=n.isArray(r)?r:[r];for(var o=a.prototype.config,u=o._f||(o._f={}),l=0,f=t.length;l<f;l++)(o[t[l]]===e||n.isFunction(o[t[l]]))&&(o[t[l]]=i);for(var c=0,s=r.length;c<s;c++)u[r[c]]=t[0]}},a.prototype.config={name:"lazy",chainable:!0,autoDestroy:!0,bind:"load",threshold:500,visibleOnly:!1,appendScroll:t,scrollDirection:"both",imageBase:null,defaultImage:"data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",placeholder:null,delay:-1,combined:!1,attribute:"data-src",srcsetAttribute:"data-srcset",sizesAttribute:"data-sizes",retinaAttribute:"data-retina",loaderAttribute:"data-loader",imageBaseAttribute:"data-imagebase",removeAttribute:!0,handledName:"handled",loadedName:"loaded",effect:"show",effectTime:0,enableThrottle:!0,throttle:250,beforeLoad:e,afterLoad:e,onError:e,onFinishedAll:e},n(t).on("load",function(){o=!0})}(window);;

/* isotope: (http://www.shengfenghe.com/qfy-content/plugins/qfy_editor/assets/lib/isotope/jquery.isotope.min.js) */
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);;

