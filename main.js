/*
 * @Copyright Ram Kashyap
 * @Author Ram Kashyap
 * @Date 15/08/2014
 */

 var requirejs = require('requirejs');

 requirejs.config({
 	nodeRequire: require
 });

 function initializeApp(config, configApp, http){
 	http.createServer(configApp.configApp).listen(config.server_port, function(){
 		console.log('Server running on ' + config.server_port);
 	});
 }

 requirejs(['config/config', 'config/app', 'http'], initializeApp);