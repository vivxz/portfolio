import React from 'react';

const About = () => {
  return (
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
          <p>Front End: Javascript (ES5 & ES6) | HTML5 | CSS3 | React | JQuery | React Native</p>

          <p>Back End: Node.js | Express | PostgreSQL | MongoDB | Mongoose | MySQL | RESTful API | NGINX | Firebase</p>

          <p>Testing/Deployment: Mocha | Chai | AWS EC2 | AWS S3 | Heroku | New Relic | Artillery | Agile Methodology</p>

          <p>Developer Tools: Git | npm | yarn | Webpack | Babel | TDD </p>
        </div>
      </div>
    </div>
  )
}

export default About;