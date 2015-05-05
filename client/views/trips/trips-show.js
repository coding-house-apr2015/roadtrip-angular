'use strict';

angular.module('roadtrip')
.controller('TripsShowCtrl', function($scope, $state, Trip){
  Trip.show($state.params.tripId)
  .then(function(response){
    $scope.trip = response.data;
  });
});
