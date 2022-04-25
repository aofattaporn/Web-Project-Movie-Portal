import axios from 'axios'; 

const getCinemas = ()=>{
   return axios.get('http://localhost:4000/cinemas');
}

const getCinemasById =(id)=>{
   return axios.get(`http://localhost:4000/cinemas/${id}`);
}

const createCinema =(newCinema)=>{
   return axios.post('http://localhost:4000/cinemas/create', newCinema);
}

const serviceCinemas = {getCinemas, getCinemasById, createCinema}

export default serviceCinemas;