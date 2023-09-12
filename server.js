'use strict';

console.log('Starting...');

const express = require('express');
require('dotenv').config();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(`Sending the response to the client...`);
  res.send(process.env.SERVER_MESSAGE);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
