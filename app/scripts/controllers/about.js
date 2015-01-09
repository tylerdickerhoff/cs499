'use strict';

/**
 * @ngdoc function
 * @name cs499App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cs499App
 */
angular.module('cs499App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
