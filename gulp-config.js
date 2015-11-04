module.exports = function() {
	// globals
	var client = './src/client/';
	var server = './src/client/';
	var root = './';
	var bowerDirectory = client + 'vendor/';
	// var wiredep = require('wiredep');
    // var bowerFiles = wiredep({devDependencies: true})['js'];
	
	var clientApp = client + 'app/';
	
	var config = {
		/**
		 * file paths
		 */
		jsForInspection: [
			'./src/**/*.js',
			'./*.js'
		],
		
		css: './src/client/style/**/*.css',
		js: [
			clientApp + '**/*.module.js',
			clientApp + '**/*.js',
			'!' + clientApp + '**/*.spec.js'
		],
		index: client + 'index.html',
		html: client + '**/*.html',
		/**
		 * globals
		 */
		root: root,
		client: client,
		server: server,
		clientApp: clientApp,
		
		/**
		 * bower / wiredep config
		 */
		bower: {
			json: require('./bower.json'),
			directory: bowerDirectory,
			ignorePath: '../..'
		},
		
		/**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js',
		browserReloadDelay: 1000
		
	};
	
	config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
	
	return config;	
};