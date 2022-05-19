const express = require("express");
const routerUser = express.Router();
const auth = require('../../middleware/auth');
const uploadImage = require('../../middleware/uploadfile');
require("dotenv").config();


const { getUsers, 
   getUserById, 
   createUser, 
   updateUser,
   deleteUsers,
   registerUser,
   uploadeProfile,
   loginUser,
   getUserByToken
} = require('../../controller/user.controller');

// public routes
routerUser.post('/register', registerUser);

routerUser.post('/login', loginUser);

// private routes
routerUser.get('/', getUsers) 

routerUser.get('/token', auth, getUserByToken)

routerUser.put('/update', auth, updateUser); 

routerUser.put('/uploadeProfile', auth, uploadImage.single('image'), uploadeProfile);

routerUser.get('/:id', auth, getUserById);

routerUser.post('/create', createUser);

routerUser.delete('/delete', deleteUsers);


module.exports = routerUser;