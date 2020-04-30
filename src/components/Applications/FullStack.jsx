import React from 'react';
import stacks from '../../data/stacks.js';
import StackList from '../StackList';

const FullStack = () => {
  
  const openNewTab = (event) => {
    const url = event.target.value;
    window.open(url, '_blank');
  }

  return (
    <div className="apps-sections">
      <div className="app-title"><span>PAVÉ</span>
      <button className="repo-btn" onClick={openNewTab} value="https://github.com/mvp-pave/mvp-pave">View Repo</button>
      </div>
      <div className="techstack">

        <p>
        {stacks.mvp.map((stack, i) => {
        return (
          <StackList stack={stack} key={i} index={i} last={stacks.mvp.length - 1} />
        )})}
        </p>

      </div>

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
  )
}

export default FullStack;