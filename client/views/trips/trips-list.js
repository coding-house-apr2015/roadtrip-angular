'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function($scope, $window, Trip){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });

  $scope.destroy = function(obj){
    var trip = new Trip(obj);
    trip.destroy()
    .then(function(response){
      $window._.remove($scope.trips, function(t){
        return t._id === response.data._id;
      });
    });
  };
});
