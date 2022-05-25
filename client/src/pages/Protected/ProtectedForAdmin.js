import { Navigate } from "react-router-dom";

const Protected = (props) => {

  const { isAdmin, children } = props;

  if (isAdmin === false) {
    console.log(isAdmin)
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;