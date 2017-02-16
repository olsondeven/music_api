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
    controller: function($scope,$state,mainService){
          $scope.noFav = function(){
            if($scope.currentUser){
              $state.go('favorites');
            }else{
              swal('Please login to see favorites');
            }
          }
          $scope.currentUser = mainService.getCurrentUser();
          $scope.logout = function() {
          $scope.displayBoxBool = mainService.logout();
          $scope.currentUser = mainService.getCurrentUser();
      };
    }
  };//return closing
});//closing
