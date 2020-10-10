console.log("加载成功");

//配置我们要引入的模块的路径 jquery 遵从AMD规范， parabola.js不支持AMD规范
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index: "index",
  },
  shim: {
    "jquery-cookie": ["jquery"],
    parabola: {
      exports: "_",
    }
  }
})


// 调用首页的代码
require(["index"], function(index){
  //  $("#header_navigation").on("mouseenter", "a", function(){
  //           this.style.color = 'white';
  //       }).on("mouseleave", "a", function(){
  //         this.style.color = "#7fadd8";
  //     })
  index.body();
})