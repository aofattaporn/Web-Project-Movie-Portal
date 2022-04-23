let Movie = require('../model/movie.model');


const testUpload = async (req, res) => {

   try{

      const newData = {
         "name": req.body.movieName,
         "trailer": null,
         "image": req.file.filename,
         "genre": ["action"],
         "director": req.body.directorName,
         "released" : new Date(req.body.released),
         "runtime": req.body.runtime,
         "desc": req.body.desc
      }
   
      res.json( await new Movie(newData).save());
      
   }catch(err) {
      console.log(err);
      res.status(400).send("create faile");
   }
}


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

   let movie = req.body;

   movie.released = new Date(req.body.released);

   Movie.create(movie, (err, movie)=>{
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
   deleteMovieById,

   testUpload
}