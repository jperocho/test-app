(function(){
	'use strict'

	angular.module('testApp.main')
	.config(function($stateProvider) {

	  var mainState = {
	    name: 'main',
	    url: '/',
	    templateUrl: 'app/main/main.html',
	    controller: 'MainController'
	  }

	  var personState = {
	    name: 'person',
	    url: '/person',
	    templateUrl: 'app/main/person.html',
	    controller: 'PersonController'
	  }

	  var personSingleState = {
	    name: 'personSingle',
	    url: '/person/:id',
	    templateUrl: 'app/main/person-single.html',
	    controller: 'PersonSingleController'
	  }

	  $stateProvider.state(mainState);
	  $stateProvider.state(personState);
	  $stateProvider.state(personSingleState);

	});
})();