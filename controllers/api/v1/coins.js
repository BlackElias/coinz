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

const getAll = (req, res) =>{
    res.json({
        "status": "success",
        "data": {
            "coins":[]
        }
    });
}

const create =  (req, res) =>{
    let coin = new Coins();
    coin.amount = 5;
    coin.sender = "Rani";
    //coin.text = "first try";
    coin.receiver = "Joris";
    coin.save((err, doc) =>{
        if(err){
            res.json({
                "status": "error",
                "message": "could not send the curro's"
        });
        }

        if(!err){
            res.json({
                    "status": "success",
                    "data": {
                        "coins": doc
                    }
            });
        }
    })

   
}

module.exports.getAll = getAll;
module.exports.create = create;