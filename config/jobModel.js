let mongoose = require('mongoose');

let JobSchema = new mongoose.Schema({
    url: String,
    siteData: String
});

mongoose.model('Job', JobSchema);

module.exports = mongoose.model('Job');