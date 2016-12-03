noServerProject.controller('favCtrl',function($scope,mainService){
  $scope.favList = mainService.getFav();
  console.log('favCtrl',$scope.favList);
  if($scope.favList.artists){
    $scope.listArtists = $scope.favList.artists;
    console.log('favCtrl listArtists', $scope.listArtists);
  }else{
    $scope.listArtistsHolder = 'No Liked Artists';
  }
  // console.log('favCtrl', $scope.favList, '\n listArtists', $scope.listArtists);
});//closing
