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


function toCamelCase(str){
   return str.split('').map(function(word,index){
     // If it is the first word make sure to lowercase all the chars.
     if(index == 0){
       return word.toUpperCase();
     }
     // If it is not the first word only upper case the first char and lowercase the rest.
     return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
   }).join('');
 }
const getMovieByKeyword =(req, res) => {
   let key = req.params.key;
   key = key.trim();

   let upper = key.toUpperCase();
   let lower = key.toLowerCase();
   let camel = toCamelCase(key);

   console.log(upper);
   console.log(lower);
   console.log(camel);

   Movie.find( {$or: [{"name": {$regex: '.*' + upper + '.*'}}, {"name": {$regex: '.*' + lower + '.*'}}, {"name": {$regex: '.*' + camel + '.*'}}]} , (err, movie)=>{
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
   testUpload,
   getMovieByKeyword
}