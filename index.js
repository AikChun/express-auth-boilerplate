const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// db setup
mongoose.connect('mongodb://localhost:auth/auth');

// app setup
app.use(morgan('combined')); // morgan does logging
app.use(bodyParser.json({ type: '*/*' })); // expects requests as json
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port)
console.log('Server listening,', port)
