import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Bar = styled.div`
  height: 2rem;
  position: relative;
`;

export const GreyBar = styled.div`
  width: 100%;
  height: 2rem;
  position: absolute;
  background: #D9D9D9;
`;

export const FilledBar = styled.div`
  width: ${({ width }) => width}%;
  height: 2rem;
  position: absolute;
  background: #009639;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #333333;
`;

export const Data = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333333;
`;
