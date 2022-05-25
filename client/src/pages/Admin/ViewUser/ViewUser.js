import { ListItem } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, ListGroup , Row} from "react-bootstrap";
import serviceUser from "../../../service/userService";





const ViewUser = ()=>{

   const [allUser, setAllUser] = useState([]);

   const getAllUser = () =>{
      serviceUser.geetAllUser()
      .then((respone)=>{ setAllUser(respone.data)})
      .catch((err)=>{console.log(err)})
   }

   useEffect(()=>{
      getAllUser();
   })

   return (
      <Container className="mt-5 text-center">
         <h1>view User</h1>
         

         {
            allUser? 
            <ListGroup className="mt-5">
               <ListGroup.Item className="mb-3 item-header" >
                  <Row>
                     <Col>username</Col>
                     <Col>email</Col>
                     <Col>phone</Col>
                     <Col>isAdmin</Col>
                     <Col>photo</Col>
                  </Row>
               </ListGroup.Item>
            { 
               allUser.map((item, index)=>{
                  return (
                     <ListGroup.Item>
                        <Row>
                           {item.username ? <Col>{item.username}</Col> : <Col><p>-</p></Col>}
                           {item.email ? <Col>{item.email}</Col> : <Col><p>-</p></Col>}
                           {item.phone ? <Col>{item.phone}</Col> : <Col><p>-</p></Col>}
                           {Boolean(item.isAdmin).toString() ? <Col>{Boolean(item.isAdmin).toString()}</Col> : <Col><p>-</p></Col>}
                           {item.imageProfile ? <Col>{item.imageProfile}</Col> : <Col><p>-</p></Col>}
                        </Row>
                     </ListGroup.Item>
                  )
            })}
         </ListGroup> :
            
            

            <></>
         }


      </Container>
   )
}

export default ViewUser;