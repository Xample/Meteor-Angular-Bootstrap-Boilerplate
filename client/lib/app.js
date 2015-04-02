angular.module('appname.controllers', []);

angular.module('appname',[
  'appname.controllers',
  'angular-meteor',
  'ui.router'
]);


// Seems not to be mandatory anymore, given we can now do it through the template inclusion itself
Meteor.startup(function () {
  angular.bootstrap(document, ['appname']);
});

