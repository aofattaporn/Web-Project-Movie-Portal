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
   const [dateSelect, setDateSelect] = useState("");
   const [dateSelectNext, setDateSelectNext] = useState("");
   const [cinemas, setCinemas] = useState([]);

   const dateFormat=(date)=>{
      const d = new Date(date);
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ]
      return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
   }

   const getCinemasByMovie = useCallback( async ()=>{

      // if(dateSelect === "" && dateSelectNext===""){
      //    let date_select = new Date();
      //    let today = date_select.setDate(new Date().getDate() - parseInt(1));
      //    let tommorrow = date_select.setDate(new Date().getDate() );
            
      //    // today = new Date(today).toISOString();
      //    // tommorrow = new Date(tommorrow).toISOString();

      //    console.log(today);
      //    console.log(tommorrow);

      //    setDateSelect(today);
      //    setDateSelectNext(tommorrow);
      //    console.log("abaha");
      // }

      

      const dateSet = await {
         movie_id: movie_id,
         start: dateSelect,
         end: dateSelectNext
      }

      await serviceProgram.getProgramsByMovie(dateSet)
      .then((res) => {
         console.log(res)
         console.log(setCinemas(res.data))
      })
      .catch((err) => {console.log(err)})

   }, [ movie_id, dateSelect, dateSelectNext])

   const selectedDay = (val) =>{
                                     
      let date_select = new Date(val);
      let today = date_select.setDate(new Date(val).getDate());
      let tommorrow = date_select.setDate(new Date(val).getDate() + parseInt(1));

      console.log(today);
      console.log(tommorrow);
         
      today = new Date(today).toISOString();
      tommorrow = new Date(tommorrow).toISOString();

      setDateSelect(today);
      setDateSelectNext(tommorrow);

   };

   // useEffect for reenduring component
   useEffect(()=>{
      getCinemasByMovie();
   }, [getCinemasByMovie])


   return (
   <Fragment>
      <FindByMovieStyle>
         <div className="fincinemas"> 
         <components.MovieTap></components.MovieTap>

         <div className="findbycinemas__date">
               <header className="findbycinemas__date__head">
                  <h6>{`[ SHOW TIME DATE `} <span>{`${dateFormat(dateSelect)} `} </span> ]</h6>
                  <div></div>
               </header>
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
                     >

                        {
                           cinemas.map((item, index) => {return (<h1 key={index}>{item.cinemaName}</h1>)})
                        }
                     <components.AccordItemFromMovie cinemas={cinemas}></components.AccordItemFromMovie>

                     </Accordion>
                  </Col>
                  <Col  md="1"></Col>

               </Row>
            </Container>
         </section>
         </div>

      </FindByMovieStyle>
   </Fragment>
   )
}

const FindByMovieStyle = styled.div`

   .fincinemas{
      display: flex;
      flex-direction: column;
      /* flex-wrap: wrap; */
   }


   /* ----------------- date-title -------------------- */

   .findbycinemas__date h6{
      margin-top: 15rem;
   }
   .findbycinemas__date__head{
      color: #FFFF;
   }
   .findbycinemas__date__head div {
      background-color: #C9B898;
      height: 0.2rem;
   }

   .findbycinemas__date__head span {
      color: rgb(151, 121, 89);
      margin-left: 0.5rem;
      font-weight: bold;
      font-size: 2rem;
   }

   /* -------------- date tap ----------------------- */
   .findbycinemas__date{
      margin-top:  4rem;
      padding: 0.2rem 5rem;
      background-color: transparent;
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
      background-color: #A89776;
   }

   .accordion-button:focus{
      border-color: #C9B898;
   }

   .accordion-button:not(.collapsed) {
      color: #ffff;
   }

   .DatePicker_dateDayItem__XwRQy{
      margin-right: 100px;
      margin-left: 100px;
      color: white;
      border-radius: 50%;
   }  

   /* accordion */
   .accordion-header button{
      background-color: #BDAD8E;
      color: white;
   }
   .accordion-button:focus{
      border-color: #BDAD8E;
   }
   .accordion-button:not(.collapsed){
      color: white;
      background-color: #BDAD8E;
      border: 0;
   }
   .listItem:hover{
      background-color: rgba(41, 42, 42, 0.224);
      color: rgb(151, 121, 89);
      cursor: pointer;
   }

   @media only screen and (max-width: 770px) {
      .findbycinemas__date{
      margin-top:  20rem;
      }

   }


`


export default FindByMovie;