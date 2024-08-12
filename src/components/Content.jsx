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
          <h1>Work Done By Me</h1>
        </div>
        <Row>
          <Col sm={3} className="expConC">
            <Link to="/blog"><h4>Blog and Article</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/webpage"><h4>Webpage</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/social-media-copy"><h4>Social Media Copy</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/email"><h4>Email</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/script"><h4>Script</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/news-letter"><h4>News Letter</h4></Link>
          </Col>
          <Col sm={3} className="expConC">
            <Link to="/preview-analysis"><h4>Preview Analysis</h4></Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Content;
