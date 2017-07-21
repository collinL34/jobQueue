const express = require( 'express' );
const app = express();

app.listen( 3000, () => {
  console.log("App listening on Port http://localhost:3000/");
});

const JobCtrl = require( './app/controllers/jobsController.js' );
app.use( '/jobs', JobCtrl );

module.exports = app;
