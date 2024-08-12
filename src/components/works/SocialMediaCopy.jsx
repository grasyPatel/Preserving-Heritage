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
    title: 'Revealing the Secrets of Long Term Capital Gains',
    description: `Long-term capital increases are a subject that frequently covers itself in secret. While ventures offer the potential for significant monetary development, the duty suggestions can appear perplexing. Understanding the complexities of long-term capital increase charges is substantial for any financial backer hoping to augment their economic returns. `,
    link: require('../../assets/socialMediaCopy/Revealing-the-Secrets-of-Long-Term-Capital-Gains_ A-Complete-Duty-Guide.docx'),
  },
  
]

function SocialMediaCopy() {

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
          <h2 style={{marginTop:'40px'}}>Social Media Copy</h2>
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

export default SocialMediaCopy;