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
    </div>
  )
}

export default Project;