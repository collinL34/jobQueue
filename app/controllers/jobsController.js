const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const request = require( 'request' );
app.use(bodyParser.urlencoded({ extended: true }));

const Queue = require( '../models/queueClass.js' );
const JobQueue = new Queue();

app.get( '/', ( req, res ) => { //get all status's of JobQueue entries
    return res.send( JobQueue.peek() );
});

app.get( '/:id', ( req, res ) => { //get status of specific JobQueue ID
    return res.send( JobQueue.show(req.params.id) );
});

app.post( '/', ( req, res ) => { //create new JobQueue entry
    return res.json( JobQueue.enqueue(req.query.url) );
});

app.put( '/', ( req, res ) => { //update specific JobQueue ID run worker function of first entry
    return res.send( JobQueue.update() );
});

app.delete( '/:id', ( req, res ) => { //remove specific JobQueue ID from JobQueue
    return res.send( JobQueue.dequeue(req.params.id) );
});

module.exports = app;
