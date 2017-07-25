function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = [];
};

Queue.prototype.peek = function() { //to check status of all Queue entries
    return this._storage;
};

Queue.prototype.show = function(id) { //to check status of specific Queue ID
    return this._storage[id - 1];
};

Queue.prototype.enqueue = function(jobUrl) { //to add entry to Queue
    if (jobUrl) {
        let newJob = {
            url: jobUrl,
            status: {
                inProgress: false,
                complete: false,
                failed: false
            };
        };
        return 'Job saved to Queue successfully.';
    };
    return 'Error: No URL given please try again.';
};

Queue.prototype.dequeue = function() { //to remove first entry from Queue
    if (this._oldestIndex !== this._newestIndex) {
        let deletedEntry = this._storage[this._oldestIndex];
        this._storage.shift();
        this._oldestIndex++;
        return this._storage;
    };
};

Queue.prototype.update = function(jobId, newData) { //to update Queue entry by Queue ID
    this._storage[jobId - 1].url = newData.url;
    this._storage[jobId - 1].siteData = newData.data;
    return this._storage;
};

module.exports = Queue;