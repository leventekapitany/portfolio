import styled from 'styled-components';

import githubLogo from '../assets/github.svg';
import githubLine from '../assets/github-line.svg';

export default function Github() {
  return (
    <Root href="https://github.com/leventekapitany">
      <img id="logo" src={githubLogo} />
      <img id="line" src={githubLine} />
    </Root>
  );
}

const Root = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 8px;

  #logo {
    height: 30px;
  }
  #line {
    height: 30px;
    color: white;
  }
`;
