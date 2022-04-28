

import axios from 'axios'; 

const logIn =(body)=>{
   return axios.post('http://localhost:4000/users/register', body);
}



const serviceProgram = {getProgramByDate, createProgram, getMoviesShowtime}

export default serviceProgram;