import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#0f81f3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeDhashyanth/MultilingualVQA" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>IT Policies Chatbot:</h3>
              <p>
              Developed a Flask-based RAG chatbot that analyzes over 250 IT policies by processing 1,000+ pages into structured paragraphs, enhancing embedding accuracy by 30%. Leveraged Azure OpenAI (Ada) embeddings with ChromaDB to enable fast and accurate semantic search less than 1.5s response time. Designed a dual RAG pipeline—one optimized for factual retrieval and the other for adaptive suggestions—resulting in a 40% boost in user satisfaction and interpretability during internal testing.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Langchain</li>
                <li>Flask</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#0f81f3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeDhashyanth/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                {/* <a href="https://vote.Dhashyanth.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
                </div>
            </header>
            <div className="body">
              <h3>Financial Inferences Summarizer:</h3>
              <p> Developed a Flask-based RAG application that analyzed over 500 financial reports from 50+ companies to support strategic decision-making. The system parsed 3,000+ pages into paragraph-level text to enhance embedding accuracy and context retention by 35%. Leveraging Azure OpenAI (Ada v2) and ChromaDB, it achieved 95% top-k semantic retrieval with sub-1.2 second latency. A dual RAG pipeline was engineered to handle both factual financial queries and generate strategic company recommendations, improving decision accuracy by 45%.</p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li>Open AI</li> <li>LLM Chain</li> <li>Flask</li></ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#0f81f3 " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/dhashyanth/Smart-City-Traffic-Management-System" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <div className="body">
              <h3>Smart City Traffic Management System</h3>
              <p>
              The Smart City Traffic Management System aims to enhance the efficiency, safety, and sustainability of urban transportation networks by leveraging real-time data on traffic density and prioritizing vehicles based on their importance and urgency. This project description outlines the key components and functionalities of the proposed system. Objectives is to develop an intelligent traffic management system that dynamically monitors and analyzes traffic density in real-time, to prioritize vehicles based on predefined criteria, such as emergency services, public transportation, and high-occupancy vehicles and to optimize traffic flow, minimize congestion, and reduce travel times for all road users.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>C++</li>
                <li>Aurdino IDE</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#0f81f3 " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/dhashyanth/Face-Recognition-Lock-Sysytem-using-Raspberry-Pi" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://medibook.Dhashyanth.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Face Recognition Lock Sysytem using Raspberry Pi</h3>
              <p>The Face Recognition-based Door Lock System is a project that utilizes OpenCV, a computer vision library, to develop a secure and convenient access control mechanism. By integrating a camera and facial recognition algorithms, the system captures and analyzes facial features, allowing authorized individuals to gain access. This project aims to provide a robust and reliable solution for door security, eliminating the need for physical keys or passwords. With a focus on accuracy and efficiency, it offers a seamless user experience while ensuring enhanced security measures.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Raspberry Pi</li>
                <li>Thonny IDE</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#0f81f3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/dhashyanth/Event-Driven-Resume-ChatAgent" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Event Driven Resume ChatAgent</h3>
              <p>This project enables agentic workflows for resume analysis. It parses a resume and allows a question-answering agent to provide insights based on user queries. Additionally, it integrates voice-based feedback, allowing users to respond via speech.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>RAG</li>
                <li>LlamaParse</li>
                <li>Whisper</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#0f81f3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/dhashyanth/LinkedIn-Post-Generator-Tool" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://youtu.be/NOm-3MynPLE" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>LinkedIn Post Generator Tool</h3>
              <p>This end-to-end Generative AI project focuses on building a LinkedIn Post Generator Tool that transforms raw content ideas into engaging, professional posts. The solution leverages the power of the LLaMA 3.2 open-source large language model (LLM), deployed via Streamlit for 
              an interactive user interface, and accelerated using Groq Cloud for high-performance inference.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Llama 3.2</li>
                <li>Langchain</li>
                <li>Flask</li>
                <li>Groq Cloud</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}