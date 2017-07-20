let express = require('express');
let app = express();
// let db = require('./config/db.js');

app.listen(3000, function() {
  console.log('Express Server listening on port 3000');
});

let JobCtrl = require('./app/controllers/jobsController.js');
app.use('/jobs', JobCtrl);

module.exports = app;