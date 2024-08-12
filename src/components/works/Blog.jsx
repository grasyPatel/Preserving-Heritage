import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

const blogData = [
  {
    id: 1,
    image: require('../../assets/images/blog1.jpg'),
    time: '10 Nov 2016',
    title: 'A Comprehensive Guide to the London Stock Exchange',
    description: `The London Stock Exchange, or LSE, is one of the most important financial markets in the world. Located in the heart of London's financial district, the LSE serves as the main stock exchange for companies in the United Kingdom. Every day, billions of dollars worth of stocks, bonds and other securities are traded within its market.`,
    link: require('../../assets/blogs/a-compri.docx'),
  },
  {
    id: 2,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'The 5 Best City Bikes for Your Daily Commute in 2024',
    description: `A city bike is a bicycle designed for urban transportation. It has features that make it comfortable and convenient for riding around town. City bikes usually have an upright seating position. They also have wider tyres and fenders to handle road debris and potholes. The frames are often made of durable steel or aluminium alloy to withstand bumpy city streets.`,
    link: require('../../assets/blogs/the-5-bikes.docx'),
  },
  {
    id: 3,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'A Comprehensive Guide to ICICI Bank',
    description: `ICICI Bank is one of the leading private sector banks in India. It was established in 1994 as India’s Industrial Credit and Investment Corporation. Over the years, it has become a full-service universal bank offering various financial products and services.`,
    link: require('../../assets/blogs/ICICI-Bank.docx'),
  },
  {
    id: 4,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'CoinSpot Exposed',
    description: `CoinSpot has been one of the largest cryptocurrency exchanges in Australia since 2013. As one of the earliest established platforms, it has established itself as the "most trusted" place to buy, sell, and trade digital currencies.`,
    link: require('../../assets/blogs/CoinSpot-Exposed.docx'),
  },
  {
    id: 5,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'Shraddha Khapra - Success Story',
    description: `What happens when a girl is born in a village? Especially in a place like Haryana? Well, she doesn’t get to study much and is married as soon as she reaches 20. This was the fate written for Shraddha Khapra, born in a small village in Haryana. But her story didn’t end there.
`,
    link: require('../../assets/blogs/Shraddha-Khapra-Success Story.docx'),
  },
  {
    id: 6,
    image: require('../../assets/images/blog1.jpg'),
    time: '15 Nov 2016',
    title: `SEBI's Saa₹thi 2.0 App`,
    description: `Recently, SEBI launched the Saa₹thi 2.0 app which is a much-improvised version in comparison to the earlier versions. This step portrays SEBI's dedication on personal finance for investors`,
    link: require('../../assets/blogs/sebi.docx'),
  },
  {
    id: 7,
    image: require('../../assets/images/blog1.jpg'),
    time: '15 Nov 2016',
    title: `Bitcoin Dominance `,
    description: `Bitcoin is the most important asset in the blockchain world, being the beginning, and the leading crypto. Bitcoin dominance is a numerical index of this behemoth impact, measurable as a ratio metric. 
BTC dominance is calculated as the percent value of Bitcoin market capitalization with the market cap of all altcoins combined. This value fluctuates constantly in a volatile crypto economy. So, a quick look at the percentage offers a generic idea of the crypto market, and where it stands at the moment.`,
    link: require('../../assets/blogs/Bitcoin-Dominance.docx'),
  },
]

function Blog() {

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

  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2 style={{marginTop:'40px'}}>Latest Blog and Article</h2>
          {/* <div className="subtitle">get our latest news from blog</div> */}
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id} style={{marginBottom:'40px'}}>
                  <div className='holder'>
                    <Card>
                      {/* <Card.Img variant="top" src={blog.image} /> */}
                      <Card.Body>
                        {/* <time>{blog.time}</time> */}
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description.substring(0,110) + "..."}
                        </Card.Text>
                        <a href={blog.link} download className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default Blog;