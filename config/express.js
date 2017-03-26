let express = require('express');
let bodyParser = require('body-parser');

module.exports = function () {
	var app = express();
	app.use(express.static('./public'));
	
	app.use(bodyParser.json({
		limit: '50mb'
	}));
	app.use(bodyParser.urlencoded({
		limit: '50mb',
		extended: true
	}));
	
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
	require('../app/routes/index.server.routes.js')(app);
	return app;
};