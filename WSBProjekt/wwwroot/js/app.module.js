angular.module('app', ['ui.router', 'ngAnimate'])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('mainPage', {
            component: 'mainPage',
            url: '?init'
        })
        $stateProvider.state('angularjsPage', {
            component: 'angularjsPage',
            url: '/angularjs?init'
        })
        $stateProvider.state('svgPage', {
            component: 'svgPage',
            url: '/svg?init'
        })
    }])
    .run(['$anchorScroll', function ($anchorScroll) {
        $anchorScroll.yOffset = 200;
    }])
   .controller('appController', ['$scope', '$state',
        function ($scope, $state) {
            $scope.tplData = {
                sideNavOpen: true,
                links: {
                    mainPage: {
                        text: 'O projekcie', sections: []
                    },
                    angularjsPage: {
                        text: 'AngularJS',
                        sections: [
                            { text: 'O AngularJS', id: 'start' },
                            { text: 'Moduły', id: 'modules' },
                            { text: 'Kontrolery, komponenty, usługi', id:'components'}
                        ]
                    },
                    svgPage: {
                        text: 'Animacje SVG',
                        sections: [
                            { text: 'Wstęp', id: 'start' },
                            { text: 'Ścieżka i kształt', id: 'shapePath' },
                            { text: 'Animacja ruchu', id: 'motion' },
                            { text: 'Animacja koloru', id: 'color' },
                            { text: 'Easing', id: 'bezier' },
                            { text: 'Tekst', id: 'text'}
                        ]
                    }
                },
                activeState: 'mainPage'
            };

            $scope.onClickMenuBtn = function (state) {
                $state.go(state);
                $scope.tplData.activeState = state;
               
            }
            $scope.onClickSectionLink = function (state, sectionId) {
                $scope.tplData.activeState = state;
                $state.go(state, { init: sectionId });
                $scope.tplData.sideNavOpen = false;
            }
        }
   ])
    
