import postcss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import gulp from 'gulp';
import nested from 'postcss-nested';




gulp.task('styles', function () {
    let plugins = [
        postcssPresetEnv({  
          stage: 3
        }),
        nested
    ];
    return gulp.src('./app/assets/styles/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./app/temp'));
});


