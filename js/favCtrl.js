noServerProject.controller('favCtrl',function($scope,$sce,$state,mainService){
  $scope.currentUser = mainService.getCurrentUser();
  // console.log($state.current);
  console.log($scope.currentUser);
  $scope.displayFav = function(type){
    // console.log('fired?');
    if (type === 'artists') {
      if ($scope.currentUser.artists[0]) {
        $scope.arrayObj = $scope.currentUser.artists;
        console.log('artists', $scope.arrayObj);
        $scope.artistsBool = true;
        $scope.albumsBool = false;
        $scope.tracksBool = false;
      }else{
      swal('You have not liked any Artists');
    }
  }
    if (type === 'albums') {
      if ($scope.currentUser.albums[0]) {
        $scope.arrayObj = $scope.currentUser.albums;
        // console.log('album', $scope.arrayObj);
        $scope.albumsBool = true;
        $scope.artistsBool = false;
        $scope.tracksBool = false;
      }else{
      swal('You have not liked any Albums');
    }
  }
    if (type === 'tracks') {
      if ($scope.currentUser.tracks[0]) {
        $scope.arrayObj = $scope.currentUser.tracks;
        // console.log('tracks', $scope.arrayObj);
        $scope.tracksBool = true;
        $scope.artistsBool = false;
        $scope.albumsBool = false;
      }else {
      swal('You have not like any Tracks');
    }
  }
  };
  // $scope.disliked = function(obj){
  //
  // };
  $scope.trustSrc = function(url) {
      return $sce.trustAsResourceUrl(url);
  };
});//closing