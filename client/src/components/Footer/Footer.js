import styled from "styled-components";

const Footer = () =>{

   return (
      <FooterStyle> 
         <section className="footer">
            <footer className="text-center text-white">
               <div className="container p-4 pb-0">
                  <section className="">
                  <p className="d-flex justify-content-center align-items-center">
                     <span className="me-3">Register for free</span>
                     <button type="button" className="btn btn-outline-light btn-rounded">
                        Sign up!
                     </button>
                  </p>
                  </section>
               </div>
               <div className="text-center p-3" style={ {backgroundColor: "rgba(0, 0, 0, 0.2)"} }>
                  © 2020 Copyright:
               </div>
            </footer>
         </section>
      </FooterStyle>

   );
}

const FooterStyle = styled.div`

.footer{
   margin-top: 5rem;
}

`

export default Footer; 