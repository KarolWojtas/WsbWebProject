angular.module('app')
    .component('menuBtn', {
        bindings: {
            index: '@',
            delay: '@',
            text: '@',
            active: '='
        },
        templateUrl: 'js/ui/menuBtn/menuBtn.tpl.html'
    })
    