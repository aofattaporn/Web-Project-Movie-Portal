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
   getMovieByKeyword,
   getMovieByIdCheckLike,

   testUpload

} = require('../../controller/movie.controller');


routerMovie.post('/upload', upload.single('image'), testUpload);

routerMovie.get('/', getMovie);

routerMovie.get('/keyword/:key', getMovieByKeyword);

routerMovie.get('/:id', getMovieById);

routerMovie.get('/:id/checkLike', getMovieByIdCheckLike);

routerMovie.post('/create', createMovie);

routerMovie.put('/update/:id', updateMovieById);

routerMovie.delete('/delete', deleteMovies);

routerMovie.delete('/delete/:id', deleteMovieById);

module.exports = routerMovie;