let Reserve = require('../model/reserve.model');
let Program = require('../model/program.model');
let User    = require('../model/user.model');
let Like = require('../model/like.model');
ObjectId = require('mongodb').ObjectID;


const getMyMovieLike =(req, res) => {
   res.json({});
}

const likeMovie =(req, res) => {
   Like.create( req.body, (err, like)=>{
      if(err){
         console.log(err);
      }else{
         console.log(like)
         User.findOneAndUpdate(
            { _id: "628a8e764873b4b0d3edf2c6"},
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
   likeMovie,
   removeAllLike
}