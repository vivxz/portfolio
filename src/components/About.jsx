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
              <img className="profile-picture" src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/profile.png" alt="avatar" />
              <div className="about-intro">
                <div className="about-links">
                  <a target="_blank" href='https://www.linkedin.com/in/vivian-quan/'><FaLinkedinIn className="about-devicons" /></a>
                  <a target="_blank" href='https://github.com/vivxz'><GoMarkGithub className="about-devicons" /></a>
                  <a target="_blank" href='https://vivs-portfolio.s3-us-west-1.amazonaws.com/vqresume.pdf'><FiFileText className="about-devicons" /></a>
                </div>
                <div className="about-desc">
                  <p>
                  My vision and goal as a software engineer is to develop applications and use design as a means to bridge the gap between humans and technology in a way that will benefit the world. We live in an era in which we rely heavily on technology and the advancements we continually make in technology.
                  </p>
                  <p>
                  As such, I am meticulous and passionate with a strong interest in projects that require both conceptual and analytical thinking. I find joy in designing and developing innovative applications that users will love, and I am always eager to learn more from anyone, anything, or any experiences.
                  </p>
                  <p>
                  I am looking to join a team/company that will allow me to leverage my skills, encourage my passions’ and continue to challenge me as I grow in life and career. 
                  </p>

                </div>
              </div>
            </div>
            <hr />
            <div className="about-header">Technical Skills</div>
            <div className="techskills">
              <div className="stacks-container">
                <div className="stack-name">Front End:</div>
                <div className="stack-type">
                  {stacks.frontend.map((stack, i) => {
                    return (
                      <Skills stack={stack} key={i} index={i} />
                    )
                  })}
                </div>
              </div>
              <div className="stacks-container">
                <div className="stack-name">Back End:</div>
                <div className="stack-type">
                  {stacks.backend.map((stack, i) => {
                    return (
                      <Skills stack={stack} key={i} index={i} />
                    )
                  })}
                </div>
              </div>
              <div className="stacks-container">
                <div className="stack-name">Testing/Deployment:</div>
                <div className="stack-type">
                  {stacks.testing.map((stack, i) => {
                    return (
                      <Skills stack={stack} key={i} index={i} />
                    )
                  })}
                </div>
              </div>
              <div className="stacks-container">
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
          </div>
        </Dialog>
      ) : null
      }
    </>
  )
}

export default About;