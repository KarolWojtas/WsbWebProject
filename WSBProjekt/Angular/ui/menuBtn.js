angular.module('app')
    .component('menuBtn', {
        bindings: {
            index: '@',
            delay: '@',
            text: '@',
            active: '='
        },
        templateUrl: 'templates/ui/menuBtn.tpl.html'
    })
    