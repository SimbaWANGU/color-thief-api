"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = 3000;
// *Middleware
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
// *Routes
app.use('/', (req, res) => {
    res.json({
        hello: 'Welcome to the app'
    });
});
app.listen(port, () => {
    console.log(`Express server listening at http://localhost:${port}`);
});
