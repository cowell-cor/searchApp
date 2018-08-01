function RightPanelController() {
    let vm = this;
    vm.isShow= false;
    vm.selected=[];
    vm.$onChanges = () => {
        // value of rows inthe likes table
        vm.rows = vm.people.Likes.length > vm.people.Dislikes.length ? vm.people.Likes : vm.people.Dislikes;
        vm.emptyHearts = Math.abs(vm.people.rating - 5);
    }

    vm.showAdvanced = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'components/right-panel/dialog.tpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function() {
          vm.status = 'You cancelled the dialog.';
        });
      };
    
      vm.sendMessage = function(){
          vm.isShow=true;
      }

}

angular.module('rightPanel', [])
    .component('rightPanel', {
        templateUrl: 'components/right-panel/right-panel.tpl.html',
        controller: RightPanelController,
        controllerAs: 'vm',
        bindings: {
            people: '<'
        }
    })
