module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'client/*.js',
      'test/client/*.js'
    ],

    browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

    autoWatch: true
  });
};