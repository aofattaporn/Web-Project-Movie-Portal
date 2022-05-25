import axios from 'axios'; 

const createReview = (token, body)=>{
   return axios.post('http://localhost:4000/reviews', body, { headers: {"authorization" : `${token.split("\"")[1]}`}});
}

const getAllReview = ()=>{
   return axios.get('http://localhost:4000/reviews');
}

const deleteById = (id)=>{
   return axios.delete(`http://localhost:4000/reviews/${id}`);
}

const serviceReview = { createReview, getAllReview, }

export default serviceReview;