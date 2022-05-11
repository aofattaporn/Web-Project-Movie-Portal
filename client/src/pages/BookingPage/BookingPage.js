import styled from "styled-components";
import { useParams } from "react-router-dom";
import components from "../../components";
import { useState } from "react";
import serviceProgram from "../../service/programService";
import { useEffect } from "react";
const { Fragment } = require("react")

const BookingPage = ()=>{

   const {program_id}  = useParams();

   // manage state
   const [data, setData] = useState({});
   
   const getAllData = (id)=>{
      serviceProgram.getAllDataByProgramId(id)
      .then((response)=>{setData(response.data)})
      .catch(err => {console.log(err)})
   }

   useEffect(()=>{
      getAllData(program_id);

   }, [program_id])
 
   return (
      <Fragment>
         <BookingPageStyle>

         { data ? 
            <>
            <components.MovieTap  
               cinema={data.cinema} 
               movie={data.movie} >
            </components.MovieTap>

            <components.BookingChairsTap 
               program={data.program}
               cinema={data.cinema} 
               movie={data.movie} 
               >
            </components.BookingChairsTap>
            </>
            :
            <components.MovieTapSkeleton></components.MovieTapSkeleton>
         } 
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