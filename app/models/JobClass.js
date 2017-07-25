const request = require('request');

function Job( inpUrl ) {

};


let url = 'https://www.google.com/';

let jobs = new Job( url );



// crud for Queue
// read Queue Jobs
// Job Object == Queue workers
// Queue keeps track of those that are finished
// Job does the damn job and that's it
// Job take url of job and gets html or tries then output result
// then Queue shows results in order