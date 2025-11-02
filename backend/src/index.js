const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!' });
});

// Example root route
app.get('/', (req, res) => {
  res.send('Welcome to the backend API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
