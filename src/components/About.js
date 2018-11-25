import React from "react";
import { FaCloudDownload, FaMailForward, FaMailReply, FaInbox } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="Kalpit Champanery" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        I love to write code that helps people around me work faster, majorly working on Python and javascript but not bound to it, I have interest in Micropython, IOT and Embedded Systems.
        <br />Recently shifted to <a hred="https://91mobiles.com">91mobiles</a> as Sr. Software develooper. Previously worked at <a href="https://pricebaba.com">Pricebaba</a> (Mumbai) as Software Alchemist,
        Started my career as an Android developer then switched to python and in between got my hands dirty on React, React Native and few other frameworks too. 
        Worked (to varying extents) on large-scale web services infrastructure, automation infrastructure, monitoring and alerting, deployment tech, crawling, creating React-Native as well as Android applications etc. 
        <br />I find playing around with microcontrollers fascinating, and have a keen interest in embedded systems. Very much interested in software design/architecture.
        Other than tech - I like to do crafts(origami, paper crafts, building cards), meeting people, travel, and trying out new stuff.
        <br />And I totally love Naruto.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact</h2>
            <p className="address">
              <FaInbox /> Mail: <span>ckalpit34@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
