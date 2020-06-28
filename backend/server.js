const express = require('express');
const data = require('./data.js');
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
