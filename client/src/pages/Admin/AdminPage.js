import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link, Routes, Route, Switch, BrowserRouter, Outlet} from "react-router-dom";
import page from "../index";
const { Fragment } = require("react")

const AdminPage = ()=>{
   // const { path } = useRouteMatch()
   return (
      <Fragment>
         <AdminPageStyle>
            <Container  className="text-center mt-5">
               <Row>
                  <Col>
                     <h1>Admin PAGE</h1>
                  </Col>
               </Row>

               <Row className="mt-5">
                  <Col><Link className='admin-link pt-2 me-4 nav__link mt-2'  to={'/admin/createMovie'}><h4>Movies</h4></Link></Col>
                  <Col><Link className='admin-link pt-2 me-4 nav__link mt-2' to={'/admin/createCinema'}><h4>Cinemas</h4></Link></Col>
                  <Col><Link className='admin-link pt-2 me-4 nav__link mt-2' to={'/admin/createProgram'}><h4>Programs</h4></Link></Col>
                  <Col><Link className='admin-link pt-2 me-4 nav__link mt-2' to={'/admin/users'}><h4>User</h4></Link></Col>
               </Row>
               
            </Container>
            <Outlet></Outlet>
            <div className="bg"></div>
         </AdminPageStyle>
         
      </Fragment>
   )
}

const AdminPageStyle = styled.div`

.bg{
   margin-bottom: 25rem;
}
   h1{
      color: #ffff;
   }

.admin-link{
   color: #BDAD8E;
   text-decoration: none;
}

.item-header{
   background-color: #BDAD8E;
   color: #ffff;
}


`

export default AdminPage;