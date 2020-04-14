import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import { Dialog } from "@reach/dialog";
import stacks from '../data/stacks.js';
import StackList from './StackList';
import { MdKeyboardArrowLeft } from "react-icons/md";

const Project = ({ navApps, showDialog, close }) => {
  const [allApps, setAllApps] = useState(true);
  const [frontEnd, setFrontEnd] = useState(false);
  const [backEnd, setBackEnd] = useState(false);
  const [fullStack, setFullStack] = useState(false);

  const all = () => {
    setFrontEnd(false);
    setBackEnd(false);
    setFullStack(false);
    setAllApps(true);
  };

  const front = () => {
    setAllApps(false);
    setBackEnd(false);
    setFullStack(false);
    setFrontEnd(true)
  };

  const back = () => {
    setAllApps(false)
    setFrontEnd(false);
    setFullStack(false);
    setBackEnd(true)
  };

  const full = () => {
    setAllApps(false);
    setFrontEnd(false);
    setBackEnd(false);
    setFullStack(true);
  }

  const openNewTab = (event) => {
    const url = event.target.value;
    window.open(url, '_blank');
  }

  useEffect(() => {
    console.error;
  }, [allApps, frontEnd, backEnd, fullStack]);

  return (
    <div>
      {navApps && frontEnd ?
        (
          <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
            <MdKeyboardArrowLeft onClick={close} className="close-btn" />
            <div className="apps-container">
              <div className="apps-sections">
                <div className="apps-header">Applications</div>
              </div>
              <div className="app-btn-container">
                <button className="app-btn" onClick={all}>All</button>
                <button className="app-btn" onClick={front}>Front End</button>
                <button className="app-btn" onClick={back}>Back End</button>
                <button className="app-btn" onClick={full}>Full Stack</button>
              </div>
              <div className="apps-sections fe">
                <div className="app-title">LalaLime
                  <button className="repo-btn" onClick={openNewTab} value="https://github.com/vivxz/lalalime-navbar">View Repo</button>
                </div>
                <div className="techstack">

                  <p>
                    {stacks.fec.map((stack, i) => {
                      return (
                        <StackList stack={stack} key={i} index={i} last={stacks.fec.length - 1} />
                      )
                    })}
                  </p>

                  <div className="appreview">
                    <img src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/demo.gif" alt="LalaLime" className="app-img" />
                  </div>
                  <div className="app-description">
                    <p>A front-end microservice that mimics the aesthetics and functionality of LuluLemon's navigation bar.</p>
                    <li>Created a <span className="app-letters">microservice</span> of the navigation bar that allows users to browse through the webpage through the use of conditional rendering to simulate an actual product that mimics LuluLemon’s search functionality</li>
                    <li>Implemented a proxy sever without using middleware to render all microservices in a <span className="app-letters">service orientated architecture</span> format</li>
                    <li>Minified bundle from <span className="app-letters">3MB</span> to <span className="app-letters">172KB</span> which generated a score of <span className="app-letters">98</span> on lighthouse to measure web performance</li>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
        )
        : navApps && backEnd ?
          (
            <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
              <MdKeyboardArrowLeft onClick={close} className="close-btn" />
              <div className="apps-container">
                <div className="apps-sections">
                  <div className="apps-header">Applications</div>
                </div>
                <div className="app-btn-container">
                  <button className="app-btn" onClick={all}>All</button>
                  <button className="app-btn" onClick={front}>Front End</button>
                  <button className="app-btn" onClick={back}>Back End</button>
                  <button className="app-btn" onClick={full}>Full Stack</button>
                </div>
                <div className="apps-sections be">
                  <div className="app-title">Anthropologie Clone
                      <button className="repo-btn" onClick={openNewTab} value="https://github.com/vivxz/anthropologie-product-quan">View Repo</button>
                  </div>
                  <div className="techstack">

                    <p>
                      {stacks.sdc.map((stack, i) => {
                        return (
                          <StackList stack={stack} key={i} index={i} last={stacks.sdc.length - 1} />
                        )
                      })}
                    </p>

                    <div className="appreview">
                      <img src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/anthro.png" alt="Anthro" className="app-img" />
                    </div>
                    <div className="app-description">
                      <p>EXPLAIN APPLICATION HERE</p>
                      <li>Created and utilized a script to generate <span className="app-letters">10M</span> mock records to populate both SQL and noSQL databases to emulate a realistic testing scenario </li>
                      <li>Compared both DBMS by stress testing and reduced query times by using <span className="app-letters">single-field index</span> resulting in a shortened average latency of  <span className="app-letters">~4ms</span> from <span className="app-letters">~17ms</span></li>
                      <li>Deployed and horizontally scaled 3 instances to handle <span className="app-letters">2,750 RPS</span> with <span className="app-letters">0.0% error rate</span> and <span className="app-letters">67ms average response time</span> using <span className="app-letters">round robin</span> load balancing algorithm</li>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog>
          ) : navApps && fullStack ?
            (
              <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
                <MdKeyboardArrowLeft onClick={close} className="close-btn" />
                <div className="apps-container">
                  <div className="apps-sections">
                    <div className="apps-header">Applications</div>
                  </div>
                  <div className="app-btn-container">
                    <button className="app-btn" onClick={all}>All</button>
                    <button className="app-btn" onClick={front}>Front End</button>
                    <button className="app-btn" onClick={back}>Back End</button>
                    <button className="app-btn" onClick={full}>Full Stack</button>
                  </div>
                  <div className="apps-sections fs">
                    <div className="app-title">PAVÉ
                      <button className="repo-btn" onClick={openNewTab} value="https://github.com/mvp-pave/mvp-pave">View Repo</button>
                    </div>
                    <div className="techstack">

                      <p>
                        {stacks.mvp.map((stack, i) => {
                          return (
                            <StackList stack={stack} key={i} index={i} last={stacks.mvp.length - 1} />
                          )
                        })}
                      </p>

                      <div className="appreview">
                        <video muted src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/pave.mp4" alt="PAVÉ" className="app-video" autoPlay loop />
                      </div>
                      <div className="app-description">
                        <p>Pavé is a mobile-first web application that combines aspects of food, travel, and social media. Users are able to add top-rated restaurants around the world to their recommendations and connect with friends to view their favorites as well.</p>
                        <li>Incorporated a <span className="app-letters">monolithic design architecture</span> and <span className="app-letters">agile methodology</span> to develop and deploy a responsive mobile-first web application that combined aspects of food, drinks, and social media</li>
                        <li>Integrated <span className="app-letters">Facebook authentication API</span> to provide users an efficient sign-up and/or login interface</li>
                        <li>Utilized <span className="app-letters">Yelp</span> and <span className="app-letters">Google Maps API</span> to integrate restaurant information based on location and category</li>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog>
            ) : navApps && allApps ?
              (
                <Dialog isOpen={showDialog} onDismiss={close} aria-labelledby="about-info">
                  <MdKeyboardArrowLeft onClick={close} className="close-btn" />
                  <div className="apps-container">
                    <div className="apps-sections">
                      <div className="apps-header">Applications</div>
                      <div className="app-btn-container">
                        <button className="app-btn" onClick={all}>All</button>
                        <button className="app-btn" onClick={front}>Front End</button>
                        <button className="app-btn" onClick={back}>Back End</button>
                        <button className="app-btn" onClick={full}>Full Stack</button>
                      </div>
                    </div>
                    <div className="apps-sections fe">
                      <div className="app-title">LalaLime
                      <button className="repo-btn" onClick={openNewTab} value="https://github.com/vivxz/lalalime-navbar">View Repo</button>
                      </div>
                      <div className="techstack">

                        <p>
                          {stacks.fec.map((stack, i) => {
                            return (
                              <StackList stack={stack} key={i} index={i} last={stacks.fec.length - 1} />
                            )
                          })}
                        </p>

                        <div className="appreview">
                          <img src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/demo.gif" alt="LalaLime" className="app-img" />
                        </div>
                        <div className="app-description">
                          <p>A front-end microservice that mimics the aesthetics and functionality of LuluLemon's navigation bar.</p>
                          <li>Created a <span className="app-letters">microservice</span> of the navigation bar that allows users to browse through the webpage through the use of conditional rendering to simulate an actual product that mimics LuluLemon’s search functionality</li>
                          <li>Implemented a proxy sever without using middleware to render all microservices in a <span className="app-letters">service orientated architecture</span> format</li>
                          <li>Minified bundle from <span className="app-letters">3MB</span> to <span className="app-letters">172KB</span> which generated a score of <span className="app-letters">98</span> on lighthouse to measure web performance</li>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="apps-sections be">
                      <div className="app-title">Anthropologie Clone
                      <button className="repo-btn" onClick={openNewTab} value="https://github.com/vivxz/anthropologie-product-quan">View Repo</button>
                      </div>
                      <div className="techstack">

                        <p>
                          {stacks.sdc.map((stack, i) => {
                            return (
                              <StackList stack={stack} key={i} index={i} last={stacks.sdc.length - 1} />
                            )
                          })}
                        </p>

                        <div className="appreview">
                          <img src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/anthro.png" alt="Anthro" className="app-img" />
                        </div>
                        <div className="app-description">
                          <p>EXPLAIN APPLICATION HERE</p>
                          <li>Created and utilized a script to generate <span className="app-letters">10M</span> mock records to populate both SQL and noSQL databases to emulate a realistic testing scenario </li>
                          <li>Compared both DBMS by stress testing and reduced query times by using <span className="app-letters">single-field index</span> resulting in a shortened average latency of  <span className="app-letters">~4ms</span> from <span className="app-letters">~17ms</span></li>
                          <li>Deployed and horizontally scaled 3 instances to handle <span className="app-letters">2,750 RPS</span> with <span className="app-letters">0.0% error rate</span> and <span className="app-letters">67ms average response time</span> using <span className="app-letters">round robin</span> load balancing algorithm</li>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="apps-sections fs">
                      <div className="app-title">PAVÉ
                      <button className="repo-btn" onClick={openNewTab} value="https://github.com/mvp-pave/mvp-pave">View Repo</button>
                      </div>
                      <div className="techstack">

                        <p>
                          {stacks.mvp.map((stack, i) => {
                            return (
                              <StackList stack={stack} key={i} index={i} last={stacks.mvp.length - 1} />
                            )
                          })}
                        </p>

                        <div className="appreview">
                          <video muted src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/pave.mp4" alt="PAVÉ" className="app-video" autoPlay loop />
                        </div>
                        <div className="app-description">
                          <p>Pavé is a mobile-first web application that combines aspects of food, travel, and social media. Users are able to add top-rated restaurants around the world to their recommendations and connect with friends to view their favorites as well.</p>
                          <li>Incorporated a <span className="app-letters">monolithic design architecture</span> and <span className="app-letters">agile methodology</span> to develop and deploy a responsive mobile-first web application that combined aspects of food, drinks, and social media</li>
                          <li>Integrated <span className="app-letters">Facebook authentication API</span> to provide users an efficient sign-up and/or login interface</li>
                          <li>Utilized <span className="app-letters">Yelp</span> and <span className="app-letters">Google Maps API</span> to integrate restaurant information based on location and category</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              )
              : null
      }
    </div >
  )
}

export default Project;