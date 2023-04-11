import styled from 'styled-components';
import githubLogo from '../assets/github.svg';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export default function Projects() {
  return (
    <Container>
      <a href="https://github.com/leventekapitany/portfolio">
        <img src={githubLogo} />
        <span>Portfolio Site</span>
        <img className="react-logo" src={reactLogo} />
        <img src={viteLogo} />
      </a>
      <a href="https://github.com/leventekapitany/foci-app-mobile">
        <img src={githubLogo} />
        <span>Football App</span>

        <span id="native">
          <img className="react-logo" src={reactLogo} />
          Native
        </span>
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  gap: 12px;
  opacity: 0.8;

  a {
    all: unset;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    padding: 8px;
    font-size: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
  }

  img {
    height: 12px;
  }

  #native {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 6px;
  }

  .react-logo {
    animation-name: spin;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
