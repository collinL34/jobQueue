const request = require('request');

function Job( inpUrl ) {
    this._storage = [];
};

Job.prototype.htmlGrabber = function( job ) {
    request( job.url, ( err, res, html ) => {
        if ( err ) {
            this._storage.push({ results: err });
            job.status.inProgress = false;
            job.status.failed = true;
        } else {   
            this._storage.push({ results: html });
            job.status.inProgress = false;
            job.status.complete = true;
        };
    });
};

Job.prototype.entryResult = function( id ) {
    return this._storage[ id - 1 ];
};


module.exports = Job;
