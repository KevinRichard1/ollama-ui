const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat.js');

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));
  
app.use(express.json());

app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});