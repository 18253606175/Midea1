define(["parabola", "jquery", "jquery-cookie"], function (parabola, $) {
    function body() {
        $(function () {
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


            var aBtns = $("#slideshow").find("#slideshow_Btn p");
            var oUl = $("#slideshow").find("#slideshow_box");
            var iNow = 0;
            var timer = null;
            let isRuning = false;

            $("#slideshow_box").mouseenter(function () {
                clearInterval(timer);
            });
            $("#leftArrows, #rightArrows").mouseenter(function () {
                clearInterval(timer);
            }).mouseleave(function () {
                timer = setInterval(function () {
                    iNow++;
                    tab();
                }, 4000);
            })
            $("#slideshow_box").mouseleave(function () {
                //轮播
                timer = setInterval(function () {
                    iNow++;
                    tab();
                }, 4000);
            });

            $("#leftArrows").click(function () {
                if (iNow === 0) {
                    iNow = 6;
                    oUl.css("left", -8400);
                }
                    iNow--;
                    bebounce(tab, 4000);
                
            })
            function antiShake(func, wait, immediate) {
                let timer = null;
                return function () {
                  var context = this;
                  const args = arguments;
                  const now = !timer; //timer = null;
                  clearTimeout(timer);
                  if (immediate) {
                    if (now) {
                        iNow++;
                      func.apply(context, args);
                    }
                    timer = setTimeout(function () {
                      timer = null;
                    }, wait);
                  } else {
                    timer = setTimeout(function () {
                      func.apply(context, args);
                    }, wait);
                  }
                }
              }
            var rightArrows = document.getElementById("rightArrows");
            rightArrows.onclick = antiShake(tab, 2000, true);
            // $("#rightArrows").click(function () {
            //     //   iNow++;
            //       antiShake(tab, 2000, true);
            // })
            

            aBtns.click(function () {
                iNow = $(this).index();
                tab();
            });

            //轮播
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 4000);

            function tab() {
                aBtns.removeClass("active").eq(iNow).addClass("active");

                if (iNow == aBtns.size()) {
                    aBtns.eq(0).addClass("active");
                }

                oUl.animate(
                    {
                        left: (iNow * -1200) - 1200,
                    },
                    500,
                    function () {
                        //判断是否是最后一张图片
                        if (iNow === aBtns.size()) {
                            iNow = 0;
                            oUl.css("left", -1200);
                        }
                    }
                );
            }

            $("#slideshow").mouseenter(function () {
                $("#leftArrows, #rightArrows").css("display", "block")
            }).mouseleave(function () {
                $("#leftArrows, #rightArrows").css("display", "none");
            })
        })

        $("#sidebar_navigation").on("mouseenter", "p", function () {
            $(this).css({
                backgroundColor: "black",
                opacity: 0.6
            })
        }).on("mouseleave", "p", function () {
            $(this).css({
                backgroundColor: "#253f38",
                opacity: 1
            })
        })

        $("#sidebar_navigation p").eq(0).on("mouseenter", function () {
            $(".sidebar_details").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details").css("display", "none");
                });
        }).on("mouseleave", function () {
            $(".sidebar_details").css("display", "none");
        })
        $("#sidebar_navigation p").eq(1).on("mouseenter", function () {
            $(".sidebar_details1").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details1").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details1").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details1").css("display", "none");
        })
        $("#sidebar_navigation p").eq(2).on("mouseenter", function () {
            $(".sidebar_details2").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details2").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details2").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details2").css("display", "none");
        })
        $("#sidebar_navigation p").eq(3).on("mouseenter", function () {
            $(".sidebar_details3").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details3").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details3").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details3").css("display", "none");
        })
        $("#sidebar_navigation p").eq(4).on("mouseenter", function () {
            $(".sidebar_details4").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details4").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details4").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details4").css("display", "none");
        })
        $("#sidebar_navigation p").eq(5).on("mouseenter", function () {
            $(".sidebar_details5").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details5").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details5").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details5").css("display", "none");
        })
        $("#sidebar_navigation p").eq(6).on("mouseenter", function () {
            $(".sidebar_details6").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details6").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details6").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details6").css("display", "none");
        })
        $("#sidebar_navigation p").eq(7).on("mouseenter", function () {
            $(".sidebar_details7").css("display", "block")
                .on("mouseenter", function () {
                    $(".sidebar_details7").css("display", "block")
                }).on("mouseleave", function () {
                    $(".sidebar_details7").css("display", "none");
                });;
        }).on("mouseleave", function () {
            $(".sidebar_details7").css("display", "none");
        })

        $(".sidebar_details,.sidebar_details1,.sidebar_details2,.sidebar_details3,.sidebar_details4,.sidebar_details5,.sidebar_details6,.sidebar_details7")
        .on("mouseenter", "span", function(){
            this.style.color = "red";
        }).on("mouseleave", "span", function(){
            this.style.color = "black";
        })
    
    $("#tabbar").on("mouseenter", "img", function(){
        $(this).animate({
            marginTop : 10
        },100)
    }).on("mouseleave", "img", function(){
        $(this).animate({
            marginTop : 15
        },100)
    })

    $("#single_itemOne").on("mouseenter","#img1", function(){
        $(this).animate({
            top: 30
        },300)
    }).on("mouseleave","#img1", function(){
        $(this).animate({
            top: 35
        },300)
    })
    $("#single_itemSecond").on("mouseenter","#img2", function(){
        $(this).animate({
            marginTop: 30
        },300)
        $("#single_itemSecond div > p").css("color", "red");
    }).on("mouseleave","#img2", function(){
        $(this).animate({
            marginTop: 35
        },300)
        $("#single_itemSecond div > p").css("color", "black");
    })
    $("#single_itemThird").on("mouseenter","#img3", function(){
        $(this).animate({
            marginTop: 23
        },300)
    }).on("mouseleave","#img3", function(){
        $(this).animate({
            marginTop: 28
        },300)
    })
    $("#single_itemThird").on("mouseenter","#img2", function(){
        $(this).animate({
            marginTop: 30
        },300)
        $("#single_itemThird div > p").css("color", "red");
    }).on("mouseleave","#img2", function(){
        $(this).animate({
            marginTop: 35
        },300)
        $("#single_itemThird div > p").css("color", "black");
    })
    $("#single_itemFour").on("mouseenter","#img1", function(){
        $(this).animate({
            top: 30
        },300)
    }).on("mouseleave","#img1", function(){
        $(this).animate({
            top: 35
        },300)
    })
    $("#members_area").on("mouseenter", "span", function(){
        $(this).css("color", "red");
    }).on("mouseleave", "span", function(){
        $(this).css("color", "#999999");
    })
    $("#member_list").on("mouseenter", "img", function(){
        $(this).animate({
            marginTop: 25
        },300)
    }).on("mouseleave", "img", function(){
        $(this).animate({
            marginTop: 30
        },300)
    })
    $("#member_list").on("mouseenter", "p", function(){
        $(this).css("backgroundColor", "#eee");
    }).on("mouseleave", "p", function(){
        $(this).css("backgroundColor", "white");
    })
    $("#bottom_navigation").on("mouseenter", "p", function(){
        $(this).css("color", "red");
    }).on("mouseleave", "p", function(){
        $(this).css("color", "black");
    })
    $("#copyright").on("mouseenter", "i", function(){
        $(this).css("color", "red");
    }).on("mouseleave", "i", function(){
        $(this).css("color", "#999999");
    })
    // $("#Elastic_navigation").on("mouseenter", "#a1", function(){
    //     $("#a1, p, i").css("display", "none");
    //     $("#s1").css("display",  "block");
    // }).on("mouseleave", "aside", function(){
    //     $(this).css("display",  "block");
    //     $("#s1").css("display",  "none");
    // })
    $("#Elastic_navigation").on("click", "#a4", function(){
        $('body,html').animate({
            scrollTop: 0
           }, 1000);
    })
    
















    }
    return {
        body: body
    }
})