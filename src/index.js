const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(bodyParser.json());

const messages = [];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/messages', (req, res) => {
  console.log(req.query.id);
  res.send(messages);
});

app.post('/messages', (req, res) => {
  const data = req.body;
  data.id = _.uniqueId('message_');
  messages.push(data);
  console.log(data);
  res.send(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));