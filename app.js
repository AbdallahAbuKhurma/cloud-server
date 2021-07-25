'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/info', (req, res) => {
  res.json({name: 'Abdallah', age: 24});
});

app.listen(PORT, () => {
  console.log(`server is listening to ${PORT}`);
});
