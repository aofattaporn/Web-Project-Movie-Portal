let Program = require('../model/program.model');
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
         res.json(program);
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

   Program.find({"cinema": ObjectId(cinema_id) ,"date": {$gte: start, $lt: end}}, (err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         res.status(200).json(program);
      }
   })

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
      seats: req.body.seats,
      cinema: ObjectId(req.body.cinema),
      movies: ObjectId(req.body.movies),
   }

   console.log(newData);

   try{

   
      res.json( await new Program(newData).save());
      
   }catch(err) {
      res.status(400).send("create faile");
      console.log(err);
   }
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
   getProgramByDate,
   getProgramByDateAndCinema,
   getMoviesShowtime,
   getProgramShowtime,
   getTheater,
   createProgram,
   updateProgramById,
   deletePrograms,
   deleteProgramById
}