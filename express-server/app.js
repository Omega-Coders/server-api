const express = require('express');

const cors = require('cors')

const app = express();

const loginRouter = require('./routes/login.router');

app.use(cors({
    origin : 'http://localhost:3000',
}));
app.use(express.json());
app.use(loginRouter);

module.exports = app;
