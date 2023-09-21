import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrapper = styled.span`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const NameWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;

  color: #344054;
`;

export const Email = styled.span`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;

  color: #667085;
`;

export const Time = styled.span`
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2rem;
`;

export const AvatarWrapper = styled.div`
  width: fit-content;

  position: relative;
`;

export const AvatarImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;

  border-radius: 500px;
`;

export const AvatarActive = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 1.2rem;
  height: 1.2rem;

  border-radius: 500px;

  background-color: #12B76A;
  border: 2px solid white;
`;

export const PostContent = styled.p`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.4rem;
`;
