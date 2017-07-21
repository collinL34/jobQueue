function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = [];
};

Queue.prototype.peek = function() { //to check status of all Queue entries
    return this._storage;
};

Queue.prototype.show = function( id ) { //to check status of specific Queue ID
    return this._storage[ id - 1 ];
};

Queue.prototype.enqueue = function( data ) { //to add entry to Queue
    if ( data.url !== undefined ) {
        this._storage.push( data );
        var idx = this._newestIndex;
        this._newestIndex++;
        return 'Your Job was successfully saved. Here is the Job Id ' + idx;
    };
    return 'Error: No URL entered. Please try again.';
};

Queue.prototype.dequeue = function() { //to remove first entry from Queue
    if ( this._oldestIndex !== this._newestIndex ) {
        let deletedEntry = this._storage[ this._oldestIndex ];
        this._storage.shift();
        this._oldestIndex++;
        return this._storage;
    };
};

Queue.prototype.update = function( id, newUrl ) { //to update Queue entry by Queue ID
    this._storage[ id - 1 ].url = newUrl.url;
    console.log( newUrl.data );
    this._storage[ id - 1 ].siteData = newUrl.data;
    return this._storage;
};


module.exports = Queue;