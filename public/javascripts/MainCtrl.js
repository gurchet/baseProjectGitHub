var scotchApp = angular.module('App', ['ngRoute']);

    scotchApp.config(function($routeProvider) {
        console.log('In MainCtrl file in javascripts folder');
        $routeProvider
            .when('/', {
                templateUrl : 'Main/Login',
                controller: 'LoginController'
            })
    });

scotchApp.controller('LoginController', function($scope,$location,$rootScope) {
            console.log('In LoginController in MainCtrl');
 $scope.submit = function(){
 	         console.log('In submit function in MainCtrl');
            if($scope.username == 'admin' && $scope.password == 'admin'){
                $rootScope.loggedIn = true;
                $location.path('/');

            }
        }
});
scotchApp.controller('testController', function($scope,$location,$rootScope) {
            console.log('In testController in MainCtrl');
 $scope.submit = 10;

            }
        }
});