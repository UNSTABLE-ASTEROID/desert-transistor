// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-12-12 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [      
      'client/bower_components/angular/angular.js',
      // 'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-mocks/angular-mocks.js',

      // our app code
      'client/app/**/*.js',

      // our spec files
      'node_modules/expect.js/index.js',
      'test/**/*.js'
      ],

    // list of files / patterns to exclude
    exclude: [
      'karma.conf.js'
      ],

    // web server port
    port: 9876,

    reporters: ['progress', 'coverage','nyan','unicorn'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'Chrome'
    ],

    // Which plugins to enable
    // plugins: [
    //   'karma-coverage',
    //   'karma-jasmine',
    //   'karma-chrome-launcher'
    // ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
