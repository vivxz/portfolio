import React from 'react';
import stacks from '../../data/stacks.js';
import StackList from '../StackList';

const FrontEnd = () => {
  
  const openNewTab = (event) => {
    const url = event.target.value;
    window.open(url, '_blank');
  }

  return (
              <div className="apps-sections">
                <div className="app-title"><span>LalaLime</span>
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

                </div>

                <div className="appreview">
                  <img src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/lalalime.gif" alt="LalaLime" className="app-img" />
                </div>
                <div className="app-description">
                  <p>A front-end microservice that replicates the aesthetics and functionality of LuluLemon's navigation bar.</p>
                  <li>Created a <span className="app-letters">microservice</span> of the navigation bar that allows users to browse through the webpage through the use of conditional rendering to simulate an actual product that mimics LuluLemon’s search functionality</li>
                  <li>Implemented a proxy sever without using middleware to render all microservices in a <span className="app-letters">service orientated architecture</span> format</li>
                  <li>Minified bundle from <span className="app-letters">3MB</span> to <span className="app-letters">172KB</span> which generated a score of <span className="app-letters">98</span> on lighthouse to measure web performance</li>
                </div>
              </div>
  )
}

export default FrontEnd;