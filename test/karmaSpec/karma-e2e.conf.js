// Karma configuration
// Generated on Wed Sep 25 2013 17:20:16 GMT+0200 (Hora de verano romance)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '../',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [  
      'test/test-main.js',
      {pattern: 'app/lib/**/**.js', included: false},
      {pattern: 'app/scripts/**/**.js', included: false},
      {pattern: 'test/spec/unit/**.js', included: false},
      {pattern: 'test/spec/**/**.js', included: false}
    ],
    proxies : {
        '/': 'http://localhost:53629'
    },
   // cli runner port
    runnerPort : 9100,
    
    urlRoot: '/base',
   
    // list of files to exclude
    exclude: [
     // 'app/scripts/config',
     // 'app/scripts/bootstrap',
    ],
	
    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage', 'spec'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome', 'IE'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
