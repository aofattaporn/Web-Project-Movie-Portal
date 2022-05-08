import axios from 'axios'; 

const getProgramByDate =(body)=>{
   return axios.post('http://localhost:4000/programs/datetime', {date: body});
}

const getProgramById =(id)=>{
   return axios.get(`http://localhost:4000/programs/${id}`);
}

// use from FinfByCinemas page

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

// use from FinfByMovvie page

const getProgramsByMovie =(body)=>{
   return axios.post(`http://localhost:4000/programs/movie/${body.movie_id}/showtime`, {date: body});
}


const serviceProgram = {
   getProgramByDate, createProgram, getMoviesShowtime, getThearter, getProgramsShowtime, getProgramsByMovie,
   getProgramById}

export default serviceProgram;