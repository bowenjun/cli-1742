/**
 * Created by 1742 on 16-10-27.
 */

(function () {

    'use strict';

    /**
     * 所有服务
     */
    angular
        .module('services', [])
        /**
         * 所有请求信息
         */
        .factory('httpServer', ['$http', '$q', 'CacheFactory', function ($http, $q, CacheFactory) {

            CacheFactory('dataCache', {
                /**
                 * 15分钟缓存过期
                 */
                maxAge: 15 * 60 * 1000,
                /**
                 * 缓存过期移除内容
                 */
                cacheFlushInterval: 60 * 60 * 1000,
                deleteOnExpire: 'aggressive'
            });

            /**
             * 调用该函数的所有请求将会缓存数据
             * @param str
             * @returns {Promise}
             */
            var http_catch_function = function (str) {

                var key = str;

                /**
                 * 返回promise异步对象
                 */
                var deferred = $q.defer();
                var dataCache = CacheFactory.get('dataCache');

                /**
                 * 优先获取缓存的数据
                 */
                if (dataCache.get(key)) {

                    deferred.resolve(dataCache.get(key));

                } else {

                    /**
                     * 请求接口
                     */
                    $http
                        .get(key)
                        .success(function (data) {

                            /**
                             * 接口返回 response_code 为 xx 时才将数据缓存
                             */
                            if (data['response_code'] == 'xx') {

                                dataCache.put(key, data);

                            }

                            deferred.resolve(data);

                        });
                }

                return deferred.promise;

            };

            return {
                interface: function () {

                    var transFn = function (data) {
                            return $.param(data);
                        },
                        /**
                         * 此操作将post设置为form-data
                         * @type {{headers: {Content-Type: string}, transformRequest: transFn}}
                         */
                        postCfg = {
                            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                            transformRequest: transFn
                        };

                    return http_catch_function('/url');

                }
            }
        }])
        /**
         * 注入拦截器
         */
        .factory('httpInterceptor', ['$q', '$injector', function ($q, $injector) {

            return {
                'response': function (response) {

                    /**
                     * response.data 为返回结果
                     * $injector 能注入模块，如 var rootScope = $injector.get('$rootScope');
                     */
                    if (response.data) {

                        /**
                         * 被拦截触发操作
                         */

                        return $q.reject(response);

                    } else {

                        return response;

                    }

                }
            };

        }])
        /**
         * constant设置权限
         * 可用于判断路由权限
         */
        .constant('authTable', {
            index: {
                pageTitle: '首页',
                auth: {
                    loginCheck: false
                }
            }
        });
})();