import axios from 'axios'; 

const createReserve = (body, token)=>{
   return axios.post('http://localhost:4000/reserves/create', body, { headers: {"authorization" : `${token.split("\"")[1]}`} });
}

const getMyReserve = (token)=>{
   return axios.get('http://localhost:4000/reserves/', { headers: {"authorization" : `${token.split("\"")[1]}`} });
}


const serviceReserve = { createReserve, getMyReserve }

export default serviceReserve;