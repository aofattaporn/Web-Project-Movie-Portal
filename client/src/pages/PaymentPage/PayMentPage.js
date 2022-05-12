import { useState, useEffect } from "react";
import { Fragment } from "react";
import { useLocation, useParams } from "react-router-dom";
import serviceProgram from "../../service/programService";
import components from "../../components";
import styled from "styled-components";

const PayMentPage = () =>{

   const { state } = useLocation();
   const {program_id}  = useParams();

   // manage state
   const [data, setData] = useState({});
   
   const getAllData = (id)=>{
      serviceProgram.getAllDataByProgramId(id)
      .then((response)=>{setData(response.data)})
      .catch(err => {console.log(err)})
   }

   useEffect(()=>{
      getAllData(program_id);
   }, [program_id])

 
   return (
      <Fragment>
         <PayMentPageStyle>
            {
               (data.cinema && data.movie && state.seatsReserve && state.priceReserve) ?
               <>
                  <components.MovieTap  
                     cinema={data.cinema} 
                     movie={data.movie} >
                  </components.MovieTap>
               
                  <components.BuyTap
                     seatsReserve= {state.seatsReserve}
                     priceReserve= {state.priceReserve}
                  >
                  </components.BuyTap>
            </> : 
            <>
            </>
            }
 
         </PayMentPageStyle>
      </Fragment>
   )
}


const PayMentPageStyle = styled.div`

`

export default PayMentPage;
