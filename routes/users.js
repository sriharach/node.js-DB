const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersControllers');

/* GET user. */
router.get('/getUser/:id', usersControllers.users );

router.post('/getUsersEiei', usersControllers.usersEiei );

router.post('/login', usersControllers.login);

module.exports = router;
