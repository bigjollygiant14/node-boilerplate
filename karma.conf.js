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
    },
    reporters: ['nyan'],
    nyanReporter: {
      suppressErrorReport: true,
      suppressErrorHighlighting: true,
      numberOfRainbowLines: 5,
      renderOnRunCompleteOnly: false // default is false 
    }
  });
};