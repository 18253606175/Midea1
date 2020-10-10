define(["parabola", "jquery", "jquery-cookie"], function (Parabola, $) {
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
            $("#single").on("mouseenter", "#introduce",function () {
                $(this).css("color", "yellow");
            }).mouseleave(function () {
                $(this).css("color", "black");
            })
            $("#shopping_car, #single .iconfont").mouseenter(function () {
                $(".iconfont").css("color", "red");
            }).mouseleave(function () {
                $(".iconfont").css("color", "black");
            })
            var Span = $("#conditioner #second_column > span");
            $("#conditioner #second_column").on("click", "span", function(){
                $(this).css("color", "blue").siblings().css("color", "black");
                $("#conditioner #second_column > i").css("color", "#999")
                context = $(this);
            })
            $("#conditioner #second_column").on("mouseenter", "span", function(){
                $(this).css("color", "red");
            }).on("mouseleave", "span", function(){
                $(this).css("color", "black");
                context.css("color", "blue");
            })

            $("#conditioner #third_column #third_columnF").on("click", "span", function(){
                $(this).css("color", "blue").siblings().css("color", "black");
                $("#conditioner #third_column #third_columnF > i").css("color", "#999")
                $("#conditioner #third_column #third_columnL span").css("color", "black");
                context = $(this);
            })
            $("#conditioner #third_column #third_columnF").on("mouseenter", "span", function(){
                $(this).css("color", "red");
            }).on("mouseleave", "span", function(){
                $(this).css("color", "black");
                context.css("color", "blue");
            })

            $("#conditioner #third_column #third_columnL").on("click", "span", function(){
                $(this).css("color", "blue");
                $("#conditioner #third_column #third_columnF span").css("color", "black");
                contxt = $(this);
            })
            $("#conditioner #third_column #third_columnL").on("mouseenter", "span", function(){
                $(this).css("color", "red");
            }).on("mouseleave", "span", function(){
                $(this).css("color", "black");
                contxt.css("color", "blue");
            })
            
            var arr = [
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~" },
                { mainImg: "https://pic.midea.cn/ImageStore/160275/pic/223187fde781d6f2A5676/223187fde781d6f2A5676_430*430.png?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/164740/pic/d7d75711809d4780A13835/d7d75711809d4780A13835_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/165564/pic/8736ac2e095a7198A7014/8736ac2e095a7198A7014_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~" },
                { mainImg: "https://pic.midea.cn/ImageStore/160275/pic/223187fde781d6f2A5676/223187fde781d6f2A5676_430*430.png?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/164740/pic/d7d75711809d4780A13835/d7d75711809d4780A13835_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/165564/pic/8736ac2e095a7198A7014/8736ac2e095a7198A7014_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~" },
                { mainImg: "https://pic.midea.cn/ImageStore/160275/pic/223187fde781d6f2A5676/223187fde781d6f2A5676_430*430.png?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/164740/pic/d7d75711809d4780A13835/d7d75711809d4780A13835_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/165564/pic/8736ac2e095a7198A7014/8736ac2e095a7198A7014_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~" },
                { mainImg: "https://pic.midea.cn/ImageStore/160275/pic/223187fde781d6f2A5676/223187fde781d6f2A5676_430*430.png?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/164740/pic/d7d75711809d4780A13835/d7d75711809d4780A13835_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/165564/pic/8736ac2e095a7198A7014/8736ac2e095a7198A7014_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~" },
                { mainImg: "https://pic.midea.cn/ImageStore/160275/pic/223187fde781d6f2A5676/223187fde781d6f2A5676_430*430.png?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/164740/pic/d7d75711809d4780A13835/d7d75711809d4780A13835_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/165564/pic/8736ac2e095a7198A7014/8736ac2e095a7198A7014_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"},
                { mainImg: "https://pic.midea.cn/ImageStore/142448/pic/f26d32f70f9e97d8A1103/f26d32f70f9e97d8A1103_430*430.jpg?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~" },
                { mainImg: "https://pic.midea.cn/ImageStore/160275/pic/223187fde781d6f2A5676/223187fde781d6f2A5676_430*430.png?x-oss-process=image/format,webp/quality,Q_90&", original_price: "￥5999.00", special: "￥5699.00", evaluate: "评价 210", introduce: "【送电水壶】629L对开门智控冰箱 温控变频 风冷无霜BCD-629WKPZM(E)", Special_information: "领券下单更优惠，满额即赠智能音箱。在购物车选择更多活动-满赠即可参与，数量有限，送完即止；晒单再送电水壶&amp;延保金卡，秒杀不参与送赠~"}
            ]

            for (var i = 0; i < arr.length; i++) {
                var node = $(`
                <div id="single">
                <img id="mainImg" src="${arr[i].mainImg}" alt="">
                <img id="bigImg" src="images/PRO.jpg" alt="">
                <span id="original_price" >${arr[i].original_price}</span>
                <span id="special">
                    ${arr[i].special}
                    <img id="smallImg" src="images/PROmin.jpg" alt="">
                </span>
                <span id="evaluate">${arr[i].evaluate}</span>
                <p id="time_limit">限时特惠</p>
                <a href="" id="introduce">${arr[i].introduce}</a>
                <p id="Special_information" >${arr[i].Special_information}</p>
                <span id="proprietary_trading">自营</span>
                <span id="discount_coupon">用券减200</span>
                <i class="iconfont">&#xe506;</i>
                <span id="shopping_car">购物车</span>
            </div>`);
                node.appendTo($("#list"));
            }










            $("#bottom_navigation").on("mouseenter", "p", function () {
                $(this).css("color", "red");
            }).on("mouseleave", "p", function () {
                $(this).css("color", "black");
            })
            $("#copyright").on("mouseenter", "i", function () {
                $(this).css("color", "red");
            }).on("mouseleave", "i", function () {
                $(this).css("color", "#999999");
            })
            // $("#Elastic_navigation").on("mouseenter", "#a1", function(){
            //     $("#a1, p, i").css("display", "none");
            //     $("#s1").css("display",  "block");
            // }).on("mouseleave", "aside", function(){
            //     $(this).css("display",  "block");
            //     $("#s1").css("display",  "none");
            // })
            $("#Elastic_navigation").on("click", "#a4", function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 1000);
            })
            $("#Elastic_navigation").on("mouseenter", "p", function () {
                $("#a1 p").css("color", "white");
                $("#a2 p").css("color", "white");
                $("#a3 p").css("color", "white");
                $("#a4 p").css("color", "white");
            }).on("mouseleave", "p", function () {
                $("#a1 p").css("color", "white");
                $("#a2 p").css("color", "white");
                $("#a3 p").css("color", "white");
                $("#a4 p").css("color", "white");
            })


        })
    }
    return {
        body: body
    }
})