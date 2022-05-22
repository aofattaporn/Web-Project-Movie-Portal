let User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

const getUserByToken = (req, res)=>{

   User.findById( req.tokenData.user_id, (err, user)=>{
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

   User.create(req.body, (err, user)=>{
      if(err){
         console.log(err);
      }
      else{
         res.json(user);
      }
   })
}

const uploadeProfile =(req, res) =>{
   console.log(req.body)

   User.findByIdAndUpdate(req.tokenData.user_id, { $set: { imageProfile : req.file.filename}  } ,  (err, user)=>{
      if(err){
         console.log(err);
      }else{
         res.json(user)
      }
   })
}

const updateUser = (req, res )=>{
   console.log(req.body)
   User.findByIdAndUpdate(req.tokenData.user_id, req.body,  (err, user)=>{
      if(err){
         console.log(err);
      }else{
         res.json(user)
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

const registerUser= async (req, res)=>{
   try{
      // geet user input 
      const {username, email, password, phone} = req.body;

      // validate user input 
      if(!(email && password && username)){
         res.status(400).send("All input is valid");
      }

      // check if iseer already exit 
      const oldUser = await User.findOne({email});
      if(oldUser){
         res.status(400).send("User is already exit, pls login");
      }

      // Encrypt user password 
      encrytedPassword = await bcrypt.hash(password, 10);

      // mapping data 
      const user = await User.create({
         username, 
         email,
         password: encrytedPassword,
         phone: phone
      })

      // Create token 
      const token = jwt.sign({ user_id: user._id, email, username: user.username }, process.env.TOKEN_KEY, { expiresIn: "1800s", });

      // save user token 
      user.token = token; 

      // return new user 
      res.status(201).json({accesstoken: `Bearer ${token}`, user: user.username});
   }catch(err) {
      console.log(err);
   }
}

const loginUser= async (req, res)=>{

   try{

      // Get user input 
      const {email, password} = req.body;

      // validate user input 
      if(!(email && password)){
         res.status(400).send("All input is valid");
      }
      
      // validate if user exist in our database 
      const user = await User.findOne({email});

      if(user && (await bcrypt.compare(password, user.password))){

         // create token 
         const token = jwt.sign({ user_id: user._id, email, username: user.username }, process.env.TOKEN_KEY, { expiresIn: "1800s", });

         // save token 
         user.token = token; 

         res.status(201).json({accesstoken: `Bearer ${token}`, user: user.username});

         console.log(jwt.decode(token));
      }

      else{
         res.status(400).send("Invalid Credentials");
      }


   }catch(err){
      console.log(err);
   }
}

function generateAccessToken(id, email) {
   return jwt.sign({ user_id: id, email  }, process.env.TOKEN_SECRET, { expiresIn: "1800s", });
 }



module.exports = {
   registerUser,
   loginUser,
   getUsers,
   getUserById,
   uploadeProfile,
   updateUser,
   createUser,
   deleteUsers,
   getUserByToken
}