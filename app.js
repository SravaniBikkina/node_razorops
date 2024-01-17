// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Razorops CI/CD!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

