import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/site-content/CroppedPfp.jpeg";
import './About.css';

function AppAbout() {
  // const html = 80;
  // const responsive = 95;
  // const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h1>About Me</h1>
          {/* <div className="subtitle">learn more about us</div> */}
        </div>
        <Row>
          <Col sm={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <Image className="pfpCon" src={img1} />
          </Col>
          <Col sm={8} className="aboutTextCon">
            <h3 className="AboutName">RIYA MISHRA</h3>
            <h4>Content Writer | Brand Strategist</h4>
            <p>
              As a senior content writer, I bring extensive experience of 9
              years and a proven track record of creating captivating and
              high-quality content. I have good records driving engagement
              through my content . My ability to lead and mentor teams makes me
              as a valuable asset in delivering impactful content strategies.I
              have received an opportunity to work with <b className="boldC">Times of India, Dubai
                Fashion Magazine, ICICI Bank, Apple, Unacademy, Network 18 , Tata
                Aig, Google</b> etc. I am also a founder of Black Tie Events where I
              am no longer working.</p>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p> */}
            {/* <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Photoshop</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
