angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  console.log('Link Controller Loaded');
  $scope.getLinks = function() {
    Links.getLinks().then(function(links) {
      $scope.data.links = links;
    });
  }
  $scope.getLinks();
  
});
