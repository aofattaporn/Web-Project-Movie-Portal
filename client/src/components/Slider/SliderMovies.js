
import './SliderMovies.css'
import "react-multi-carousel/lib/styles.css";
import { Container} from 'react-bootstrap';
import styled from 'styled-components';
import CarouselCard from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const SliderMovies=(props)=>{

  // const {title, image, released, runtime, genre} = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

 
   return (

      <div className='carouselmovies'> 
        <SliderStyle> 
          <Container>
            <CarouselCard responsive={responsive}>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </CarouselCard>;
          </Container>
        </SliderStyle>
      </div>
      ); 
}

const SliderStyle = styled.div`


`

export default SliderMovies;