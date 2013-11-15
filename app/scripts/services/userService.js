'use strict';

angular.module('WebPuzzleFrontApp')
    .factory('UserService', function Tokenhandler(WsUrl, $http) {
        var setUserInfo= function(info){
            sessionStorage.setItem('github-user-info', info);
        }

        return {
            getToken: function(){
                return sessionStorage.getItem('github-token')
            },
            setToken: function(token){
                sessionStorage.setItem('github-token', token);
            },
            checkToken: function(token){
                return $http.get(WsUrl + 'auth/github/check', {params: {access_token: token}})
            },
            signIn: function(info){
                setUserInfo(info);
            },
            signOut: function(){
                sessionStorage.clear();
            },
            isConnected: function(){
                if(this.getUserInfo() === undefined)
                    return false;
                return this.getUserInfo();
            },
            getUserInfo: function(){
                return sessionStorage.getItem('github-user-info');
            }
        }
    });