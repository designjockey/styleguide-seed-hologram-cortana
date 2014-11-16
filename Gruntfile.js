'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        source: 'source',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "<%= config.source %>/styles/patterns.css" : "<%= config.source %>/styles/patterns.scss"
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
             livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.source %>/**/*.html',
                    '<%= config.source %>/**/*.scss'
                ]
            },
            styles: {
                files: ['<%= config.source %>/styles/**/*.scss'],
                tasks: ['sass:dev', 'shell:hologram']
            }
        },

        shell: {
            hologram: {
                command: 'hologram'
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('./dist'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.dist)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        }

    });

    grunt.registerTask('develop', [
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('default', [

    ]);
};
