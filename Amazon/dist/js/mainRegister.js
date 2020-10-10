console.log("加载成功");

//配置我们要引入的模块的路径 jquery 遵从AMD规范， parabola.js不支持AMD规范
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index: "register",
  },
  shim: {
    "jquery-cookie": ["jquery"],
    parabola: {
      exports: "_",
    }
  }
})
// 调用首页的代码
// require(["index"], function(index){
//   index.body();
// })