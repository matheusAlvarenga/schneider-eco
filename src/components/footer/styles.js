import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  padding: 6rem;
  background: #333333;
`;

export const Logo = styled.img`
  width: 26rem;
`;

export const Text = styled.p`
  max-width: 296px;

  font-weight: 400;
  font-size: 1.6rem;
  color: #FFFFFF;
  text-align: center;
`;
