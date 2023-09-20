import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background-color: #333333;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5.6rem;
`;

export const Task = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskTitle = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #333333;
`;

export const TaskDescription = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: #333333;
`;
