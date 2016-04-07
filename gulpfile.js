var babelify    = require('babelify');
var browserify  = require('browserify');
var gulp        = require('gulp');
var less        = require('gulp-less');
var source      = require('vinyl-source-stream');

gulp.task('build:public', ['styleDemo'], function() {
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

gulp.task("styleDemo", function(){
    return gulp.src('src/stylesheet/main.less')
        .pipe(less())
        .pipe(gulp.dest('./public/style'));
});
