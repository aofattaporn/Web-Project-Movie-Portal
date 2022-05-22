const express = require("express");
const routerCinema = express.Router();

const {
   getCinemas,
   getCinemasById,
   createCinema,
   updateCinemaById,
   deleteCinemas,
   deleteCinemaById
} = require('../../controller/cinema.controller');

// public routes

routerCinema.get('/', getCinemas);

routerCinema.get('/:id', getCinemasById);

routerCinema.post('/create', createCinema);

routerCinema.put('/update/:id', updateCinemaById);

routerCinema.delete('/delete', deleteCinemas);

routerCinema.delete('/delete/:id', deleteCinemaById);


module.exports = routerCinema;