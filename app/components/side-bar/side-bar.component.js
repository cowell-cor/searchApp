function SearchController(peopleService) {
    let vm = this;
    vm.search = "";
    //Populate sidePanel with Name on PageLoad
    vm.$onInit = function () {
        peopleService.getPeople().then(function (res) {
            vm.peoples = res.data.People;
        }, function (error) {
            vm.peoples = "Error Occured!!"
        });
    }

    vm.showPeople = function (people) {
        vm.people = people;
    }
    // reset the right-panel
    vm.resetPeople = function () {
        vm.people = '';
    }
    // reset searchbox 
    vm.resetSearch = function () {
        vm.people = '';
        vm.search = '';
    }
}

angular.module('search', [])
    .component('sideBar', {
        templateUrl: 'components/side-bar/side-bar.tpl.html',
        controller: SearchController,
        controllerAs: 'vm',
        bindings: {}
    })