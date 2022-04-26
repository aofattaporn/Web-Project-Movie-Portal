/* eslint-disable import/first */
import { useState, Fragment } from "react";
import { useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import serviceCinemas from "../../../service/cienemaService";
import serviceProgram from "../../../service/programService";
import DatePicker from "react-horizontal-datepicker";
import styled from "styled-components";
import { useCallback } from "react";
import components from "../../../components";
const { useParams } =  require('react-router-dom');

const FindByCinema =()=>{

   let { cinema_id } = useParams();

   const [cinemas, setCinemas] = useState({});
   const [dateSelect, setDateSelect] = useState(new Date().toISOString());
   const [dateSelectNext, setDateSelectNext] = useState(new Date().toISOString());
   const [moviesShow, setMoviesShow] = useState([]);
   const [program, setProgram]= useState([]);


   const selectedDay = (val) =>{
                                     
      let date_select = new Date(val);
      let today = date_select.setDate(new Date(val).getDate() );
      let tommorrow = date_select.setDate(new Date(val).getDate() + parseInt(1));
         
      today = new Date(today).toISOString();
      tommorrow = new Date(tommorrow).toISOString();
      
      setDateSelect(today);
      setDateSelectNext(tommorrow);

  };

  const getProgramByDate = useCallback(()=>{
     const dateSet = {
         cinema_id: cinema_id,
         start: dateSelect,
         end: dateSelectNext
     }

     // get program check 
     serviceProgram.getProgramByDate(dateSet)
     .then((res) => {
         setProgram(res.data);
         console.log(res.data);
     })
     .catch((err) => {console.log(err)});

     // get movies showtime check 
     serviceProgram.getMoviesShowtime(dateSet)
     .then((res) => {
         setMoviesShow(res.data);
         console.log(res.data);
     })


  }, [dateSelect, dateSelectNext, cinema_id]);

  const getCinemas = useCallback(()=>{
   serviceCinemas.getCinemasById(cinema_id)
   .then((res)=> {
      setCinemas(res.data)
   })}, [cinema_id]);

   // when 
   useEffect(()=>{
      getCinemas();
   }, [getCinemas]);

   // rerender when select date 
   useEffect(()=>{
      getProgramByDate();
   },[getProgramByDate]) 


   return (
      <Fragment>
         <FindByCinemaStyle className="findbycinemas">

            <div className="findbycinemas__header">
               <Container className="findbycinemas__header__container" >
                  <ListGroup>
                     <ListGroupItem className="findbycinemas__header__container__list1">
                        <h5>{cinemas.cinemaName}</h5>
                     </ListGroupItem>
                     <ListGroupItem className="findbycinemas__header__container__list2">
                        <h5>{cinemas.cinemaArea}</h5>
                     </ListGroupItem>
                  </ListGroup>
               </Container>
            </div>

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

            {
               moviesShow.map((item, idx) => {
                  return (<components.BoxShowTime key={idx} movie_id={item}></components.BoxShowTime>)
               })
            }


         </FindByCinemaStyle>
      </Fragment>
   )
}

const FindByCinemaStyle = styled.div`
   .findbycinemas__header{
      height: 15rem;
      display: flex;
      background: linear-gradient( to bottom , rgb(175, 160, 132) , rgba(58,52,36,1) );
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

   }

   .findbycinemas__header__container{
      margin: auto ;
      color: #ffff;
   }

   .findbycinemas__header__container__list1 {
      background-color: #C9B898;
      color: #ffff;

   }

   .findbycinemas__header__container__list2 {
      background-color: rgba(201, 184, 152, 0.189);
      color: #ffff;

   }


   /* -------------- date tap ----------------------- */
   .findbycinemas__date{
      margin-top:  4rem;
      padding: 0.2rem 5rem;
      background-color: #C9B898;
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
      border-top: #ffff 2px solid;
   }

   /* text-item */
   .DatePicker_dateDayItem__XwRQy{
      margin-right: 100px;
      margin-left: 100px;
      color: white;
      border-radius: 50%;
   }  

`

export default FindByCinema;