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
  gap: 2rem;

  @media (max-width: 1200px) {
    gap: 6rem;
    justify-content: center;
  }

  @media (max-width: 900px) {
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TechRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 3.2rem;
  flex-wrap: wrap;
`;

export const SmallRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 6.4rem;

  @media (max-width: 900px) {
    gap: 4rem;
    flex-wrap: wrap;
    justify-content: center;
  }
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
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;

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

export const Title = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 6rem;
  color: #333333;
  text-align: center;
`;

export const Title2 = styled.p`
  width: 100%;
  font-weight: 600;
  font-size: 4.8rem;
  color: #404040;
  text-align: center;
`;

export const Image = styled.img`
  width: 72rem;
  height: 42rem;
  object-fit: cover;
  border-radius: 10px;
`;

export const TextSection = styled.div`
  max-width: 60rem;

  display: flex;
  flex-direction: column;
`;

export const SmallTitle = styled.p`
  font-weight: 800;
  font-size: 4.8rem;
  color: #009639;
`;

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: 4.8rem;
  color: #626469;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 2.4rem;
  color: #333333;

  margin-top: 1.6rem;
`;

export const Text2 = styled.p`
  max-width: 90rem;

  font-weight: 400;
  font-size: 2.4rem;
  color: #333333;
  text-align: center;
`;
