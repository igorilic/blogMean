(function() {
'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  AppController.$inject = ['$mdSidenav'];
  function AppController($mdSidenav) {
    var vm = this;
    
    vm.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
    };

    activate();

    ////////////////

    function activate() { }
  }
})();