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
  const index =  messages.findIndex(message => message.id === req.query.id);
  if (index === messages.length) {
    res.send([]);
  }
  res.send(messages.slice(index + 1));
});

app.post('/messages', (req, res) => {
  const data = req.body;
  data.id = _.uniqueId('message_');
  messages.push(data);
  res.send(data);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));