"use strict"

module.exports = ( grunt ) ->

    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-jshint"
    grunt.loadNpmTasks "grunt-contrib-watch"

    grunt.initConfig
        coffee:
            compile:
                options:
                    bare: yes
                files:
                    "lib/lygrafmajik.js": "lib/lygrafmajik.coffee.md"
        jshint:
            options:
                jshintrc: ".jshintrc"
            lib:
                src: [ "lib/**/*.js" ]
        watch:
            lib:
                files: "lib/**/*.coffee.md"
                tasks: [
                    "coffee"
                    "jshint"
                ]

    grunt.registerTask "default", [
        "coffee"
        "jshint"
    ]

