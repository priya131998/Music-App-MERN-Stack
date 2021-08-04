var express = require('express');
var router = express.Router();
var songsCtrl = require('../controllers/songs');

router.post('/albums/:id/songs', songsCtrl.create);
router.delete('/albums/:albumId/songs/:songId', songsCtrl.delete)


module.exports = router;
