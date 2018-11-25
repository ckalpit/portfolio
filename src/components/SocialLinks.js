import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/kalpit.champanery">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/ckalpit">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/ckalpit/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/ckalpit">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/ckalpit/">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
