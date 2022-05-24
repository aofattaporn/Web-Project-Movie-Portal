const express = require("express");
const routerLike = express.Router();
const auth = require('../../middleware/auth');

const {   
   getMyMovieLike, likeMovie, unLikeMovie, removeAllLike, getMovieFavorite

} = require('../../controller/like.controller');

routerLike.get('/', getMyMovieLike);

routerLike.get('/movies', getMovieFavorite);

routerLike.post('/', auth, likeMovie);

routerLike.post('/remove', auth, unLikeMovie);

routerLike.delete('/all', removeAllLike);

module.exports = routerLike;