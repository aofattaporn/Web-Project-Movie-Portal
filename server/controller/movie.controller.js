let Movie = require('../model/movie.model');

const getMovie =(req, res) => {
   Movie.find((err, movie)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
      }
   })
}

const getMovieById =(req, res) => {
   Movie.findById( { _id: req.id } ,(err, movie)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
      }
   })
}

const createMovie =(req, res) => {

   console.log(req.body);

   Movie.create(req.body, (err, movie)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
      }
   })
}

const updateMovieById =(req, res) =>{
   Movie.findByIdAndUpdate(req.params.id, req.body, (err, movie)=>{
      if(err){
         console.log(err);
      }else{
         res.json(movie);
      }
   })
}

const deleteMovies =(req, res)=>{
   Movie.remove((err, movie)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
      }
   })
}

const deleteMovieById =(req, res)=>{
   Movie.findByIdAndRemove(req.params.id, req.body, (err, movie) =>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
      }
   })
}

module.exports = {
   getMovie,
   getMovieById,
   createMovie, 
   updateMovieById,
   deleteMovies,
   deleteMovieById
}