import avatar from "../../assets/avatar1.png";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__modal">
        <img src={avatar} alt="avatar" className="about__img" />
        <section className="about__section">
          <h3 className="about__header">About Me</h3>
          <p className="about__paragraph1">
            I'm Olivia Lim! I'm a frontend software engineer.
          </p>
          <ul className="about__lists">
            <li className="about__list">Programming languages: Javascript </li>
            <li className="about__list">
              Frameworks: React, Nodes.js, Express.js{" "}
            </li>
            <li className="about__list">Databases: MongoDB</li>
            <li className="about__list">
              {" "}
              Cloud Computing: Google Cloud Platform
            </li>
          </ul>
          <p className="about__paragraph2">
            At TripleTen, I learned best practices for working with APIs,
            ensuring scalability, and delivering seamless user experiences.I
            built a fully functional news explorer app that integrates with
            external APIs, manages user authentication, and ensures secure data
            handling.My experience allows me to help customers turn their ideas
            into reality by creating web applications that are both functional
            and visually appealing. I can streamline workflows, solve technical
            challenges, and ensure a product that aligns with their vision.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
