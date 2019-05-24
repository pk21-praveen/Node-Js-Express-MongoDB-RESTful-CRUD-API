const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todo.routes');

mongoose.connect('mongodb://localhost:27017/todo-exam', {useNewUrlParser: true})
    .then(() => {
        console.log('DB connected Successfully');
    }).catch(err => {
    console.log('DB Connection Falied : ' + err.message);
    process.exit();
});

//create express app
const app = express();

//set middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//initialze route
app.use('/api', todoRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
