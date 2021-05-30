const Coins = require('../../../models/Coins');

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
    coin.amount = req.body.amout;
    coin.sender = req.body.sender;
    coin.text = req.body.text;
    coin.receiver = req.body.receiver;
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