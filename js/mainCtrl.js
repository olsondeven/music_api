angular.module('noServerProject').controller('mainCtrl', function($scope, $sce, $timeout, mainService) {
    //-------------------------------------------searchfunctions-----------------------------------------------------------------------------------------------//
    $scope.search = function(str, type) {
      // console.log(event.keyCode);
        if (str !== '') {
            mainService.search(str, type).then(function(response) {
                if (type === 'artist') {
                    $scope.page = response.data.artists;
                    $scope.arrayObj = response.data.artists.items;
                    // console.log('artists', $scope.arrayObj);
                    $scope.artistsBool = true;
                    $scope.albumsBool = false;
                    $scope.tracksBool = false;
                }
                if (type === 'album') {
                    $scope.page = response.data.albums;
                    $scope.arrayObj = response.data.albums.items;
                    // console.log('album', $scope.arrayObj);
                    $scope.albumsBool = true;
                    $scope.artistsBool = false;
                    $scope.tracksBool = false;
                }
                if (type === 'track') {
                    $scope.page = response.data.tracks;
                    $scope.arrayObj = response.data.tracks.items;
                    // console.log('tracks', $scope.arrayObj);
                    $scope.tracksBool = true;
                    $scope.artistsBool = false;
                    $scope.albumsBool = false;
                }
            });
        }
    };

    $scope.setPage = function(obj, direction) {
        var type = obj.items[0].type;
        // console.log(obj.next);
            if (direction === 'next' && obj.next) {
                mainService.setPage(obj.next).then(function(response) {
                    if (type === 'artist') {
                        // $scope.filter = this.name;
                        $scope.page = response.data.artists;
                        $scope.arrayObj = response.data.artists.items;
                        //this char cout out name
                        // console.log('artists', $scope.arrayObj);
                        $scope.artistsBool = true;
                        $scope.albumsBool = false;
                        $scope.tracksBool = false;
                    }
                    if (type === 'album') {
                        $scope.page = response.data.albums;
                        $scope.arrayObj = response.data.albums.items;
                        // console.log('album', $scope.arrayObj);
                        $scope.albumsBool = true;
                        $scope.artistsBool = false;
                        $scope.tracksBool = false;
                    }
                    if (type === 'track') {
                        $scope.page = response.data.tracks;
                        $scope.arrayObj = response.data.tracks.items;
                        // console.log('tracks', $scope.arrayObj);
                        $scope.tracksBool = true;
                        $scope.artistsBool = false;
                        $scope.albumsBool = false;
                    }
                });
            }else{
              console.log('no next');
            }


            if (direction === 'pervious' && obj.previous) {
                // console.log(direction, obj.previous)
                mainService.setPage(obj.previous).then(function(response) {
                    if (type === 'artist') {
                        $scope.page = response.data.artists;
                        $scope.arrayObj = response.data.artists.items;
                        // console.log('artists', $scope.arrayObj);
                        $scope.artistsBool = true;
                        $scope.albumsBool = false;
                        $scope.tracksBool = false;
                    }
                    if (type === 'album') {
                        $scope.page = response.data.albums;
                        $scope.arrayObj = response.data.albums.items;
                        // console.log('album', $scope.arrayObj);
                        $scope.albumsBool = true;
                        $scope.artistsBool = false;
                        $scope.tracksBool = false;
                    }
                    if (type === 'track') {
                        $scope.page = response.data.tracks;
                        $scope.arrayObj = response.data.tracks.items;
                        // console.log('tracks', $scope.arrayObj);
                        $scope.tracksBool = true;
                        $scope.artistsBool = false;
                        $scope.albumsBool = false;
                    }
                });
            }else{
              console.log('no pervious');
            }

    };
    //--------------------------------------trust-Src-function---------------------------------//
    $scope.trustSrc = function(url) {
        return $sce.trustAsResourceUrl(url);
    };
    //--------------------------------------end trust-Src-function----------------------------//
    //--------------------------------------end search----------------------------------------------------------------------------------------------------//
    $scope.liked = function(obj){
      mainService.saveInfo(obj);
    };
}); //closing
