const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatRoutes = require('./routes/chats');
const settingsRoutes = require('./routes/settings');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/chats', chatRoutes);
app.use('/settings', settingsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));