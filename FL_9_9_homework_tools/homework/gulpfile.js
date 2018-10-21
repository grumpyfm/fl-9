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
const connect = require('gulp-connect');

const runSequence = require('run-sequence');

const gulpif = require('gulp-if');
const argv = require('yargs').argv;
const sourcemaps = require('gulp-sourcemaps');

gulp.task('compileJs', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({presets: ['@babel/env']}))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('compressJs', function(){
    return gulp.src(['node_modules/moment/moment.js', 'dist/js/clock.js', 'dist/js/canvasState.js', 'dist/js/app.js'])
        .pipe(concat('app.min.js'))
        .pipe(gulpif((!argv.production), sourcemaps.init()))
        .pipe(uglify())
        .pipe(gulpif((!argv.production), sourcemaps.write()))
        .pipe(gulp.dest('dist'));
});

gulp.task('compileCss', function () {
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

gulp.task('addCssJsToHtml', function () {
    let sources = gulp.src(['dist/*.min.js','dist/*.min.css'], {read: false});

    return gulp.src('./src/app.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('./src'));
});

gulp.task('sass:watch', function () {
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: 8080
    });
});

gulp.task('default', ['connect']);

gulp.task('build', function () {
    runSequence('del', ['compileCss', 'compileJs'],['compressJs', 'compressCss'],'addCssJsToHtml');
});

gulp.task('build-prod', function () {
    runSequence('del', ['compileCss', 'compileJs'],['compressJs', 'compressCss'],'addCssJsToHtml', 'copyHtml');
});