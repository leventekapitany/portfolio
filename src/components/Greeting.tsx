import styled from 'styled-components';

export default function Greeting() {
  const title = 'Soft';
  return (
    <Root>
      <Name>Levente Kapitany</Name>
      <Title>
        <span>Software</span>
        <span>Engineer</span>
      </Title>
      <Description>
        I help companies to build
        <br />
        state of the art softwares
      </Description>
    </Root>
  );
}

const Root = styled.div`
  @media (max-width: 600px) {
    padding-top: unset;
  }

  padding-top: 100px;
  display: grid;
  place-items: center;
`;

const Name = styled.p`
  font-size: 18px;
  color: var(--red);
  font-weight: 500;
`;

const Title = styled.p`
  line-height: 50px;
  display: grid;
  margin: 0;
  font-size: 48px;
  font-weight: 700;
`;

const Description = styled.div`
  p {
    margin: 8px;
  }
  margin-top: 24px;
  text-align: center;
  opacity: 0.8;
`;
