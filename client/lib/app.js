angular.module('appname.controllers', []);

angular.module('appname',[
  'appname.controllers',
  'angular-meteor',
  'ui.router'
]);

angular.module('appname').run(function($state){});
