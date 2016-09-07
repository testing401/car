var app = angular.module("formApp", ["ngAnimate", "ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("form", {
			url: "/form",
			templateUrl: "form.html",
			controller: "formController"
		})

		.state("form.quote-type", {
			url: "/quote-type",
			templateUrl: "./form/form-quote-type.html",
		})

		.state("form.personal", {
			url: "/personal",
			templateUrl: "form-personal.html",
		})

		.state("form.vehicle", {
			url: "/vehicle",
			templateUrl: "form-vehicle.html",
		})

		.state("form.risk", {
			url: "/risk",
			templateUrl: "form-risk.html",
		})

		.state("form.license", {
			url: "/license",
			templateUrl: "form-license.html",
		})
		
		.state("form.insurance", {
			url: "/insurance",
			templateUrl: "form-insurance.html",
		})

		.state("form.accident", {
			url: "/accident",
			templateUrl: "form-accident.html",
		})

		.state("form.premium", {
			url: "/premium",
			templateUrl: "form-premium.html",
		});


 	$urlRouterProvider.otherwise('/form/quote-type');
});

app.controller("formController",  function($scope){
	$scope.formData = {};
	//Type of insurance
    $scope.insurance_quote_options = ["full", "third_party"];
    $scope.insurance_quote_choice = {selected: "full"};
});