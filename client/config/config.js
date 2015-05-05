'use strict';

angular.module('roadtrip')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfileCtrl'})

  .state('trips', {url: '/trips', templateUrl: '/views/trips/trips.html', abstract: true})
  .state('trips.new', {url: '/new', templateUrl: '/views/trips/trips-new.html', controller: 'TripsNewCtrl'})
  .state('trips.list', {url: '/', templateUrl: '/views/trips/trips-list.html', controller: 'TripsListCtrl'})
  .state('trips.show', {url: '/{tripId}', templateUrl: '/views/trips/trips-show.html', controller: 'TripsShowCtrl'});
});
