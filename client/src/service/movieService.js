import axios from 'axios'; 

const getMovies =()=>{
   return axios.get('http://localhost:4000/movies');
}

const getMovieById =(id)=>{
   return axios.get(`http://localhost:4000/movie/${id}`);
}

const createMovie =()=>{
   return axios.post('http://localhost:4000/movies/create');
}

const serviceMovies = {getMovies, getMovieById, createMovie}

export default serviceMovies;