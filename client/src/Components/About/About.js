import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const howitWorks = () => {};

  return (
    <div className="container AboutWrap">
      <h3>About</h3>

      <h1> Evangadi Networks</h1>
      <p>
        {" "}
        No matter what stage of life you are in, whether you’re just starting
        elementary school or being promoted to CEO of a Fortune 500 company, you
        have much to offer to those who are trying to follow in your footsteps.
        <br />
      </p>

      <p>
        Wheather you are willing to share your knowledge or you are just looking
        to meet mentors of your own, please start by joining the network here.
      </p>

      <div className="About__Button">
        <button onClick={howitWorks}> HOW IT WORKS </button>
      </div>
    </div>
  );
};

export default About;
