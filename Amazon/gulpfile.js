const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");


gulp.task("copy-html", function(){
  return gulp.src("*.html")
  .pipe(
    htmlmin({
      removeEmptyAttibutes: true, 
      collapseWhitespace: true, 
    })
  )
  .pipe(gulp.dest("dist/"))
  .pipe(connect.reload());
})

gulp.task("images", function(){
  return gulp.src("*.{jpg,png,gif}")
  .pipe(gulp.dest("dist/images"))
  .pipe(connect.reload());
})

gulp.task("scripts", function(){
  return gulp.src(["*.js", "!gulpfile.js"])
  .pipe(gulp.dest("dist/js"))
  .pipe(connect.reload());
})

gulp.task("iconfont", function(){
  return gulp.src("iconfont/**")
  .pipe(gulp.dest("dist/iconfont"))
  .pipe(connect.reload());
})

gulp.task("data", function(){
  return gulp.src(["*.json", "!package.json"])
  .pipe(gulp.dest("dist/data"))
  .pipe(connect.reload());
})

gulp.task("php", function(){
    return gulp.src(["*.php"])
    .pipe(gulp.dest("dist/php"))
    .pipe(connect.reload());
})

gulp.task("build", ["copy-html", "images", "scripts", "data", "iconfont", "php", "sass1", "sass2", "sass3", "sass4", "sass5", "sass6"], function(){
  console.log("项目建立成功");
})

const sass = require("gulp-sass");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sass1", function(){
  return gulp.src("./stylesheet/index.scss")
  .pipe(sass())
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("sass2", function(){
    return gulp.src("./stylesheet/goodsList.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("goodsList.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("sass3", function(){
    return gulp.src("./stylesheet/goodsDetails.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("goodsDetails.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  })
  gulp.task("sass4", function(){
    return gulp.src("./stylesheet/goodsOrder.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("goodsOrder.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  })
  gulp.task("sass5", function(){
    return gulp.src("./stylesheet/login.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("login.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  })
  gulp.task("sass6", function(){
    return gulp.src("./stylesheet/register.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifycss())
    .pipe(rename("register.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
  })




gulp.task("watch", function(){
  gulp.watch("*.html", ['copy-html']);
  gulp.watch("*.{jpg,png}", ['images']);
  gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
  gulp.watch(["*.json", "!package.json"], ['data']);
  gulp.watch("./stylesheet/index.scss", ['sass1']);
  gulp.watch("./stylesheet/goodsList.scss", ['sass2']);
  gulp.watch("./stylesheet/goodsDetails.scss", ['sass3']);
  gulp.watch("./stylesheet/goodsOrder.scss", ['sass4']);
  gulp.watch("./stylesheet/login.scss", ['sass5']);
  gulp.watch("./stylesheet/register.scss", ['sass6']);
})



const connect = require("gulp-connect");
gulp.task("server", function(){
  connect.server({
    root: "dist",
    port: 8888,
    livereload: true
  })
})


gulp.task("default", ["watch", "server"]);