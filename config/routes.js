'use strict';

(function() {

// Import helpers ==============================================================
var request = require('request');
var EXPORT_PATH = 'http://raw.segment.io/';

// Public functions. ===========================================================
module.exports = function (app, io) {
  // API =======================================================================
  app.post('/api/request', function (req, res) {
    var load = req.body.load;
    var qs = {
      start: load.start,
      end: load.end
    };

    var opts = {
      uri: EXPORT_PATH + load.readKey,
      method: 'GET',
      timeout: 50000,
      followRedirect: true,
      maxRedirects: 10,
      qs: qs
    };

    // request(opts, function (err, data) {
    //   console.log(data.body);
    //   req.pipe(request('http://mysite.com/doodle.png')).pipe(res);
    // });
    req.pipe(request(opts)).pipe(res);
  });

	// Application routes ========================================================
	app.get('/*', function (req, res) {
    res.sendfile('index.html', {'root': './public/views/'});
  });
};

}());