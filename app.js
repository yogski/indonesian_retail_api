const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express().disable('x-powered-by');
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ extended: true, limit: '100mb' }));

// reminder: this add prefix like v1 or v2 for the router.
app.use(`/${process.env.API_VERSION}`, router);

app.use('/docs', express.static('public'));

module.exports = app;
