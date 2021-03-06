const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function

// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
// Insert ensureLoggedIn on all routes that need protecting

module.exports = router;
