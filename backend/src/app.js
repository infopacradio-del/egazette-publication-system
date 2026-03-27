const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Gazette Publication System API is running'
  });
});

module.exports = app;
