const { populate } = require('../model/reserve.model');
let   Reserve  = require('../model/reserve.model'),
      Program  = require('../model/program.model'),
      User     = require('../model/user.model'),
      Like     = require('../model/like.model'),
      Review   = require('../model/review.model');

ObjectId       = require('mongodb').ObjectID;

const getAllReview =(req, res) => {
   Review.find((err, review)=>{
      if(err){
         console.log(err);
      }else{
         res.status(200).json(review);
      }
   })
}

const createMyReview = (req, res)=>{
   const reviewData = {
      author: {
         id: ObjectId(req.tokenData.user_id),
         username: req.body.username,
     },
     text: req.body.text,
   }
   Review.create(reviewData, (err, review)=>{
      if(err){
         console.log(err)
      }else{
         res.json(review);
      }
   })
}

const deleteById = (req, res) =>{
   Review.findByIdAndDelete( req.params.id ,(err, review)=>{
      if(err){
         console.log(err)
      }else{
         res.json(review)
      }
   })
}

const removeAllReview = (req, res)=>{
   Review.deleteMany((err, review)=>{
      if(err){
         console.log(err)
      }else{
         res.json(review);
      }
   })
}

module.exports = {
   getAllReview, 
   createMyReview,
   removeAllReview,
   deleteById
}