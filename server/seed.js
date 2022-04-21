let Cinema = require('./model/cinema.model');
let Movie = require('./model/movie.model');
let Program = require('./model/program.model');
const express = require("express");
ObjectId = require('mongodb').ObjectID;
const seed = express.Router();

seed.get('/', async (req, res)=>{

   const data = {
      theater: 1,
      seats: [
        { type: "A1" }   
     ],
       
      cinema: ObjectId("62605d3162ffa738df61ce72"),
      movies: ObjectId("6260547b886ecd4862868c56"),
   }



   // seed data 
   Program.create( data , (err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
})

module.exports = seed;



