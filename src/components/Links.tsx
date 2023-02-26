import styled from 'styled-components';

import { useRef } from 'react';

import Github from './Github';
import down from '../assets/down.svg';
import linkedin from '../assets/linkedin.svg';

export default function Links() {
  const tomRef = useRef<HTMLAudioElement>(null);

  function scroll() {
    window.scrollTo({ top: window.innerHeight + 50, behavior: 'smooth' });
    tomRef.current?.play();
  }

  return (
    <Root>
      <Profiles>
        <Github />
        <a id="linkedin" href="https://www.linkedin.com/in/levente-kapitany/">
          <img src={linkedin} />
        </a>
        <audio id="tom" ref={tomRef}>
          <source src="https://tripled.hu/tom-scream.mp3" type="audio/mp3" />
        </audio>
      </Profiles>

      <CV onClick={scroll}>
        <span>resume</span>
        <img src={down} />
      </CV>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #linkedin img {
    height: 50px;
  }
`;

const CV = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  img {
    height: 24px;
  }
`;

const Profiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
