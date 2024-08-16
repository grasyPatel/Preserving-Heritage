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
    title: 'TaxBlock Home',
    description: `Need Assistance? Our team of experts are here to help you pay taxes, file returns & stay tax compliant. Seamless Tax Filing Maximise Returns Years of Accuracy & Trust Affordable Pricing Plans What we offer Be it Tax Planning, Tax filings like GST, Income Tax, US Tax, NRI & Expat Taxation, TDS/TCS etc; we offer comprehensive solutions to all the issues related to finances.
`,
    link: require('../../assets/webPages/TaxBlockHome.docx'),
  },
  {
    id: 2,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'TaxBlock About Us',
    description: `Taxblock India Private Limited was founded in 2019 by a group of highly qualified chartered accountants. Our fintech company, based in Pune, Maharashtra, is approved by the Income Tax Department as an E-Return Intermediary. Our team consists of both technological and tax specialists who are developing a "Financial Compliance Ecosystem" for individuals and corporations`,
    link: require('../../assets/webPages/TaxBlock-About-Us.docx'),
  },
  {
    id: 3,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'Anandam Home Page',
    description: `"Build strategies and encourage success" is our motto. If these words resonate with you and you're visiting this site, you've arrived at the right place. We provide wealth and asset management services specifically to assist people and portfolios with fund assets, wealth assets, industry and capital allocation, advisories, analytics and monitoring, strategic investment, and various other tracks of consulting.`,
    link: require('../../assets/webPages/Anandam_Home_Page.docx'),
  },
  {
    id: 4,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'Home Page GrowBiz',
    description: `We make a niche for your brand on the internet and big results happen from every little niche at GrowBiz Marketing Agency. As one of these branches, the Marketing Partner purveys creativity and data-driven strategies to roll your business forward`,
    link: require('../../assets/webPages/Home-Page-GrowBiz.docx'),
  },
  {
    id: 5,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'WeddEdit-Homepage',
    description: `With 9+ years of creating the best wedding videos, we serve clients from across the world including countries like the UK, the USA, and Canada. If you have too much on the plate, then hit us up for the best wedding edits. We work till you are satisfied and take your concerns very seriously. You can focus on your shooting tasks without the stress of editing. We are here for that! We believe in striking a long relationship with you! 
`,
    link: require('../../assets/webPages/WeddEdit-Homepage.docx'),
  },
  {
    id: 6,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'One Pager Arihant Capital.',
    description: `Arihant Capital India leading SEBI & exchange registered broker, trusted by more than 2.0 Lacs plus customers. 
“Create Wealth for you and your loved Ones”.
Arihant Capital has 29 years plus experience in dedicated customer servicing relationship, and wealth creation.
At HNI desk at Arihant we offer best in class and 1to1 dedicated service and take care of their portfolio like our own. 
`,
    link: require('../../assets/webPages/One-Pager-Arihant-Capital..docx'),
  },
  {
    id: 7,
    image: require('../../assets/images/blog1.jpg'),
    time: '07 Nov 2016',
    title: 'ArihantPlus Home Page & Contact Us Page',
    description: `Our experts provide tailored recommendations and dedicated support to help you achieve your financial goals. Trade with confidence and ease, knowing you have the guidance to navigate the markets and maximize your profitability.
`,
    link: require('../../assets/webPages/ArihantPlusHomePage&Contact-Us.docx'),
  },
]

function Webpage() {

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
          <h2 style={{marginTop:'40px'}}>Webpage</h2>
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

export default Webpage;