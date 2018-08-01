function MessageController($mdDialog) {
    let vm = this;
    vm.$onInit =function() {
        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Send Message')
            .textContent(`Sending message to '${vm.name}'`)
            .ariaLabel('Left to right demo')
            .ok('Close Me!!')
            .openFrom('#left')
            .closeTo(angular.element(document.querySelector('#right')))
        ).then();

    }
}

angular.module('sendMessage', ['ngMaterial'])
    .component('sendMessage', {
        templateUrl: 'components/send-message/send-message.tpl.html',
        controller: MessageController,
        controllerAs: 'vm',
        bindings:{
            name:'<'
        }
    })