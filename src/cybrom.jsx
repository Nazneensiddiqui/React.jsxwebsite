import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cybrom=()=>{
    return(
        <>
<Container>
      <Row>
        <Col md={1} className='bg-dark' style={{ height:"200px", border:"3px solid black"}}>well</Col>
        <Col  md={2} className='bg-danger'style={{ height:"200px" ,border:"3px solid black"}}>come</Col>
        <Col  md={4} className='bg-varnig'style={{ height:"200px", border:"3px solid black"}}>to</Col>
        <Col  md={5} className='bg-primary'style={{ height:"200px",border:"3px solid black"}}>Cybrom</Col>
      </Row>

      <Row>
        <Col md={2} className='bg-primary' style={{ height:"200px" , border:"3px solid black"}}>we are</Col>
        <Col  md={2} className='bg-secondary' style={{ height:"200px" , border:"3px solid black"}} >are</Col>
        <Col  md={5} className='bg-danger' style={{ height:"200px" , border:"3px solid black"}}>react</Col>
        <Col  md={3} className='bg-dark' style={{ height:"200px" , border:"3px solid black"}}>student</Col>
      </Row>
  
      </Container>

        </>
    )
}
export default Cybrom;