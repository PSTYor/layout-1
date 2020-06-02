'use strict';

module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch('./app/sass/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./app/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./app/img/*', $.gulp.series('image'));
        $.gulp.watch('./app/img/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./app/php/*.php', $.gulp.series('php'));
        $.gulp.watch('./app/js/*.js', $.gulp.series('uglify'));
    });
};