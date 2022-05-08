import propTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const { Link } =  require('react-router-dom')
const { Accordion, ListGroup } = require("react-bootstrap")


const AccordionItemCinemas =(props)=>{

   // manage props 
   const {data ,title, keyAC } = props;

   return (
      <AccordionItemCinemasStyle> 
         <Accordion.Item className="Accordio-item" eventKey={keyAC}>
            <Accordion.Header> {title} </Accordion.Header>
            <Accordion.Body>
               {
                  data.map((Item, index) => {
                     return  ( 
                      <ListGroup key={index}> 
                        <Link to={`/cinemas/${Item._id}`}>
                           
                           <ListGroup.Item className="listItem" > 
                              <div className="listItem__list">
                                 <FontAwesomeIcon  className="icon" icon={faLocationDot}></FontAwesomeIcon>
                                 <p>{Item.cinemaName} </p>
                              </div>
                           </ListGroup.Item> 
                        </Link>
                        <br/>
                      </ListGroup> ) ; 
                  })
               }          
            </Accordion.Body>
         </Accordion.Item> 

      </AccordionItemCinemasStyle>
   )
}

const AccordionItemCinemasStyle = styled.div`

.Accordio-item{
   margin-bottom: 1rem;
}
.listItem__list{
   display: flex;
   flex-direction: row;
   align-items: center;
   height: 1.5rem;
}
.listItem__list p{
   margin-top: 1rem;
   margin-left: 1rem;
}
.icon:hover{
   font-size: 2rem;
}  
a{
   text-decoration: none;
}
`

AccordionItemCinemas.propTypes = {
   data: propTypes.array,
   title: propTypes.string, 
   keyAC: propTypes.string
}


export default AccordionItemCinemas;