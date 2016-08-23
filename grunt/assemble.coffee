module.exports = (grunt) ->
  grunt.config "assemble",
    options:
      partials: "templates/partials/*"
      data: "data/*.yml"
      layoutdir: "templates/layouts/"
      layout: ['default.hbs']
    files:
      expand: true
      cwd: 'templates/pages'
      src: ['*.hbs']
      dest: './dist/'
    placeholder:
      src: 'templates/pages/placeholder.hbs'
      dest: './dist/index.html'

  grunt.loadNpmTasks 'assemble'

