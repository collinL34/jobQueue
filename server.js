const express = require('express');
const app = express();
const db = require('./config/db.js');

app.listen(9000, function() {
  console.log('Express Server listening on port 9000');
});

module.exports = app;