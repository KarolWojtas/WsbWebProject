angular.module('app', [])
    .controller('appController', ['$scope',
        function ($scope) {
            $scope.tplData = {
                test: 'test'
            }
        }
    ])