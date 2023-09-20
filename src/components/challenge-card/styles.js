import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 29rem;
  height: 43rem;

  padding: 1.6rem 2.4rem;

  background-position: center;
  background-size: cover;

  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 3.2rem;
  color: white;
`;

export const Points = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
`;

export const Bar = styled.div`
  position: relative;

  margin-bottom: 1rem;
`;

export const GreenBar = styled.div`
  position: absolute;

  width: ${({ width }) => (width)}%;
  height: 8px;

  background-color: #009639;
`;

export const GreyBar = styled.div`
  position: absolute;

  width: 100%;
  height: 8px;

  background-color: #626469;
`;

export const Percent = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
`;
