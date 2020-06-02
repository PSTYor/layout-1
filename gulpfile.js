'use strict';

global.$ = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    uglify: require('gulp-uglify-es').default,

    path: {
        tasks: require('./gulp/config/tasks')
    }
};

$.path.tasks.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('sass', 'pug', 'image', 'svg', 'php', 'uglify'),
    $.gulp.parallel('watch', 'browserSync')
));