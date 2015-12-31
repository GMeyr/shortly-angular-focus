angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  // gabe: $location lets us access information about the url
  //       here we use methods from our links object to shorten the links
  //       and I assume the link comes in as a param in the url
});
