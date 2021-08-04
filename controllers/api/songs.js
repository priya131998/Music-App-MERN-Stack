const Book = require('../models/album');

module.exports = {
  create,
  delete: deleteSong
};

function create(req, res) {
  Album.findById(req.params.id, function(err, album) {
    album.songs.push(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}

  async function deleteSong(req, res) {
    //find a particular book using the req.params.bookId 
    //find the review of the particular you want to remove using req.params.reviewId
    //remove the particular review
    //save the book
    const album = await Album.findById(req.params.albumId)
    const index = album.songs.findIndex(function (song) {
      song._id === req.params.songId
    })
    album.songs.splice(index, 1)
    await album.save()
    console.log(album)
    res.redirect(`/albums/${req.params.albumId}`);
  }