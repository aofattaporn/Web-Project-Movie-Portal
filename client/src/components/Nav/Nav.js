import {Navbar, NavDropdown, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SignInButton from '../Button/SignIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { useContext } from 'react';
import { AuthContext, UserContext } from '../../App';
import { useState } from 'react';
 
const Navigation=()=>{

   const {auth, setAuth} = useContext(AuthContext);
   const {user, setUser} = useContext(UserContext);
   const navigate = useNavigate();
   const [ search, setSearch ] = useState("");

   const handleLogout = () => {
      localStorage.removeItem("user");
      console.log(localStorage.getItem("user"));
      setAuth(null);
   }

   const onChangeSearch = (event) =>{
      event.preventDefault();
      setSearch(event.target.value);
   }

   return (

   <NavigationBar> 
      <Navbar className='nav ps-5'  expand="lg" variant="dark">
         <Container fluid>
            <Navbar.Brand className='fw-5 pt-2 nav__band'>
               <Link className='pt-2 me-4 nav__link mt-2' to={'/'}> <img src={require("../../assets/icons/logo2.png")} alt="img3" width={"100rem"}/> </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

      {/*------------------------------------------- Collaps --------------------------------------------------------------- */}

               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0 " style={{ maxHeight: '100px' }} navbarScroll >
                     <Link className='pt-2 me-4 nav__link mt-2' to={'/'}> HOME </Link>
                     <Link className='pt-2 me-4 nav__link mt-2' to={'/movies'}> MOVIES </Link>
                     <Link className='pt-2 me-4 nav__link mt-2' to={'/cinemas'}> CINEMAS </Link>
                     <Link className='pt-2 me-4 nav__link mt-2' to={'/promotions'}> PROMOTIONS </Link>
                     <NavDropdown className='Dropdown mt-2' variant="dark" title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item ><Link className='pt-2 me-4 nav__admin' to={'/createmovie'}> Create Movies </Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link className='pt-2 me-4 nav__admin' to={'/createCinema'}> Create Cinemas </Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link className='pt-2 me-4 nav__admin' to={'/createProgram'}> Create programs </Link></NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
                  <Nav>

                  <Form className="search d-flex  mb-2">
                     <FormControl
                        type={"search"}
                        placeholder={"typing movie name"}
                        className={"bar"}
                        aria-label={"Search"}
                        onChange={onChangeSearch}
                        value={search}
                     />
                     <Link to={'/movies'} state={search} ><Button><FontAwesomeIcon className='icon-searc2 mt-2' icon={faSearch}></FontAwesomeIcon></Button></Link>
                  </Form>
                  <div> <SignInButton/> </div> 

      
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

   .search .bar{
      background-color: transparent;
      border: 0;
      outline: none;
      color: #BDAD8E;
      border-bottom: #BDAD8E 2px solid;
      border-radius: 0;
   }


   .search .bar:focus{
      border: 0;
      outline: none;
      color: #BDAD8E;
      border-bottom: #BDAD8E 2px solid;
   }

   .search button {
      background-color: transparent;
      border: 0;
   }

   .icon-search{
      color: #BDAD8E;
   }

   .basic-nav-dropdown{
      background-color: transparent;
   }



   /* ------------------ nav-dropdown-admin ------------------------------- */

   .Dropdown{
      color: #ffff;
   }

   .nav__admin{
      color: #C9B898;
   }

   .button-logout{
      width: 100%;
      height: 2rem;
      background-color: #BDAD8E;
      color: #ffff;
   }

`;

export default Navigation;