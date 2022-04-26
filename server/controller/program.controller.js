let Program = require('../model/program.model');
ObjectId = require('mongodb').ObjectID;

// db.programs.find({"cinema": ObjectId("6266f4dec8a691a4c6473eb3") ,"date": {$gte:ISODate("2022-03-26"), $lt:ISODate("2022-04-27")}});


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

   console.log(start);
   console.log(end);

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

const createProgram = async(req, res)=>{

   try{

      const newData = {
         date : new Date(req.body.date), 
         theater: parseInt(req.body.theater),
         seats: req.body.seats,
         cinema: ObjectId(req.body.cinema),
         movies: ObjectId(req.body.movies),
      }

      console.log(newData);
   
      res.json( await new Program(newData).save());
      
   }catch(err) {
      res.status(400).send("create faile");
   }
}

const updateProgramById =(req, res)=>{
   console.log(req.params.id);
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
   createProgram,
   updateProgramById,
   deletePrograms,
   deleteProgramById
}