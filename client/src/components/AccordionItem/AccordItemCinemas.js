import propTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { IsAdminContext } from '../../App';
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import swal from "sweetalert";
import axios from 'axios';

const { Link } =  require('react-router-dom')
const { Accordion, ListGroup } = require("react-bootstrap")



const AccordionItemCinemas =(props)=>{

   // manage props 
   const {data ,title, keyAC } = props;
   const { isAdmin } = useContext(IsAdminContext);

   const deleteCinemaId = (id)=>{

      swal({
         title: "Are you sure to delete your Cinema?",
         icon: "warning",
         buttons: true,
         dangerMode: false,
       })
       .then((willDelete) => {
         
         if (willDelete) {
            axios.delete(`http://localhost:4000/cinemas//delete/${id}`)
            .then((response)=>{
               console.log(response)
               window.location.reload();
            })
            .catch((err)=>{console.log(err)})
         } 
       });
   }

   return (
      <AccordionItemCinemasStyle> 
         <Accordion.Item className="Accordio-item" eventKey={keyAC}>
            <Accordion.Header> {title} </Accordion.Header>
            <Accordion.Body>
               {
                  data.map((Item, index) => {
                     return  ( 
                      <ListGroup key={index}> 
                           <ListGroup.Item className="listItem d-flex justify-content-between" > 
                           <Link to={`/cinemas/${Item._id}`}>
                              <div className="listItem__list">
                                 <FontAwesomeIcon className="icon" icon={faLocationDot}></FontAwesomeIcon>
                                 <p>{Item.cinemaName} </p>
                              </div>
                           </Link>
                              <div>
                              {isAdmin === "true" ?<button onClick={()=>deleteCinemaId(Item._id)} className='icon-delete'><DeleteForeverIcon ></DeleteForeverIcon></button>  :<></>}
                              </div>
                           </ListGroup.Item> 
                        
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
   color: rgb(151, 121, 89);
   margin-top: 1rem;
   margin-left: 1rem;
}
.icon{
   color: rgb(151, 121, 89);
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