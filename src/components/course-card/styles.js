import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  width: 29rem;
  height: 43rem;

  padding: 1.6rem 2.4rem;

  background-position: center;
  background-size: cover;

  gap: 1rem;

  cursor: pointer;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 3.2rem;
  color: white;
`;

export const Points = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  color: white;
`;
