const gulp = require('gulp')
const i18n = require('gulp-html-i18n')

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(i18n({
    langDir: './src/locales',
    createLangDirs: true,
    defaultLang: 'en'
  }))
  .pipe(gulp.dest('public'));
});

gulp.task('default', gulp.series(['html']));

// gulp.task('example', gulp.series(['normal', 'inline', 'dirs', 'failure', 'fallback', 'escape', 'commonjs', 'filename-i18n', 'jsfile', 'mustache']));
