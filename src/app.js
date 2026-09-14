const express = require('express');

const app = express();

app.get('/salud', (req, res) => {
  res.status(200).json({ estado: 'ok' });
});

module.exports = app;
