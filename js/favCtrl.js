noServerProject.controller('favCtrl',function($scope,$sce,$state,mainService){
  $scope.currentUser = mainService.getCurrentUser();
  // console.log($state.current);
  console.log($scope.currentUser);
  $scope.displayFav = function(type){
    console.log('fired?');
    if (type === 'artists') {
        $scope.arrayObj = $scope.currentUser.artists;
        console.log('artists', $scope.arrayObj);
        $scope.artistsBool = true;
        $scope.albumsBool = false;
        $scope.tracksBool = false;
    }
    if (type === 'albums') {
        $scope.arrayObj = $scope.currentUser.albums;
        // console.log('album', $scope.arrayObj);
        $scope.albumsBool = true;
        $scope.artistsBool = false;
        $scope.tracksBool = false;
    }
    if (type === 'tracks') {
        $scope.arrayObj = $scope.currentUser.tracks;
        // console.log('tracks', $scope.arrayObj);
        $scope.tracksBool = true;
        $scope.artistsBool = false;
        $scope.albumsBool = false;
    }
  };
  $scope.trustSrc = function(url) {
      return $sce.trustAsResourceUrl(url);
  };
});//closing
