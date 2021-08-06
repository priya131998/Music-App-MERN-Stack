const Album = require('../../models/album')

module.exports = {
  addSong,
  delete: deleteSong,


};


async function addSong(req, res) {
  console.log('work')
  const album = await Album.findById(req.params.id) 
    album.songs.push(req.body);
    await album.save() 
    res.status(200).json(album)
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
    res.status(200).json(album);
  }