import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; Riya Mishra. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><a target="_blank" rel="noreferrer" href="https://wa.me/+918890099108"><i className='fab fa-whatsapp'></i></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riya-mishra-a59983181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className='fab fa-linkedin-in'></i></a></li>
          {/* <li><a href="https://www.twitter.com"><i className="fab fa-facebook-f"></i></a></li> */}
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;