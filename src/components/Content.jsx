import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import './Content.css';

function Content() {
  return (
    <section id="work" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Dummy</h1>
        </div>
        <Row>
          <Col sm={3} className="expConC">
            <Link to="/blog"><h4>1 </h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/webpage"><h4>2</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/social-media-copy"><h4>3</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/email"><h4>4</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/script"><h4>5</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/news-letter"><h4>6</h4></Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Content;
