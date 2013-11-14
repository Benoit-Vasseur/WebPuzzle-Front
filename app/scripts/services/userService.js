'use strict';

angular.module('WebPuzzleFrontApp')
  .factory('UserService', function Tokenhandler() {
        return {
            token:null,
            isLogged:false,
            username: '',
            setToken: function(token){
                this.token = token;
                this.isLogged = true;
            }
        }
  });
