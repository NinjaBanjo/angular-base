var app = angular.module('app', ['ngRoute', 'mkToolControllers'])
  .config([
    '$compileProvider',
    function ($compileProvider) {
      // For Chrome Extensions and other href sanitization.
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
    }
  ]);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'templates/index.html',
        controller: 'MenuController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);