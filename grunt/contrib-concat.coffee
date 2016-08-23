module.exports = (grunt) ->
  grunt.config "concat",
  js:
    src: [
      "bower_components/jquery/dist/jquery.js",
      "bower_components/Snap.svg/dist/snap.svg-min.js",
      "js/libs/*",
      "js/app-transpiled.js"
    ]
    #put it in dist/
    dest: "dist/js/mountains.js"

  grunt.loadNpmTasks "grunt-contrib-concat"
