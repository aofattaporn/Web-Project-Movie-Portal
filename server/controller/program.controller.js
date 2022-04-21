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

const createProgram =(req, res)=>{
   Program.create(req.body, (err, program)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(program);
      }
   })
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
   createProgram,
   updateProgramById,
   deletePrograms,
   deleteProgramById
}