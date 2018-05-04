var gulp = require('gulp');
var server = require('gulp-webserver');
var dataOne = require('./src/data/data.json');
gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url == '/pageOne') {
                    res.end(JSON.stringify(dataOne))
                }
                next()
            }
        }))
})