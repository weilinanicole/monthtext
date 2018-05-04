var gulp = require('gulp');
var server = require('gulp-webserver');
gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})