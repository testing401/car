  var app = angular.module("calculator-directives", []);

  app.directive("calculatorTabs", function() {
    return {
      restrict: "E",

      templateUrl: "calculator-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };

        this.insuranceTab = function(insurancePage) {
          if(insurancePage == "third_party"){
            this.setTab(8);
          } else if(insurancePage == "full") {
            this.setTab(2);
          }
        };

      },
      controllerAs: "tab"
    };
  });
