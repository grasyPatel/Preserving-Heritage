import Carousel from 'react-bootstrap/Carousel';

import AppServices from './services';
import AppAbout from './about';
import Content from './Content';
import AppContact from './contact';
import AppClient from './Clients';

var heroData = [
  {
    id: 1,
    image: require('../assets/site-content/cr1.jpg'),
  },
  // {
  //   id: 2,
  //   image: require('../assets/site-content/cr2.jpg'),
  //   title: 'Start Your Future Financial Plan',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
  //   link: 'https://www.facebook.com'
  // },
]

function AppHero() {
  return (
    <div>
      <section id="home" className="hero-block">
       <Carousel controls={false} indicators={false}>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  {/* <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>              */}
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
     
     <AppAbout />
     <AppServices /> {/* services == experience */}
     <Content /> {/*content = works */}
     { /* AppClient companines i have worked with */}
     <AppClient /> 
     <AppContact />
    </div>
  );
}

export default AppHero;

