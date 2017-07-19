let express = require('express');
let app = express();
let db = require('./config/db.js');

app.listen(9000, function() {
  console.log('Express Server listening on port 9000');
});

module.exports = app;