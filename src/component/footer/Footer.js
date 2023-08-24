import "./footer.css";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { MdEmail } from "@react-icons/all-files/./md/MdEmail";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="foot-container1">
        <h3 className="footer-about">About me</h3>
        <h4 className="foot-container1-text">
          Hii , My name is Mohit, I’m 21 years old. I'm a Frontend Developer and
          I'm pursuing my Graduation from D.A.V college (Panjab University)
          Chandigarh in BCA. My skills are Html, Css, Javascript, React, github.
          I’ve worked hard in my education and now I’m ready to apply for an
          INTERNSHIP to my knowledge into practice. While i don't have any
          real-life work experience but i am very passionate about this field
          and excited to Start my journey. A lot of my courses involved to make
          a Responsive Websites and i also worked on some of the projects that
          helped me to learned about web development. Now, I’m looking to
          leverage everything I’ve learned and get some hands-on work
          experience.
        </h4>
      </div>
      <div className="foot-container2">
        <h3 className="footer-contact">Contact</h3>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/mohit-kashyap-642448259/"
            className="footer-links-container"
          >
            <FaLinkedin className="footer-link-image" />
            <span className="footer-link-text">Linkedin</span>
          </a>
          <a
            href="https://github.com/mohit2713?tab=repositories"
            className="footer-links-container"
          >
            <FaGithub className="footer-link-image" />
            <span className="footer-link-text">Github</span>
          </a>
          <a
            href="mailto:mohitkashyap0813@gmail.com"
            className="footer-links-container"
          >
            <MdEmail className="footer-link-image" />
            <span className="footer-link-text">Gmail</span>
          </a>
          <a
            href="https://www.instagram.com/mohit_vr1313/"
            className="footer-links-container"
          >
            <GrInstagram className="footer-link-image" />
            <span className="footer-link-text">Intagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
