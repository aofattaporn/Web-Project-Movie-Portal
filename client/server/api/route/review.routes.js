const express = require("express");
const routerReview = express.Router();
const auth = require('../../middleware/auth');

const {   
   getAllReview, createMyReview, removeAllReview, deleteById

} = require('../../controller/review.controller');

routerReview.get('/', getAllReview);

routerReview.post('/', auth, createMyReview);

routerReview.delete('/', removeAllReview);

routerReview.delete('/:id', deleteById);


module.exports = routerReview;