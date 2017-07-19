let mongoose = require('mongoose');

let JobSchema = new mongoose.schema({
    url: String,
    siteData: String
});

mongoose.model('Job', JobSchema);

module.exports = mongoose.model('Job');