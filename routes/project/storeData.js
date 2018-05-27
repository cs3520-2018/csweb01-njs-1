var express = require('express');
var router = express.Router();

let databaseController = require('../../controllers/database.js');

router.post('/storeData', function( request, response, next ) 
{
console.log("Calling storeData");
	(async function() {
		
		let data = request.body; // assumed as JSON object.
		let success = databaseController.storeData( data );
		
		if ( success )
			response.status( 200 ).send( "success" );
		else
			response.status( 200 ).send( "fail" );
	})();
});

module.exports = router;
