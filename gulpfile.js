var gulp = require('gulp');
var server = require('gulp-webserver');
var data = require('./src/data/data.json');
var url = require('url');
gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            port: 8080,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url == '/pageOne') {
                    res.end(JSON.stringify(data))
                } else if (/\/api\/req/g.test(req.url)) {
                    var addr = url.parse(req.url, true).query.id;
                    var truthaddr = addr.slice(0, 2);
                    var type = addr.slice(2);
                    var arr = [];
                    for (var i = 0; i < data[type].length; i++) {
                        if (truthaddr == data[type][i].id) {
                            arr.push(data[type][i])
                        }
                    }
                    res.end(JSON.stringify(arr))

                }
                next()
            }
        }))
})