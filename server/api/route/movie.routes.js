const express = require("express");
const routerMovie = express.Router();

const {   

   getMovie,
   getMovieById,
   createMovie, 
   updateMovieById,
   deleteMovies,
   deleteMovieById

} = require('../../controller/movie.controller');

routerMovie.get('/', getMovie);

routerMovie.get('/:id', getMovieById);

routerMovie.post('/create', createMovie);

routerMovie.put('/update/:id', updateMovieById);

routerMovie.delete('/delete', deleteMovies);

routerMovie.delete('/delete/:id', deleteMovieById);

module.exports = routerMovie;