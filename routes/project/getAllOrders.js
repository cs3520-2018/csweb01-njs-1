var express = require('express');
var router = express.Router();
console.log('Debug');

let databaseController = require('../../controllers/database.js');
console.log('Debug');

router.get('/', function( request, response, next ) 
{
console.log('Debug');
	(async function() {
console.log('Within async function');
		let orders = await databaseController.getAllOrders();
		response.render( "getAllOrders.ejs", { orders: orders } );
	})();
});

module.exports = router;
