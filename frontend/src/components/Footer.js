import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../src/components/css/Footer.css';

const Footer = () => {
  return ( <footer className="footer">
    <Container >
        <Row>
            <Col className='text-center py-3'>
                Warehouse Managment
            </Col>
        </Row>
    </Container>
  </footer>

    
  )
}

export default Footer