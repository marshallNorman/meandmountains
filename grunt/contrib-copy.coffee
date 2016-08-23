module.exports = (grunt) ->
  grunt.config "copy",
    main:
      files: [
        expand: true
        cwd:'public/'
        src: ["**"]
        dest: "dist/"
      ]
    ee:
      files: [
        expand: true
        dot: true
        cwd: 'ee/'
        src: ["**"]
        dest: "dist/"
      ]

  grunt.loadNpmTasks 'grunt-contrib-copy'
