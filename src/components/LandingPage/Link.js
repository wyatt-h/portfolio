import React from "react";
import styled from "styled-components";
import LinkedinIcon from "./Icons/LinkedinIcon";
import InstgramIcon from "./Icons/InstgramIcon";
import GithubIcon from "./Icons/GithubIcon";
import ResumeIcon from "./Icons/ResumeIcon";

const GlobalStyle = styled.div`
  height: 15vh;
  width: 100%;
  background-color: #dbd9db;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 3rem;
    margin: 1rem 3rem;
  }

  .resume-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .resume-icon {
    margin-right: 1rem;
  }
`;

const Link = () => {
  return (
    <GlobalStyle>
      <LinkedinIcon link="https://www.linkedin.com/in/wyatt-huang/" />
      <InstgramIcon link="https://www.instagram.com/z.wyatt_h/?hl=en" />
      <GithubIcon link="https://github.com/wyatt-h" />
      <div className="resume-box">
        <ResumeIcon link="" />
        <div>
          <i class="fa-solid fa-arrow-left"></i>
          Resume
        </div>
      </div>
    </GlobalStyle>
  );
};

export default Link;
