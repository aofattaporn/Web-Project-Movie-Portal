const express = require("express");
const routerReview = express.Router();
const auth = require('../../middleware/auth');

const {   
   getAllReview, createMyReview, removeAllReview
} = require('../../controller/review.controller');

routerReview.get('/', getAllReview);

routerReview.post('/', auth, createMyReview);

routerReview.delete('/', removeAllReview);

module.exports = routerReview;