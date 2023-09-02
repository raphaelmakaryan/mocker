require('dotenv').config();
const express = require('express');
const axios = require('axios');
const os = require('os');

const app = express();

app.get('/', async (req, res) => {
  const response = await axios.get('https://api.github.com');
  res.send(`Hello from Docker! Hostname: ${os.hostname()} \n GitHub API Status: ${response.status}\n`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}`);
});

