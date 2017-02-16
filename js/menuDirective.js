angular.module('noServerProject').directive('menuDirective',function(mainService){
  return{
    restrict: 'EA',
    templateUrl: './views/menuBar.html',
    link: function(scope, element, attribute){
      $('.setting').on('mouseenter',function(){
        $('.setting-pop').show('animated');
      });
      $('.setting').on('mouseleave',function(){
        $('.setting-pop').hide('animated');
      });

    },
    controller: function($scope,$state,$rootScope,mainService){
          $scope.$on("getUser",function(event, args){
            $scope.currentUser = mainService.getCurrentUser();
          });
          $scope.currentUser = mainService.getCurrentUser();
          $scope.logout = function() {
          $scope.displayBoxBool = mainService.logout();
          $scope.currentUser = mainService.getCurrentUser();
          // $rootScope.$broadcast('getUser');
      };
    }
  };//return closing
});//closing
