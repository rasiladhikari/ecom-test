let express = require('express');
let { signup } = require('../controller/user');
let router = express.Router()

router.post('/signup', signup)
router.post('/signin', (req, res)=> {

    

})


module.exports = router;
