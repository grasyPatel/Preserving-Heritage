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
    title: `Arihant Capital`,
    description: `
Subject line: Congratulations on Starting Your SIP!

Dear (Client Name),

Congratulations on starting your Systematic Investment Plan (SIP) with Arihant Plus! We're excited to help you achieve your financial goals through disciplined investing.

Your SIP for (Scheme Name) (Scheme Code: (Scheme Code)) has been successfully registered. This means you've committed to a regular investment plan that can help you grow your wealth steadily over time.
Here are some helpful resources to get you started:

●	Understanding SIPs: (Link to Arihant Plus SIP information page)
●	Online Investment Portal: (Link to Arihant Plus online portal)
●	Mobile App: Download the ‘Arihant Capital’ mobile app for easy access to your investments (available on App Store and Google Play).

`,
    link: require("../../assets/emails/Arihant-Capital-New-Email-Set.docx"),
  },
  
  {
    id: 2,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Edelweiss Email`,
    description: `
Subject: Public Issue of Secured Non-convertible Debentures by Edelweiss Financial Services Limited 
Dear Esteemed Clients, 

Greetings from Arihant Capital Markets Limited. 
We are delighted to introduce to you an attractive investment opportunity in the form of the public issue of secured non-convertible debentures by Edelweiss Financial Services Limited. The Non-Convertible Debentures (NCDs) are A+/Stable rated by CRISIL. The redeemable NCDs are secured in nature and should make a profitable financial choice. The minimum application size is Rs. 10,000. 
`,
    link: require("../../assets/emails/Edelweiss-email.docx"),
  },
  {
    id: 3,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Syncloop Emails`,
    description: `
Subject: Introducing Syncloop - The Ultimate API Development Platform

Dear [Recipient’s Name],

I'm reaching out to you today as a Delivery Leader at Syncloop, and I'm excited to introduce you to our ultimate API development platform that can streamline your API development and management process.
`,
    link: require("../../assets/emails/Syncloop-Emails.docx"),
  },

  {
    id: 4,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Email`,
    description: `
Subject: Don't Open This Email—Unless You Want to Receive Penalty!

Dear Valued Taxpayer,

It is NOW or NEVER.

The deadline is today, 31st July.

LAST CHANCE to file ITR without penalty and Retain Your  OLD TAX REGIME!!!😱😱😱

Hurry up!

Consult with US and file your return TODAY.

We're just One mail Away.`,
    link: require("../../assets/emails/Email2.docx"),
  },

  {
    id: 5,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: "Email",
    description: `
Subject: Wishing YOU a Big Thanks!!!

Hello
Valued Taxpayer,

Thanks for choosing us as your tax filing partner. 

Your connection matters to us in our best interest.

😍Once again, we owe you a big thank you for choosing us!!!😍

Know that, if You Need Us

We're just One mail Away.

Best regards,
[Your Name]
[Company Name]
`,
    link: require("../../assets/emails/Email.docx"),
  },

];

function Email() {
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
          <h2 style={{ marginTop: "40px" }}>Email</h2>
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
                        <pre>{blog.description.substring(0, 200) + "..."}</pre>
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

export default Email;
