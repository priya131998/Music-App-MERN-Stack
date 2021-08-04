const express = require('express');
const router = express.Router();
const albumsCtrl = require('../../controllers/api/albums');

router.get('/', albumsCtrl.index);
router.post('/', albumsCtrl.create);
router.get('/:id', albumsCtrl.show);
router.put('/:id', albumsCtrl.update);
router.delete('/:id', albumsCtrl.delete)


module.exports = router;
