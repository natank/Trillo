import gulp from 'gulp';
import {create as bsCreate} from 'browser-sync';
const browserSync = bsCreate();

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'app/temp'
		}
	})
})

export default browserSync;

