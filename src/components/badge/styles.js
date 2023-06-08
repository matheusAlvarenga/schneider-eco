import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 0.8rem 1.6rem;

  background: #DDFFFF;
  border-radius: 16px;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;

  border-radius: 50px;
  background: #009639;
`;

export const IconWrapper = styled.div`
  & > svg {
    color: white;
    height: 16px;
    width: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
`;
