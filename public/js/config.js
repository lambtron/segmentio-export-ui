segExport.config( ['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
  when('/', {
    templateUrl: 'public/views/pages/query.html',
    controller: 'queryController'
  }).
  when('/results', {
    templateUrl: 'public/views/pages/results.html',
    controller: 'resultsController'
  }).
  otherwise({
    redirectTo: '/'
  });
}]);