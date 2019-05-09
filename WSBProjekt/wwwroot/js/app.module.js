angular.module('app', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('mainPage', {
            component: 'mainPage',
            url: ''
        })
    }])
   .controller('appController', ['$scope',
        function ($scope) {
            $scope.tplData = {
                test: 'test'
            }
        }
    ]);
