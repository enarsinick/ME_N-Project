const router = require('express').Router();

const { Beer } = require('../persistence/models/beer');

router.get("/readAll", (req, res) => {
    Beer.find((error, beer) => {
        res.status(200).send(beer);
    });
    console.log("Read all beers. HOORAY!!");
});

router.get("/read/:id", (req, res) => {
    Beer.findById(req.params.id, (error, beer) => {
        res.status(200).send(beer);
    });
    console.log(`Read beer with id ${req.params.id}. HOORAY!!`);
});

router.post("/create", (req, res) => {
    const beer = new Beer(req.body);
    console.log(req.body);
    beer.save().then((result) => {
        res.status(201).send(`${result.name} added to database. HOORAY!`);
    });
    console.log("CREATED!! YAY");
});

router.delete("/delete/:id", (req, res) => {
    Beer.findByIdAndDelete(req.params.id, (error) => {
        res.sendStatus(204);
    });
    console.log("DELETED!! YAY");
});

router.put("/update/:id", (req, res) => {
    Beer.findByIdAndUpdate(req.params.id, req.body, (error, beer) => {
        res.status(202).send(`Updated ${beer.name}. HOORAY!!`);
    });
    console.log("UPDATED!! YAY");
});




module.exports = router;