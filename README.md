# JobQueue instructions Via Postman.

How to check status of all Job Queue entries.

```javascript
  Get request
  http://localhost:3000/jobs
```

How to add a new Job Queue to the list.

```javascript
  Post request
  http://localhost:3000/jobs?url=https://www.google.com/
```

How to check status of specific Job ID and get it's results.

```javascript
  Get request
  http://localhost:3000/jobs/:id
```

How to run the program worker function on the next entry from Job Queue.

```javascript
  Put request
  http://localhost:3000/jobs?url=https://github.com/
```

How to delete an entry by it's specific Job ID from Job Queue.

```javascript
  Delete request
  http://localhost:3000/jobs/:id
```
