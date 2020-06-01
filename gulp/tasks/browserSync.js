'use strict';

module.exports = function() {
    $.gulp.task('browserSync', function() {
        $.browserSync.init({
            proxy: 'layout-1'
        });
    });
};