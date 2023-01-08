const express = require("express");

const app = express();

const simulationRoutes = require('./routes/routes');

const mongoConnect = require('./util/database').mongoConnect;

app.use(simulationRoutes);

mongoConnect(() => {
    app.listen(8080);
});