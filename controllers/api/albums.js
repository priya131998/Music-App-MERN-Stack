const Album = require('../../models/album');

module.exports = {
	index,
	create,
	show,
	update,
	delete: deleteOne,
};

async function index(req, res) {
	const albums = await Album.find({});
	res.status(200).json(albums);
}

async function create(req, res) {
	const newAlbum = await Album.create(req.body);
	res.status(201).json(newAlbum);
}

async function show(req, res) {
	const album = await Album.findById(req.params.id);
	res.status(200).json(album);
}

async function update(req, res) {
	const updatedAlbum = await Album.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedAlbum);
}

async function deleteOne(req, res) {
	// find document by the ID from the collection mapped to the Model and remove that document,
	// return the removed document
	const deletedAlbum = await Album.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedAlbum);
}
