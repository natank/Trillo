import gulp from 'gulp';
import browserSync from './browserSync';

gulp.task('html', function(){
	gulp.src('./app/index.html')
	.pipe(gulp.dest('./app/temp'));
})

