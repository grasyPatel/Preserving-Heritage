import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import './Clients.css';

import './About.css';

function AppClient() {
  //   const html = 80;
  //   const responsive = 95;
  //   const photoshop = 60;

  return (
    <section id="connections" className="block about-block">
      <Container fluid>
        <div className="title-holder" style={{marginTop:'42px'}}>
          <h1>My Clients</h1>
        </div>

        <Row className="logoCon">
            {/* 7 3 4 5 6 1 2 8*/}
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/TOI.jpg')}/>
                <p className="p-center">Times Of India</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/HT.jpg')}/>
                <p className="p-center">Hindustan Times</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/dfm.jpg')}/>
                <p className="p-center">Dubai Fashion Magazine</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/Tata.jpg')}/>
                <p className="p-center">Tata AIG</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/icici.jpg')}/>
                <p className="p-center">ICICI Bank</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/apple2.jpg')}/>
                <p className="p-center">Apple</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/google.jpg')}/>
                <p className="p-center">Google</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/s-e.jpg')}/>
                <p className="p-center">Essentially Sports</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/AC.jpg')}/>
                <p className="p-center">Arihant Capital</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/fmi.jpg')}/>
                <p className="p-center">Future Market Insights</p>
            </div>
          </Col>
            <Col xs={4} sm={2} className="center">
            <div className="imgCon">
                <Image src={require('../assets/companyLogos/vaibhavJwellers.jpg')}/>
                <p className="p-center">Vaibhav Jewellers</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppClient;