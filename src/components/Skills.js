import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        If you wish to checkout my side projects on embedded systems and micro-controlers feel free to check my <a href="https://linkedin.com/in/ckalpit">Linkedin</a>.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand python" />
            <em>Python</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>JavaScript</em>
          </li>
          <li>
            <span className="bar-expand reactnative" />
            <em>React-Native</em>
          </li>
          <li>
            <span className="bar-expand android" />
            <em>Android</em>
          </li>
          <li>
            <span className="bar-expand micropython" />
            <em>Micropython</em>
          </li>
          <li>
            <span className="bar-expand ardiuno" />
            <em>Ardiuno</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
