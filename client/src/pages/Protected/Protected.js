import { Navigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Protected = (props) => {

  const { isLoggedIn, children } = props;



  const timeout=(delay)=> {
    console.log("deeley");
    return new Promise( res => setTimeout(res, delay) );
  }

  const Progress = () =>{
    timeout(5000);
    return 
      ( <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>)
  
  }

  if (!isLoggedIn) {
    Progress();
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;