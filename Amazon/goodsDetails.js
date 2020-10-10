define(["parabola", "jquery", "jquery-cookie"], function(Parabola, $){
    function body(){
        $(function(){
            $("#header_navigation").on("mouseenter", "a", function () {
                this.style.color = 'white';
            }).on("mouseleave", "a", function () {
                this.style.color = "#7fadd8";
            })

            $("#head_serve").on("mouseenter", "i", function () {
                this.style.backgroundColor = "blue";
            }).on("mouseleave", "i", function () {
                this.style.backgroundColor = "#0092d8";
            })

            $("#head_serve i").eq(0).on("mouseenter", function () {
                $("#searchInp").css("display", "block");
                $("#searchInp").animate({
                    width: 200
                }, 1000)
                $("#searchInp").on("mouseenter", function () {
                    $("#searchInp").css("display", "block");
                }).on("mouseleave", function () {
                    $("#searchInp").css({
                        display: "none",
                        width: 0
                    });
                })
            }).on("mouseleave", function () {
                $("#searchInp").css({
                    display: "none",
                    width: 0
                });
            })

            $("#head_serve i").eq(1).on("mouseenter", function () {
                $("#down").css("display", "block");
                $("#down").on("mouseenter", function () {
                    $("#down").css("display", "block");
                }).on("mouseleave", function () {
                    $("#down").css("display", "none");
                })
            }).on("mouseleave", function () {
                $("#down").css("display", "none");
            })

            $("#head_serve i").eq(2).on("mouseenter", function () {
                $("#shopping_trolley").css("display", "block");
                $("#shopping_trolley").on("mouseenter", function () {
                    $("#shopping_trolley").css("display", "block");
                }).on("mouseleave", function () {
                    $("#shopping_trolley").css("display", "none");
                })
            }).on("mouseleave", function () {
                $("#shopping_trolley").css("display", "none");
            })
            $("#head_serve i").eq(3).on("mouseenter", function () {
                $("#personal_center").css("display", "block");
                $("#personal_center").on("mouseenter", "p", function () {
                    $("#personal_center").css("display", "block");
                    this.style.backgroundColor = "#eee";
                }).on("mouseleave", "p", function () {
                    $("#personal_center").css("display", "none");
                    this.style.backgroundColor = "white";
                })
            }).on("mouseleave", function () {
                $("#personal_center").css("display", "none");
            })
            let m = $("#midImage > img");
            let s = $("#smallImage > img");
            let b = $("#bigImage > img ");
            $("#smallImage").on("mouseenter", "img", function(){
                $(this).css("borderColor", "red").siblings().css("borderColor", "#eee");
                m.eq($(this).index()).addClass("img1").siblings().removeClass();
                b.eq($(this).index()).addClass("imgMax").siblings().removeClass();
            })
            $("#midImage").on("mouseenter", function(){
                $("#bigImage").css("display", "block");
                $("#select").css("display", "block");
            }).on("mouseleave", function(){
                $("#bigImage").css("display", "none");
                $("#select").css("display", "none");
            }).mousemove(function(ev){
                var l = ev.clientX - $(this).offset().left - 100;
                var t = ev.clientY - $(this).offset().top - 100 +$(window).scrollTop();
                l = Math.max(0, l);
                l = Math.min(300, l);
                t = Math.max(0, t);
                t = Math.min(300, t);
                
                $("#select").css({
                    left: l,
                    top: t 
                })
                $("#bigImage img").css({
                    left: -2.5 * l,
                    top: -2.5 * t
                })
            })


        })
    }
    return {
        body: body
      }
})