'use strict';

segExport.controller('queryController',
  ['$scope', '$http', 'moment',
	function ($scope, $http, moment)
{
  // Params:
  // - readKey
  // - ?start
  // - ?end
  // - ?filter / ?select
  // - ?format (headers)
  var query = $scope.query = {
    readKey: '',
    start: '',
    end: '',
    startIsValid: true,
    endIsValid: true,
    submit: function () {
      // transform ?start and ?end to milliseconds.
      // if error, show error.
      var startMS = 0;
      var endMS = moment().format('X')*1000;
      if (moment(this.start).isValid()) {
        startMS = moment(this.start).format('X')*1000;
        this.startIsValid = true;
      } else {
        this.startIsValid = false;
      }
      if (moment(this.end).isValid()) {
        endMS = moment(this.end).format('X')*1000;
        this.endIsValid = true;
      } else {
        this.endIsValid = false;
      }

      var load = {
        start: startMS,
        end: endMS,
        readKey: this.readKey
      };

      // Make the request.
      $http.post('/api/request', {load: load} )
      .success(function (data) {
        // Redirect to another screen.
        console.log(data);
        console.log('hi');
      });
    }
  };
}]);

segExport.controller('resultsController',
  ['$scope', '$http',
  function ($scope, $http)
{

}]);