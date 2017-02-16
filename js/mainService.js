angular.module('noServerProject').service('mainService', function($http, $q, $state) {
  var srvcUser;

  function srvGetUser () {
    if(localStorage.getItem('currentUser')){
        srvcUser = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('currentUser'))));
        }
  }
  //Get currentUser-------------------------------------------------------------------------------------------------------------------------//
  this.getCurrentUser = function(){
      srvGetUser();
      if(localStorage['currentUser']){
          return JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem('currentUser'))));
          //JSON.parse(localStorage.getItem(y313))
      }
  };
  //End get currentUser --------------------------------------------------------------------------------------------------------------------//
  //logout----------------------------------------------------------------------------------------------------------------------------------//
  this.logout = function(){
    localStorage['currentUser'] = null;
    $state.go('search');
    return true;
  };
  //end logout------------------------------------------------------------------------------------------------------------------------------//

    //login/create--------------------------------------------------------------------------------------------------------------------------//
    this.createUser = function(n, p) {
        if (!localStorage.getItem(n)) {
            var obj = new UserObj(n,p);
            // console.log('service JSON set', obj);
            localStorage.setItem(n, JSON.stringify(obj));
            swal('Account Created');
            localStorage.setItem("currentUser", JSON.stringify(n));
            srvGetUser();
            $state.go('search');
        } else {
            swal('This user already exists\n Please sign in \^\_\^');
            $state.go('login');
        }
    };
    //login/set
    this.userLogin = function(n, p) {
      // console.log('service login');
      if (!localStorage.getItem(n)) {
        swal('Not a user\n Please create an account');
        $state.go('createAcct');
      }else{
        if(JSON.parse(localStorage.getItem(n)).userName === n && JSON.parse(localStorage.getItem(n)).userPassword === p){
          localStorage.setItem("currentUser", JSON.stringify(n));
          swal('Welcome '+n);
          $state.go('search');
        }else{
          swal('Incorrect Password');
        }

    }
    };
    //-----------------------get search request to API----------------------------------------------------------------------------//
    var pageCount = 20;
    this.search = function(str, type) {
        return $http({
            method: 'GET',
            url: 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit='+pageCount+'&type=' + type + '&market=US',
        }).then(function(response) {
            if (response.status === 200) {
                // console.log('Srv Search',response.data);
                return response;
            } else {
                console.log(response.statusText);
                swal(response.statusText);
            }
        });
    };

    this.setPage = function(currentUrl){
      // if(currentUrl === null){
      //   return console.log('stop page request');
      // }
      return $http({
        method: 'GET',
        url: currentUrl,
      }).then(function(response){
        if(response.status === 200){
          console.log('Srv setPage',response.data);
          return response;
        } else {
          swal(response.statusText);
          console.log('SRV setPage',response.statusText);
        }
      });
    };
    //-----------------------end search request to API -------------------------------------------------------------------------//
    //disliked-----------------------------------------------------------------------//
    // this.disliked = function (obj,currentUser){
    //
    //     for(var i = array.length-1; i >= 0; i++){
    //       if(array[i].name === obj.name &&){
    //         array.splice(i,1);
    //       }
    //
    //       srvcUser.artists.push(obj);
    //       localStorage.setItem(user.userName, JSON.stringify(srvcUser));
    //   }
    //   if (obj.type === 'album') {
    //       srvcUser.albums.push(obj);
    //       localStorage.setItem(srvcUser.userName, JSON.stringify(srvcUser));
    //   }
    //   if (obj.type === 'track') {
    //       srvcUser.tracks.push(obj);
    //       localStorage.setItem(srvcUser.userName, JSON.stringify(srvcUser));
    //   }
    // }
    //disliked-----------------------------------------------------------------------//
    //Save favorites----------------------------------------------------------------------------------------------------------------//
    this.saveInfo = function(obj) {
      // console.log('saveInfo srv', localStorage.getItem('currentUser'));
      // console.log('saveInfo srv',obj);
      // console.log('saveinfo srv', srvcUser);
        if (JSON.parse(localStorage.getItem('currentUser')) === null) {
          swal('Please login to like');
          //in sweet alert us a button that shows login button, this is direct them to the login view
        }else{
          if (obj.type === 'artist') {
              srvcUser.artists.push(obj);
              localStorage.setItem(srvcUser.userName, JSON.stringify(srvcUser));
          }
          if (obj.type === 'album') {
              srvcUser.albums.push(obj);
              localStorage.setItem(srvcUser.userName, JSON.stringify(srvcUser));
          }
          if (obj.type === 'track') {
              srvcUser.tracks.push(obj);
              localStorage.setItem(srvcUser.userName, JSON.stringify(srvcUser));
          }
        }

    };
    //End Save favorites----------------------------------------------------------------------------------------------------------------//
    //get arrayUser for favorites-------------------------------------------------------------------------------------------------------//
    this.getFav = function(){
      // console.log('getFav srv',srvcUser);
      return srvcUser;
    };
    //END get arrayUser for favorites-------------------------------------------------------------------------------------------------------//
    //----------------------OAuth----------------------------------------------------------------------------------------------//

    //----------------------end OAuth---------------------------------------------------------------------------------------------//
    function UserObj(n, p) {
      this.userName = n,
      this.userPassword = p,
      this.artists = [],
      this.albums = [],
      this.tracks = []
    }

}); //closing
