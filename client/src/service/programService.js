import axios from 'axios'; 

const getProgramByDate =(body)=>{

   console.log(body);
   return axios.post('http://localhost:4000/programs/datetime', {date: body});
}



const serviceProgram = {getProgramByDate}

export default serviceProgram;