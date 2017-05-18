
const gulp = require('gulp')
const mocha = require('gulp-mocha-phantomjs')

gulp.task('default', () => {
  gulp.src('test/index.html')
    .pipe(mocha({ reporter: 'spec' }))
})
