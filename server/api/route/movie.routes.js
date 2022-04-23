const express = require("express");
const routerMovie = express.Router();
const upload = require('../../middleware/uploadfile');
const {   

   getMovie,
   getMovieById,
   createMovie, 
   updateMovieById,
   deleteMovies,
   deleteMovieById,

   testUpload

} = require('../../controller/movie.controller');


routerMovie.post('/upload', upload.single('image'), testUpload);

routerMovie.get('/', getMovie);

routerMovie.get('/:id', getMovieById);

routerMovie.post('/create', createMovie);

routerMovie.put('/update/:id', updateMovieById);

routerMovie.delete('/delete', deleteMovies);

routerMovie.delete('/delete/:id', deleteMovieById);

module.exports = routerMovie;