import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 10rem;
`;

export const Column = styled.div`
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

export const Highlight = styled.span`
  color: #009639;
`;

export const Image = styled.img`
  width: 78rem;
`;
