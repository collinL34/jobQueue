function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = [];
};

Queue.prototype.peek = function() {
    return this._storage;
};

Queue.prototype.enqueue = function(data) {
    this._storage.push(data);
    let idx = this._newestIndex;
    this._newestIndex++;
    return idx;
};

Queue.prototype.dequeue = function() {
    if (this._oldestIndex !== this._newestIndex) {
        let deletedEntry = this._storage[this._oldestIndex];
        this._storage.shift();
        this._oldestIndex++;
        return deletedEntry;
    };
};

module.exports = Queue;