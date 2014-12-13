module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-docco');

  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'client/App/**/*.js' ,'server/**/*.js'],
      options: {
        maxlen: 80,
        quotmark: 'single'
        }    
    },
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
    },
    simplemocha:{
      options: {
        globals: ['expect'],
        timeout: 3000,
        reporter: 'tap'
      },
      all: {
        src: ['test/mocha/**/*.js']
      }
    },
    docco: {
      debug: {
        src: ['client/App/Graphs/*.js','client/App/Student/*.js','client/App/Teacher/*.js','client/*.js','server/*.js'],
        options: {
          output: 'docs/'
        }
      }
    }
  });


  grunt.registerTask('docs', ['docco']); 
  grunt.registerTask('mocha', ['simplemocha']); 
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('test', ['karma:single','mocha']);
}
