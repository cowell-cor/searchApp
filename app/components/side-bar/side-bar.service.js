angular.module('search')
    .service('peopleService', function ($http) {
        this.getPeople = function () {
            return $http.get('../../data/people.json');
        }
    });