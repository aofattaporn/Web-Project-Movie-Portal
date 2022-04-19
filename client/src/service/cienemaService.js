import axios from 'axios'; 

const getCinemas =()=>{
   return axios.get('http://localhost:4000/cinemas');
}

const getCinemasById =(id)=>{
   return axios.get(`http://localhost:4000/cinemas/${id}`);
}

const serviceCinemas = {getCinemas, getCinemasById}

export default serviceCinemas;