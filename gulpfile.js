const { watch, series, parallel, src, dest } = require('gulp');
const i18n = require('gulp-html-i18n')
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const serve = () => {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });

  watch('public/*').on('change', reload);
}

const html = () => {
  return src('src/index.html')
    .pipe(i18n({
      langDir: './src/locales',
      createLangDirs: true,
      defaultLang: 'en',
      delimiters: ['{{', '}}']
    }))
    .pipe(dest('public'));
}

const watchI18n = () => watch(['src/index.html', 'src/locales/**/*.js'], html)

exports.default = parallel(
  series([html, serve]),
  watchI18n,
)
