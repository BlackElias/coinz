const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const coinSchema = new Schema({
    amount: Number,
    text: {type: String, required: true},
    sender: String,
    receiver: String,
    date: { type: Date, default: Date.now }
});
const Coins = mongoose.model('Coins', coinSchema);

module.exports = Coins;