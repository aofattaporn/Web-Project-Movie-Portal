let Movie = require('../model/movie.model');
let User    = require('../model/user.model');
let Like    = require('../model/like.model');

const fs = require('fs');
const path = require('path');
const directory = 'public/image/poster';
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
         res.status(200).json(movie);
      }})
}

const getMovieByIdCheckLike =(req, res) => {
   let flag = 0;
   Movie.findById( ObjectId(req.params.id)  ,(err, movie) =>{
      if(err){
         console.log(err);
      }
      else{
         User.findById( req.tokenData.user_id, async (err, user) =>{
            if(err){
               console.log(err);
            } 
            else {
                  if(user.likes.length != 0){
                     await user.likes.forEach((element, idx) => {
                        Like.findById( element, (err, like)=>{
                           if(err){
                              console.log(err);
                           }else{
                              if(like.movies.id.toString() === req.params.id){
                                 flag++;
                              }
                              if(idx === user.likes.length - 1 && flag > 0 ){
                                 res.status(200).json({movie, islike: "true"});
                              }else if(idx === user.likes.length - 1 && flag === 0){
                                 res.status(200).json({movie, islike: "false"});
                              }
                           }
                        })
                     });
                  }
                  else{
                     res.json({movie, islike: "false"})
                  }
               }
         })
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
   getMovieByIdCheckLike,
   createMovie, 
   updateMovieById,
   deleteMovies,
   deleteMovieById,
   testUpload,
   getMovieByKeyword
}