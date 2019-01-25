const postcss = require('gulp-postcss'),
      postcssPresetEnv = require('postcss-preset-env'),
      gulp = require('gulp');

postcssPresetEnv({
  /* use stage 3 features + css nesting rules */
  stage: 3,
  features: {
    'nesting-rules': true,
    autoprefixer: {grid: true}
  }
})


gulp.task('styles', function () {
    var plugins = [
        postcssPresetEnv,
    ];
    return gulp.src('./app/assets/styles/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./app/temp'));
});


