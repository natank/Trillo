import gulp from 'gulp';
import postcss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssMixins from 'postcss-mixins';

gulp.task('styles', function () {
    let plugins = [
        postcssImport,
        postcssPresetEnv({  
          stage: 3
        }),
        postcssMixins,
        postcssNested
        
    ];
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss(plugins))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString())
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp'));
});


