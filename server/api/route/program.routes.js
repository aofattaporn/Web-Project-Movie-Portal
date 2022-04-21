const express = require("express");
const routerProgram = express.Router();

const {
   getPrograms,
   getProgramById,
   createProgram,
   updateProgramById,
   deletePrograms,
   deleteProgramById
} = require('../../controller/program.controller');

// public routes

routerProgram.get('/', getPrograms);

routerProgram.get('/:id', getProgramById);

routerProgram.post('/create', createProgram);

routerProgram.put('/update/:id', updateProgramById);

routerProgram.delete('/delete', deletePrograms);

routerProgram.delete('/delete/:id', deleteProgramById);


module.exports = routerProgram;