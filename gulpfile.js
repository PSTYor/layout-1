"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const brSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");

gulp.task("sass", function() {
    return gulp.src("./app/sass/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed",
            includePaths: require('node-normalize-scss').includePaths
        })).on("error", sass.logError)
        .pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({suffix: ".min"}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/css"))
        .pipe(brSync.reload({
            stream: true
        }));
});

gulp.task("html", function() {
    return gulp.src("./app/index.html")
        .pipe(gulp.dest("./dist"))
        .pipe(brSync.reload({
            stream: true
        }));
});

gulp.task("image", function() {
    return gulp.src("./app/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"))
        .pipe(brSync.reload({
            stream: true
        }));
});

gulp.task("brSync", function() {
    brSync.init({
        server: {
            baseDir: "./dist"
        },
        port: 3000
    });
});

gulp.task("watch", gulp.parallel("brSync", function() {
    gulp.watch("./app/sass/**/*.scss", gulp.parallel("sass"));
    gulp.watch("./app/*.html", gulp.parallel("html"));
    gulp.watch("./app/img/*", gulp.parallel("image"));
}));

gulp.task("default", gulp.parallel("watch"));