'use strict';

(function() {

/**
 * Import helpers ==============================================================
 */

// Public functions. ===========================================================
module.exports = function (app, io) {

	// Application routes ========================================================
	app.get('/', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());