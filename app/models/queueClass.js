
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

Queue.prototype.show = function(id) { //to check results of specific Queue ID
    return Worker.results( id );
};

Queue.prototype.enqueue = function(jobUrl) { //to add entry to Queue
    if (jobUrl) {
        let idx = this._newestIndex;
        let newJob = {
            url: jobUrl,
            status: {
                inProgress: false,
                complete: false,
                failed: false
            }
        };
        this._newestIndex ++;
        this._storage.push( newJob );
        return 'Job saved to Queue successfully. Here is your JobQueue ID ' + idx;
    };
    return 'Error: No URL given please try again.';
};

Queue.prototype.update = function() { //to update Queue entry by Queue ID
    let job = this._storage[this._oldestIndex - 1];
    this._oldestIndex++;
    Worker.htmlGrabber( job );
    job.status.inProgress = true;
    return 'Job is now in progress.'
};

Queue.prototype.dequeue = function() { //to remove first entry from Queue
    if (this._oldestIndex !== this._newestIndex) {
        let deletedEntry = this._storage[this._oldestIndex];
        this._storage.shift();
        this._oldestIndex++;
        return this._storage;
    };
};

module.exports = Queue;