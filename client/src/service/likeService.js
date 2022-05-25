import axios from 'axios'; 

const createLike = (token, body)=>{
   return axios.post('http://localhost:4000/like', body,  { headers: {"authorization" : `${token.split("\"")[1]}`} });
}

const removeLike = (token, body)=>{
   return axios.post('http://localhost:4000/like/remove', body,  {headers: {"authorization" : `${token.split("\"")[1]}`} }) ;
}

const getMovieFav = (token)=>{
   return axios.get('http://localhost:4000/like/movies', {headers: {"authorization" : `${token.split("\"")[1]}`} });
}

const serviceLike = { createLike, removeLike, getMovieFav }

export default serviceLike;