import React from 'react';

const Project = () => {
  return (
    <div className="apps-container">
      <div className="apps-sections">
        <h1>Applications</h1>
      </div>
      <div classname="apps-sections fe">
        <h2>LalaLime - Front End</h2>
        <div className="techstack">
          <p>MongoDB | Mongoose | Node.js | Express | React | Heroku</p>
          <div className="appreview">
            PREVIEW HERE!!!
          </div>
          <div className="app-description">
            <p>EXPLAIN APPLICATION HERE</p>
            <li>Created and deployed a <strong>microservice</strong> of the navigation bar that allows users to browse through the webpage through the use of conditional rendering to simulate an actual product that mimics LuluLemon’s search functionality</li>
            <li>Implemented a proxy sever without using middleware to render all microservices in a <strong>service orientated architecture</strong> format </li>
            <li>Minified bundle from <strong>3MB</strong> to <strong>172KB</strong> which generated a score of <strong>98</strong> on lighthouse to measure web performance</li>
          </div>
        </div>
      </div>
      <div classname="apps-sections fe">
        <h2>Anthropologie Clone - Back End</h2>
        <div className="techstack">
          <p>PostgreSQL | Express | Node.js | New Relic | AWS EC2 | Artillery.io | loader.io | Nginx</p>
          <div className="appreview">
            PREVIEW HERE!!!
          </div>
          <div className="app-description">
            <p>EXPLAIN APPLICATION HERE</p>
            <li>Created and utilized a script to generate <strong>10M</strong> mock records to populate both SQL and noSQL databases to emulate a realistic testing scenario </li>
            <li>Compared both DBMS by stress testing and reduced query times by using <strong>single-field index</strong> resulting in a shortened average latency of  <strong>~4ms</strong> from <strong>~17ms</strong></li>
            <li>Deployed and horizontally scaled 3 instances to handle <strong>2,750 RPS</strong> with <strong>0.0% error rate</strong> and <strong>67ms average response time</strong> using <strong>round robin</strong> load balancing algorithm</li>
          </div>
        </div>
      </div>
      <div classname="apps-sections fe">
        <h2>PAVÉ - Full-Stack</h2>
        <div className="techstack">
          <p>MongoDB | Mongoose | Node.js | Express | React | AWS EC2</p>
          <div className="appreview">
            PREVIEW HERE!!!
          </div>
          <div className="app-description">
            <p>EXPLAIN APPLICATION HERE</p>
            <li>Incorporated a <strong>monolithic design architecture</strong> and <strong>agile methodology</strong> to develop and deploy a responsive mobile-first web application that combined aspects of food, drinks, and social media</li>
            <li>Integrated <strong>Facebook authentication API</strong> to provide users an efficient sign-up and/or login interface</li>
            <li>Utilized <strong>Yelp</strong> and <strong>Google Maps API</strong> to integrate restaurant information based on location and category</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;