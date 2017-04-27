
 (function(){
	
	angular.module('myApp').controller('myController', someCtrl);

	function someCtrl($scope){

		$scope.tigerData = data;
		$scope.deleteTiger = function(tiger){
			var index = $scope.tigerData.indexOf(tiger);
			$scope.tigerData.splice(index,1);
		}
		$scope.saveTiger = function(){
			var tdata = $scope.saveData;
			console.log(tdata);
		};
		$scope.tigerDetails = function(tiger){
			console.log(tiger.name);
			$scope.details = tiger;
		}
	}

	var data = [

		{"name":"Bengal tiger",
		"desc":"The Bengal tiger is found in India as well as Bangladesh and it is known to live both in the heated areas of desert and the grasslands where it is wet and cool.",
		"image":"img/tiger1.jpg"
		},
		
		{"name":"Siberian tiger",
		"desc":"The Bengal tiger is found in India as well as Bangladesh and it is known to live both in the heated areas of desert and the grasslands where it is wet and cool.",
		"image":"img/tiger2.jpg"
		},

		{"name":"Sumatran tiger",
		"desc":"The Bengal tiger is found in India as well as Bangladesh and it is known to live both in the heated areas of desert and the grasslands where it is wet and cool.",
		"image":"img/tiger3.jpg"
		},
		
		{"name":"South china tiger",
		"desc":"The Bengal tiger is found in India as well as Bangladesh and it is known to live both in the heated areas of desert and the grasslands where it is wet and cool.",
		"image":"img/tiger4.jpg"
		},
		{"name":"African tiger",
		"desc":"The African tiger is found in Afica as well as Bangladesh and it is known to live both in the heated areas of desert and the grasslands where it is wet and cool.",
		"image":"img/tiger4.jpg"
		}
	]


})();