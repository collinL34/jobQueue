let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

let Job = require('../../config/jobModel.js');

app.get('/', function(req, res) {
    Job.find({}, function(err, jobs) {
        if (err)
            return res.send(err);
        res.send(jobs);
    });
});

app.post('/', function(req, res) {
    Job.create({
        url: req.query.url,
        siteData: 'blank'
    }, function(err, job) {
        if (err)
            return res.send(err);
        res.send(job);
    });
});

module.exports = app;