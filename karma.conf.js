// Karma configuration
// Generated on Thu Oct 29 2020 14:26:05 GMT+0900 (Korean Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','karma-typescript','commonjs'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: "src/**/*.+(js|ts)" },
      { pattern: "test/**/*.+(js|ts)" }
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/**/*.+(js|ts)": ["karma-typescript","coverage","commonjs"],
      "test/**/*.+(js|ts)": ["karma-typescript","commonjs"]
    },
    // To get code coverage for both plain JavaScript modules and Typescript modules in a hybrid application, simply use allowJs in the Typescript compiler options and then pipe all .js and .ts files through karma-typescript:
    karmaTypescriptConfig: {
      compilerOptions: {
        allowJs: true,
        "module": "commonjs",
        "target": "es5",
        "sourceMap": true
      },
      bundlerOptions: {
        transforms: [require("karma-typescript-es6-transform")()]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage','karma-typescript'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
