const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("default", function(){
    // Copia os Arquivos do Bootstrap
    gulp.src('bower_components/bootstrap/dist/css/*.css')
          .pipe(gulp.dest('dist/libs/css/'));
    gulp.src('bower_components/bootstrap/dist/js/*.js')
          .pipe(gulp.dest('dist/libs/js/'));
    gulp.src('bower_components/bootstrap/dist/fonts/*.*')
          .pipe(gulp.dest('dist/libs/fonts/'));
    // Copia os arquivos do Jquery
    gulp.src('bower_components/jquery/dist/*.min.js')
          .pipe(gulp.dest('dist/libs/js/'));
    // Copia os arquivos do AngularJS
    gulp.src('bower_components/angular/*.min.js')
          .pipe(gulp.dest('dist/libs/js/'));
    gulp.src('bower_components/angular-route/*.min.js')
          .pipe(gulp.dest('dist/libs/js/'));
    // Copia os arquivos do PopperJS
    gulp.src('bower_components/popper.js/dist/*.min.js')
          .pipe(gulp.dest('dist/libs/js/'));
    // Copia e compila os arquivos sass
    gulp.src('sass/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('dist/libs/css/'));
    // Copia os arquivos do backbone
    gulp.src('node_modules/backbone/*.min.js')
          .pipe(gulp.dest('dist/libs/js/'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/libs/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
