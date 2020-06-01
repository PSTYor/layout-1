'use strict';

module.exports = function() {
    $.gulp.task('php', function () {
        return $.gulp.src('./app/php/*.php')
            .pipe($.gulp.dest('./dist/php'))
    });
};