module.exports = function connectSSI(opt) {

  'use strict';

  var ssi = require('ssi');
  var path = require('path');
  var fs = require('fs');

  var opt = opt || {};
  var ext = opt.ext || '.shtml';
  var baseDir = opt.baseDir || __dirname;
  var parser = new ssi(__dirname, baseDir, baseDir);


  return function(req, res, next) {

    var url;
    if (req.url[req.url.length - 1] === "/") {
      url = req.url + "index" + ext;
    } else {
      url = req.url;
    }
    var filename = baseDir + url;

    if (url.indexOf(ext) > -1 && fs.existsSync(filename)) {

      var contents = parser.parse(filename, fs.readFileSync(filename, {
        encoding: 'utf8'
      })).contents;

      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.end(contents);

    } else {
      next();
    }

  };
};
