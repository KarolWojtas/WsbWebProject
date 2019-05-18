angular.module('app')
    .directive('autoScroll', ['$state', '$anchorScroll', function ($state, $anchorScroll) {
        return {
            link: function () {
                var init = function () {
                    
                    if ($state.params.init) {
                        $anchorScroll($state.params.init)
                    }
               
                }
                init()
            }
        }
    }])
