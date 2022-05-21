const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    
  },
  release_date: {
    type: String,
    
  },
  poster_path: {
    type: String,
    
  },
  vote_average: {
    type: Number,
    
  },
   
});

module.exports = mongoose.model("Movie", movieSchema);