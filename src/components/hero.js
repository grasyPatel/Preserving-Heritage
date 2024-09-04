import Carousel from "react-bootstrap/Carousel";

import Content from "./Content";
import { Row, Col, Container } from "react-bootstrap";
import "./hero.css";
import AppServices from "./services";
import Table from "./Table";
import AppTestimonials from "./testimonials";

var heroData = [
  {
    id: 1,
    image: require("../assets/heritage-culture/h1.jpg"),
  },
  {
    id: 2,
    image: require("../assets/heritage-culture/h2.jpg"),
  },
  {
    id: 3,
    image: require("../assets/heritage-culture/h3.jpg"),
  },
];

function AppHero() {
  return (
    <div>
      <section className="hero-block">
        <Carousel controls={true} indicators={false}>
          {heroData.map((hero) => {
            return (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"slide " + hero.id}
                />
                <Carousel.Caption>
                  <h2>{hero.title}</h2>
                  <p>{hero.description}</p>
                  {/* <a className="btn btn-primary" href={hero.link}>
                    Learn More <i className="fas fa-chevron-right"></i>
                  </a> */}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
      <section id="home" className="hero-block">
        <Container className="MainHeroContainer">
          <Row>
            <Col sm={6} className="LeftCon">
              <div>
                <h2 className="Name">Indian Cultural Heritage</h2>
                <h4 className="Proffesion">
                A vibrant tapestry of traditions, art, and beliefs spanning millennia.
                </h4>
              </div>
            </Col>

            <Col sm={6} className="RightCon">
              {/* image div  */}
              <div className="ImgdivforPic">
                <img
                  className="mainImg"
                  src={require("../assets/heritage-culture/hero2.jpg")}
                  alt="riya-mishra"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AppServices /> {/* services == art, dance, */}
      <Table />
      {/* <AppTestimonials /> */}
      <Content /> {/*content = dummy, */}
    </div>
  );
}

export default AppHero;
