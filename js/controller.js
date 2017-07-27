angular.module('peopleApp').controller('controller', function($scope, services) {

  services.getPeople().then(function(result) {
    console.log(result)
    $scope.persons = result
  })
});
