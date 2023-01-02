const express = require("express");
const bodyParser = require('body-parser');

const app = express();

const simulationRoutes = require('./routes/simulation');

const mongoConnect = require('./util/database').mongoConnect;

app.use(simulationRoutes);

mongoConnect(() => {
    app.listen(3000);
});