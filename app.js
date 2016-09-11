var app = angular.module("formApp", ["ngAnimate", "ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
        .state("home", {
			url: "/",
			templateUrl: "home.html"
		})
    
		.state("form", {
			url: "/form",
			templateUrl: "form.html"
        })

		.state("form.quote-options", {
			url: "/form/quote-options",
			templateUrl: "/form/form-quote-options.html",
            controller: "quoteOptionsCtrl"
		})

		.state("form.personal", {
			url: "/form/personal",
			templateUrl: "/form/form-personal.html",
            controller: "personalCtrl"
		})

		.state("form.vehicle", {
			url: "/form/vehicle",
			templateUrl: "/form/form-vehicle.html",
            controller: "vehicleCtrl"
		})

		.state("form.risk", {
			url: "/risk",
			templateUrl: "form-risk.html"
		})

		.state("form.license", {
			url: "/license",
			templateUrl: "form-license.html"
		})
		
		.state("form.insurance", {
			url: "/insurance",
			templateUrl: "form-insurance.html"
		})

		.state("form.accident", {
			url: "/accident",
			templateUrl: "form-accident.html"
		})

		.state("form.premium", {
			url: "/premium",
			templateUrl: "form-premium.html"
		});


 	$urlRouterProvider.otherwise('/');
});

app.factory("ageFactory", [function(){
    var service = {};
    var baseValue = NULL;
    
    service.valueByAge = function(dob, carValue){
        if(dob >= 25){
            overAge(carValue);
        } else{
            underAge(carValue);
        }
    }
    
    service.overAge = function(carValue){
        if(carValue <= 5000) {
            baseValue = 400;
          } else if (carValue <= 7500) {
            baseValue = 450;
          } else if (carValue <= 10000) {
            baseValue = 475;
          } else if (carValue <= 12500) {
            baseValue = 500;
          } else if (carValue <= 15000) {
            baseValue = 525;
          } else if (carValue <= 17500) {
            baseValue = 550;
          } else if (carValue <= 20000) {
            baseValue = 575;
          } else if (carValue <= 22500) {
            baseValue = 600;
          } else if (carValue <= 25000) {
            baseValue = 625;
          } else if (carValue > 25000) {
            baseValue = 650;
          }
        
        return baseValue;
    }
    
     service.overAge = function(carValue){
        if(carValue <= 5000) {
            baseValue = 600;
          } else if (carValue <= 7500) {
            baseValue = 630;
          } else if (carValue <= 10000) {
            baseValue = 670;
          } else if (carValue <= 12500) {
            baseValue = 710;
          } else if (carValue <= 15000) {
            baseValue = 770;
          } else if (carValue <= 17500) {
            baseValue = 820;
          } else if (carValue <= 20000) {
            baseValue = 875;
          } else if (carValue <= 22500) {
            baseValue = 930;
          } else if (carValue <= 25000) {
            baseValue = 950;
          } else if (carValue > 25000) {
            baseValue = 970;
          }
         
         return baseValue;
    }
    
    return service;
}]);
            

app.controller("quoteOptionsCtrl", ["$scope", function($scope){
    
    $scope.quoteOptions = 
        [
            "full quote",
            "third party quote" 
        ];
    
    $scope.quote = {selected: "full quote"};
    
    $scope.quoteSelector = function(qSelect){
        $scope.quote.selected = qSelect;
    };

}]);


app.controller("personalCtrl", ["$scope", function($scope){
    $scope.person = {};
    
    $scope.person.firstName = "";
    $scope.person.lastName = "";
    $scope.person.address = "";
    $scope.person.phoneNumber = "";
    $scope.person.email = "";
    $scope.person.dob = sharedDob;
    
}]);

app.controller("vehicleCtrl", ["$scope", function($scope){
    $scope.vehicle = {};
    
    $scope.vehicle.make = "";
    $scope.vehicle.model = "";
    $scope.vehicle.year = "";
    $scope.vehicle.value = 0;

}]);