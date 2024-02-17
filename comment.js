// Create web server
// Start server
// Get all comments
// Get comment by id
// Create a new comment
// Update a comment
// Delete a comment
// Stop server

// Create a web server
const express = require('express');
const app = express();
app.use(express.json());

// Start server
app.listen(3000, () => console.log('Server is running...'));

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  res.send(`Get comment with id ${req.params.id}`);
});

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
  res.send(`Update comment with id ${req.params.id}`);
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
  res.send(`Delete comment with id ${req.params.id}`);
});

// Stop server
app.get('/stop', (req, res) => {
  res.send('Server is stopping...');
  process.exit();
});