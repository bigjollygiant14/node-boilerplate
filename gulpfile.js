'use strict';

var gulp = require('gulp');

//testing
var Server = require('karma').Server

//server
var nodemon = require('gulp-nodemon');

//front end
var sass = require('gulp-sass'); //convert scss to css
var merge = require('merge-stream'); //merge the concatinated files
var concat = require('gulp-concat'); //concat multiple files into one file
var sassGlob = require('gulp-sass-glob'); //handle globbing in scss manifest so we don't need to import every sass file

var config = {
  sass: {
    manifest: './public/css/global/app.scss',
    dest: './public/css',
    fileName: 'app.min.css',
    sassLocations: ['./public/views/**/*.scss','./public/css/global/*.scss']
  },
  js: {
    config: '/karma.conf.js'
  }
}

gulp.task('sass', function(){
  var scssStream = gulp.src(config.sass.manifest)
    .pipe(sassGlob())
    .pipe(sass());

  var mergedStream = merge(scssStream)
    .pipe(concat(config.sass.fileName))
    .pipe(gulp.dest(config.sass.dest));
  
  return mergedStream;
});

gulp.task('test', function(done){
  new Server({
    configFile: __dirname + config.js.config,
    singleRun: true
  }, done).start();
});

gulp.task('start', function(){
  nodemon({
    script: 'server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development'}
  })
});

gulp.task('watch', function(){
  gulp.watch(config.sass.sassLocations, ['sass']);
});

gulp.task('default', ['sass','start','watch'], function(){});