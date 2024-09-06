import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import './MadhyaPradesh.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MadhyaPradesh = () => {
  // slide to top function
  useEffect(() => {
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    goToTop();
  }, []);

  var heroData = [
    {
      id: 1,
      image: require("../../assets/MP/mpDance1.jpg"),
      title: "Dance",
      description: `Gwalior Gharana: One of the oldest and most prestigious schools of Hindustani classical music, known for Dhrupad and Khayal singing.
Tansen Music Festival: Held in Gwalior to honor the legendary musician Tansen, a key figure in Indian classical music.
Classical Dance: Kathak is performed in many parts, with influences from the Mughal era.
`,
    },
    {
      id: 2,
      image: require("../../assets/MP/Mela.jpg"),
      title: "Fairs and Festivals",
      description: `Khajuraho Dance Festival: Celebrates classical dance forms like Kathak, Bharatanatyam, and Odissi, held against the backdrop of the famous Khajuraho temples.
Teej and Lokrang: Festivals celebrating local folk culture, with dance, music, and performances.
Bhagoria Haat Festival: A unique tribal festival where young people choose their life partners, celebrated by the Bhil and Bhilala tribes.
`,
    },
    
  ];

  return (
    <div>
      <section className="hero-block">
        <Carousel controls={true} indicators={true} >
          {heroData.map((hero) => {
            return (
              <Carousel.Item  key={hero.id}>
                <img
                style={{opacity:'0.5'}}
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
      <section>
        <h1 className="foodcss">
          Taste of Madhya Pradesh
        </h1>

        <Container style={{margin:'10% auto'}}>
      <Row className="flip-container" style={{gap:'50px'}}> 
        <Col sm={4} className="flip">
          <div
            className="front"
            style={{ backgroundImage: `url(https://thumbs.dreamstime.com/b/poha-jalebi-22124603.jpg)` }}
          >
            <h1 className="text-shadow">Pohe Jalebi</h1>
          </div>
          <div className="back">
            <h2>Poha Jalebi</h2>
            <p>
            Indore is famous for its Poha-Jalebi combination. It's a staple breakfast item across the state, but the unique blend of sweet and savory makes it iconic in Madhya Pradesh
            </p>
          </div>
        </Col>
        <Col sm={4} className="flip">
          <div
            className="front"
            style={{ backgroundImage: `url(https://i.ytimg.com/vi/nfpggZcnHpY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCX7-TPYc98cLkVqtXKhqf7pe6EwA)` }}
          >
            <h1 className="text-shadow">Dal Bafla</h1>
          </div>
          <div className="back">
            <h2>Dal Bafla</h2>
            <p>
            Dal Bafla is slightly softer than Rajasthan’s Baati because it is boiled before being baked. It's especially popular in the Malwa region, where it's often served with churma (a sweet, crumbled bread dish).
            </p>
          </div>
        </Col>
        <Col sm={4} className="flip">
          <div
            className="front"
            style={{ backgroundImage: `url(https://www.boldsky.com/img/2021/03/img-20210322-wa0001-1616414957.jpg)` }}
          >
            <h1 className="text-shadow">Malpua</h1>
          </div>
          <div className="back">
            <h2>Malpua</h2>
            <p>
            Malpua is a festive sweet, often prepared during Holi in Madhya Pradesh. The combination of crispy edges and soft interiors makes it a favorite dessert.
            </p>
          </div>
        </Col>
        {/* Repeat for other horizontal flips */}
      </Row>
    </Container>
      </section>
    </div>
  );
};

export default MadhyaPradesh;
