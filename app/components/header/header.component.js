function HeaderController() {
    let vm = this;
    vm.login = "Peter Hoang";
}

angular.module('header', [])
    .component('header', {
        templateUrl: 'components/header/header.tpl.html',
        controller: HeaderController,
        controllerAs: 'vm'
    })