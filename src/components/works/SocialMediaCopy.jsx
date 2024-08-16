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

  {
    id: 2,
    image: require('../../assets/images/blog1.jpg'),
    time: '10 Nov 2016',
    title: `A CEO’s Guide To Balancing Risks and Opportunities`,
    description: `After spending a fairly long time in the industry, I think it’s pretty safe to say that I might have learned a thing or two about what matters the most for an organization to succeed.I learned the greatest business lessons, the day I realized that my duties go beyond being a leader. And here I am, to share with you what no prestigious degree would teach. 
`,
    link: require('../../assets/socialMediaCopy/A-CEO’s-Guide.docx'),
  },

  {
    id: 3,
    image: require('../../assets/images/blog1.jpg'),
    time: '10 Nov 2016',
    title: 'LinkedIn Post How to appear first on search engines',
    description: `Businesses today must have an edge to appear different and unique in this highly competitive ambience. Search engine searches play a major role in achieving this. Appearing at the top provides these businesses with better visibility, generates significant amount of leads and drives traffic. However, with countless organizations aiming for the top spot can make this difficult. So how do you ensure that you achieve the top position? We are here to help you.`,
    link: require('../../assets/socialMediaCopy/LinkedIn-Post.docx'),
  },

  {
    id: 4,
    image: require('../../assets/images/blog1.jpg'),
    time: '10 Nov 2016',
    title: 'Allshore Technologies Pvt. Ltd.',
    description: `Are you someone who believes in remote work, and virtual staffing or do you belong to the Dinosaur era?😐 Don’t get us wrong. You can obviously have your view and strategies to grow your business. But, the #growth would be missing in 2024. Let us tell you why.
`,
    link: require('../../assets/socialMediaCopy/Allshore-Technologies-Pvt..docx'),
  },

  {
    id: 5,
    image: require('../../assets/images/blog1.jpg'),
    time: '10 Nov 2016',
    title: 'Purple Wagon',
    description: `Why Strategic Marketing is Essential in 2024 5 Tips to Boost Your Business’s Marketing in 2024 Why Your Business Needs Digital Marketing Services Now How to Effectively Manage Social Media for Your Brand Why SEO is the Trendy Topic in 2024 How to Engage Your Audience on LinkedIn 	10 Reasons Your Startup is Failing and How to Fix It	The Future of Social Media in 2024 -	Improve Your Digital Marketing Today	How to Build Your Personal Brand?
`,
    link: require('../../assets/socialMediaCopy/Purple-Wagon.docx'),
  },

  {
    id: 6,
    image: require('../../assets/images/blog1.jpg'),
    time: '10 Nov 2016',
    title: 'Strategic Approaches for CEOs ',
    description: `The difference between a quarter-winning CEO and the one who does not is: time. There’s no better time than now to convert potential sales into tangible deals because if not now, when? Some deals do take their own sweet time, but if a significant amount of your deals are stuck in limbo, it’s your lucky day today! Because I’ll share with you 4 strategic approaches that quarter-winning CEO’s have adapted to convert deals in the pipeline into sure things. `,
    link: require('../../assets/socialMediaCopy/Strategic-Approaches-for-CEO.docx'),
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