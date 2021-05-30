var express = require('express');
var router = express.Router();
const authController = require('../../../controllers/auth');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*get signup*/
router.post('/signup', (req, res, next) =>{
  //signup
  //username uit request
  //ww uit request
  //bcrypt encrypt
  //databank

});

router.post('/login',auth.login);


module.exports = router;
