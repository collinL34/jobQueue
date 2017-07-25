const request = require('request');

function Job( inpUrl ) {
    this._storage = [];
};

Job.prototype.htmlGrabber = function( job ) {
    request( job.url, ( err, res, html ) => {
        if (err) {
            this._storage.push({ results: err });
            job.status.inProgress = false;
            job.status.failed = true;
        } else {   
            this._storage.push({ results: html });
            job.status.inProgress = false;
            job.status.complete = true;
        }
    });
};

Job.prototype.results = function( id ) {
    return this._storage[ id - 1 ];
};


module.exports = Job;
// crud for Queue
// read Queue Jobs
// Job Object == Queue workers
// Queue keeps track of those that are finished
// Job does the damn job and that's it
// Job take url of job and gets html or tries then output result
// then Queue shows results in order