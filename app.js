var TargetPractice = angular.module('TargetPractice', ['ui.router'])

TargetPractice.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('parent', {
      url: '/',
      views: {
        '': {
              template: "<p>Targeting unnamed view from Parent state</p>"
            },
        'named-parent@': {
                          template: "<p>Targeting named view from parent state</p>"
                        },
        'main-header@': {
          template: "<p>Targeting header from parent state</p>"
        }
      }
    })
    .state('parent.child', {
      url: 'child',
      views: {
        
      }
    })

}]);
