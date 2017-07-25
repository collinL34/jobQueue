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
    // request( req.query.url, ( err, response, html ) => {
    //     if ( err ) {
    //         res.send( err );
    //     };
    //     let data = JobQueue.enqueue({
    //         url: req.query.url,
    //         siteData: html
    //     });
    //     return res.json( data );
    // });
    return res.json( JobQueue.enqueue(req.query.url) );
});

app.put( '/:id', ( req, res ) => { //update specific JobQueue Queue ID
    request( req.query.url, ( err, response, html ) => {
        if ( err ) {
            res.send( err );
        };
        let data = JobQueue.update( req.params.id, { url: req.query.url, data: html });
        return res.send( data );
    });
});

app.delete( '/', ( req, res ) => { //remove first JobQueue Queue entry
    return res.send( JobQueue.dequeue() );
});

module.exports = app;
