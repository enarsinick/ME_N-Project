const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/petes-beer', { useNewUrlParser: true },
    (error) => {
        if (error) {
            console.log("Can't connect to database");
        } else if (!error) {
            console.log("Connected to DB");
        }
    }
);



const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});