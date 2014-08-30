module.exports = function (grunt) {

  grunt.initConfig({
    dist: {
      scripts: 'dist/scripts',
      vendorScripts: 'dist/scripts/vendor',
      styles: 'dist/styles',
      vendorStyles: 'dist/styles/vendor'
    },
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: ['dist']
      }
    },
    copy: {
      name: {
        files: [
          // HTML files
          {expand: true, cwd: "src/", src: ['**/*.html'], dest: 'dist', isFile: true},
          // Images
          {expand: true, cwd: "src/images", src: ['**'], dest: 'dist/images'},
          // Font Rules
          {expand: true, cwd: "src/fonts", src: ['**'], dest: 'dist/styles/fonts'}
        ]
      }
    },
    concat: {
      /*bootstrap: {
        files: {
          '<%= dist.vendorStyles %>/bootstrap.css': ['bower_components/bootstrap/dist/css/bootstrap.css']
        }
      },*/
      app: {
        files: {
          '<%= dist.scripts %>/app.min.js': ['bower_components/jquery/dist/jquery.js', 'bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 'bower_components/bootstrap/dist/js/bootstrap.js', 'src/scripts/app.js', 'src/scripts/controllers.js']
        }
      }
    },
    compass: {
      dist: {
        options: {
          require: ['font_awesome/sass','susy'],
          sassDir: 'src/sass',
          cssDir: 'dist/styles',
          fontsDir: '/styles/fonts',
          outputStyle: 'expanded',
          force: true,
          relativeAssets: true
        }
      }
    },
    watch: {
      files: ['src/**/*.*', 'manifest.json'],
      tasks: ['clean', 'concat', 'copy', 'compass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('build', ['default']);
  grunt.registerTask('run', ['default', 'watch']);
  grunt.registerTask('default', ['clean', 'concat', 'copy', 'compass']);
};