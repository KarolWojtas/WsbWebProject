angular.module('app')
    .component('angularjsPage', {
        templateUrl: 'js/pages/angularjsPage/angularjs.page.tpl.html',
        controller: 'angularjsPageController'
    })
    .controller('angularjsPageController', ['$scope',
        function ($scope) {
            $scope.tplData = {
                inputText: '',
                list: [
                    'Test text'
                ]
            }
            $scope.addItem = function () {
                if ($scope.tplData.inputText) {
                    $scope.tplData.list.push($scope.tplData.inputText);
                }
            }
            $scope.removeItem = function () {
                $scope.tplData.list.pop();
            }
        }
    ])