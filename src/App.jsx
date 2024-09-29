import Cybrom from "./cybrom.jsx";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hero from "./components/hero.jsx";
import Cardmanu from "./components/card.jsx";



const App=()=>{
  return(
    <>

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">THE DECORE KART</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">New & Trending</Nav.Link>
            <Nav.Link href="#features">Decor</Nav.Link>
            <Nav.Link href="#pricing"> Kitchen & Dining</Nav.Link>
            <Nav.Link href="#pricing">Lighting</Nav.Link>
            <Nav.Link href="#pricing">Wall Decor</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<Hero/>
<Cardmanu/>

 
  </>
 

  )
}
export default App;