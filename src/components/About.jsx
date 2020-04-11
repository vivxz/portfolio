import React from 'react';
import { Dialog } from "@reach/dialog";
import stacks from '../data/stacks.js';
import Skills from './Skills';

const About = ({ showDialog, navAbout, close }) => {
  return (
    <>
      {navAbout ? (
        <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
          <button className="close-button" onClick={close}>
            CLOSE
            </button>
          <div className="about-info">
            <img className="profile-picture" src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/pp.png" alt="avatar" />
            <div className="about-intro">
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
              <hr />
              <h3>Technical Skills</h3>
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
          </div>
        </Dialog>
      ) : null
      }
    </>
  )
}

export default About;