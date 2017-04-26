'use strict'
const url = require('url');
const path = require('path');

const routes = require('../routes');

const Person = require('../data/Person')

module.exports = (req,res) => {

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, GET, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');	

	if (routes[req.url] ) {
		if (routes[req.url][req.method]) {
			routes[req.url][req.method](req,res);
		} else if (req.method == 'OPTIONS') {
			routes[req.url]['PUT'](req,res);
		} else {
			routes['405']['GET'](req,res);
		}
		
	} else if ( req.url.match(/\/person\/.+/g) ) {
		let singleId = path.basename(req.url);
		let singlePerson = Person.filter((r) => { return r.id == singleId } );
		req.body = singlePerson;

		if (req.body.length > 0) {
			if (req.method == 'OPTIONS') {
				routes['/person/:id']['PUT'](req,res);
			} else {
				routes['/person/:id'][req.method](req,res);	
			}
						
		} else {
			routes['404']['GET'](req,res);
		}

	} else {
		routes['404']['GET'](req,res);
	}
	
}