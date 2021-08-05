const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', albumsCtrl.index);
router.post('/', albumsCtrl.create);
router.get('/:id', albumsCtrl.show);
router.put('/:id', ensureLoggedIn, albumsCtrl.update);
router.delete('/:id', ensureLoggedIn, albumsCtrl.delete)


module.exports = router;
