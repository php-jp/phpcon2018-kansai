var gulp = require("gulp");
var pug = require("gulp-pug");
var sass = require("gulp-sass");
var pleeease = require('gulp-pleeease');
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var browser = require("browser-sync")

//pug
gulp.task("pug",function(){
    gulp.src(["./frontend/assets/tmpl/**/*.pug","!./frontend/assets/tmpl/**/_*.pug"])
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(pleeease())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./public"))
});

//scss
gulp.task("sass",function(){
    gulp.src("./frontend/assets/scss/**/*.scss")
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(pleeease())
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
});

//watch
gulp.task("watch",function(){
    gulp.watch("./frontend/assets/tmpl/**/*.pug",["pug"]);
    gulp.watch("./frontend/assets/scss/**/*.scss",["sass"]);
});

//browser-sync
gulp.task("server",function() {
    browser.init({
        server: {
            baseDir:"./public"
        },
        open: "external"
    });
    gulp.watch([
        "./public/**/*"
    ],function(){
        setTimeout(function(){
            browser.reload();

        },500);
    })
});


gulp.task("default",["watch"]);
gulp.task("build",["pug","sass"]);