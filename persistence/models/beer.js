const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const beerSchema = new Schema({
    name: String,
    description: String,
    image_url: String,
    abv: Number,
    alcohol_free: Boolean,
    typeOfBeer: String
});

const Beer = model('Beer', beerSchema);

module.exports = { 'Beer': Beer };