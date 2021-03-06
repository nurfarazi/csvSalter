var async = require('async');

exports.render = function (req, res) {
	res.render('index', {
		title: 'MEAN MVC'
	});
};

exports.processCSV = function (req, res) {
	var formData = req.body;
	// console.log(formData);
	async.forEachOf(formData, function (value, key, cb) {
		async.series([
			function (callback) {
				console.log(value.investigation);
				// console.log(key);
				callback();
			}
		], function (err) {
			if (err) {
				next(err);
			} else {
				cb();
			}
		});
	}, function (err) {
		if (err) {
			next(err);
		} else {
			res.json('done');
		}
	});
};