import avatar from "../../assets/avatar1.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__modal">
        <img src={avatar} alt="avatar" className="about__img" />
        <section className="about__section">
          <h3 className="about__header">About Me</h3>
          <p className="about__paragraph-description">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about__paragraph-experience">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </section>
      </div>
    </section>
  );
}

export default About;
