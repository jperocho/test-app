(function(){
	'use strict'

	angular.module('testApp.main')
	.controller('MainController',['$scope','Api',function($scope,Api){
		var vm = $scope;

		Api.fetch()
			.then(function(res){
				vm.message = res.data.message;
				vm.version = res.data.version;
			})
	}])


	.controller('PersonController',['$scope','Person',function($scope,Person){
		var vm = $scope;

		vm.addPerson = function() {
			Person.add(vm.person).then(function(res){
				vm.persons = res.data;
			})

		}

		Person.fetchAll()
			.then(function(res){
				vm.persons = res.data;
			})
	}])

	.controller('PersonSingleController',['$scope','$stateParams','Person',function($scope,$stateParams,Person){
		var vm = $scope;

		var personId = $stateParams.id;

		vm.updatePerson = function() {
			Person.update(vm.person, personId).then(function(res){
				vm.person = res.data;
			})
		}		

		Person.fetch(personId)
			.then(function(res){
				vm.person = res.data;
			})
	}])	
})();