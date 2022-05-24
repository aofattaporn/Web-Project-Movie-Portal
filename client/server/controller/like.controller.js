const { populate } = require('../model/reserve.model');
let   Reserve  = require('../model/reserve.model'),
      Program  = require('../model/program.model'),
      User     = require('../model/user.model'),
      Like     = require('../model/like.model');
ObjectId       = require('mongodb').ObjectID;

const getMyMovieLike =(req, res) => {
   res.json({});
}

const getMovieFavorite = (req, res)=>{

   User.findById("628a8e764873b4b0d3edf2c6").populate(
      {  path : 'likes', 
         populate : { path: 'movies' }
      }).exec((err, user)=>{
      if(err){
         console.log(err)
      }else{
         res.status(200).json(user)
         console.log(user)
      }
   }) 
}

const likeMovie = (req, res) => {
   const  moviesLike = {
      "id":  ObjectId(req.body.id),
      "name" : req.body.name,
      "image" : req.body.image,
      "release" : req.body.release,
   }
   Like.create( {movies: moviesLike}, (err, like)=>{
      if(err){
         console.log(err);
      }else{
         User.findOneAndUpdate(
            { _id: req.tokenData.user_id },
            { $push: { likes: like._id  }},
            (err, user)=>{ 
               if(err){
                  console.log(err)
               }else{
                  res.json(user);
               }
            }
         )
      }
   })
}

const unLikeMovie = (req, res) => {

   console.log(req.body.movieTd);

   Like.findOneAndRemove(
      { "movies.id" : req.body.movieTd}, (err, like)=>{
         if(err){
            console.log(err)
         }else{
            User.findByIdAndUpdate(
               { _id: req.tokenData.user_id },
               { $pull: { likes: like._id  }},
               (err, user)=>{ 
                  if(err){
                     console.log(err)
                  }else{
                     res.json(user);
                  }
               }
            )
         }
      }
   )
} 

const removeAllLike = (req, res)=>{
   Like.remove((err, like)=>{
      if(err){
         console.log(err);
      }else{
         User.findOneAndUpdate(
            { _id: "628a8e764873b4b0d3edf2c6"},
            { $set: { likes: [] }},
            (err, user)=>{
               if(err){
                  console.log(err)
               }else{
                  res.json(user.likes);
               }
            }
         )
      }
   })
}

module.exports = {
   getMyMovieLike, 
   getMovieFavorite,
   likeMovie,
   unLikeMovie,
   removeAllLike
}