angular.module('noServerProject').directive('menuDirective',function(mainService){
  return{
    restrict: 'EA',
    templateUrl: './views/menuBar.html',
    link: function(scope, element, attribute){
      // element.css('z-index','1000');
      scope.currentUser = mainService.getCurrentUser();
      scope.logout = function() {
          mainService.logout();
          scope.currentUser = mainService.getCurrentUser();
          // console.log('directive logout fn', scope.currentUser);
      };
      $('.setting').on('mouseenter',function(){
        $('.setting-pop').show('animated');
      });
      $('.setting').on('mouseleave',function(){
        $('.setting-pop').hide('animated');
      });
    },
    controller: function($scope,mainService){
      $scope.currentUser = mainService.getCurrentUser();
      // console.log('\$directive', $scope.currentUser);
    }
  };
});//closing
