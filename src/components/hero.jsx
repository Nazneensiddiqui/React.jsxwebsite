import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/img6.jpg";
import b2 from "../images/img7.jpg";
import b3 from "../images/img8.jpg";

const Hero=()=>{
    return(
        <>
<div className='carou'>
<Carousel>
      <Carousel.Item>
        <img src={b1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
        </>
    )
}
export default Hero;