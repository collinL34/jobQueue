let express = require('express');
let app = express();
let router = express.Router();
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

// app.post('/', function(req, res) {
//     Job.create({
//         url: req.body.url,
//         siteData: 'blank'
//     }, function(err, job) {
//         if (err)
//             return res.send(err);
//         res.send(job);
//     });
// });

router.post('/', function(req, res) {

    Job.create({
            url: req.body.url,
            siteData: 'blank'
        },
        function(err, job) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(job);
        });

});

module.exports = app;