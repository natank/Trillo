import gulp from 'gulp';
import browserSync from './browserSync'

gulp.task('styleChanged', ['styles'], function() {
	gulp.src('app/temp/styles.css')
	.pipe(browserSync.reload({
		stream: true
	}))
})

gulp.task('htmlChanged', ['html'], function() {
	browserSync.reload();
})

gulp.task('watch', function() {
	gulp.watch('app/assets/styles/**/*.css', ['styleChanged']);
	gulp.watch('app/index.html', ['htmlChanged'])
})
