/**
 * Created by 1742 on 16-10-27.
 */

(function () {

    /**
     * 所有代码使用严格模式编写
     */
    'use strict';

    /**
     * 主模块,通过ng-app绑定
     * 依赖注入外部模块
     */
    angular
        .module('myApp', [
            'ui.router',
            'ngMessages',
            'ui.bootstrap',
            'ngTable',
            'angularFileUpload',
            'angular-cache',
            'controllers',
            'directives',
            'services'
        ])

        /**
         * 使用ui-router框架
         * 通过$stateProvider配置
         * .state里包括url/views/data等内容,data可以配置相关页面的权限
         */
        .config(['$stateProvider', '$urlRouterProvider', 'authTable', function ($stateProvider, $urlRouterProvider, authTable) {

            /**
             * 默认进入'/index'路由
             */
            $urlRouterProvider.otherwise('/index');

            /**
             * 配置相关路由事例
             */
            $stateProvider
                .state('index', {
                    url: '/index',
                    views: {
                        '': {
                            templateUrl: 'app/home/main.html',
                            controller: 'mainCtrl'
                        },
                        'header@index': {
                            templateUrl: 'app/home/header.html'
                        },
                        'main@index': {
                            templateUrl: 'app/home/home.html'
                        },
                        'footer@index': {
                            templateUrl: 'app/home/footer.html'
                        }
                    },
                    data: authTable.index
                });

        }])

        /**
         * 拦截器
         */
        .config(['$httpProvider', function ($httpProvider) {

            // $httpProvider.interceptors.push('httpInterceptor');

        }])

        /**
         * 运行块,提供关键信息
         */
        .run(function ($rootScope) {

            /**
             * 路由改变响应事件
             * 可用于监听相关页面的权限
             */
            $rootScope.$on('$stateChangeStart', function () {

                /**
                 * current/toState 常用
                 * $templateCache 模板缓存
                 */


            });

            /**
             * 重要可配置信息
             */
            $rootScope.info = {
                titleImg: 'img/logo_icon.png',
                headerImg: 'img/logo_top.png'
            };

        })

        /**
         * 自动更新页面title指令
         */
        .directive('updateTitle', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

            return {
                link: function (scope, element) {

                    $rootScope.$on('$stateChangeSuccess', function (event, toState) {

                        var title = 'welcome to 1742';

                        if (toState.data && toState.data.pageTitle) {

                            title = toState.data.pageTitle;

                        }

                        $timeout(function () {
                            element.text(title);
                        }, 0, false);

                    });

                }
            };
        }]);

})();
