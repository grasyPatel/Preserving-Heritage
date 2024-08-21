import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

const blogData = [
  {
    id: 1,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `News Letter`,
    description: `The Nifty 50 has crossed the 24,000 mark, reflecting a significant milestone in the Indian stock market. This surge has boosted investor confidence and marks a period of cautious optimism in the market.  But before we delve into the possible scenarios and strategies that this historic milestone brings, let’s first explore the detailed market insights for this week!`,
    link: require("../../assets/newsLetter/Newsletter-7.docx"),
  },
  {
    id: 2,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `SEBI's Saathi 2.0 App`,
    description: `SEBI's Saathi 2.0 app is developed to provide investors useful information into the securities market. This step aims to aid the investors by offering them tools and calculators required to take right investment decisions and effective financial planning. Moreover, it portrays the significance of apparently unbiased information in this misleading landscape of social media. Here’s an in-depth look at what the Saathi 2.0 app brings to the table and its implications for investors and the market.`,
    link: require("../../assets/newsLetter/SEBI.docx"),
  },
  {
    id: 3,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `27 April Newsletter`,
    description: `India's pharma exports surged 9.67% to ₹2.79 lakh crore in FY 2024.
🏦 RBI mandates ARCs to hold a minimum capital of ₹300 cr with new master directions.
🚗 Macquarie's Vertelo, an EV financing firm, debuts in India with a ₹15,000 crore investment.
📈 India's Composite PMI hits a 14-year high at 62.2 in April: HSBC PMI Flash.
`,
    link: require("../../assets/newsLetter/27-April.docx"),
  },
  {
    id: 4,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Press Release Codeavour 2022`,
    description: `Ahmedabad October 10 2022 :  Codeavour 2022 (4th Edition) is the biggest and well recognized Global AI & Coding Competition hosted annually by STEMpedia at an International Level for students of Age Group 7-18 years, where they make innovative projects in PictoBlox for the future. The Event is jointly hosted with Stempedia and ARTWORK.
`,
    link: require("../../assets/newsLetter/Press.docx"),
  },
];

function NewsLetter() {
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
          <h2 style={{ marginTop: "40px" }}>News Letter</h2>
          {/* <div className="subtitle">get our latest news from blog</div> */}
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id} style={{ marginBottom: "40px" }}>
                <div className="holder">
                  <Card>
                    {/* <Card.Img variant="top" src={blog.image} /> */}
                    <Card.Body>
                      {/* <time>{blog.time}</time> */}
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        {blog.description.substring(0, 200) + "..."}
                      </Card.Text>
                      <a href={blog.link} download className="btn btn-primary">
                        Read More{" "}<i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default NewsLetter;
