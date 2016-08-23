module.exports = (grunt) ->


  grunt._cacheMap = []

  grunt.config "bushcaster",
  options:
    hashLength: 8
    noProcess: true
    onComplete: (map, files) ->
      console.log files.length + ' files'
      files.forEach((file) ->
        console.log map[file]
        grunt._cacheMap.push(
          pattern: file
          replacement: map[file]
        )
      )
  main:
    files: [
      expand: true
      cwd: "dist/"
      src: ["css/mq-base.css", "css/no-mq-base.css", "js/mountains.js"]
      dest: "./"
    ]


  grunt.config "string-replace",
    dist:
      files:
        "./": ["dist/system/expressionengine/templates/default_site/layouts.group/default.html"]
      options:
        replacements: grunt._cacheMap

  grunt.loadNpmTasks "grunt-bushcaster"
  grunt.loadNpmTasks "grunt-string-replace"
