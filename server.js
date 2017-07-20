let express = require('express');
let app = express();

app.listen(3000, function() {
  console.log("App listening on Port http://localhost:3000/");
});

let JobCtrl = require('./app/controllers/jobsController.js');
app.use('/jobs', JobCtrl);

module.exports = app;