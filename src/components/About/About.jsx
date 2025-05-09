import avatar from "/7567.jpg";
import "./About.css";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

function About() {
  return (
    <section className="about">
      <div className="about__modal">
        <img src={avatar} alt="avatar" className="about__img" />
        <section className="about__section">
          <h2 className="about__header">About This News App</h2>
          <p className="about__paragraph-description">
            This project is a News API Explorer built to showcase the power of
            modern frontend technologies and data integration. It allows users
            to explore the latest news from various sources across different
            categories, making it easy to stay up-to-date on global events,
            trends, and topics of interest.
          </p>
          <p className="about__paragraph-experience">
            As the frontend developer behind this application, I utilized React
            for a responsive and dynamic user interface, CSS for styling, and
            various API integrations to pull in live news data. The goal was to
            create an engaging, real-time experience for users to browse,
            search, and filter news articles. The application showcases my
            ability to work with external APIs, build interactive interfaces,
            and manage state effectively within a modern web application. The
            project is continually evolving as I work to implement new features
            like customized news recommendations, advanced search filters, and
            performance optimizations.
          </p>
          <div className="about__badges">
            <span className="badge">
              <FaJsSquare className="icon" /> JavaScript
            </span>
            <span className="badge">
              <FaReact className="icon" /> React
            </span>
            <span className="badge">
              <FaNodeJs className="icon" /> Node.js
            </span>
            <span className="badge">
              <SiExpress className="icon" /> Express.js
            </span>
            <span className="badge">
              <SiMongodb className="icon" /> MongoDB
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
