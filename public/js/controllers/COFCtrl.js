'use strict';

/**
 * @ngdoc function
 * @name MaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of MaterialApp
 */
angular.module('MaterialApp')
  .controller('COFCtrl', function($scope,cofService) {
 $scope.cofData = {
				paginationPageSizes: [15, 50, 75],
				paginationPageSize: 15,
				columnDefs: [
				             { field: 'attribute8', width: '10%'},
				             { field: 'line_number', width: '10%'},
				             { field: 'shipment_number', width: '10%' },
				             { field: 'ordered_item', width: '10%' },
				             { field: 'ordered_quantity', width: '10%' },
				             { field: 'fulfilled_quantity', width: '10%' },
				             { field: 'fulfillment_date', width: '10%' },
				             { field: 'line_status', width: '10%' },
				             { field: 'request_date', width: '10%' },
				             { field: 'schedule_ship_date', width: '10%' },
				             { field: 'creation_date', width: '10%' },
				             { field: 'attribute7', width: '10%' },
				             { field: 'set_name', width: '10%' },
				             { field: 'hiperLink', width: '10%' },
				             { field: 'on_hold', width: '10%' }

				             ]
		};
	  $scope.getCOF = function(){
		  cofService.getCofData()
	    .then(function(response) {
	    	$scope.cofData = response;
	    });
	  }  
	  $scope.getCOF();
	 

  });	
