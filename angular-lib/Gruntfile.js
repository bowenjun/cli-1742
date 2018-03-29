/**
 * Created by ginger on 16-10-11.
 */
module.exports = function(grunt) {

    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            build : {
                options: {
                    mangle: false
                },
                files: {
                    'build/app.min.js': [
                        'app/app/app.js', 'app/app/directive.js', 'app/app/controller.js', 'app/app/service.js',
                        'app/home/mainCtrl.js'
                    ]
                }
            }
        },
        less: {
            compile: {
                options: {
                    paths: ["app/app/css"]
                },
                files: {
                    "build/style.css": "app/css/main.less"
                }
            }
        },
        watch: {
            js: {
                files: ['app/css/*.less'],
                tasks: ['less']
            },
            css: {
                files: ['app/*/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // 载入uglify插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // less
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-jsdoc');

    // 注册任务
    grunt.registerTask('default', ['uglify', 'less', 'watch']);
};
