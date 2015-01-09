'use strict';

/**
 * @ngdoc function
 * @name cs499App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cs499App
 */
angular.module('cs499App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
