const express = require("express");
const routerLike = express.Router();
const {   
   getMyMovieLike, likeMovie, removeAllLike

} = require('../../controller/like.controller');

routerLike.get('/', getMyMovieLike);

routerLike.post('/', likeMovie);

routerLike.delete('/', removeAllLike);



module.exports = routerLike;