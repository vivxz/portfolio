import React from 'react';
import { Dialog } from "@reach/dialog";
import stacks from '../data/stacks.js';
import Skills from './Skills';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { FiFileText } from "react-icons/fi";

const About = ({ showDialog, navAbout, close }) => {
  return (
    <>
      {navAbout ? (
        <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
          <MdKeyboardArrowLeft onClick={close} className="close-btn" />
          <div className="about-info">
            <div className="about-header">About Me</div>
            <div className="all-me">
              <img className="profile-picture" src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/pp.png" alt="avatar" />
              <div className="about-intro">
                <div className="about-links">
                  <a target="_blank" href='https://www.linkedin.com/in/vivian-quan/'><FaLinkedinIn className="about-devicons" /></a>
                  <a target="_blank" href='https://github.com/vivxz'><GoMarkGithub className="about-devicons" /></a>
                  <a target="_blank" href='https://bit.ly/39ieym9'><FiFileText className="about-devicons" /></a>
                </div>
                <div className="about-desc">
                  <p>
                    A meticulous, creative, and passionate
                    software engineer with a strong interest in
                    projects that require both conceptual and
                    analytical thinking. Fully-committed to
                    designing and developing innovative
                    applications that users will love. Always
                    eager to learn more from anyone or
                    anything.
              </p>
                  <p>
                    I would love to join a team/company that
                    will allow me to leverage my skills,
                    encourage my passions, and continue to
                    challenge me as I grow in this field or in life.
              </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="about-header">Technical Skills</div>
            <div className="techskills">
              <div className="stack-name">Front End:</div>
              <div className="stack-type">
                {stacks.frontend.map((stack, i) => {
                  return (
                    <Skills stack={stack} key={i} index={i} />
                  )
                })}
              </div>
              <div className="stack-name">Back End:</div>
              <div className="stack-type">
                {stacks.backend.map((stack, i) => {
                  return (
                    <Skills stack={stack} key={i} index={i} />
                  )
                })}
              </div>
              <div className="stack-name">Testing/Deployment:</div>
              <div className="stack-type">
                {stacks.testing.map((stack, i) => {
                  return (
                    <Skills stack={stack} key={i} index={i} />
                  )
                })}
              </div>
              <div className="stack-name">Developer Tools:</div>
              <div className="stack-type">
                {stacks.tools.map((stack, i) => {
                  return (
                    <Skills stack={stack} key={i} index={i} />
                  )
                })}
              </div>
            </div>
          </div>
        </Dialog>
      ) : null
      }
    </>
  )
}

export default About;