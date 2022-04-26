import axios from 'axios'; 

const getProgramByDate =(body)=>{
   console.log(body);
   return axios.post('http://localhost:4000/programs/datetime', {date: body});
}

const getMoviesShowtime =(body)=>{
   console.log(body);
   return axios.post('http://localhost:4000/programs/movies/showtime', {date: body});
}

const createProgram =(program)=>{
   return axios.post('http://localhost:4000/programs/create', program)
}





const serviceProgram = {getProgramByDate, createProgram, getMoviesShowtime}

export default serviceProgram;