import styled from "styled-components"
import propTypes from "prop-types";
import { Accordion } from "react-bootstrap"
import { useEffect } from "react";
import serviceCinemas from "../../service/cienemaService";
import { useState } from "react";


const AccordItemFromMovie = (props) => {

   const { cinemas } = props;

   const [allCinemas, setAllCinemas] = useState([]);
 
   const pushCinema=(newCinema)=>{
      console.log(newCinema);
      if(newCinema === null){
         setAllCinemas([]);
      }
      else{
         setAllCinemas([...allCinemas, newCinema]);
      }
   }


   const getCinema = async (cinemas) =>{
      await cinemas.forEach(element => {
         serviceCinemas.getCinemasById(element)
         .then((res)=>{pushCinema(res.data)})
      });
   }

   useEffect(()=>{
      getCinema(cinemas);
   }, [cinemas])

   const area = ["Bangkok", "Central", "North", "West", "NorthEast", "South", "East"];


   return (
      <AccordionItemFromMovvieStyle>

         {
            area.map((zone, index) => {
               return (
                  <Accordion.Item key={index} eventKey={index}>
                     <Accordion.Header>{zone}</Accordion.Header>
                     <Accordion.Body>
                        {
                           allCinemas.filter(y => y.cinemaArea === zone).map((x, idx) =>{
                              return (<h1 key={idx}>{x.cinemaName}</h1>)
                           })
                        }

                     </Accordion.Body>
                  </Accordion.Item>
               )
            })
         }
      </AccordionItemFromMovvieStyle>
   )
}

const AccordionItemFromMovvieStyle = styled.div`

`

AccordItemFromMovie.propTypes ={

   cinemas: propTypes.array,

}

export default AccordItemFromMovie;