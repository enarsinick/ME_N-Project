const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const beerRoutes = require("./routes/beerRoutes");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://admin:pass@cluster0.2d9yv.mongodb.net/petes-beers?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    (error) => {
        if (error) {
            console.log("Can't connect to database");
            console.log(error);
        } else if (!error) {
            console.log("Connected to DB");
        }
    }
);

app.use((req, res, next) => {
    const date = new Date().toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    console.log(`The current date is: ${date}`);
    next();
});

app.use("/beers", beerRoutes);

const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
});
