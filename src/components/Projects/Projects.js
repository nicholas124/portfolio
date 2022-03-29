import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leafDoctor.jpg";
import emotion from "../../Assets/Projects/sort_visual.png";
import editor from "../../Assets/Projects/bookapi.PNG";
import chatify from "../../Assets/Projects/blood.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/galaxySite.PNG";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Blood Donor app"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/nicholas124/Blood_Donor_App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Galaxy Football Consultancy"
              description="This is a website developed for galaxy football consultancy a small up coming football consultancy company here in zambian with the forcus of growing football talent. The application was built on top of a templete by mordena and deployed on firebase"
              link="https://github.com/nicholas124/galaxy-football-consultancy-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Books api (Lumen)"
              description="In this project i have solved some unquie problems i was faced with and i will attach a blog link just to share how i worked around some of my challeges find the detailes on my github "
              link="https://github.com/nicholas124/Book_api/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Leaf Doctor (Plant AI)"
              description="Used the plant disease dataset from Plant Villiage and trained a image classifer model using 'Tensorflow' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 3 unique plants. I was able to achieve an accuracy of 98% by using Mobilvnet pretrained model. I then deployed the project to the mobile platform(ANDROID) using java and kotlin."
              link="https://github.com/nicholas124/Leaf-Doctor-Android-Application.git"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sorting Visualiser"
              description="This is a Sorting Visualiser done in python currently only has bubble sort but more will be added soon This program allows users to visualize the implementation of sorting algorithms as oposed to just seeing a console result."
              link="https://github.com/nicholas124/Sorting-Visualiser"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
