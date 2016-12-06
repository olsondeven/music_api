noServerProject.controller('loginCtrl', function($scope, $timeout,$state, mainService) {
  $scope.currentUser = mainService.getCurrentUser();
  var count = 0;
    // $scope.currentUser = mainService.getCurrentUser();
    // $timeout(function() {
    //     $scope.$watch('currentUser', function() {
    //         var str = 'current user';
    //         // return (str,++count,str,$scope.currentUser);
    //         return console.log(++count,'watch',$scope.currentUser);
    //     });
    // }, 2000);
    //create user----------------------------------------------------------------------//
    // console.log($scope.currentUser);
    if($scope.currentUser){
      $state.go('favorites');
    }
    $scope.createUser = function(n, p, cP) {
        if (!n || !p || !cP) {
            swal('complete required fields');
        } else {
            if (p === cP) {
                mainService.createUser(n, p), $scope.newUserName = "", $scope.newUserPassword = "", $scope.confirmUserPassword = "";
            } else {
              $scope.newUserPassword = '';
              $scope.confirmUserPassword = '';
              swal('password did not match');
            }
        }
    };
    //end create user----------------------------------------------------------------------//
    //login-----------------------------------------------------------------------------------------//
    $scope.login = function(n, p) {
      if(!n || !p){
        swal('incorret username or password');
      }
        mainService.userLogin(n, p);
        $scope.currentUser = mainService.getCurrentUser();
        $scope.userName = '';
        $scope.userPassword = '';
    };
    //end login-----------------------------------------------------------------------------------------//
}); //closing