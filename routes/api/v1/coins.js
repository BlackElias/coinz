const express = require ('express');
const router = express.Router();

/* /api/v1/coins */
router.get("/", (req, res) =>{
    res.json({
        "status": "success",
        "data": {
            "coins":[]
        }
    });
});

router.post("/", (req, res) =>{
    res.json({
        "status": "success",
        "data": {
            "coins": {
                "amount": 40
            }
        }
    });
});

module.exports = router;