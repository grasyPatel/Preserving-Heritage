import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";

function AppServices() {
  return (
    <section id="experience" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Art, Music, and Dance</h1>
        </div>
        <Row>
          <Col sm={4} className="expCon">
            {/* <div className="icon">
                    <i className={services.icon}></i>
                  </div> */}
            <h3>Art</h3>
            <p>
              India boasts a rich and diverse artistic tradition, from ancient
              cave paintings to contemporary sculptures. Notable forms include
              Mughal miniature paintings, Tanjore paintings, and intricate
              rangoli patterns
            </p>
          </Col>
          <Col sm={4} className="expCon">
            {/* <div className="icon">
                    <i className={services.icon}></i>
                  </div> */}
            <h3>Music</h3>

            <p>
              Indian music is characterized by its intricate melodies, rhythmic
              complexities, and diverse instruments. Classical music traditions
              like Hindustani and Carnatic music have been passed down through
              generations
            </p>
          </Col>
          <Col sm={4} className="expCon">
            <h3>Dance</h3>
            <p>
              Indian dance forms are renowned for their graceful movements,
              expressive gestures, and intricate costumes. Classical dance
              styles like Bharatanatyam, Odissi, and Kathak are a testament to
              the country's artistic prowess.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
