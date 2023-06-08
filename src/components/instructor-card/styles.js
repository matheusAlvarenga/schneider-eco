import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.img`
  width: 11rem;
  height: 11rem;

  border-radius: 1000px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: #333333;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #009639;
  text-align: center;
`;
