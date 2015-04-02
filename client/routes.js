angular.module("appname").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
        url: '/home',
        templateUrl:'client/components/home/views/home.ng.html',
        controller: 'HomeCtrl'
      })
    .state('tab1', {
        url: '/tab1',
        templateUrl:'client/components/tab1/views/tab1.ng.html',
        controller: 'Tab1Ctrl'
      })
      .state('tab2', {
        url: '/tab2',
        templateUrl:'client/components/tab2/views/tab2.ng.html',
        controller: 'Tab2Ctrl'
      })
     .state('tab3', {
        url: '/tab3',
        templateUrl:'client/components/tab3/views/tab3.ng.html',
        controller: 'Tab3Ctrl'
      });
      
    $urlRouterProvider.otherwise("/home");
  }]);