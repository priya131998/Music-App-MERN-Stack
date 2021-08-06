var express = require('express');
var router = express.Router();
var songsCtrl = require('../../controllers/api/songs')

// router.post('/albums/:id', ()=> console.log('hit route'));
router.post('/api/albums/:id/songs', songsCtrl.addSong);
// router.post('/', songsCtrl.addSong);
// router.get('/:id', songsCtrl.addSong);

// router.delete('/albums/:albumId/songs/:songId', songsCtrl.delete)


// router.post('/albums/:id/songs', songsCtrl.addSong);


module.exports = router;
