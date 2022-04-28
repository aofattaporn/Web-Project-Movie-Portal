let Movie = require('../model/movie.model');
const fs = require('fs');
const path = require('path');
const directory = 'public/image/poster'
ObjectId = require('mongodb').ObjectID;


const testUpload = async (req, res) => {

   try{

      const newData = {
         "name": req.body.movieName,
         "trailer": null,
         "image": req.file.filename,
         "genre": req.body.genre,
         "director": req.body.directorName,
         "released" : new Date(req.body.released),
         "runtime": req.body.runtime,
         "desc": req.body.desc
      }

      console.log(newData);
   
      res.json( await new Movie(newData).save());
      
   }catch(err) {
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
   Movie.findById( ObjectId(req.params.id)  ,(err, movie) =>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
         console.log(movie);
      }
   });
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
   Movie.deleteMany((err, movie)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(movie);
         fs.readdir(directory, (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
              });
            }
          });
      }
   });
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