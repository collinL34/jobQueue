const express = require('express');
const app = express();
const parser = require('body-parser');
const mongoose = require('mongoose');

// const db = require('./db');


// mongoose.connect(databaseUrl);

app.listen(9000, function() {
  console.log('Express Server listening on port 9000');
});

module.exports = app();