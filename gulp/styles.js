const postcss = require('postcss');
const postcssPresetEnv = require('postcss-preset-env');

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
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});




postcss([
  postcssPresetEnv(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);