import axios from 'axios'; 

const getMovies =()=>{
   return axios.get('http://localhost:4000/movies');
}

const getMovieById =(id)=>{
   return axios.get(`http://localhost:4000/movies/${id}`);
}


const getMovieByIdCheckLike =(token, id)=>{
   return axios.get(`http://localhost:4000/movies/${id}/checkLike`,  { headers: {"authorization" : `${token.split("\"")[1]}`}} );
}

const getMovieByKeyword =(keyword)=>{
   return axios.get(`http://localhost:4000/movies/keyword/${keyword}`);
}

const createMovie =()=>{
   return axios.post('http://localhost:4000/movies/create');
}

const serviceMovies = {getMovies, getMovieById, createMovie, getMovieByKeyword, getMovieByIdCheckLike}

export default serviceMovies;