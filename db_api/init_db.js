define(['neo4j', 'routes/routes', 'config/config'], initialize); 

function initialize(neo4j, routes, config){
	var db = new neo4j.GraphDatabase(config.db_url);
	var node = db.createNode({hello: 'world'});     // instantaneous, but...
	
	node.save(function (err, node) {    // ...this is what actually persists.
	    if (err) {
	        console.error('Error saving new node to database:', err);
	    } else {
	        console.log('Node saved to database with id:', node.id);
	    }
	});
}
