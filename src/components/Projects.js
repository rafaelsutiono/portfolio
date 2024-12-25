import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import c from "../assets/img/c.svg";
import arduino from "../assets/img/arduino.svg";
import python from "../assets/img/python.svg";
import java from "../assets/img/java.svg";
import react from "../assets/img/react.svg";
import fastapi from "../assets/img/fastapi.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import tensorflow from "../assets/img/tensorflow.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [ 
    {
      title: "ARA - Artwork Realness Analyzer",
      description: "A web application equipped with a CNN (Convolutional Neural Network) model to detect whether an artwork is real or fake. It can detect artworks generated from 4 different diffusion models. 3-person team.",
      imgUrl: [tensorflow, react, fastapi],
      link: "https://github.com/priscillabigaill/ARA_artwork_realness_analyzer",
      completed: true,
    },
    {
      title: "Morse Code Trainer - Arduino",
      description: "An interactive Morse Code Trainer using an Arduino Uno. Features include difficulty selection, speed typing, WPM counter, and morse code decoding. 2-person team.",
      imgUrl: [arduino],
      link: "https://github.com/rafaelsutiono/morse-code-trainer",
      completed: true,
    },
    {
      title: "Moringa - Web Application",
      description: "A fullstack web application to streamline the supply chain system of moringa leaf production. A 9-person team effort, I contributed to the ‘XYZ Employee’ dashboard, which can be viewed upon logging in with the XYZ Employee credentials on the GitHub README. (Some backend functions no longer run).",
      imgUrl: [react, fastapi],
      link: "https://github.com/WADSFinalProject/Final-Project-Primary-ZulfiCuan",
      completed: true,
    },
    {
      title: "Braille Translator",
      description: "A Python program to translate ENGLISH to and from GRADE 2 BRAILLE. Runs on a clean tkinter GUI. 4-person team.",
      imgUrl: [python],
      link: "https://github.com/rafaelsutiono/braille-translator",
      completed: true,
    },
    {
      title: "Sudoku Solver",
      description: "Representing the sudoku board as a graph, graph traversal algorithms are used in order to solve any valid unsolved sudoku board. 3-person team.",
      imgUrl: [java],
      link: "https://github.com/rafaelsutiono/sudoku-solver",
      completed: true,
    },
    {
      title: "OverwatchTD - Tower Defense Game",
      description: "A solo project, OverwatchTD is a tower defense game using objects based on Overwatch characters. Besides enjoying the thrill of a tower defense game, it also allows players to create their own level layouts with an easy-to-use interface. The game boasts 3 playable towers and 4 enemy types.",
      imgUrl: [java],
      link: "https://github.com/rafaelsutiono/overwatch-td",
      completed: true,
    },
    {
      title: "Home Security System - FSM Simulation",
      description: "A simulation of a home security system using Finite State Machines, programmed in C. The simulation uses the command line to interact with the system.",
      imgUrl: [c],
      link: "https://github.com/rafaelsutiono/home-security-system",
      completed: true,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here I showcase all of my past and ongoing projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title} 
                                description={project.description} 
                                imgUrl={project.imgUrl}
                                link={project.link}
                                completed={project.completed}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
