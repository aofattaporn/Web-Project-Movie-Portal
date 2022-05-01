import { Fragment, useState } from "react";
import styled from "styled-components";
import {Accordion, Container, Col, Row} from "react-bootstrap";
import components from "../../../components";
import DatePicker from "react-horizontal-datepicker";
import { useParams } from "react-router-dom";
import serviceProgram from "../../../service/programService";
import { useEffect } from "react";
import { useCallback } from "react";
import serviceCinemas from "../../../service/cienemaService";


const FindByMovie =()=>{

   const { movie_id } = useParams();

   // manage state
   const [dateSelect, setDateSelect] = useState(new Date().toISOString());
   const [dateSelectNext, setDateSelectNext] = useState(new Date().toISOString());
   const [cinemas, setCinemas] = useState([]);

   const getCinemasByMovie = useCallback( async ()=>{
       const dateSet = await {
         movie_id: movie_id,
         start: dateSelect,
         end: dateSelectNext
      }

      await serviceProgram.getProgramsByMovie(dateSet)
      .then((res) => {setCinemas(res.data)})
      .catch((err) => {console.log(err)})

   }, [ movie_id, dateSelect, dateSelectNext])

   const selectedDay = (val) =>{
                                     
      let date_select = new Date(val);
      let today = date_select.setDate(new Date(val).getDate() );
      let tommorrow = date_select.setDate(new Date(val).getDate() + parseInt(1));
         
      today = new Date(today).toISOString();
      tommorrow = new Date(tommorrow).toISOString();

      
      setDateSelect(today);
      setDateSelectNext(tommorrow);

   };

   const setCinemasInner =()=>{}

   useEffect(()=>{
      getCinemasByMovie();
   }, [getCinemasByMovie])

   // const area = ["Bangkok", "Central", "North", "West", "NorthEast", "South", "East"];

   return (
   <Fragment>
      <FindByMovieStyle>
         <components.MovieTap></components.MovieTap>


         <div className="findbycinemas__date">
               <DatePicker
                     getSelectedDay={selectedDay}
                     endDate={100}
                     selectDate={new Date("2020-04-30")}
                     labelFormat={"MMMM"}
                     color={"#ffff"} 
                     >
               </DatePicker>
         </div>

         <section>
            <Container>
               <Row>
                  <Col  md="1"></Col>
                  <Col  md="10">
                     <Accordion               
                     defaultActiveKey={'0'}
                     data-aos='fade-up'
                     data-aos-duration="1000"                  
                     >
                     <components.AccordItemFromMovie cinemas={cinemas}></components.AccordItemFromMovie>

                     </Accordion>
                  </Col>
                  <Col  md="1"></Col>

               </Row>
            </Container>
         </section>

      </FindByMovieStyle>
   </Fragment>
   )
}

const FindByMovieStyle = styled.div`

   /* -------------- date tap ----------------------- */
   .findbycinemas__date{
      margin-top:  20rem;
      padding: 0.2rem 5rem;
      background-color: #C9B898;
      /* border-top: 2px solid #ffff; */
      border-bottom: 2px solid #ffff;
   }

   .DatePicker_monthContainer__4SSK4{
      margin-right: 2rem;
   }

   .DatePicker_button__iBgLD{
      border-radius: 0px;
      background-color: transparent;
      display: none;
   }

   .DatePicker_daysContainer__9htA9{
      /* border-top: #ffff 2px solid; */
   }

   /* text-item */
   .DatePicker_dateDayItem__XwRQy{
      margin-right: 100px;
      margin-left: 100px;
      color: white;
      border-radius: 50%;
   }  

   @media only screen and (max-width: 1100px) {
      .findbycinemas__date{
      margin-top:  40rem;

   }

   }


`


export default FindByMovie;