'use strict';

/**
 * @ngdoc function
 * @name MaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of MaterialApp
 */
angular.module('MaterialApp')
  .controller('scogCtrl', function($scope,scogService) {
	$scope.getScogData = {
				paginationPageSizes: [15, 50, 75],
				paginationPageSize: 15,
				columnDefs: [
				             { field: 'cof_order_number',width: '20%'},
				             { field: 'order_number',width: '20%'},
				             { field: 'name',width: '20%'},
				             { field: 'se',width: '20%'},
				             { field: 'sp',width: '20%'},
				             { field: 'hiperLink',width: '20%'},
				             { field: 'flow_status_code',width: '20%'},
				             { field: 'creation_date',width: '20%'}
				             ]

		};
	  $scope.getScog = function(){
		  scogService.getScogData()
	    .then(function(response) {
	    	$scope.getScogData = response;
	    });
	  }  
	  $scope.getScog();
	 

  });	
