# jobQueue

JobQueue instructions Via Postman.

How to get all Job Queue entries.

```javascript
  Get request
  http://localhost:3000/jobs
```

How to create a new Job Queue.


```javascript
  Post request
  http://localhost:3000/jobs?url=https://www.google.com/
```

How to access specific Job Id

```javascript
  Get request
  http://localhost:3000/jobs/:id
```

How to update a specific Job Id

```javascript
  Put request
  http://localhost:3000/jobs/:id?url=https://github.com/
```

How to delete first entry of Job Queue

```javascript
  Delete request
  http://localhost:3000/jobs
```
