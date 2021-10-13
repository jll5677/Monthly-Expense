const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

//routes
const expenses = require('./api/expenses');

const app = express();

//connect to database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true}));

//init middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Hello world!'));

//use routes
app.use('./expenses', expenses);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`server running on port ${port}`));