let User = require('../model/user.model');

const getUsers =(req, res) => {
   User.find((err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const getUserById =(req, res) => {
   User.findById(req.params.id, (err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const createUser=(req, res) => {

   console.log(req.body);

   User.create(req.body, (err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const deleteUsers=(req, res)=>{
   User.deleteMany((err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json({msg: user});
      }
   })
}



module.exports = {
   getUsers,
   getUserById,
   createUser,
   deleteUsers
}