const Job = require( '../models/jobClass.js' );
const Worker = new Job();

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = [];
};

Queue.prototype.peek = function() { //to check status of all Queue entries
    return this._storage;
};

Queue.prototype.show = function( id ) { //to check results of specific Queue ID
    return Worker.entryResult( id );
};

Queue.prototype.enqueue = function( jobUrl ) { //to add entry to Queue
    if ( jobUrl ) {
        let idx = this._newestIndex;
        let newJob = {
            url: jobUrl,
            status: {
                inProgress: false,
                complete: false,
                failed: false
            }
        };
        this._newestIndex++;
        this._storage.push( newJob );
        return 'Job saved to Queue successfully. Here is your JobQueue ID ' + idx;
    };
    return 'Error: No URL given please try again.';
};

Queue.prototype.update = function() { //to update Queue by running worker programs on first entry
    let job = this._storage[ this._oldestIndex - 1 ];
    this._oldestIndex++;
    job.status.inProgress = true;
    Worker.htmlGrabber( job );
    return 'Job is now in progress.'
};

Queue.prototype.dequeue = function( id ) { //to remove specific Queue ID from list
    let deleteIdx = id - 1;
    this._storage.splice( deleteIdx, 1 );
    Worker._storage.splice( deleteIdx, 1 );
    this._newestIndex--;
    this._oldestIndex--;
    return this._storage;
};

module.exports = Queue;
