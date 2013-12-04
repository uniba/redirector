
var format = require('url').format;
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var redirectTo = process.env.REDIRECT_TO;

app.use(function(req, res, next) {
  var url = {
    protocol: req.secure ? 'https:' : 'http:',
    host: redirectTo,
    pathname: req.url.split('?')[0],
    search: req.url.split('?')[1]
  };
  if (!redirectTo) {
    return res.send(500, { error: 'REDIRECT_TO required.' });
  }
  res.redirect(format(url));
});

app.listen(port, function() {
  console.log('listening on port %s', port);
});
