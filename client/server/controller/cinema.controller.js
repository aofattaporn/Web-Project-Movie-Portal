let Cinema = require('../model/cinema.model');
ObjectId = require('mongodb').ObjectID;


const getCinemas =(req, res) => {
   Cinema.find((err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const getCinemasById =(req, res)=>{

   Cinema.findById(req.params.id, (err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })

}

const createCinema =(req, res)=>{

   const newCinema = {
      "cinemaName" : req.body.cinemaName,
      "cinemaArea" : req.body.cinemaArea
   }

   Cinema.create( newCinema , (err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const updateCinemaById =(req, res)=>{
   Cinema.findByIdAndUpdate(req.params.id, req.body, (err, cinema) =>{
      if(err){
         console.log(err);
      }else{
         res.json(cinema);
      }
   })
}

const deleteCinemas =(req, res)=>{
   Cinema.remove((err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const deleteCinemaById =(req, res)=>{
   Cinema.findByIdAndRemove(req.params.id, req.body, (err, cinema)=>{
      if(err){
         console.log(err);
      }else{
         res.json(cinema);
      }
   })
}

module.exports = {
   getCinemas,
   getCinemasById,
   createCinema,
   updateCinemaById,
   deleteCinemas,
   deleteCinemaById
}