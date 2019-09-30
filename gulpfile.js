const gulp = require('gulp');
const connect = require('gulp-connect');
const rename = require('gulp-rename');
const cssUglify = require('gulp-clean-css');
const webpack = require('webpack-stream');
const compiler = require('webpack');
const path = require('path');

const cssBundle = function () {
    return gulp.src('src/css/*.css')
        .pipe(cssUglify({debug: true}, (details) => {
            console.log(`${details.name}: ${details.stats.originalSize}`);
            console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        .pipe(rename({basename: 'silicon-ui.bundle'}))
        .pipe(gulp.dest('dist'))
};

const jsBundle = function () {
    return gulp.src('src/js/main.js')
        .pipe(webpack({
            entry: './src/js/main.js',
            output: {
                filename: 'silicon-ui.bundle.js',
                path: path.resolve(__dirname, './dist')
            },
            mode: "production",
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
        }, compiler))
        .pipe(gulp.dest('dist/'));
};

gulp.task('build', gulp.parallel(cssBundle, jsBundle));

gulp.task('connect', function (done) {
    connect.server({
        port: '8080',
        root: '',
        livereload: true
    }, function () {
        this.server.on('close', done)
    });
});
gulp.task('watch', function (done) {
    gulp.watch(['src/**/*.js', 'src/**/*.css', 'demo/**/*.html'], gulp.series('build'))
        .on('change', (filepath) => {
            gulp.src(filepath, {read: false})
                .pipe(connect.reload())
        });
    done();
});
gulp.task('dev', gulp.parallel('connect', 'watch'));
