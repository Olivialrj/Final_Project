import avatar from "/avatar.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__modal">
        <img src={avatar} alt="avatar" className="about__img" />
        <section className="about__section">
          <h3 className="about__header">About Me</h3>
          <p className="about__paragraph-description">
            I am a Junior Software Engineer. have a background in project
            coordination, where I facilitated communication between engineering
            and sales teams to ensure software delivery and adoption. My
            technical expertise includes JavaScript, React, Node.js, and
            Express.js.
          </p>
          <p className="about__paragraph-experience">
            I&apos;m currently about to learn more about backend development
            using Node.js and Express.js. I&apos;m also interested in learning
            more about AI and machine learning.
          </p>
        </section>
      </div>
    </section>
  );
}

export default About;
