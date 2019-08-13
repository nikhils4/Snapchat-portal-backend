const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const openRoutes = require('./routes/openRoutes.js');
const authRoutes = require('./routes/auth.js');
const middleware = require('./model/middleware.js');
const protectedRoutes = require('./routes/protected.js');

require('dotenv').config();
require('./model/connect.js');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.use(cors());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', openRoutes);
app.use('/auth', authRoutes);

app.use(middleware.session);

app.use('/secure', protectedRoutes);

app.listen(port, () => {});
