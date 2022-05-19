const express = require("express");
const routerReserve = express.Router();
const auth = require('../../middleware/auth');


const { getReserves, createReserve } = require('../../controller/reserve.controller');

routerReserve.get('/', getReserves);

routerReserve.post('/create',auth, createReserve)



module.exports = routerReserve;