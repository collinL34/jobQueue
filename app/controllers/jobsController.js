const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const request = require( 'request' );
app.use(bodyParser.urlencoded({ extended: true }));

const Queue = require( '../models/queueClass.js' );
const JobQueue = new Queue();

app.get( '/', ( req, res ) => { //get all Queue entries
    return res.send( JobQueue.peek() );
});

app.get( '/:id', ( req, res ) => { //get specific Queue ID
    return res.send( JobQueue.show(req.params.id) );
});

app.post( '/', ( req, res ) => { //create new JobQueue Queue entry
    return res.json( JobQueue.enqueue(req.query.url) );
});

app.put( '/', ( req, res ) => { //update specific JobQueue Queue ID
    return res.send( JobQueue.update() );
});

app.delete( '/', ( req, res ) => { //remove first JobQueue Queue entry
    return res.send( JobQueue.dequeue() );
});

module.exports = app;
