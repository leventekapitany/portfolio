import styled from 'styled-components';

import resume from '../assets/resume.jpg';

export default function Resume() {
  return (
    <Root>
      <div>Resume</div>
      <a href="./cv.pdf" download="resume-levente-kapitany">
        <div>
          <img src={resume} />
        </div>
        <span>Download PDF</span>
      </a>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 700px;
    width: 100%;
  }

  div {
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 32px;
  }

  a {
    all: unset;
    cursor: pointer;
    text-align: center;

    span {
      padding-bottom: 24px;
    }
  }
`;
