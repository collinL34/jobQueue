const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const request = require( 'request' );
app.use(bodyParser.urlencoded({ extended: true }));

const Queue = require('./queue.js');
const Job = new Queue();

app.get('/', (req, res) => {
    return res.send(Job.peek());
});

app.get('/:id', (req, res) => {
    return res.send( Job.show(req.params.id) );
});

app.post('/', (req, res) => {
    request(req.query.url, (err, resp, html) => {
        if (err) {
            res.send(err);
        }
        let data = Job.enqueue({
            url: req.query.url,
            siteData: html
        });
        return res.json(data);
    });
});

app.put('/:id', (req, res) => {
    request(req.query.url, (err, resp, html) => {
        if (err) {
            res.send(err);
        }
        let data = Job.update(req.params.id, { url: req.query.url, data: html });
        return res.send(data);
    });
});

app.delete('/', (req, res) => {
    return res.send(Job.dequeue());
});

module.exports = app;