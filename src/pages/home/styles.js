import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  padding: 2.4rem 10rem;
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

export const Title = styled.h1`
  font-weight: 700;
  font-size: 7.2rem;
  color: #333333;
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
