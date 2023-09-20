import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background-color: #333333;
`;

export const ProfilePicture = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 500px;
`;

export const ProfileName = styled.span`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #333333;
`;

export const ProfileEmail = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: #667085;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.4rem;
`;
