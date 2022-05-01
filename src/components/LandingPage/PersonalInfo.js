import React from "react";
import styled from "styled-components";
import Particle from "../Particle";

const GlobalStyle = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;

  #tsparticles {
    position: fixed;
    z-index: -1;
  }

  .info-block {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name {
    font-size: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .intro-para {
    font-size: 2rem;
    padding: 5rem 3rem;
  }

  .large-hi {
    font-size: 4rem;
    font-weight: 800;
  }

  .scroll-hint {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding-bottom: 0.5rem;
  }
`;

const PersonalInfo = () => {
  return (
    <GlobalStyle className="row">
      <Particle />
      <div className="col-md-6 info-block">
        <div className="name">
          <div>WYATT</div>
          <div>HUANG</div>
        </div>
      </div>
      <div className="col-md-6 info-block">
        <div className="intro-para">
          <p>
            <span className="large-hi">Hi! </span> I'm a freshman student at
            University of Illinois at Urbana Champaign. My current major is
            Mathematics but I am transferring to Computer Science.
          </p>
          <p>
            I'm passionate about web development, blockchain, machine learning,
            Robotics, and any other disruptive technology.
          </p>
        </div>
      </div>
      <div className="row scroll-hint">Scroll to Explore</div>
    </GlobalStyle>
  );
};

export default PersonalInfo;
