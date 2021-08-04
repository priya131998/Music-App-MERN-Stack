const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const songSchema = new Schema({
    songlink: {
        type: String
    },
    songname: {
        type: String
    }}, 
    {
    timestamps: true
  }
  );

const albumSchema = new Schema(
	{
        name: { 
            type: String, 
            required: true 
        },
		artist: { 
            type: String, 
            required: true
        },
        releaseyear: {
            type: Number,
            default: function () {
                return new Date().getFullYear();
              }},
		albumcoverlink: { 
            type: String
         },
         user: {
             type: Schema.Types.ObjectId,
             ref: 'User'
         },
         songs: [songSchema]

	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Album', albumSchema);
