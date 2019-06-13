const { src, dest, parallel } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const autoprefixer = require("gulp-autoprefixer");
const gulp = require("gulp");

function styles() {
    return gulp
        .src("./src/resources/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(minifyCSS())
        .pipe(dest("./public/css"));
}

function watch() {
    gulp.watch(["./src/resources/sass/*.scss", "./src/resources/sass/**/*.scss"], styles);
}

var build = gulp.parallel(styles, watch);

gulp.task(build);
gulp.task("default", build);