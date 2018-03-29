(function() {

    angular
        .module('directives', [])

    /**
     * 封装侧边栏
     * 调用sidebarMenu方法
     */
    .directive('sideBar', function() {

        return {
            restrict: 'EA',
            templateUrl: 'app/component/side-bar.html',
            replace: true,
            link: function() {

                // $.sidebarMenu(angular.element('.sidebar-menu'));
                var animationSpeed = 300;

                $('.sidebar-menu').on('click', 'li a', function(e) {

                    var $this = $(this);
                    var checkElement = $this.next();

                    if (checkElement.is('.tree-view-menu') && checkElement.is(':visible')) {
                        checkElement.slideUp(animationSpeed, function() {
                            checkElement.removeClass('menu-open');
                        });
                        checkElement.parent("li").removeClass("active");
                    } else if ((checkElement.is('.tree-view-menu')) && (!checkElement.is(':visible'))) {
                        //Get the parent menu
                        var parent = $this.parents('ul').first();
                        //Close all open menus within the parent
                        var ul = parent.find('ul:visible').slideUp(animationSpeed);
                        //Remove the menu-open class from the parent
                        ul.removeClass('menu-open');
                        //Get the parent li
                        var parent_li = $this.parent("li");

                        //Open the target menu and add the menu-open class
                        checkElement.slideDown(animationSpeed, function() {
                            //Add the class active to the parent li
                            checkElement.addClass('menu-open');
                            parent.find('li.active').removeClass('active');
                            parent_li.addClass('active');
                        });
                    }
                    //if this isn't a link, prevent the page from being redirected
                    if (checkElement.is('.tree-view-menu')) {
                        e.preventDefault();
                    }
                });

            }
        }
    })

    /**
     * 封装 e-charts
     * 需要标签带有id和option两个属性
     * 该指令适用于图根据用户过滤不断变化
     * 设置了ngModel来监听图改变
     */
    .directive('chart', function(charts) {

            return {
                scope: {
                    id: "@",
                    option: "="
                },
                require: 'ngModel',
                link: function(scope, ele, attr, ngModel) {

                    scope.$watch('option', function() {

                        var myChart = echarts.init(document.getElementById(scope.id));
                        myChart.setOption(ngModel.$modelValue);

                        setTimeout(function() {
                            myChart.resize();
                        }, 0);

                        /**
                         * 将图对象保存在服务中
                         */
                        charts.push(myChart);

                        /**
                         * 页面改变,所有的图自适应变化
                         */
                        window.onresize = function() {

                            angular.forEach(charts, function(i) {
                                i.resize();
                            })

                        };

                    })
                }
            };

        })
        .factory('charts', function() {
            return []
        })

    /**
     * 封装下拉input
     * 分为传入Array和JSONArray两种
     */
    .directive('dropdown', function() {

        return {
            restrict: 'EA',
            templateUrl: 'app/home/dropdown.html',
            replace: true,
            scope: {
                ngModel: '=',
                list: '=',
                showKey: '@',
                chooseKey: '@',
                id: '@',
                placeholder: '@',
                required: '@',
                func: '&',
                clear: '&',
                filter: '@',
                primary: '='
            },
            link: function(scope) {

                scope.$watch('list', function() {

                    scope.List = scope.list;

                });

                var timer = scope.$watch('primary', function(n, o) {

                    if (n) {

                        scope.Input = scope.primary;

                        timer();
                    }

                });

                if (scope.filter) {
                    scope.isFilter = true;
                }

                if (scope.showKey) {

                    scope.isObj = true;

                    scope.setKeyToValue = function(obj) {

                        scope.ngModel = obj[scope.chooseKey];

                        scope.Input = obj[scope.showKey];

                        scope.func({
                            p: scope.ngModel
                        });

                    };

                } else {

                    scope.setKeyToValue = function(value) {

                        scope.ngModel = value;

                        scope.Input = scope.ngModel;

                        scope.func({
                            p: scope.ngModel
                        });
                    }

                }

                scope.$watch('ngModel', function(n, o) {

                    if (!n) {
                        scope.Input = '';
                    }

                })

            }
        }
    })

    /**
     * 封装时间选择器
     */
    .directive('datePicker', function() {

        return {
            restrict: 'EA',
            templateUrl: 'app/home/date-picker.html',
            replace: true,
            scope: {
                ngModel: '=',
                id: '@',
                placeholder: '@',
                required: '@',
                minMode: '='
            },
            link: function(scope) {

                scope.Id = scope.id;
                scope.Placeholder = scope.placeholder;
                scope.Required = scope.required;

                var formats = ['yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                scope.format = formats[0];

                scope.$watch('minMode', function() {
                    scope.dateOptions = {
                        formatYear: 'yyyy',
                        maxDate: new Date(2080, 1, 1),
                        minDate: new Date(1970, 1, 1),
                        startingDay: 1,
                        minMode: scope.minMode
                    };
                });

                scope.pop = {
                    isOpen: false
                };

                scope.open = function() {
                    scope.pop.isOpen = true;
                };

                scope.Model = scope.ngModel;

                scope.$watch('Model', function() {

                    scope.ngModel = scope.Model;

                })

            }
        }
    });

})();