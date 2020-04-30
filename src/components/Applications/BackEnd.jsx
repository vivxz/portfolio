import React from 'react';
import stacks from '../../data/stacks.js';
import StackList from '../StackList';

const BackEnd = () => {
  
  const openNewTab = (event) => {
    const url = event.target.value;
    window.open(url, '_blank');
  }

  return (
    <div className="apps-sections">
      <div className="app-title"><span>Anthropologie Clone</span>
        <button className="repo-btn" onClick={openNewTab} value="https://github.com/vivxz/anthropologie-product-quan">View Repo</button>
      </div>
      <div className="techstack">

        <p>
        {stacks.sdc.map((stack, i) => {
        return (
          <StackList stack={stack} key={i} index={i} last={stacks.sdc.length - 1} />
        )})}
        </p>

      </div>

      <div className="appreview">
      <img src="https://vivs-portfolio.s3-us-west-1.amazonaws.com/anthro.png" alt="Anthro" className="app-img" />
      </div>
      <div className="app-description">
        <p>Horizontally scaled the back end of a legacy code base to increase throughput, decrease latency, and minimize error rate.</p>
        <li>Created and utilized a script to generate <span className="app-letters">10M</span> mock records to populate both SQL and noSQL databases to emulate a realistic testing scenario </li>
        <li>Compared both DBMS by stress testing and reduced query times by using <span className="app-letters">single-field index</span> resulting in a shortened average latency of  <span className="app-letters">~4ms</span> from <span className="app-letters">~17ms</span></li>
        <li>Deployed and horizontally scaled 3 instances to handle <span className="app-letters">2,750 RPS</span> with <span className="app-letters">0.0% error rate</span> and <span className="app-letters">67ms average response time</span> using <span className="app-letters">round robin</span> load balancing algorithm</li>
      </div>
    </div>
  )
}

export default BackEnd;