'use strict';

module.exports = function() {
    $.gulp.task('uglify', function () {
        return $.gulp.src('./app/js/*.js')
            .pipe($.plugins.concat('script.min.js'))
            .pipe($.uglify())
            .pipe($.gulp.dest('./dist/js'))
            .pipe($.browserSync.reload({stream:true}));
    });
};