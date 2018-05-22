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
  console.log(index);
  if (index === messages.length) {
    res.send([]);
  } else if (index == -1 && messages.length > 0) {
    res.send(messages[messages.length - 1]);
  } else {
    res.send(messages.slice(index + 1));
  }
});

app.post('/messages', (req, res) => {
  const data = req.body;
  data.id = _.uniqueId('message_');
  messages.push(data);
  res.send(data);
});

app.listen(3301, () => console.log('Example app listening on port 3301!'));