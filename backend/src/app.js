const express = require('express');

const app = express();

const noticeRoutes = require('./routes/notices');

app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Gazette Publication System API is running'
  });
});

// Notice routes
app.use('/notices', noticeRoutes);

module.exports = app;
