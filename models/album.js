var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Song = require('./song');

var AlbumSchema = new Schema({
  imageUrl: { type: String, default: 'images/800x800.png' },
  artistName: String,
  name: String,
  releaseDate: String,
  genres: [ String ],
  songs: [Song.schema]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
