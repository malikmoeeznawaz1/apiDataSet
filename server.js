const express = require('express');
const fs = require('fs');
const app = express();

// JSON file endpoint
app.get('/data/json', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading JSON file');
    }
    res.header('Content-Type', 'application/json');
    res.send(data);
  });
});

// XML file endpoint
app.get('/data/xml', (req, res) => {
  fs.readFile('data.xml', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading XML file');
    }
    res.header('Content-Type', 'application/xml');
    res.send(data);
  });
});

// Server start
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
