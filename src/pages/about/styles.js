import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  padding: 2.4rem 18rem;

  @media (max-width: 1460px) {
    padding: 1.2rem 9rem;
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.8rem;
`;

export const Hero = styled.div`
  width: 100%;
  height: 50rem;
  background: url(${(props) => props.background});

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 5rem;
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 6rem;
  color: white;
  width: 55rem;
`;
