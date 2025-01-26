import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import obsidian from "../../Assets/Projects/obsidian.png";
import next from "../../Assets/Projects/next.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import Calendar from "../../Assets/Projects/Calendar.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Air Academic */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Air Academic"
              description="I played a key role in developing Air Academic, an innovative online platform designed to strengthen connections between teachers and students for a more interactive learning experience. Using React.js, Redux, I created a seamless, user-friendly interface, ensuring a smooth and engaging platform for users"
              ghLink="https://airacademic.com/"
              demoLink="https://airacademic.com/"
            />
          </Col>{" "}
          {/* RCM */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={obsidian}
              isBlog={false}
              title="Obsidian RCM"
              description="I contributed to Obsidian RCM, an advanced medical billing software, using React.js, Redux Toolkit Query, and Material-UI. I developed key components like Patient Management, Claims Management, and Account Administration, ensuring a user-friendly interface and efficient state management to streamline billing operations."
              ghLink="http://dev.obsidianrcm.com/#/Login"
              demoLink="http://dev.obsidianrcm.com/#/Login"
            />
          </Col>
          {/* Chat-App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Tailwind Css, and MongoDB. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/ashrafdevx/chat_app"
              demoLink="https://chat-app-mu-ecru.vercel.app/"
            />
          </Col>
          {/* Appwrite */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Appwrite"
              description="I created a responsive and user-friendly website using Appwrite as the backend-as-a-service platform. The project includes a fully integrated login and signup system, leveraging Appwrite's APIs for authentication and real-time database management."
              ghLink="https://github.com/ashrafdevx/appwrite"
              demoLink="https://appwrite-theta.vercel.app/"
            />
          </Col>
          {/* Calender */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calendar}
              isBlog={false}
              title="Calendar"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/ashraftech8/calendar"
              demoLink="https://calendar-blush-three.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next}
              isBlog={false}
              title="Nextgen Property"
              description="The app facilitates property listings, allowing developers to create new homes and offer them to potential buyers. It also supports investment opportunities, where developers pay to list and promote their projects. This platform streamlines the process of buying, selling, and investing in real estate, ensuring a seamless experience for all users."
              ghLink="https://www.nextgenproperties.us/"
              demoLink="https://www.nextgenproperties.us/"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Card.Text style={{ color: "white", textAlign: "center" }}>
            Many more projects...
          </Card.Text>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
