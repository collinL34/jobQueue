const mongoose = require('mongoose');

const JobSchema = new mongoose.schema({
    url: String,
    siteData: String
});

mongoose.model('Job', JobSchema);

module.exports = mongoose.model('Job');