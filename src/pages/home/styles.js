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

export const Column = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4.8rem;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 7.2rem;
  color: #333333;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const SessionTitle = styled.h2`
  font-weight: 600;
  font-size: 3.2rem;
  color: #333333;
`;

export const Highlight = styled.span`
  color: #009639;
`;

export const Image = styled.img`
  width: 78rem;
`;

export const Image2 = styled.img`
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
