const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb+srv://rizkianakbar:rizkian12345@rizkianakbar.stito.mongodb.net/<dbname>?retryWrites=true&w=majority',
        {useNewUrlParser: true }).then(() => console.log('DB Connected'))
                                 .catch(err => console.error(err));

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());
asdasd

                                 
app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(5000);