"use strict";angular.module("WebPuzzleFrontApp",["ui.router","ngDisqus","ngAnimate","ui.bootstrap","ui.bootstrap.buttons","ui.bootstrap.tooltip","template/tooltip/tooltip-popup.html"]).config(["$stateProvider","$urlRouterProvider","$locationProvider","$disqusProvider",function(a,b,c,d){d.setShortname("webpuzzle"),c.hashPrefix("!"),b.when("","/app/list"),b.when("/","/app/list"),b.when("/app/detail/","/app/list"),b.otherwise("/app/list"),a.state("app",{"abstract":!0,url:"/app",templateUrl:"views/navbar.html",controller:"navBarCtrl"}).state("app.authtoken",{url:"^/auth/:provider/end/:finaltoken",controller:"AuthendCtrl"}).state("app.list",{url:"/list",templateUrl:"views/list.html",controller:"MainCtrl"}).state("app.create",{url:"/create",templateUrl:"views/create.html",controller:"CreateCtrl"}).state("app.detail",{url:"/detail/:id",templateUrl:"views/wcDetailedView.html",controller:"wcDetailedViewCtrl"})}]),angular.module("WebPuzzleFrontApp").controller("MainCtrl",["$rootScope","$scope","$http","WsUrl",function(a,b,c,d){b.webcomponents=[],b.wcNumberLimit=20,c({method:"GET",url:d+"web_components.json"}).success(function(a){b.webcomponents=a}).error(function(){}),b.selectWC={fn:function(b){a.selectedWC=b}},b.filter={text:"",filterObject:{name:"",submitter:""}},b.sortingTypes=[{name:"ascending alphabetical order",iconCss:"fa fa-sort-alpha-asc",filter:"name"},{name:"Descending alphabetical order",iconCss:"fa fa-sort-alpha-desc",filter:"-name"},{name:"Descending popularity order",iconCss:"fa fa-sort-amount-desc",filter:"-popularity"},{name:"Ascending popularity order",iconCss:"fa fa-sort-amount-asc",filter:"popularity"}],b.selectedSorting={sortingFilterExpr:"name"},b.filterTypes=[{name:"By name",filter:"name"},{name:"By author",filter:"submitter"}],b.selectedFilterType={filter:"name"},b.$watch("filter.text",function(a){b.filter.filterObject={name:"",submitter:""},b.filter.filterObject[b.selectedFilterType.filter]=a}),b.$watch("selectedFilterType.filter",function(a){b.filter.filterObject={name:"",submitter:""},b.filter.filterObject[a]=b.filter.text}),b.addMoreComponents=function(){b.wcNumberLimit=b.wcNumberLimit+20}}]),angular.module("WebPuzzleFrontApp").controller("CreateCtrl",["$scope","$http","UserService","WsUrl",function(a,b,c,d){a.wc={name:"",description:"",imageLink:"",githubLink:"",demoLink:""},a.oldWC={},a.saveWC=function(e){a.oldWC=angular.copy(e),b({method:"POST",url:d+"web_components.json",data:e,params:{auth_token:c.getToken()}}).success(function(b,c){a.status=c,a.data=b}).error(function(b,c){a.data=b||"Request failed",a.status=c})},a.isUnchanged=function(b){return angular.equals(b,a.oldWC)}}]),angular.module("WebPuzzleFrontApp").controller("navBarCtrl",["$scope","WsUrl","UserService",function(a,b,c){a.authentUrl=b+"auth/github/send",a.user=JSON.parse(c.getUserInfo()),console.log(a.user),a.isConnected=function(){return c.isConnected()},a.signOut=function(){c.signOut()}}]),angular.module("WebPuzzleFrontApp").controller("wcDetailedViewCtrl",["$scope","$rootScope","$stateParams","$http","WsUrl",function(a,b,c,d,e){a.wc={id:c.id},!a.selectedWC,d({method:"GET",url:e+"web_components/"+a.wc.id+".json"}).success(function(a){b.selectedWC=a}).error(function(){})}]),angular.module("WebPuzzleFrontApp").controller("AuthendCtrl",["$scope","$stateParams","UserService","$location",function(a,b,c,d){console.log("getting token",b.finaltoken);var e=c.checkToken(b.finaltoken);e.then(function(a){c.setToken(b.finaltoken),c.signIn(JSON.stringify(a.data)),console.log(c.getUserInfo()),d.path("/")},function(){d.path("/")})}]),angular.module("WebPuzzleFrontApp").factory("WsUrl",function(){var a="http://webpuzzlews.herokuapp.com/";return a}),angular.module("WebPuzzleFrontApp").directive("webComponent",function(){return{restrict:"E",templateUrl:"directive_templates/webComponent.html",link:function(a,b,c){a.wcClickable=void 0!==c.clickable?"true"===c.clickable:!0}}}),angular.module("WebPuzzleFrontApp").factory("UserService",["WsUrl","$http",function(a,b){var c=function(a){sessionStorage.setItem("github-user-info",a)};return{getToken:function(){return sessionStorage.getItem("github-token")},setToken:function(a){sessionStorage.setItem("github-token",a)},checkToken:function(c){return b.get(a+"auth/github/check",{params:{access_token:c}})},signIn:function(a){c(a)},signOut:function(){sessionStorage.clear()},isConnected:function(){return void 0===this.getUserInfo()?!1:this.getUserInfo()},getUserInfo:function(){return sessionStorage.getItem("github-user-info")}}}]);