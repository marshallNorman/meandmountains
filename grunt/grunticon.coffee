module.exports = (grunt) ->
  grunt.config "grunticon",
    icons:
      options:
        dynamicColorOnly: false
      files: [
        expand: true,
        cwd: 'public/grunticon/src',
        src: ["*.svg"],
        dest: 'dist/grunticon'
      ]

  grunt.loadNpmTasks 'grunt-grunticon'

