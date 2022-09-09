import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/raspberrypi.jpg";
import projImg2 from "../assets/img/rpg.png";
import projImg3 from "../assets/img/temp.jpg";
import projImg4 from "../assets/img/pokemon.png";
import projImg5 from "../assets/img/Barcelona.jpg";
import projImg6 from "../assets/img/robot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "CCTV With Facial Recognition",
      description: "Security camera with facial recognition using Raspberry Pi 3, 5MP camera, servo motor,  OpenCV and imutils library ",
      imgUrl: projImg1,
    },
    {
      title: "3D RPG Game",
      description: "3D open world role playing game created using Unity, Blender and Visual Studio",
      imgUrl: projImg2,
    },
    {
      title: "Temperature & Humidity Sensor",
      description: "Humidity and temperature reader using the Arduino IDE, UNO R3 microcontroller, and DHT11 module",
      imgUrl: projImg3,
    },
    {
      title: "Pokémon Battle Simulator",
      description: "Text based Pokemon Battle Simulator created using Python's built in CSV reader",
      imgUrl: projImg4,
    },
    {
      title: "Soccer Player Stat Predictions",
      description: "Program to predict career stats of Messi, Ronaldo, Neymar, and Mbappé using Python CurveFit and Autoreg",
      imgUrl: projImg5,
    },
    {
      title: "Mindstorm EV3 Robot",
      description: "EV3 Robot built using color and ultrasonic sensor to traverse obstacle course and programmed on MATLAB Simulink ",
      imgUrl: projImg6,
    },
  ];





  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and More</h2>
                <p>A little bit more about my background, including projects, education and extracurriculars</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                  





                   
                    <Nav.Item>
                      <Nav.Link eventKey="third">Extracurriculars</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>MSU IEEE Student Board -- Treasurer</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>GM Jumpstart (July 2022 - Present)</p>
                      <p>MSU IEEE Student Board -- Treasurer <p1>(Sept 2020 – May 2022)</p1></p>
                      <p>MSU Solar Racing Team -- BMS Sublead (Sept 2018 - Sept 2020)</p>
                      <p>Spartahacks -- Volunteering Comittee (Sept 2018 - Sept 2020)</p>
                      <p>MSU Running Club (Sept 2018 - May 2022)</p>
                      <p>Troy High School Track & Field (October 2017 - May 2018)</p>
                      <p>FIRST Robotis 226 -- Animation Lead (Sept 2017 - June 2018)</p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
