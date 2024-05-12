const express = require('express');

const carsRoutes = require('./router/cars');
const app = express();

app.use('/api/cars', carsRoutes);

app.listen(3000);