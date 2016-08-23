module.exports = (grunt) ->
  grunt.config "babel",
    options:
      sourceMap: true
    dist:
      options:
        sourceMap: false
      files:
        "js/app-transpiled.js": "js/app.js"
    dev:
      files:
        "js/app-transpiled.js": "js/app.js"


  grunt.loadNpmTasks 'grunt-babel'
