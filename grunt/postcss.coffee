module.exports = (grunt) ->
  grunt.config "postcss",
    options:
      map: true
      processors: [
        require('autoprefixer-core')({remove: false, browsers: 'last 2 versions'})
      ]
    prod:
      options:
        map: false
      src: 'dist/css/*.css'
    dev:
      src: 'dist/css/*.css'

  grunt.loadNpmTasks "grunt-postcss"
