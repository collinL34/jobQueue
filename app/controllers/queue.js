function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = [];
};

Queue.prototype.peek = function() {
    return this._storage;
};

Queue.prototype.enqueue = function(data) {
    if (data.url !== undefined) {   
        this._storage.push(data);
        var idx = this._newestIndex;
        this._newestIndex++;
        return 'Your Job was successfully saved. Here is the Job Id ' + idx;
    }
    return 'Error: No Url entered. Please try again.';
};

Queue.prototype.dequeue = function() {
    if (this._oldestIndex !== this._newestIndex) {
        let deletedEntry = this._storage[this._oldestIndex];
        this._storage.shift();
        this._oldestIndex++;
        return this._storage;
    };
};

module.exports = Queue;