const express = require("express");
const routerUser = express.Router();
const auth = require('../../middleware/auth');
require("dotenv").config();


const { getUsers, 
   getUserById, 
   createUser, 
   deleteUsers,
   registerUser,
   loginUser} = require('../../controller/user.controller');

// public routes
routerUser.post('/register', registerUser);

routerUser.post('/login', loginUser);

// private routes
routerUser.get('/',auth, getUsers)

routerUser.get('/:id', getUserById);

routerUser.post('/create', createUser);

routerUser.delete('/delete', deleteUsers);


module.exports = routerUser;