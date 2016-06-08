module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      './public/js/**/*.js',
      './public/js/**/*.spec.js'
    ],
    phantomjsLauncher: {
      exitOnResourceError: true
    }
  });
};