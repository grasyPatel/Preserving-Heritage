import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import "./Clients.css";

import "./About.css";

function AppClient() {
  //   const html = 80;
  //   const responsive = 95;
  //   const photoshop = 60;

  return (
    <section id="connections" className="block about-block">
      <Container fluid>
        <div className="title-holder" style={{ marginTop: "42px" }}>
          <h1>My Clients</h1>
        </div>

        <Row className="logoCon">
          {/* 7 3 4 5 6 1 2 8*/}
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/TOI.jpg")} />
            </div>
            <p className="p-center">Times Of India</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/HT.jpg")} />
            </div>
            <p className="p-center">Hindustan Times</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/dfm.jpg")} />
            </div>
            <p className="p-center">Dubai Fashion Magazine</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/Tata.jpg")} />
            </div>
            <p className="p-center">Tata AIG</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/icici.jpg")} />
            </div>
            <p className="p-center">ICICI Bank</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/apple2.jpg")} />
            </div>
            <p className="p-center">Apple</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/google.jpg")} />
            </div>
            <p className="p-center">Google</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon" style={{display:'flex',justifyContent:'center'}}>
              <Image style={{width:'100px'}} src={require("../assets/companyLogos/s-e.jpg")} />
            </div>
            <p className="p-center">Essentially Sports</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/arihantcapital.png")} />
            </div>
            <p className="p-center">Arihant Capital</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image src={require("../assets/companyLogos/fmi.jpg")} />
            </div>
            <p className="p-center">Future Market Insights</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image
                src={require("../assets/companyLogos/vaibhavJwellers.jpg")}
              />
            </div>
            <p className="p-center">Vaibhav Jewellers</p>
          </Col>
          <Col xs={4} sm={2} className="center">
            <div className="imgCon">
              <Image
                src={require("../assets/companyLogos/indiaVoyage.png")}
              />
            </div>
            <p className="p-center">India Voyage</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppClient;
