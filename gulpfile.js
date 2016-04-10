var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var cleanCSS = require('gulp-clean-css');
var karma   = require('gulp-karma');
var ghPages = require('gulp-gh-pages');
 
//Gulp minify
gulp.task('minify', function () {
  
  //----------------------SRC---------------------------
  //Archivos JS
  gulp.src(['assets/js/main.js','assets/js/csv.js'])
    .pipe(uglify())
    .pipe(gulp.dest('minified/src/js'))
  
  //Archivo html principal
  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/src/html'))
    
  //CSS /
  gulp.src('assets/css/global.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(gulp.dest('./minified/src/css/'))
   
   //-----------------------TEST----------------------------
   //Archivos JS
    gulp.src('test/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('minified/test/js'))
    
    //Archivo html principal
    gulp.src('test/index.html')
      .pipe(minifyHTML())
      .pipe(gulp.dest('./minified/test/html'))
      
    //CSS /
    gulp.src('mocha.css')
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(gulp.dest('./minified/test/css/'))
});


//Configuración de un task para el Karma.
gulp.task('test', function() {
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'start'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});

//Gulp deploy
gulp.task('deploy', function() {
  return gulp.src('./minified/**/*')
    .pipe(ghPages());
});

//Gulp clean
gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});
