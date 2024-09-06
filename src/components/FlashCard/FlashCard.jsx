import React from 'react';
import './FlashCard.css'; 
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FlashCard = () => {
  return (
    <Container style={{margin:'10% auto'}}>
      <Row className="flip-container" style={{gap:'50px'}}> 
        <Col sm={4} className="flip">
          <div
            className="front"
            style={{ backgroundImage: `url(https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/50500/67062/Maharana_Pratap_option_Fizdi_Vimanika_Arts__72204.1589018860.jpg?c=2)` }}
          >
            <h1 className="text-shadow">Indian History</h1>
          </div>
          <div className="back">
            <h2>History</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
          </div>
        </Col>
        <Col sm={4} className="flip">
          <div
            className="front"
            style={{ backgroundImage: `url(http://c8.alamy.com/comp/HEENMJ/indian-classical-music-instruments-tabla-harmonium-tamboori-HEENMJ.jpg)` }}
          >
            <h1 className="text-shadow">Indian Music</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
          </div>
        </Col>
        <Col sm={4} className="flip">
          <div
            className="front"
            style={{ backgroundImage: `url(https://bridefeed.com/wp-content/uploads/2021/08/What-is-Indian-dancing-called.jpg)` }}
          >
            <h1 className="text-shadow">Indian Dance</h1>
          </div>
          <div className="back">
            <h2>Angular</h2>
            <p>
              Good tools make application development quicker and easier to
              maintain than if you did everything by hand..
            </p>
          </div>
        </Col>
        {/* Repeat for other horizontal flips */}
      </Row>
    </Container>
  );
};

export default FlashCard;