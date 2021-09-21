const gulp = require('gulp')
const i18n = require('gulp-html-i18n')

gulp.task('default', function() {
  return gulp.src('src/index.html')
  .pipe(i18n({
    langDir: 'src/locales',
    trace: true
  }))
  .pipe(gulp.dest('public'));
});
