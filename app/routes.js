var path = require('path');

module.exports = function(app) {
  app.get('*', function(req, res) {
    //console.log(req.url);
    var indexPath = path.join(__dirname, '../public', req.url);
    res.sendFile( indexPath );
  });
};