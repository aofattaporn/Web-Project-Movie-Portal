const { Link, useParams } =  require('react-router-dom')


const FindByCinema =()=>{

   let { cinema_id } = useParams();

   return <h1>FindByCinema {cinema_id}</h1>
}

export default FindByCinema;