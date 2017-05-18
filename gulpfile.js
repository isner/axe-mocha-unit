
const gulp = require('gulp')
const mocha = require('gulp-mocha-phantomjs')

gulp.task('default', () => {
  gulp.src('test/fixture.html')
    .pipe(mocha({ reporter: 'spec' }))
})
