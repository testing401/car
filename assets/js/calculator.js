(function(){
  var app = angular.module("carsureCalculator", ["calculator-directives"]);

  app.controller("calculatorController", ["$scope", function($scope){
    //radio buttons

$scope.modcer = false;
$scope.reffer = false;

$scope.certi = function(){
  if($scope.mod_certified_choice.selected == "no"){
    $scope.modcer = true;
$scope.reffer = true;
  } else {
    $scope.modcer = false;
    $scope.reffer = false;
  }
};
$scope.testing = function(value){
  $scope.insurance_quote_choice.selected = value;
};

$scope.certVisible = false;
$scope.modEx = true;

$scope.showCertification = function(){
  if($scope.mod_choice.selected == "modded"){
    $scope.certVisible = true;
    $scope.modEx = false;
  } else {
      $scope.certVisible = false;
      $scope.modEx = true;
      $scope.mod_certified_choice.selected = "";
  }
};

$scope.hidPrem = false;
    $scope.accidentOrConvictionVisibile = false;
    $scope.showAccidentOrConviction = function(value) {
               //If DIV is visible it will be hidden and vice versa.
               $scope.accidentOrConvictionVisibile = value == "yes";
               $scope.accident_type_choice.selected = "";
               $scope.conviction_description = "";
               $scope.accident_fault_choice.selected = "";
               $scope.showConvicton();
           }

           $scope.convictionVisible = false;
           $scope.accidentVisible = false;


  $scope.showConvicton = function(){
    if($scope.accident_type_choice.selected == "conviction") {
      $scope.convictionVisible = true;
      $scope.accidentVisible = false;
                 $scope.hidPrem = true;
      clearall();
    } else if ($scope.accident_type_choice.selected == "accident") {
      $scope.convictionVisible = false;
      $scope.accidentVisible = true;
                 $scope.hidPrem = false;
      clearall();
    } else {
      $scope.convictionVisible = false;
      $scope.accidentVisible = false;
      clearall();
    }
}

function clearall(){
  $scope.conviction_description = "";
  $scope.accident_fault_choice.selected = "";
}


$scope.insuranceTypeVisible = false;
$scope.fullInsuranceYearVisibile = false;

$scope.showInsuranceType = function(){
  if($scope.full_license_previous_insurance_choice.selected == "yes"){
    $scope.insuranceTypeVisible = true;
    $scope.fullInsuranceYearVisibile = false;
    $scope.insurance_type_choice.selected = "";
    $scope.insurance_full_choice.selected = "";
  } else if($scope.full_license_previous_insurance_choice.selected == "no"){
      $scope.insuranceTypeVisible = false;
        $scope.fullInsuranceYearVisibile = false;
      $scope.insurance_type_choice.selected = "";
      $scope.insurance_full_choice.selected = "";
  }
}

$scope.showFullInsuranceLength = function(){
  if($scope.insurance_type_choice.selected == "full"){
    $scope.fullInsuranceYearVisibile = true;
  } else {
    $scope.fullInsuranceYearVisibile = false;
    $scope.insurance_full_choice.selected = "";
  }
}

$scope.twoYearsVisibile = false;
$scope.showOverTwo = function(){
  if($scope.full_license_choice.selected == "over_a_year"){
    $scope.twoYearsVisibile = true;
  } else {
    $scope.twoYearsVisibile = false;
    $scope.full_license_over_choice.selected = "";
  }
}
    //Personal Information
    $scope.first_name = "";
    $scope.last_name = "";
    $scope.address = "";
    $scope.phone_number = "";
    $scope.email = "";
    $scope.dob = "";
    //Car Information
    $scope.make = "";
    $scope.model = "";
    $scope.year = "";
    $scope.vehicle_value = 0;


    //Type of insurance
    $scope.insurance_quote_options = ["full", "third_party"];
    $scope.insurance_quote_choice = {selected: "full"};


    //Risk vehicle
    $scope.risk_options = ["v8", "turbo_charged_engine", "rotary_engine"];
    $scope.selection = [];

    $scope.toggleSelection = function toggleSelection(risk_name){
      var idx = $scope.selection.indexOf(risk_name);
      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }
      // is newly selected
      else {
        $scope.selection.push(risk_name);
      }

    };

    $scope.resetLicense = function resetLicense(){
      $scope.full_license_choice.selected = "";
      $scope.full_license_over_choice.selected = "";
      $scope.twoYearsVisibile = false;

    };


    //Modded adds 15%
    $scope.mod_options = ["modded", "unmodded"];
    $scope.mod_choice = { selected: "unmodded"};
    $scope.mod_description = "";

    //Modd certifited?
    $scope.mod_certified_options = ["yes", "no"];
    $scope.mod_certified_choice = { selected: ""};


    //Type of license
    // 25% increase for learner
    // 20% increase for restricted
    $scope.license_options = ["learner", "restricted", "full"];
    $scope.license_current_option = "learner";
    //full but less than a year increase 15%
    $scope.full_license_length = ["over_a_year", "under_a_year"];
    $scope.full_license_choice = {selected: ""};

    //two years or over two years
    $scope.full_license_over_options = ["yes", "no"];
    $scope.full_license_over_choice = {selected: ""};


    //full and no previous insurance increase 15%
    $scope.full_license_previous_insurance_options = ["yes", "no"];
    $scope.full_license_previous_insurance_choice = {selected: ""};

    //Type of insurance
    $scope.insurance_type_options = ["full", "third_party", "third_party_full"];
    $scope.insurance_type_choice = {selected: ""};

    $scope.insurance_full_option = ["yes", "no"];
    $scope.insurance_full_choice = {selected: ""};

    //accident_type_options
    $scope.accident_options = ["yes", "no"];
    $scope.accident_choice = {selected:""};

    //Accident or conviction
    $scope.accident_type_options = ["conviction", "accident"];
    $scope.accident_type_choice = {selected: ""};

    $scope.conviction_description = "";

    $scope.accident_fault_options = ["yes", "no"];
    $scope.accident_fault_choice = {selected:""};


    $scope.final_value = 0;

    $scope.finalCalculate = function() {
      if($scope.dob >= 25) {
        overAge($scope.vehicle_value);
        modFee();
        modMore();
        fullInsuranceFee();
        licenseType();
        accident();
        independentFees();
        gstFee();
        excessFee();
        theftExcess();
        seekingThirdParty();
      } else {
        underAge($scope.vehicle_value);
        modFee();
        modMore();
        fullInsuranceFee();
        licenseType();
        accident();
        independentFees();
        gstFee();
        excessFee();
        theftExcess();
        seekingThirdParty();
      }
    }
    $scope.base_value = 0;

    //25 or older
    function overAge(carValue){
      if(carValue <= 5000) {
        $scope.base_value = 400;
      } else if (carValue <= 7500) {
        $scope.base_value = 450;
      } else if (carValue <= 10000) {
        $scope.base_value = 475;
      } else if (carValue <= 12500) {
        $scope.base_value = 500;
      } else if (carValue <= 15000) {
        $scope.base_value = 525;
      } else if (carValue <= 17500) {
        $scope.base_value = 550;
      } else if (carValue <= 20000) {
        $scope.base_value = 575;
      } else if (carValue <= 22500) {
        $scope.base_value = 600;
      } else if (carValue <= 25000) {
        $scope.base_value = 625;
      } else if (carValue > 25000) {
        $scope.base_value = 650;
      }
    }

    function underAge(carValue){
      if(carValue <= 5000) {
        $scope.base_value = 600;
      } else if (carValue <= 7500) {
        $scope.base_value = 630;
      } else if (carValue <= 10000) {
        $scope.base_value = 670;
      } else if (carValue <= 12500) {
        $scope.base_value = 710;
      } else if (carValue <= 15000) {
        $scope.base_value = 770;
      } else if (carValue <= 17500) {
        $scope.base_value = 820;
      } else if (carValue <= 20000) {
        $scope.base_value = 875;
      } else if (carValue <= 22500) {
        $scope.base_value = 930;
      } else if (carValue <= 25000) {
        $scope.base_value = 950;
      } else if (carValue > 25000) {
        $scope.base_value = 970;
      }
    }

$scope.modValue = 0;

    function modMore(){
    if($scope.selection.length >= 1) {
    $scope.modValue = $scope.base_value * .15;
    }
  }

  $scope.fullInsuranceFee = 0;
  function fullInsuranceFee(){
    if(($scope.insurance_type_choice.selected == "full") && ($scope.insurance_full_choice.selected == "no")){
      $scope.fullInsuranceFee = $scope.base_value * .15;
    }
  }

    $scope.modFeeCharge = 0;

    function modFee(){
      if($scope.mod_certified_choice.selected == "no"){
        alert("uncert are reffered");
      }
    }

    function licenseType(){
      switch ($scope.license_current_option) {
        case "learner": $scope.final_value = $scope.base_value * 1.25;
          break;
        case "restricted": $scope.final_value = $scope.base_value * 1.20;
          break;
        case "full": doboth();
          break;
        default: $scope.final_value = 0;
      }
  }

function doboth(){
  $scope.final_value = $scope.base_value;
  licenseLength();
  previousInsurance();
}
  function licenseLength() {
  if ($scope.full_license_choice.selected == "under_a_year") {
    //TO DO: CHANGE FINAL VALUE TO PREMIUM TO FIX RATE
    $scope.final_value = $scope.base_value * 1.15;
  }
}

function previousInsurance() {
  if($scope.full_license_previous_insurance_choice.selected == "no"){
    //TO DO: CHANGE FINAL VALUE TO PREMIUM TO FIX RATE
    $scope.final_value += ($scope.base_value * .15);
  }
}

function accident(){
  if($scope.accident_type_choice.selected == "accident") {
      //TO DO: CHANGE FINAL VALUE TO PREMIUM TO FIX RATE
    $scope.final_value += ($scope.base_value * .25);
  } else if ($scope.accident_type_choice.selected == "conviction"){
    alert("Convictions are reffered");
  }
}

$scope.fee = 25;
$scope.fireLevyFee = 6.08;

  function independentFees(){
    $scope.final_value += $scope.fee + $scope.fireLevyFee; /* + $scope.modFeeCharge; */
  };

  function gstFee(){
    $scope.final_value *= 1.15;

  }

  function seekingThirdParty(){
    if($scope.insurance_quote_choice.selected == "third_party"){
      $scope.final_value = (180 + $scope.fireLevyFee) * 1.15;
      $scope.excess = 0;
      $scope.tExcess = 0;
    }
  }

  //$scope.license_options = ["learner", "restricted", "full"];
  $scope.excess = 0;
    function excessFee(){
      if(($scope.license_current_option == "learner") || ($scope.license_current_option == "restricted")) {
        $scope.excess = 1500;
      } else if ($scope.dob >= 25) {
        $scope.excess = 500;
      } else {
        $scope.excess = 750;
      }

      if(($scope.full_license_choice.selected == "under_a_year") || ($scope.full_license_over_choice.selected == "no") && ($scope.license_current_option =="full")) {
        $scope.excess += 400;
      }
    }

    $scope.tExcess = 0;
        function theftExcess(){
          if($scope.selection.length >= 1) {
            $scope.tExcess = $scope.vehicle_value * .15;
            if ($scope.tExcess < 900) {
              $scope.tExcess = 900;
            }
          }

        }

  }]);
})();
