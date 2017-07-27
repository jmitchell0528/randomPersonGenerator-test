angular.module('peopleApp').service("services", function($http) {

  this.getPeople = function(person) {
    return $http  ({
      method: "GET",
      url: 'https://randomuser.me/api/?results=3'
    })
    .then(function(result) {
      console.log(result.data.results)
      return result.data.results
    })
  }
})
