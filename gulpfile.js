let gulp = require('gulp');
let cssUglify = require('gulp-minify-css');

gulp.task('css', gulp.series(function () {
    return gulp.src('src/*.css')
        .pipe(cssUglify())
        .pipe(gulp.dest('dist'))
}));
