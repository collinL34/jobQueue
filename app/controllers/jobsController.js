let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


const Queue = require('./queue.js');
let Job = new Queue();

app.get('/', (req, res) => {
    return res.send(Job.peek());
});

app.post('/', (req, res) => {
    let data = Job.enqueue({
        url: req.query.url,
        siteData: 'blank'
    });
    return res.json(data);
});

app.put('/:id', (req, res) => {
  console.log(req.query.url);
  let data = Job.update(req.params.id, req.query.url);
  console.log(data);
  return res.send(data);
});

app.delete('/', (req, res) => {
    return res.send(Job.dequeue());
});

module.exports = app;