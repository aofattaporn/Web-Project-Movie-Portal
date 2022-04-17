const express = require("express");
const routerUser = express.Router();


const { getUsers, getUserById, createUser, deleteUsers} = require('../../controller/user');


routerUser.get('/', getUsers)

routerUser.get('/:id', getUserById);

routerUser.post('/create', createUser);

routerUser.delete('/delete', deleteUsers);


module.exports = routerUser;