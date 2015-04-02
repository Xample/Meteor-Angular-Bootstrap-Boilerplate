
  angular.module('appname.controllers').controller('MenuCtrl', ['$scope','$state','$rootScope', function ($scope,$state,$rootScope) {

        $rootScope.$state = $state;


        $scope.setCurrent = function (currentMenu)
        {
            $scope.currentMenu = currentMenu;
        };

        $scope.isCurrent = function (currentMenu)
        {
            return $scope.currentMenu === currentMenu;
        };

    }]);
