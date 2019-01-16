const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
/* TOP LEVEL FUNCTIONS

gulp.task -Define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch - watch files and folders for changes

*/

//Logs messges

gulp.task('message', function() {
  return console.log('Gulp is running');
});

// Minify JS

gulp.task('minify', function() {
  gulp
    .src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Compile Sass

gulp.task('sass', function() {
  gulp
    .src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// COpy All HTML files
gulp.task('copyHtml', function() {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('imageMin', () =>
  gulp
    .src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images')),
);


gulp.task('scripts', function(){
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})
//gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'minify']);
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);

gulp.task('watch', function(){
gulp.watch('src/js/*.js', ['scripts']);
gulp.watch('src/images/*', ['imageMin']);
gulp.watch('src/*.html', ['copyHtml'])
gulp.watch('src/sass/*.scss', ['sass'])
})