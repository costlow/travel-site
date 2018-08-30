var gulp = require('gulp'),

postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  console.log('styles');
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles/'));
});
