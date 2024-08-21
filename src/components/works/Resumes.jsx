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
    title: `SR - Packaging Engineer`,
    description: `Packaging Engineer with experience in implementing innovative packaging solutions for machinery and industrial products. Expertise in ensuring compliance with ISO and ISTA standards, leading continuous improvement initiatives, and using GMP guidelines. Adept at managing packing lines, resolving packaging issues, and fostering a standardized approach to packaging design. Skilled in New Product Development projects, enhancing product presentation, and achieving customer satisfaction through reduced product returns`,
    link: require("../../assets/resumes/SR.docx"),
  },
  {
    id: 2,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Validation Specialist`,
    description: `Experienced Validation Specialist in quality validation and skilled in ensuring compliance with industry standards and quality policies. Proficient in risk management, complaint evaluation, and quality engineering with strong problem-solving skills focusing on delivering compliant solutions. Excellent communicator, adept at working with cross-functional teams.
`,
    link: require("../../assets/resumes/2.docx"),
  },
  {
    id: 3,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Manufacturing Engineer`,
    description: `Experienced in medical device manufacturing and regulated environments, including Automotive and Aerospace industries with proficiency in new product launches, wax pattern tool/mould design, and injection moulding. Strong project management skills with a focus on quality and regulatory compliance and excellent communication skills, capable of working effectively within multidisciplinary teams.

`,
    link: require("../../assets/resumes/ManufacturingEngineer.docx"),
  },

  {
    id: 4,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Neelam Resume`,
    description: `Experienced Executive Assistant with 16 years of comprehensive experience in providing top-tier administrative support to senior executives. Skilled in financial management, marketing strategies, and operational planning with a proven track record in enhancing organisational efficiency. Adept at coordinating with multicultural teams, managing high-level administrative functions, and ensuring seamless office operations.
`,
    link: require("../../assets/resumes/NeelamResume.docx"),
  },
  {
    id: 5,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Entry-level Quality Engineer`,
    description: `Experienced in supporting quality assurance processes in medical device manufacturing and proficient in conducting audits, inspections, and maintaining compliance with regulatory standards. Skilled in documentation, reporting, and continuous process improvement, strong problem-solving abilities with a focus on enhancing device safety and effectiveness.
`,
    link: require("../../assets/resumes/Entry-levelQualityEngineer.docx"),
  },

  {
    id: 6,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Process Engineer`,
    description: `Highly skilled in process development, validation, and technology transfer for pharmaceutical manufacturing Extensive experience with cGMP compliance and various drug product technologies. Proficient in conducting characterization studies and analysing experimental data.	Strong background in authoring technical documents and reports.
`,
    link: require("../../assets/resumes/ProcessEngineer.docx"),
  },

  {
    id: 7,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Manufacturing Process Engineer`,
    description: `Proven track record in optimising manufacturing processes, ensuring equipment reliability, and leading Lean and Six Sigma initiatives for continuous improvement. Strong communicator with exceptional technical writing skills, adept at implementing critical quality parameters, process attributes, and conducting Quality Risk Assessment for Automation and Equipment Systems (QRAES).  Skilled in User Requirements Specification (URS), validation protocols, Commissioning and Qualification Plan (CQP), calibration, and proficiency with GMP process equipment, automation infrastructure including Delta V and Rockwell systems, and various process improvement methodologies.

`,
    link: require("../../assets/resumes/ManufacturingProcessEngineer.docx"),
  },
  {
    id: 8,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `SR Process Engineer`,
    description: `Experienced process engineer with a track record in manufacturing support, process improvements, and quality systems excellence. Adept at investigating customer complaints, implementing CAPA projects, Non-conformance and driving cost improvement. Skilled in developing standard operating (SOP) procedures and providing field troubleshooting support. Proficient in commissioning and qualification documentation, statistical data analysis tools, and root cause analysis. Knowledgeable in GMPs, FDA guidelines, and ISO standards. Expertise in process mapping, sterilization processes, equipment qualification, 
`,
    link: require("../../assets/resumes/SRProcessEngineer.docx"),
  },
  {
    id: 9,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Validation Engineer`,
    description: `Senior Validation Engineer with 7 years of experience in the medical device industry. Expert in developing validation plans, protocols, and reports for complex assembly and packaging processes. Extensive knowledge of GMP, ISO, and QSR regulations. Skilled in statistical data analysis, quality engineering support, and continuous improvement initiatives.
`,
    link: require("../../assets/resumes/ValidationEngineer.docx"),
  },
  {
    id: 10,
    image: require("../../assets/images/blog1.jpg"),
    time: "10 Nov 2016",
    title: `Associate - QA Operations & Validations`,
    description: `Quality Assurance Specialist with 6 years of experience in the pharmaceutical industry. Skilled in process validation, cleaning validation, and equipment qualification. Proficient in writing and reviewing validation documents, with a deep understanding of cGMP and regulatory requirements.
`,
    link: require("../../assets/resumes/Associate.docx"),
  },
  
];

function Resumes() {
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
          <h2 style={{ marginTop: "40px" }}>Resume</h2>
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

export default Resumes;
