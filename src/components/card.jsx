import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import w4 from "../images/w4.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import w1 from "../images/w1.jpg";
import w2 from "../images/w2.jpg";
import w3 from "../images/w3.jpg";
import img9 from "../images/img9.jpg";

import React, { useState } from "react";

const Cardmanu=()=> {
  const [hover, setHover] = useState(false);
  return (
    <>
    <div className='card1'>
    <Card style={{ width: '18rem' }}>
    <img src={c2}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    <Card style={{ width: '18rem' }}>
    <img src={w4} height={300}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
  <img src={c3}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div className='card2'>
<Card style={{ width: '18rem' }}>
      <img src={w1}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    <img src={w2}/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
  <img src={w3}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>

<div id="big"><img src={img9}/></div>




  <div
    className="card"
    onMouseEnter={() => setHover(true)} // Hover शुरू होते ही state true
    onMouseLeave={() => setHover(false)} // Hover खत्म होते ही state false
  >
    <div className="image-container">
      <img
        src="https://thedecorkart.com/cdn/shop/files/009A2020_165x.jpg?v=1718583769" // Replace with your image URL
        alt="Product"
        className={`product-image ${hover ? "zoom" : ""}`} // Zoom effect class
      />
      {hover && <div className="add-to-cart">Add to Cart</div>} {/* Text on hover */}
    </div>
  </div>

</>
  );
}

export default Cardmanu;