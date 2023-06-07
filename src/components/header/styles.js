import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 10rem;
`;

export const Logo = styled.img`
  height: 5rem;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export const MenuItem = styled(Link)`
  font-weight: 600;
  font-size: 1.6rem;
  color: #626469;
`;
