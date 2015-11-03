module.exports = function() {
	// globals
	var client = './src/client/';
	var server = './src/client/';
	var root = './';
	
	var clientApp = client + 'app/';
	
	var config = {
		/**
		 * file paths
		 */
		js: [
			'./src/**/*.js',
			'./*js'
		],
		
		/**
		 * globals
		 */
		root: root,
		client: client,
		server: server,
		clientApp: clientApp
	};
	
	return config;	
};