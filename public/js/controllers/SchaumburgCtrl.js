'use strict';

/**
 * @ngdoc function
 * @name MaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of MaterialApp
 */
angular.module('MaterialApp')
  .controller('SchaumburgCtrl', function($scope,$http,schaumburgService) {
	  $scope.getSchaumburgData = {
			paginationPageSizes: [15, 50, 75],
			paginationPageSize: 15,
			columnDefs: [
			             { field: 'product',width: '20%'},
			             { field: 'location',width: '20%'},
			             { field: 'dlvryStatus',width: '15%'},
			             { field: 'nsad',width: '20%'},
			             { field: 'quantity',width: '15%'},
			             { field: 'temp',width: '15%'}
			             ]
	};
	  $scope.getSchaumburg = function(){
		  schaumburgService.getSchaumburgData()
	    .then(function(response) {
	    	$scope.getSchaumburgData = response;
	    });
	  }  
	  $scope.getSchaumburg();
  });	
