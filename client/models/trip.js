'use strict';

angular.module('roadtrip')
.factory('Trip', function($http, nodeUrl){

  function Trip(obj){
    this.name = obj.name;
    this.departure = obj.departure;
  }

  Trip.prototype.save = function(){
    return $http.post(nodeUrl + '/trips', this);
  };

  return Trip;
});
