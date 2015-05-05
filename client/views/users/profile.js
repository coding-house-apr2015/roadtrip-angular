'use strict';

angular.module('roadtrip')
.controller('ProfileCtrl', function($window, $scope, User){
  User.show()
  .then(function(response){
    $scope.user = response.data;
  });

  $scope.update = function(obj){
    var user = new User(obj);
    user.save()
    .then(function(){
      $window.swal({title: 'Profile Updated', text: 'Congratulations, your profile was updated.', type: 'success'});
    })
    .catch(function(){
      $window.swal({title: 'Profile Save Error', text: 'Warning, there was a problem saving your profile.', type: 'error'});
    });
  };
});
