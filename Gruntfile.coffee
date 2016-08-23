module.exports = (grunt) ->

  grunt.initConfig
    pkg: require("./package.json")

    scssFiles:
      files: [
        expand: true # Enable dynamic expansion.
        cwd: "scss/" # Src matches are relative to this path.
        src: ["**/*.scss"] # Actual pattern(s) to match.
        dest: "dist/css/" # Destination path prefix.
        ext: ".css" # Dest filepaths will have this extension.
        extDot: "first" # Extensions in filenames begin after the first dot
      ]

  ##### Tasks ######
  grunt.loadTasks "grunt"
 
  # NOTE: this has to wipe out everything
  grunt.registerTask "root-canal", [ "clean:all", "copy:main" ]

  # Clean, compile and concatenate JS
  grunt.registerTask "javascript:dev", [ "babel:dev", "concat:js", "jasmine", "cucumberjs"]

  grunt.registerTask "javascript:dist", [ "babel:dist", "concat:js", "jasmine", "cucumberjs", "plato" ]

  # Clean, compile and concatenate JS
  grunt.registerTask "css:dev", [ "sass:dev", "postcss:dev" ]

  grunt.registerTask "css:dist", [ "sass:prod", "postcss:prod" ]

  # Cache Busting
  grunt.registerTask "bustcache", ["bushcaster", "string-replace:dist"]

  # Build tasks
  grunt.registerTask "buildDev", [ "root-canal", "symlink:ee", "javascript:dev", "css:dev", "grunticon"]

  grunt.registerTask "buildProduction", [ "root-canal", "copy:ee", "javascript:dist", "css:dist", "grunticon", "bustcache"]

  grunt.registerTask "server", ["connect", "watch"]

  # Default task
  grunt.registerTask "default", "buildDev"

