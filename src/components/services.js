import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Services.css";

function AppServices() {
  return (
    <section id="experience" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h1>Experience</h1>
        </div>
        <Row>
          <Col sm={4} className="expCon">
            {/* <div className="icon">
                    <i className={services.icon}></i>
                  </div> */}
            <h3>Sr. Content Strategist</h3>
            <div className="expSecCOn">
              <span>IndexTap (CRE-Matrix) , Mumbai</span>{" "}
              <span>Sep 2023 - 5th March 2024</span>
            </div>
            <p>
              Indextap, a subsidiary of CREmatrix, was one of several firms I
              worked for, where my responsibilities included writing blogs,
              articles, product descriptions, web content, and
              copywriting.Additionally, I was involved in brand strategy
              development and team management across these organizations.
            </p>
          </Col>
          <Col sm={4} className="expCon">
            {/* <div className="icon">
                    <i className={services.icon}></i>
                  </div> */}
            <h3>Sr. Content Strategist</h3>
            <div className="expSecCOn">
              <span>Arihant Capital</span>{" "}
              <span>March 2024 -  August</span>
            </div>
            <p>
              Arihant Capital was one of several firms I
              worked for, articles, product descriptions, web content, and
              copywriting.Additionally, I was involved in brand strategy
              development and team management across these organizations.
            </p>
          </Col>
          <Col sm={4} className="expCon">
            <h3>Sr. Content Strategist</h3>
            <div className="expSecCOn">
              <span>Autus Digital Agency , New Delhi</span>{" "}
              <span>Oct 2021 - Aug 2023</span>
            </div>
            <p>
              In my role as a senior writer, I managed teams while specializing
              in copywriting, visual content creation, and crafting diverse
              written content including blogs, articles, product descriptions,
              and website copy.
            </p>
          </Col>
          <Col sm={4} className="expCon">
            <h3>Creative Director</h3>
            <div className="expSecCOn">
              <span>Dubai Fashion Magazine , Dubai (UAE)</span>{" "}
              <span>Mar 2020- Sep 2021</span>
            </div>
            <p>
              As the new Creative Director, I specialised in content strategy
              development, SEO optimization, and leading cross-functional teams
              to deliver high-quality, on-brand messaging. With a knack for
              adapting tone and style to diverse audiences, I have a strong
              history of crafting compelling campaigns across multiple
              industries, while also managing teams of over 10 members in
              creative content creation.
            </p>
          </Col>
          <Col sm={4} className="expCon">
            <h3>Chief Journalist</h3>
            <div className="expSecCOn">
              <span>India Voyage</span> <span>Nov 2019- Feb 2020</span>
            </div>
            <p>
              As Chief Journalist, I conducted interviews, wrote content,
              managed teams, and oversaw magazine operations and script
              development. With a proven track record in delivering impactful
              news stories, I demonstrated strong editorial judgment and
              research skills. I conducted exclusive interviews with
              celebrities, publishing them successfully in the magazine, and am
              dedicated to creating informative, entertaining, and inspiring
              content.
            </p>
          </Col>
          <Col sm={4} className="expCon">
            <h3>Content Writer</h3>
            <div className="expSecCOn">
              <span>Times of India</span> <span>Aug 2019- Present</span>
            </div>
            <p>
              After 4-5 months of refining my skills, crafting SEO-friendly
              content has become my forte. With meticulous research and a keen
              eye for detail, I adapt tone and style seamlessly to captivate
              audiences and drive organic traffic. I transitioned into
              freelancing and now have a personal blog on TOI.
            </p>
          </Col>
          {/* <Col sm={4} className="expCon">
            <h3>Content Writer</h3>
            <div className="expSecCOn">
              <span>Future Market Insight, Pune</span>{" "}
              <span>sep 2018- Aug 2019</span>
            </div>
            <p>
              At FMI, I specialized in press release writing and preview
              analysis. I gained experience in reading ME (Material Safety Data)
              sheets and conducting market analysis.
            </p>
          </Col> */}
          <Col sm={4} className="expCon">
            <h3>Legge Rhythm</h3>
            <div className="expSecCOn">
              <span>Legal Research Director</span>{" "}
              <span>Jan 2017 - Aug 2018</span>
            </div>
            <p>
              At the legal company, I focused on developing comprehensive legal
              strategies and delivering insightful analysis and accurate legal
              opinions for complex cases. My expertise includes utilizing
              advanced legal databases and research tools. I drafted agreements,
              contracts, and provided legal advice to support decision-making
              processes.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
