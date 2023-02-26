import styled from 'styled-components';

import portrait from '../assets/portrait.jpeg';

export default function Portrait() {
  return (
    <Container>
      <Image src={portrait} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.9));
    pointer-events: none;
  }
`;

const Image = styled.img`
  height: 100px;
`;
