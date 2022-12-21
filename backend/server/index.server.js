const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const db = require('../database/index.db');

const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
  db.getAllUsers((err, result) => {
    if (err) {
      console.log('error in app.get /users error:>> ', err);
      res.status(500).send(err);
    } else {
      /* console.log('inside app.get /users result:>>', result); */
      res.send(result);
    }
  });
});

app.post('/users', (req, res) => {
  /* console.log(`${req.method} ${req.url} ${JSON.stringify(req.query)}`); */
  /* console.log('inside app.post /users', req.body); */
  db.saveNewUser(req.body, (err, result) => {
    if (err) {
      console.log('error in app.post /users error:>> ', err);
      res.status(500).send(err);
    } else {
      /* console.log('inside app.post /users result:>>', result); */
      res.send(result);
    }
  });
});

app.get('/posts', (req, res) => {
  db.getAllPosts((err, result) => {
    if (err) {
      console.log('error in app.get /posts error:>> ', err);
      res.status(500).send(err);
    } else {
      /* console.log('inside app.get /posts result:>>', result); */
      res.send(result);
    }
  });
});

app.post('/posts', (req, res) => {
  /* console.log(`${req.method} ${req.url} ${JSON.stringify(req.query)}`); */
  console.log('inside app.post /posts', req.body);
  db.saveNewPost(req.body, (err, result) => {
    if (err) {
      console.log('error in app.post /post error:>> ', err);
      res.status(500).send(err);
    } else {
      /* console.log('inside app.post /post result:>>', result); */
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`tigerblogs server listening on ${port}`);
});
