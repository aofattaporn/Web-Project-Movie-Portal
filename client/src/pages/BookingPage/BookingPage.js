import styled from "styled-components";
import { useParams } from "react-router-dom";
import serviceMovie from "../../service/movieService";
import serviceCinema from "../../service/cienemaService";
import components from "../../components";
import { useState } from "react";
import serviceProgram from "../../service/programService";
import { useEffect } from "react";
const { Fragment } = require("react")

const BookingPage = ()=>{

   const {program_id, movie_id, cinema_id}  = useParams();

   // manage state
   const [movie, setMovie] = useState({});
   const [cinema, setCinema] = useState({});
   const [progam, setProgram] = useState({});



   // get movie by id 
   const getMovieById = (movie_id)=>{
      serviceMovie.getMovieById(movie_id)
      .then((response) => { setMovie(response.data)})
      .catch((err) => {console.log(err)})
   }

   // get cinema by id 
   const getCinemaById = (cinema_id)=>{
      serviceCinema.getCinemasById(cinema_id)
      .then((response) => {setCinema(response.data)})
      .catch((err) => {console.log(err)})
   }


   const getAllData = async ()=>{
      await getMovieById(movie_id);
      await getCinemaById(cinema_id);
      // await getProgramById(program_id)
   }

   useEffect(()=>{
      getAllData();

   }, [])
 
   return (
      <Fragment>
         <BookingPageStyle>

            <components.MovieTap cinemaName={cinema.cinemaName} cinemaArea={cinema.cinemaArea} ></components.MovieTap>

            <components.BookingChairsTap cinemaName={cinema.cinemaName} cinemaArea={cinema.cinemaArea} theater={progam.theater} program_id={program_id} movie={movie.name}></components.BookingChairsTap>

         </BookingPageStyle>
      </Fragment>
   )
}

const BookingPageStyle = styled.div`
   .booking-container{
      margin-top: 50rem;
      height: 400px;
   }
`

export default BookingPage;