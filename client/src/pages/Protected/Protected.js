import { Navigate } from "react-router-dom";

const Protected = (props) => {

const { isLoggedIn, children } = props;

 if (!isLoggedIn) {
   return <Navigate to="/" replace />;
 }
 return children;
};
export default Protected;