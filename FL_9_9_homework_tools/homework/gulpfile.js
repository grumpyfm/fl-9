const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');
const inject = require('gulp-inject');
const babel = require('gulp-babel');

gulp.task('babel', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('compressJs', function(){
    return gulp.src('dist/js/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('scssToCss', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compressCss', function(){
    return gulp.src('dist/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('copyHtml', function () {
    return gulp.src('src/app.html')
        .pipe(rename("index.html"))
        .pipe(gulp.dest('dist'));
});

gulp.task('del', function () {
    del(['dist/*.min.js', 'dist/*.min.css']);
});

gulp.task('addCssJs', function () {
    let sources = gulp.src(['dist/*.min.js','dist/*.min.css'], {read: false});

    return gulp.src('./src/app.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});


gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
});