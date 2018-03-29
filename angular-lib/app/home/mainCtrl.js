/**
 * Created by ss1742 on 16/6/8.
 */

(function () {

    'use strict';

    angular
        .module('main', [])
        .controller('mainCtrl', ['$scope', function ($scope) {

            /**
             * 默认sidebar开启
             * 默认第一个sidebar被选中
             */
            $scope.sidebarStatus = true;
            $scope.activeItem = 1;

            /**
             * 侧边栏toggle方法
             * @param status
             */
            $scope.changeSidebarStatus = function (status) {

                $scope.sidebarStatus = status;

            };

            /**
             * 改变active项目
             * @param item
             */
            $scope.changeActiveItem = function (item) {

                $scope.activeItem = item;

            };

            /**
             * ngStyle动态改变高度
             * @returns {{height: string}}
             */
            $scope.getNowHeight = function () {

                var height = document.getElementById('mainContent').offsetHeight + 50 + 'px';

                return {
                    "height": height
                }

            };

        }]);

})();


