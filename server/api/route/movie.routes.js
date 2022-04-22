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


routerMovie.post('/upload', upload.single('image'), (req, res) => {

   try{


      console.log(req.file.filename);
      // console.log(req.file.fieldname);
   
      // res.json( await new Movie(newData).save() );
   }catch(err) {
      console.log(err);
      res.status(400).send("create faile");
   }
});

routerMovie.get('/', getMovie);

routerMovie.get('/:id', getMovieById);

routerMovie.post('/create', createMovie);

routerMovie.put('/update/:id', updateMovieById);

routerMovie.delete('/delete', deleteMovies);

routerMovie.delete('/delete/:id', deleteMovieById);

module.exports = routerMovie;