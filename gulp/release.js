import gulp 		from 'gulp';
import usemin 		from 'gulp-usemin';
import uglify 		from 'gulp-uglify';
import htmlmin 		from 'gulp-htmlmin';
import cleanCss 	from 'gulp-clean-css';
import rev 			from 'gulp-rev';
import cssnano  	from 'gulp-cssnano';
import gulpSequence from 'gulp-sequence';
import clean 		from 'gulp-clean';
import imagemin 	from 'gulp-imagemin';
import browserSync  from './browserSync';
 


gulp.task('clean-release', function() {
	return gulp.src('docs', {read: false})
			.pipe(clean());
})

gulp.task('optimizeImages', function() {
	return gulp.src(['./app/temp/img/**/*', 
		'!./app/temp/img/SVG'])
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
		    })
		]))
		.pipe(gulp.dest("./docs/img"));
})


gulp.task('optimize-files', function() {
  return gulp.src('./app/temp/*.html')
    .pipe(usemin({
      css: [ cssnano(),rev() ],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [ rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('docs/'));
});

gulp.task('previewRelease', function(){
	browserSync.init({
		notify: false,
		server: "./docs"
	})

})

gulp.task('release', gulpSequence(
	'clean-release',
	['optimizeImages', 'optimize-files'],
	'browserSync'
	))