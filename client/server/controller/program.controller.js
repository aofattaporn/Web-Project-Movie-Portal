let Program = require('../model/program.model');
let Cinema = require('../model/cinema.model');
let Movie = require('../model/movie.model');


ObjectId = require('mongodb').ObjectID;


const getPrograms =(req, res) => {
   
   Program.find((err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(program);
      }
   })
}

const getProgramById =(req, res)=>{
   Program.findById(req.params.id, (err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         Cinema.findById(program.cinema, (err, cinema)=>{
            if(err){
               console.log(err);
            }else{
               res.status(200).json(program);
            }
         })
      }
   })
}

const getProgramByIdAlldata =(req, res)=>{
   Program.findById(req.params.id, (err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         Cinema.findById(program.cinema, (err, cinema)=>{
            if(err){
               console.log(err);
            }else{
               Movie.findById(program.movies, (err, movie)=>{
                  if(err){
                     console.log(err);
                  }else{
                     res.status(200).json({program, cinema, movie});
                  }
               })
            }
         })
      }
   })
}

const getProgramByDate =(req, res)=>{

   let start = new Date(req.body.date.start);
   let end = new Date(req.body.date.end);


   Program.find({"date": {$gte: start, $lt: end}}, (err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         res.status(200).json(program);
      }
   })
}

const getProgramByDateAndCinema =(req, res)=>{

   let cinema_id = req.body.date.cinema_id;
   let start = new Date(req.body.date.start);
   let end = new Date(req.body.date.end);

   if(req.body.date.start !== '' && req.body.date.end !== ''){
      Program.find({"cinema": ObjectId(cinema_id) ,"date": {$gte: start, $lt: end}}, (err, program)=>{
         if(err){
            console.log(err);
         }
         else{
            res.status(200).json(program);
         }
      })
   }
}

const getCinemasShowTime = async (req, res)=>{

   let movie_id = req.body.date.movie_id;
   let start = new Date(req.body.date.start);
   let end = new Date(req.body.date.end);

   if(req.body.date.start !== '' && req.body.date.end !== ''){
      Program.find( {"movies": ObjectId(movie_id) ,"date": {$gte: start, $lt: end}}, (err, program)=>{
         if(err){
            console.log(err);
         }
         else{
            res.status(200).json(program);
         }
      })
   }



}

const getTheater =(req, res) =>{

   let cinema_id = req.body.cinema_id;
   let movie_id = req.body.movie_id;
   let start = new Date(req.body.start);
   let end = new Date(req.body.end);

   console.log(req.body.cinema_id);
   console.log(req.body.movie_id);
   console.log(start);
   console.log(end);


   Program.distinct(
      "theater" ,
      {
      "movies" : ObjectId(movie_id),
      "cinema": ObjectId(cinema_id) ,
      "date": {$gte: start, $lt: end}}, 
      (err, program)=>{

      if(err){
         console.log(err);
      }
      else{
         res.status(200).json(program);
      }
   })

}

const getMoviesShowtime =(req, res)=>{

   let cinema_id = req.body.date.cinema_id;
   let start = new Date(req.body.date.start);
   let end = new Date(req.body.date.end);

   Program.distinct(
      "movies" ,
      {"cinema": ObjectId(cinema_id) ,
      "date": {$gte: start, $lt: end}}, 
      
      (err, program)=>{

      if(err){
         console.log(err);
      }
      else{
         res.status(200).json(program);
      }
   })
   
}

const getProgramShowtime =(req, res)=>{

   let theater = req.body.date.theater;
   let movie_id = req.body.date.movie_id;
   let cinema_id = req.body.date.cinema_id;
   let start = new Date(req.body.date.start);
   let end = new Date(req.body.date.end);

   Program.find(
      {
      "theater" : theater,
      "cinema": ObjectId(cinema_id) ,
      "movie": ObjectId(movie_id),
      "date": {$gte: start, $lt: end}}, 
      
      (err, program)=>{

      if(err){
         console.log(err);
      }
      else{
         res.status(200).json(program);
      }
   })
}

const createProgram = async(req, res)=>{

   const newData = {
      date : new Date(req.body.date), 
      theater: parseInt(req.body.theater),
      seats: [
         { type: "A1" , price: 220, available:  Boolean(false) },
         { type: "A2" , price: 220, available:  Boolean(false) },
         { type: "A3" , price: 220, available:  Boolean(false) },
         { type: "A4" , price: 220, available:  Boolean(false) },
         { type: "A5" , price: 220, available:  Boolean(false) },

         { type: "B1" , price: 120, available:  Boolean(false) },
         { type: "B2" , price: 120, available:  Boolean(false) },
         { type: "B3" , price: 120, available:  Boolean(false) },
         { type: "B4" , price: 120, available:  Boolean(false) },
         { type: "B5" , price: 120, available:  Boolean(false) },

         { type: "C1" , price: 120, available:  Boolean(false) },
         { type: "C2" , price: 120, available:  Boolean(false) },
         { type: "C3" , price: 120, available:  Boolean(false) },
         { type: "C4" , price: 120, available:  Boolean(false) },
         { type: "C5" , price: 120, available:  Boolean(false) },

         { type: "D1" , price: 120, available:  Boolean(false) },
         { type: "D2" , price: 120, available:  Boolean(false) },
         { type: "D3" , price: 120, available:  Boolean(false) },
         { type: "D4" , price: 120, available:  Boolean(false) },
         { type: "D5" , price: 120, available:  Boolean(false) },

         { type: "E1" , price: 120, available:  Boolean(false) },
         { type: "E2" , price: 120, available:  Boolean(false) },
         { type: "E3" , price: 120, available:  Boolean(false) },
         { type: "E4" , price: 120, available:  Boolean(false) },
         { type: "E5" , price: 120, available:  Boolean(false) },
      ],
      cinema: ObjectId(req.body.cinema),
      movies: ObjectId(req.body.movies),
   }

   console.log(newData);

   Program.create(newData, (err, program)=>{
      if(err){
         console.log(err);
         res.status(400).json({"msg": "create fials" })
      }else{
         res.status(200).json(program);
      }
   })

}

const updateProgramById =(req, res)=>{
   Program.findByIdAndUpdate(req.params.id, req.body, (err, program) =>{
      if(err){
         console.log(err);
      }else{
         res.json(program);
      }
   })
}

const deletePrograms =(req, res)=>{
   Program.remove((err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(program);
      }
   })
}

const deleteProgramById =(req, res)=>{
   Program.findByIdAndRemove(req.params.id, req.body, (err, program)=>{
      if(err){
         console.log(err);
      }else{
         res.json(program);
      }
   })
}


module.exports = {
   getPrograms,
   getProgramById,
   getProgramByIdAlldata,
   getProgramByDate,
   getProgramByDateAndCinema,
   getCinemasShowTime,
   getMoviesShowtime,
   getProgramShowtime,
   getTheater,
   createProgram,
   updateProgramById,
   deletePrograms,
   deleteProgramById
}