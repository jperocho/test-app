(function(){
	'use strict'

	angular.module('testApp.services')
	.factory('Api', ['$http',function($http) {
		return {
			fetch: function() {
				return $http.get('http://localhost:4000');
			}			
		}
	}])
})();