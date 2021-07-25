'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Data = require('./data.json');

app.use(express.static('./public'));

app.get('/info', (req, res) => {
  res.json({name: 'Abdallah', age: 24});
});

app.get('/data', (req, res) => {
  res.json(Data);
});

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
