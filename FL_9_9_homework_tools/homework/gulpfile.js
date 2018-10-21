const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');


gulp.task('compress', function (cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});