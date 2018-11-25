import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>91Mobiles</h3>
          <p className="info">
            Senior Software Engineer
            <span>&bull;</span>
            <em className="date">Jun 2018 - Present</em>
          </p>

          <p>
            91mobiles is the largest gadget research site in India that provides tools, latest news, reviews and rich content to help people decide which gadget best suits their needs. The platform also helps users to find best prices/offers for the gadgets.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Pricebaba</h3>
          <p className="info">
            Software Alchemist
            <span>&bull;</span>
            <em className="date">July 2015 - Present</em>
          </p>

          <p>
          Pricebaba is a price comparison engine that helps users to search and 
          compare features and prices to shop better. 
          Earlier known for its online market place to locate offline sellers where 
          the users can actually purchase the products.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
