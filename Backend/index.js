const express = require('express');
const app = express();
const port = 4000;
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();
//enable cors
const cors = require('cors');
app.use(cors());

//setup mognodb
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//connect to mongodb
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

//routers
app.use(express.json());
const homepageRouter = require('./router/homepage');

app.get('/test', (req, res) => {
    console.log("WORKING API🥳")
    res.send('Hello World!');
})
app.use('/api', homepageRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
