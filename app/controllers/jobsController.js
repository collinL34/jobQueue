let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const Queue = require('./queue.js');
let Job = new Queue();

function update(searchId, newUrl, storage) {
    storage.find((job, id) => {
        if (id === searchId)
            return job.url = newURL;
        return 'Sorry no entry found by that Id. Please try again.';
    });
};

app.get('/', (req, res) => {
    res.send(Job.peek());
});

app.post('/', (req, res) => {
    Job.enqueue({
            url: 'google.com',
            siteData: 'blank'
        },
        (err, job) => {
            if (err)
                res.send(err);
            res.send(job);
        });
});

app.put('/:id', (req, res) => {
    let storage = Job._storage;
    console.log(Job._storage);
    update((req.params.id, req.query.url, storage), (err, job) => {
        if (err)
            res.send(err);
        res.send(job);
    });
});

app.delete('/', (req, res) => {
    Job.dequeue((err, job) => {
        if (err)
            res.send(err);
        res.send(job);
    });
});


module.exports = app;