angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // gabe: in here we use the methods defined on our Links object
  //       to handle our link logic and rendering
  //$scope.getLinks();
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data = data;
    });
  }
  
});
