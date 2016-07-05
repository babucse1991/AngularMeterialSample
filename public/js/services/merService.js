angular.module('merServices', [])

.factory('schaumburgService', function($http){
return{
		getSchaumburgData : function(){
			return $http.get("../JSON/SchaumburgData.json");
		}
	}
	
})

.factory('scogService', function($http){
return{
	
		getScogData : function(){
			console.log("ddd1111");
			return $http.get("../JSON/scogData.json");
		}
	}
	
})

.factory('cofService', function($http){
return{
		getCofData : function(){
			return $http.get("../JSON/COFData.json");
		}
	}
	
});


