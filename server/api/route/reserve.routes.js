const express = require("express");
const routerReserve = express.Router();
const auth = require('../../middleware/auth');


const { getReserves, getReservesById, createReserve, deleteAllReserve } = require('../../controller/reserve.controller');

routerReserve.get('/all', getReserves);

routerReserve.get('/', auth, getReservesById);

routerReserve.post('/create', auth, createReserve)

routerReserve.delete('/', deleteAllReserve);


module.exports = routerReserve;