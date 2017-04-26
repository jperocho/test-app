'use strict'
const qs = require('querystring');
const Person = require('../data/Person');

module.exports = {

	'/' : {
		'GET' : (req,res) => {
			res.writeHead(200,{'Content-Type':'application/json'});


			let data = {
				message: 'Test Rest API is live and breathing',
				version: '0.0.1'
			}
			res.end(JSON.stringify(data));			
		}
	},

	'/person' : {
		'GET' : (req,res) => {
			res.writeHead(200, {'Content-Type': 'application/json'});

			res.end(JSON.stringify(Person));
		},
		'POST' : (req,res) => {
			let data = '';
			req.on('data', (chunk) => {
				data += chunk.toString();
			})

			req.on('end', () => {
				res.writeHead(200, {'Content-Type': 'application/json'});
				let rawPerson = qs.parse(data);
				let newPerson = {
					id : Person[Person.length-1].id + 1,
					first_name : rawPerson.first_name,
					last_name : rawPerson.last_name, 
					contact_number : rawPerson.contact_number
				};
				console.log(newPerson);				
				Person.push(newPerson);

				res.end(JSON.stringify(Person));
			})
		}
	},

	'/person/:id' : {
		'GET' : (req,res) => {
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(req.body[0]));
		},
		'PUT' : (req,res) => {
			let data = '';
			req.on('data', (chunk) => {
				data += chunk.toString();
			})

			req.on('end', () => {
				res.writeHead(200, {'Content-Type': 'application/json'});
				
				let rawPerson = qs.parse(data);

				req.body[0].first_name = rawPerson.first_name;
				req.body[0].last_name = rawPerson.last_name;
				req.body[0].contact_number = rawPerson.contact_number;				
				res.end(JSON.stringify(req.body[0]));
			})
		}
	},

	'404' : {
		'GET' : (req,res) => {
			res.writeHead(404, {'Content-Type':'application/json'})
			res.end(JSON.stringify({message: '404 - Not found.'}))
		}
	},
	'405' : {
		'GET' : (req,res) => {
			res.writeHead(405, {'Content-Type':'application/json'})
			res.end(JSON.stringify({message: '401 - Method not allowed.'}))
		}
	}	
}