
import styled from "styled-components";
import { Navigate, Redirect } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../App";
import { createContext } from 'react';
const { Fragment } = require("react")


const FavoritePage = () =>{

   const { auth, setAuth } = useContext(AuthContext);

   {
      !auth ? <Navigate to={'/'}></Navigate> : <></>
   }

   
   return (
      <Fragment>
         <FavoritePageStyle>
            <h1>Hello Favorite</h1>
            
         </FavoritePageStyle>
      </Fragment>
   )
}

const FavoritePageStyle = styled.div`

`


export default FavoritePage;