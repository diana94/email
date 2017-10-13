var gulp = require('gulp'),
    sass = require('gulp-sass'),
    chalk = require('chalk'),
    inlineCss = require('gulp-inline-css');

gulp.task('sass', function () {

    gulp.src('sass/*.sass')
        .pipe(sass())
        .on('error', function (err) {
            console.log(chalk.red("ERROR! ") + "file: " + chalk.red(err.filename) + " line: " + chalk.cyan(err.line));
        })
        .pipe(gulp.dest('style'));
});

gulp.task('inline-code', function() {
    return gulp.src('html/*.html')
        .pipe(inlineCss({
            	applyStyleTags: true,
            	applyLinkTags: true,
            	removeStyleTags: true,
            	removeLinkTags: true
        }))
        .pipe(gulp.dest('./'));
});


gulp.task('default', ['sass', 'inline-code'], function () {
    gulp.watch('sass/*.sass', ['sass']);
    gulp.watch('style/*.css', ['inline-code']);
    gulp.watch('html/*.html', ['inline-code']);
});
