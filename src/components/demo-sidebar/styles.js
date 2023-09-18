import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  width: 32rem;
  height: 100vh;

  background-color: #333333;

  padding: 0 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 24rem;

  margin-top: 3.2rem;
  margin-bottom: 2rem;

  align-self: center;
`;

export const Menu = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 0.8rem 1.2rem;

  background-color: ${({ active }) => (active ? '#009639' : 'transparent')};
  border-radius: 6px;

  cursor: pointer;
`;

export const MenuItemIcon = styled.div`
  & > svg {
    height: 2rem;
    width: 2rem;

    color: white;
  }
`;

export const MenuItemText = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: white;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #626469;

  margin: 1.2rem 0 0.6rem 0;
`;

export const Footer = styled(Link)`
  padding: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2.4rem;

  cursor: pointer;
`;

export const FooterText = styled.div`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: white;
`;

export const FooterIcon = styled.div`
  & > svg {
    height: 2rem;
    width: 2rem;

    color: #98A2B3;
  }
`;
