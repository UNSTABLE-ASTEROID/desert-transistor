module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      dev:{
        options:{
          script: 'server/server.js'
        }
      }
    },

    karma: {
      options : {
        configFile: 'karma.conf.js',
        reporters: ['progress', 'coverage','nyan','unicorn']
      },
      single: {
        singleRun: true,
      }
    }
  });

  grunt.registerTask('test', ['karma:single']);
}
