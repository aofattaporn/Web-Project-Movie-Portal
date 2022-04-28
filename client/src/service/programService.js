import axios from 'axios'; 

const getProgramByDate =(body)=>{
   // console.log(body);
   return axios.post('http://localhost:4000/programs/datetime', {date: body});
}

const getMoviesShowtime =(body)=>{
   return axios.post('http://localhost:4000/programs/movies/showtime', {date: body});
}

const getProgramsShowtime =(body)=>{
   return axios.post('http://localhost:4000/programs/movies/showtime/programs', {date: body});
}

const createProgram =(program)=>{
   return axios.post('http://localhost:4000/programs/create', program)
}

const getThearter =(body)=>{
   return axios.post('http://localhost:4000/programs/movies/showtime/theater', body);
}

const serviceProgram = {getProgramByDate, createProgram, getMoviesShowtime, getThearter, getProgramsShowtime}

export default serviceProgram;