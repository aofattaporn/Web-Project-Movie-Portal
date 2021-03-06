let Reserve = require('../model/reserve.model');
let Program = require('../model/program.model')
const jwt = require('jsonwebtoken');
ObjectId = require('mongodb').ObjectID;
require('dotenv').config();

const getReserves =(req, res) => {
   Reserve.find((err, reserve)=>{
      if(err){
         console.log(err);
      }else{
         res.status(200).json(reserve);
      }
   })
}

const getReservesById =(req, res) => {
   Reserve.find( {user_id: ObjectId(req.tokenData.user_id)}  ,(err, reserve)=>{
      if(err){
         console.log(err);
      }else{
         res.status(200).json(reserve);
      }
   })
}

const createReserve =(req, res) => {
   // req.tokenData.user_id,
   console.log(req.tokenData.user_id);

   let newReserve = {
      user_id: ObjectId(req.tokenData.user_id),
      user_name: req.tokenData.username,
      date : req.body.date,
      theater: req.body.theater,
      cinemaName: req.body.cinemaName,
      moviesName: req.body.moviesName,
      moviesImage: req.body.moviesImage,
      boughtTime: req.body.boughtTime,
      seats: req.body.seats,
      totalPrice: req.body.totalPrice
   }

   console.log(newReserve);

   Reserve.create( newReserve, (err, reserve)=>{
      if(err){
         console.log(err);
      }else{
         Program.findById(req.body.program_id, (err, program)=>{
            if(err){
               console.log(err);
            }else{
               program.seats.forEach(element => {
                  reserve.seats.forEach(element2 =>{
                     if(element.type == element2){
                        console.log(element);
                        Program.updateOne( {_id: req.body.program_id, "seats.type": element2}, 
                        { $set: { "seats.$.available" : true}  },  (err, seat)=>{
                           if(err){
                              console.log(err);
                           }
                        })
                     }
                  })
               });
               res.status(200).json(reserve);
            }
         })
      }
   })
}

const deleteAllReserve =(req, res) => {
   Reserve.deleteMany((err, reserve)=>{
      if(err){
         console.log(err);
      }else{
         res.json(reserve);
      }
   })
}




module.exports = {
   getReserves,
   getReservesById,
   createReserve,
   deleteAllReserve
}