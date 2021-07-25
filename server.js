'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const Data = require('./data.json');

app.use(express.static('./public'));

app.get('/data', (req, res) => {
  res.json(Data);
});

// app.get('/info', (req, res) => {
//   res.json({name: 'Abdallah', age: 24});
// });

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
