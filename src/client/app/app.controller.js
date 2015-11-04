(function() {
'use strict';

  angular
    .module('app')
    .controller('AppController', AppController);

  // AppController.$inject = ['$mdSidenav'];
  function AppController() {
    var vm = this;
    vm.title = 'testic';
    
    // vm.toggleSidenav = function(menuId) {
    //   $mdSidenav(menuId).toggle();
    // };

    activate();

    ////////////////

    function activate() { }
  }
})();