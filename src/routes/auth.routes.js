const express = require('express');
const router = express.Router();

const{registerController, loginController} = require('../controller/auth.controller')

//post- /api/auth/register
//post - /api/auth/login
//get - /api/auth/userinfo


router.post('/register',registerController)
router.post('/login',loginController)


module.exports = router;