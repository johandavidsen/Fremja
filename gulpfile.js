var babelify    = require('babelify');
var browserify  = require('browserify');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var source      = require('vinyl-source-stream');

gulp.task('build:public', ['style'], function() {
    return browserify({
            extensions: [".jsx", ".js", ".json"]
        }).add(
            'src/app/Bootstrap.js'
        ).transform(
            babelify, { presets: ["stage-0","es2015", "react"] }
        )
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task("style", function(){
    return gulp.src('src/stylesheet/fremja.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/style'));
});
