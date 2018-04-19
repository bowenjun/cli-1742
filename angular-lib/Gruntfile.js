/**
 * grunt 配置文件
 */
module.exports = function(grunt) {

    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: false,
                presets: ['env']
                
            },
            dist: {
                files: [{
                   expand:true,
                   cwd:'./',
                   src:['index.js'],
                   dest:'./dist/'
                 }] 
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            build : {
                options: {
                    mangle: false
                },
                files: {
                    'dist/app.min.js': [
                        './dist/*.js'
                    ]
                }
            }
        },
        less: {
            compile: {
                options: {
                    paths: ["./"]
                },
                files: {
                    "dist/style.min.css": "*.less"
                }
            }
        },
        watch: {
            js: {
                files: ['./dist/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['*.less'],
                tasks: ['less']
            },
            babel:{
                files:'*.js',
                tasks:['babel']
            }
        },
        jshint:{
            build:['src/**/*.js'],
            options:{
                jshintrc:'.jshintrc' //检测JS代码错误要根据此文件的设置规范进行检测，可以自己修改规则
            }
        }
    });

    // 载入 babel 插件
    grunt.loadNpmTasks('grunt-babel');

    // 载入 uglify 插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 载入 less 插件
    grunt.loadNpmTasks('grunt-contrib-less');

    // 载入 watch 插件
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 注册任务
    grunt.registerTask('default', ['babel', 'uglify', 'less', 'watch']);
};
