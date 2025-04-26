import { Container } from "./styles";
import profile from "../../assets/profile.jpg";
import python from "../../assets/python.svg"
import snowflake from "../../assets/SNOW.svg"
import mysql from "../../assets/mysql-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import powerBI from "../../assets/power-bi.svg";
import tableau from "../../assets/tableau.svg";
import azure from "../../assets/azure.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Dhashyanth Nedumaran, an enthusiastic AI Engineer skilled in Generative AI, Machine Learning, and innovative AI solutions
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I work hands-on with tools like LangChain, LlamaIndex, HuggingFace, and ChromaDB—building intelligent systems powered by OpenAI, hosted on Azure, and tuned for high-performance semantic search.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I also craft state-of-the-art generative AI tools that address real-life problems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor of Technology (B.Tech)</h4>
            <p>Amrita Vishwa Vidyapeetham, Coimbatore | Sept 2020 - July 2024</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Data Analyst</h4>
            <p>Flextronics India Pvt Ltd | Sept 2024 - Present</p>
            <p>Chennai, India</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={snowflake} alt="snowflake" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={powerBI} alt="PowerBI" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={tableau} alt="Tableau" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={azure} alt="Azure" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mysql} alt="mysql" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={profile} alt="Dhashyanth" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
