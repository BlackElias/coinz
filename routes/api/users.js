var express = require('express');
var router = express.Router();
const auth = require('../../controllers/api/auth');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*get signup*/
router.post('/signup', auth.signup);

router.post('/login',auth.login);


module.exports = router;
