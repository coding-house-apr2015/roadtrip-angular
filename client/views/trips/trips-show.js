/* jshint camelcase: false */

'use strict';

angular.module('roadtrip')
.controller('TripsShowCtrl', function($scope, $state, Trip, Map){
  Trip.show($state.params.tripId)
  .then(function(response){
    $scope.trip = response.data;
    addMarkers();
  });

  $scope.create = function(stop){
    Map.geocode(stop.name, function(results){
      if(results && results.length){
        stop.name = results[0].formatted_address;
        stop.lat = results[0].geometry.location.lat();
        stop.lng = results[0].geometry.location.lng();
        var trip = new Trip($scope.trip);
        trip.addStop(stop)
        .then(function(response){
          $scope.trip = response.data;
          addMarkers();
        });
      }
    });
  };

  var map = Map.create('#map', 37.5483, -100.9886, 4);
  var markers = [];

  function addMarkers(){
    clearMarkers();
    markers = $scope.trip.stops.map(function(s){
      return Map.addMarker(map, s.lat, s.lng, s.name);
    });
  }

  function clearMarkers(){
    markers.forEach(function(m){
      m.setMap(null);
    });
    markers = [];
  }
});
