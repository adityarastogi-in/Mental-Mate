const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample API route
app.get('/api/chat', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all route
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
