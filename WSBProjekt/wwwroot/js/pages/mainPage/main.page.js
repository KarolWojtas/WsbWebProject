angular.module('app')
    .component('mainPage', {
        templateUrl: '/js/pages/mainPage/mainPageTpl.html',
        controller: 'mainPageController'
    })
    .controller('mainPageController', [function () {
        const init = () => console.log('main page controller');
        init();
    }])