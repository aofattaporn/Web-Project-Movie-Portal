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
import 'aos'

const FindByCinema =()=>{

   let { cinema_id } = useParams();

   const [cinemas, setCinemas] = useState({});
   const [dateSelect, setDateSelect] = useState("");
   const [dateSelectNext, setDateSelectNext] = useState("");
   const [moviesShow, setMoviesShow] = useState([]);

   const selectedDay = (val) =>{
                                     
      console.log(val);
      let date_select = new Date(val);
      let today = date_select.setDate(new Date(val).getDate() );
      let tommorrow = date_select.setDate(new Date(val).getDate() + parseInt(1));
         
      today = new Date(today).toISOString();
      tommorrow = new Date(tommorrow).toISOString();
      
      setDateSelect(today);
      setDateSelectNext(tommorrow);

  };

  const dateFormat=(date)=>{
      const d = new Date(date);
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
      ]

      return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`
   }

  const getProgramByDate =  useCallback(async ()=>{

      // if(dateSelect === "" && dateSelectNext===""){
      //    let date_select = new Date();
      //    let today = date_select.setDate(new Date().getDate() - parseInt(1));
      //    let tommorrow = date_select.setDate(new Date().getDate() );
            
      //    today = new Date(today).toISOString();
      //    tommorrow = new Date(tommorrow).toISOString();

      //    setDateSelect(today);
      //    setDateSelectNext(tommorrow);
      // }
     
     const dateSet = {
         cinema_id: cinema_id,
         start: dateSelect,
         end: dateSelectNext
     }

     // get movies showtime check 
     await serviceProgram.getMoviesShowtime(dateSet)
     .then((res) => {
         setMoviesShow(res.data);
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
            <div className="findbycinemas__header"  >
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
               <header  className="findbycinemas__date__head">
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
            

            {
             moviesShow.length !== 0  ? 
               moviesShow.map((item, idx) => {
                  return (<components.BoxShowTime 
                     key={idx}
                     movie_id={item} 
                     cinema_id={cinema_id}
                     today={dateSelect}
                     tommorrow={dateSelectNext}
                     />)
               }) : 

               <div>
                  <components.NoMovie/>
               </div>
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

   .findbycinemas__date__head{
      margin-bottom: 2rem;
      color: #FFFF;
      
   }

   .findbycinemas__date__head div {
      background-color: #C9B898;
      height: 0.2rem;
      width: 100%;
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

   /* text-item */
   .DatePicker_dateDayItem__XwRQy{
      margin-right: 100px;
      margin-left: 100px;
      color: white;
      border-radius: 50%;
   }  

`

export default FindByCinema;