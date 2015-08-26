/*
 * accountApp.js
 * 
 * (c) 2012-2015, Ansible, Inc.
 *
 */

'use strict';

(function(angular) {

    var accountsApp = angular.module('accountsApp', [
      'ngRoute',
      'ngSanitize',
      'ngCookies',
      'ui.bootstrap',
      'meService',
      'storageService',
      'relatedService',
      'myRolesController',
      'galaxyUtilities'
    ]);

    accountsApp.config(['$routeProvider','MyInfoProvider', _routes]);

    function _routes($routeProvider, MyInfoProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/static/partials/myroles.html',
                controller: 'MyRolesCtrl',
                resolve: {
                    my_info: ['$q', 'meFactory', MyInfoProvider.$get[2]]
                }
            }).
            otherwise({
                redirectTo: '/'
            });
    }

})(angular);