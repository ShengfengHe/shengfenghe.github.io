function accordioncontent_init(){
    jQuery('.qfy-accordioncontent .a_content .panel-title').each(function(){
        var curr = jQuery(this);
        var pcontent = curr.closest(".a_content");
        curr.unbind();
        if(pcontent.hasClass("mo")){
            curr.unbind().bind("mouseenter",function(e){
                e.stopPropagation();
                var n = curr.next();
                var p = curr.closest(".qfy-accordioncontent");
                var activeicon = p.attr("activeicon");
                var normalicon = p.attr("normalicon");
                var animation = p.attr("animation");
                var hc =  p.attr("hc");
                var display = n.css("display");
                var curr_top = curr.offset().top - jQuery(window).scrollTop();
                if(hc=="true" &&  !curr.hasClass("active")){
                    p.find(".a_content>section,.a_content>div").slideUp(animation,function(){
                        var now = jQuery(this);

                        now.prev().removeClass("active");
                        now.prev().find("i").attr("class",normalicon).css("font-size",p.attr("data-normalicon-size")+"px").css("left",p.attr("data-normalicon-position")+"px").css("top",p.attr("data-normalicon-pt")+"px");
                        if(p.attr("data-normalicon-scale")!="1"){
                            now.prev().find("i").css("transform","scale('"+p.attr("data-normalicon-scale")+"','"+p.attr("data-normalicon-scale")+"')");
                        }
                    });
                }
                if(display=="none"){
                    n.next().css("visibility","hidden");
                    curr.addClass("active");
                    if(jQuery("body").width()<760 && !curr.hasClass("defaultclick")){
                        animation=200;
                    }
                    n.slideDown(animation,function(){
                        n.next().css("visibility","visible");
                        if(jQuery("body").width()<760 && !curr.hasClass("defaultclick")){
                            //jQuery("html, body").animate({scrollTop: curr.offset().top - curr_top});
                            jQuery(window).scrollTop(curr.offset().top - curr_top);
                        }
                        curr.removeClass("defaultclick");
                        if(n.find(".qfe_map_wraper iframe").length>0){
                            n.find(".qfe_map_wraper iframe").attr("src",n.find(".qfe_map_wraper iframe").attr("src"));
                        }
                        n.find(".pretabloadimg:not('.loaded')").each(function(){
                            var newurl = jQuery(this).attr("org-src");
                            jQuery(this).attr("src",newurl).addClass("loaded").load(function(){
                                var newscrset = jQuery(this).attr("org-srcset");
                                if(newscrset){
                                    jQuery(this).attr("srcset",newscrset);
                                }
                            });
                        });
                    });
                    curr.find("i").attr("class",activeicon).css("font-size",p.attr("data-activeicon-size")+"px").css("left",p.attr("data-activeicon-position")+"px").css("top",p.attr("data-activeicon-pt")+"px");
                    if(p.attr("data-activeicon-scale")!="1"){
                        curr.find("i").css("transform","scale('"+p.attr("data-activeicon-scale")+"','"+p.attr("data-activeicon-scale")+"')");
                    }
                    n.find(".qsa").each(function(i){
                        var $this = this;
                        jQuery($this).removeClass("qsa");
                        setTimeout(function(){qfe_animate_fun($this);},50);

                    })
                }
            })
        }else{
            curr.unbind().click(function(e){
                e.stopPropagation();
                var n = jQuery(this).next();
                var p = jQuery(this).closest(".qfy-accordioncontent");
                var activeicon = p.attr("activeicon");
                var normalicon = p.attr("normalicon");
                var animation = p.attr("animation");
                var hc =  p.attr("hc");
                var display = n.css("display");
                var curr_top = curr.offset().top - jQuery(window).scrollTop();

                if(hc=="true"){

                    p.find(".a_content>section,.a_content>div").slideUp(animation,function(){
                        var now = jQuery(this);
                        now.prev().removeClass("active");
                        now.prev().find("i").attr("class",normalicon).css("font-size",p.attr("data-normalicon-size")+"px").css("left",p.attr("data-normalicon-position")+"px").css("top",p.attr("data-normalicon-pt")+"px");
                        if(p.attr("data-normalicon-scale")!="1"){
                            now.prev().find("i").css("transform","scale("+p.attr("data-normalicon-scale")+","+p.attr("data-normalicon-scale")+")");
                        }
                    });
                }


                if(display=="none"){
                    n.next().css("visibility","hidden");
                    curr.addClass("active");
                    curr.find("i").attr("class",activeicon).css("font-size",p.attr("data-activeicon-size")+"px").css("left",p.attr("data-activeicon-position")+"px").css("top",p.attr("data-activeicon-pt")+"px");

                    if(p.attr("data-activeicon-scale")!="1"){
                        curr.find("i").find("i").css("transform","scale("+p.attr("data-activeicon-scale")+","+p.attr("data-activeicon-scale")+")");
                    }

                    if(jQuery("body").width()<760 && !curr.hasClass("defaultclick")){
                        animation=200;
                    }
                    n.slideDown(animation,function(){
                        n.next().css("visibility","visible");
                        if(jQuery("body").width()<760 && !curr.hasClass("defaultclick")){
                            jQuery(window).scrollTop(curr.offset().top - curr_top);
                        }
                        curr.removeClass("defaultclick");
                        if(n.find(".qfe_map_wraper iframe").length>0){
                            n.find(".qfe_map_wraper iframe").attr("src",n.find(".qfe_map_wraper iframe").attr("src"));
                        };
                        n.find(".pretabloadimg:not('.loaded')").each(function(){
                            var newurl = jQuery(this).attr("org-src");
                            jQuery(this).attr("src",newurl).addClass("loaded").load(function(){
                                var newscrset = jQuery(this).attr("org-srcset");
                                if(newscrset){
                                    jQuery(this).attr("srcset",newscrset);
                                }
                            });
                        });
                    });

                    n.find(".qsa").each(function(i){
                        var $this = this;
                        jQuery($this).removeClass("qsa");
                        setTimeout(function(){qfe_animate_fun($this);},50);

                    })
                }else{

                    n.slideUp(animation,function(){
                        curr.removeClass("active");
                        curr.find("i").attr("class",normalicon).css("font-size",p.attr("data-normalicon-size")+"px").css("left",p.attr("data-normalicon-position")+"px").css("top",p.attr("data-normalicon-pt")+"px");
                        if(p.attr("data-normalicon-scale")!="1"){
                            curr.find("i").find("i").css("transform","scale("+p.attr("data-normalicon-scale")+","+p.attr("data-normalicon-scale")+")");
                        }
                    });
                }
            });
        }
    })
    jQuery('.qfy-accordioncontent:not(.loaded)').each(function(){
        jQuery(this).addClass("loaded");
        var accordion_default = jQuery(this).attr("default");

        if(accordion_default>0){
            var defaultobj = jQuery(this).find(".a_content .panel-title:eq("+(accordion_default-1)+")");
            var display =defaultobj.next().css("display");
            if(top!=self && jQuery("body").hasClass("compose-mode")){
                // 编辑情况
                if(display=="block"){
                    defaultobj.next().hide();
                    display =defaultobj.next().css("display");
                }
            }
            if(display=="none"){
                defaultobj.addClass("defaultclick");
                if(defaultobj.closest(".a_content").hasClass("mo")){
                    defaultobj.mouseenter();
                }else{
                    defaultobj.click();
                }
            }

        }

    })
}
