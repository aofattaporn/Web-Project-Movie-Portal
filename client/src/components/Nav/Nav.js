import {Navbar, NavDropdown, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInButton from '../Button/SignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
 
const Navigation=()=>{

   return (

   <NavigationBar> 
      <Navbar className='nav ps-5'  expand="lg" variant="dark">
         <Container fluid>
            <Navbar.Brand className='fw-5 pt-2 nav__band'><h1>XTra</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

      {/*------------------------------------------- Collaps --------------------------------------------------------------- */}

               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll >
                     <Link className='pt-2 me-4 ms-3 nav__link' to={'/'}> HOME </Link>
                     <Link className='pt-2 me-4 nav__link' to={'/movies'}> MOVIES </Link>
                     <Link className='pt-2 me-4 nav__link' to={'/cinemas'}> CINEMAS </Link>
                     <Link className='pt-2 me-4 nav__link' to={'/promotions'}> PROMOTIONS </Link>
                     <NavDropdown className='Dropdown' variant="dark" title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item ><Link className='pt-2 me-4 nav__admin' to={'/createmovie'}> Create Movies </Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link className='pt-2 me-4 nav__admin' to={'/createCinema'}> Create Cinemas </Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link className='pt-2 me-4 nav__admin' to={'/createProgram'}> Create programs </Link></NavDropdown.Item>

                     </NavDropdown>
                  </Nav>
                  <Nav>
                     <Form className="d-flex">
                        <FormControl
                           type="search"
                           placeholder="Search"
                           className="me-2 nav__input"
                           aria-label="Search"
                        />
                        <Button className="me-2 fa fa-search nav__search">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>

                        </Button>
                     </Form>
                     <div>
                        <SignInButton/>
                     </div>

                  </Nav>
               </Navbar.Collapse>
         </Container>
      </Navbar>
   </NavigationBar>
   )
}


const NavigationBar = styled.div`

   .nav{
   background-color: #17130A;
   }

   /* ------------------ nav-logo ------------------------------- */

   .nav__band h1{
      color: #ffff;
      font-weight: bold;
      font-size: 3rem;
   }

   .nav__band h1:hover{
      color: #C9B898;
      font-weight: bold;
   }

   /* ------------------ nav-logo ------------------------------- */

   .nav__link{
      color: #ffff;
      text-decoration: none;
      font-size: 1.2rem;
   }

   .nav__link:hover{
      color: #C9B898;
      font-weight: bold;
   }

   .nav__link:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #C9B898;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
   }

   .nav__link:hover:after{
      transform: scaleX(1);
      transform-origin: bottom left;
   }

   .nav__input{
      background-color: transparent;
      width: 400px;
      border: 0;
      border-bottom: 2px solid #C9B898;

   }

   .nav__input:focus{
      background-color: transparent;
      color: #C9B898;
      outline: none;
   }

   .nav__search{
      background-color: transparent;
      border: 0;
   }
   .nav__search:hover,.nav__search:focus {
      background-color: #C9B898;
   }


   /* ------------------ nav-dropdown-admin ------------------------------- */

   .Dropdown{
      color: #ffff;
   }

   .nav__admin{
      color: #C9B898;
   }

`;

export default Navigation;