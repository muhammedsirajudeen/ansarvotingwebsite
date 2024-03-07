// index.js
const express = require('express');
const app = express();
const port = 4000;
const cors=require("cors")
// Import routes
const routes = require('./blockchain/routes');

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the router
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
