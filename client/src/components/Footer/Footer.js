import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () =>{

   return (
      <FooterStyle> 
         <section className="footer">
            <footer className="text-center text-white">
               <div className="container p-4 pb-0 d-flex justify-content-start">
                  <section className="d-flex flex-column me-5  mb-3" >
                     <h4>Xtra</h4>
                     <Link to ="/"><h6>HomePage</h6></Link>
                     <Link to ="/movies"><h6>movies</h6></Link>
                     <Link to ="/cinemas"><h6>cinemas</h6></Link>
                  </section>

                  <section className="d-flex flex-column me-5 ms-5 mb-3 w-50" >
                     <h5>Contect</h5>
                     <Link to ="https://www.facebook.com/aof.attapon"><h6>FaceBook</h6></Link>
                     <Link to ="/"><h6>mail : <span>Aofattaporn@hotmail.com</span></h6></Link>
                  </section>

                  <section className="d-flex flex-column mb-3" >
                     <h5>Address</h5>
                     <h6>King Mongkut’s University of Technology Thonburi (KMUTT)
126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand</h6>
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
   box-shadow: rgba(151, 121, 89, 0.25) 0px 14px 28px, rgba(151, 121, 89, 0.22) 0px 10px 10px;
}

.footer h4, .footer h5{
   text-align: end;
}
.footer h6{
   color: #ffff;
   text-align: end;
   text-decoration: none;
}
.footer h6:hover{
   color:  #C9B898;
}

`

export default Footer; 