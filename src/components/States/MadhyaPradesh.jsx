import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";

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
      image: require("../../assets/MP/dance3.jpg"),
      title: "Dance",
      description: `Gwalior Gharana: One of the oldest and most prestigious schools of Hindustani classical music, known for Dhrupad and Khayal singing.
Tansen Music Festival: Held in Gwalior to honor the legendary musician Tansen, a key figure in Indian classical music.
Classical Dance: Kathak is performed in many parts, with influences from the Mughal era.
`,
    },
    {
      id: 2,
      image: require("../../assets/MP/dance.jpeg"),
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
        <Carousel controls={true} indicators={true}>
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
    </div>
  );
};

export default MadhyaPradesh;
