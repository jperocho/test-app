(function(){
	'use strict'

	angular.module('testApp.services')
	.factory('Person', ['$http',function($http) {
		return {
			fetchAll: function() {
				return $http.get('http://localhost:4000/person');
			},
			fetch: function(id) {
				return $http.get('http://localhost:4000/person/'+id);
			},				
			add: function(person) {
				return $http({
				    method: 'POST',
				    url: 'http://localhost:4000/person',
				    data: 'first_name='+person.first_name+'&last_name='+person.last_name+'&contact_number='+person.contact_number,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				});				
			},
			update: function(person,id) {
				return $http({
				    method: 'put',
					url: 'http://localhost:4000/person/'+id,
				    data: 'first_name='+person.first_name+'&last_name='+person.last_name+'&contact_number='+person.contact_number,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				});		
				// return $http.put(
				// 	'http://localhost:4000/person/'+id,
				// 	'first_name='+person.first_name+'&last_name='+person.last_name+'&contact_number='+person.contact_number,{
				// 	    headers : {
				// 	        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
				// 	    }
				// 	})						
			},
		
		}
	}])
})();