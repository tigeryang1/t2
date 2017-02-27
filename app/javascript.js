var app = angular.module('myApp', []);  
app.controller('myCtrl', function($scope, $http) {

  $scope.currentImage = 'placeholder.png';
  $scope.showModel=false;

  $scope.makes = {
    "Acura" : {
      "make" : "Acura",
      "models": {
        "ILX": {
          "model": "ILX",
        },
        "MDX": {
          "model": "MDX",
        }
      }
    },

    "Ford" : {
      "make" : "Ford",
      "models": {
        "Edge": {
          "model": "Edge",
      },
        "Escape": {
          "model": "Escape",
        }
      }
    }

  };

  $scope.update = function() {
    $http({
      method: 'GET',
      url: '/api?makeModel=' + $scope.selectedMake.make + $scope.selectedModel.model
    }).then(function mySuccess(response) {
      console.log(response.data);
      $scope.currentImage = response.data.image;
    }, function myError(response) {
      console.log(response);
    });
  }

  $scope.change = function() {
      if($scope.selectedMake.make!=null)
       $scope.showModel=true;
  }

})
