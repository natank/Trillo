let gulp = require("gulp"),
	del = require("del");

gulp.task('clean', function(){
	return del.sync(['app/temp/*.*',
					 'app/assets/styles/_sprite.css']);
})