import styled from 'styled-components';

import Portrait from './components/Portrait';
import Greeting from './components/Greeting';
import Links from './components/Links';
import Resume from './components/Resume';

export default function App() {
  return (
    <AppRoot>
      <Main>
        <Greeting />
        <Portrait />
        <Footer>
          <Links />
        </Footer>
      </Main>
      <Resume />
    </AppRoot>
  );
}

const AppRoot = styled.div`
  height: 200vh;
`;

const Main = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  gap: 40px;
  flex-flow: column;
`;

const Footer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0px;
  height: 160px;
  display: flex;
  align-items: center;
`;
