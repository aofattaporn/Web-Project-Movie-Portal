import axios from 'axios'; 


const logIn =(body)=>{
   return axios.post('http://localhost:4000/users/register', body);
}

const geetAllUser =(body)=>{
   return axios.get('http://localhost:4000/users');
}

const getUserByToken = (token) =>{
   return axios.get('http://localhost:4000/users/token', { headers: {"authorization" : `${token.split("\"")[1]}`}} );
}

const updateUser = (token, body) =>{
   return axios.put('http://localhost:4000/users/update',  body,  { headers: {"authorization" : `${token.split("\"")[1]}`}} );
}

const updateProfile = (token, body) =>{
   return axios.put('http://localhost:4000/users/uploadeProfile', body, { headers: {"authorization" : `${token.split("\"")[1]}`}} );
}



const serviceUser = { logIn, getUserByToken, updateUser, updateProfile, geetAllUser}

export default serviceUser;