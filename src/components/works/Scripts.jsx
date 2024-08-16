import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";

const blogData = [
  {
    id: 2,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Facetime Interview with Mr. Srinivas Mani Iyer`,
    description: `Header: (0:01 - 4:02 )  Mr. Iyer talks about the mammoth feats he has achieved in his professional life. Footer: (0:10 - 4:02) His journey spans from learning KYC/AML to automating audit systems (0:10 - 2:29). He contributed to SSA and CIMA audits, ensuring compliance success (2:29 - 4:02).
`,
    link: require("../../assets/scripts/Mr-Srinivas-Mani-Iyer.docx"),
  },
  {
    id: 3,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Facetime Interview with Mr. Manoj Kumar Jharbade`,
    description: `Header (3:24 - 4:30): FaceTime with Leaders - An initiative by World Development Corporation.
Footer (3:24 - 4:30) FaceTime with Leaders serves as a platform for industry titans (3:24- 3:40) Convening visionaries to inspire other Leaders (3:41 - 3:48) We distill the multi-decadal learnings of industry leaders (3:49 - 3:55) Bringing together a community of globally eminent personalities( 3:56 - 4:03) Assist everyone by identifying and nurturing the trade secrets that are proven success formulas (4:04- 4:22) Establishing a knowledge-sharing community (4:23 - 4:30)
`,
    link: require("../../assets/scripts/Mr-Manoj-Kumar-Jharbade.docx"),
  },
  {
    id: 4,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Facetime Interview with Mr. Kuppuswamy narasimhan`,
    description: `Header (1:29 – 2:28): FaceTime with Leaders - An initiative by World Development Corporation.
Footer (1:29 – 2:28) FaceTime with Leaders serves as a platform for industry titans (1:29- 1:40) Convening visionaries to inspire other Leaders (1:41 - 1:50) We distill the multi-decadal learnings of industry leaders (1:51 - 1:58) Bringing together a community of globally eminent personalities( 1:59 - 2:06)
`,
    link: require("../../assets/scripts/Mr-Kuppuswamy-narasimhan.docx"),
  },
  {
    id: 5,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Facetime Interview with Mr. Srinivas Vedantam`,
    description: `Header (0:34 - 1:05): FaceTime with Leaders - An initiative by World Development Corporation.
Footer (0:34 - 1:05) FaceTime with Leaders serves as a platform for industry titans (0:34- 0:45) Convening visionaries to inspire other Leaders (0:46 - 0:53) We distill the multi-decadal learnings of industry leaders (0:54 - 1:01) Bringing together a community of globally eminent personalities( 1:02 - 1:07) Assist everyone by identifying and nurturing the trade secrets that are proven success formulas (1:08- 1:17) Establishing a knowledge-sharing community (1:18 - 1:24)
`,
    link: require("../../assets/scripts/Mr-Srinivas-Vedantam.docx"),
  },
  {
    id: 6,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `ICDP Script`,
    description: `What’s your next step in corporate governance? 
Where do you plan to see yourself at the end of 2024? 
Do you want to be asleep in your mediocrity, self-content, and unaware of your powerful potential?
Unfortunately, middle managers often find themselves in an unrewarding loop of jobs that pay them less than they deserve.`,
    link: require("../../assets/scripts/ICDP-script.docx"),
  },
  {
    id: 7,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Script Writing Assessment`,
    description: `Use the notes below to write a voice-over script for a video in about 300-400 words. The audience comprises fresh graduates and early professionals from around the globe, aged 20 to 24 years. 
Use the following best practices to create the script:
●	Use a story-telling approach to make the script engaging for the learners.
●	Set the context for the learner – why is it important for them to know about digital transformation?
●	Provide real-world examples where relevant. Draw from the everyday experiences of the persona to `,
    link: require("../../assets/scripts/Script_Writing_AssessmentOne.docx"),
  },
  {
    id: 8,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Script`,
    description: `Are you a B. Com graduate struggling to attain your dream job? Time for some new change! Upskill and upgrade your accounting and taxation, with the DAT/CPAT program, which is a gateway to a successful career in finance. From basics of accounting to advanced taxation strategies, making you industry-ready.`,
    link: require("../../assets/scripts/scripts.docx"),
  },
];

function Scripts() {
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
          <h2 style={{ marginTop: "40px" }}>Script</h2>
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

export default Scripts;
