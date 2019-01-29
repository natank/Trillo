import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import rename from 'gulp-rename';
import del from 'del';
import gulpSequence from 'gulp-sequence';


var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css:{
					template: './gulp/templates/sprite.css'
				}	
			}
		}
	}
}



gulp.task('createSprite', function() {
	return gulp.src("./app/temp/img/SVG/**/*.svg")
		.pipe(svgSprite(config))
		.pipe(gulp.dest("./app/temp/img/sprites"));
});

/* copy the sprite generated styles to the distribution lib */
gulp.task('copySpriteCSS', function() {
	return gulp.src('./app/temp/img/sprites/css/sprite.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/'));
});

/* copy the sprite generated file to the distribution lib */
gulp.task('copySpriteGraphic', function() {
	return gulp.src('./app/temp/img/sprites/css/**/*.svg')
		.pipe(gulp.dest('./app/temp/img/'))
})


gulp.task('endClean', function() {
	return del(['./app/temp/img/sprites',]);
})

gulp.task('icons', gulpSequence(
	'createSprite',
	['copySpriteGraphic', 'copySpriteCSS'],
	'endClean')
)



