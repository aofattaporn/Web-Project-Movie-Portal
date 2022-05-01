const { json } = require("body-parser");
const express = require("express");
const routerProgram = express.Router();

const {
   getPrograms,
   getProgramById,
   getProgramByDate,
   getProgramByDateAndCinema,
   getCinemasShowTime,
   getTheater,
   getMoviesShowtime,
   getProgramShowtime,
   createProgram,
   updateProgramById,
   deletePrograms,
   deleteProgramById

} = require('../../controller/program.controller');

// public routes

routerProgram.get('/', getPrograms);


routerProgram.get('/:id', getProgramById);

routerProgram.post('/datetime', getProgramByDateAndCinema);

routerProgram.post('/movie/:movie_id/showtime', getCinemasShowTime);

routerProgram.post('/movies/showtime', getMoviesShowtime);

routerProgram.post('/movies/showtime/theater', getTheater);

routerProgram.post('/movies/showtime/programs', getProgramShowtime);

routerProgram.post('/create', createProgram);

routerProgram.put('/update/:id', updateProgramById);

routerProgram.delete('/delete', deletePrograms);

routerProgram.delete('/delete/:id', deleteProgramById);


module.exports = routerProgram;