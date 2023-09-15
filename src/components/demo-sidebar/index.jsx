import * as Icon from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

import logo from '../../assets/logo.png';

export function DemoSidebar() {
  const location = useLocation();

  return (
    <S.Container>
      <S.Menu>
        <S.Logo src={logo} alt="Logo" />
        <S.MenuItem to="/demo" active={location.pathname === '/demo'}>
          <S.MenuItemIcon>
            <Icon.FiHome />
          </S.MenuItemIcon>
          <S.MenuItemText>Inicio</S.MenuItemText>
        </S.MenuItem>
        <S.MenuItem to="/demo/ranking" active={location.pathname === '/demo/ranking'}>
          <S.MenuItemIcon>
            <Icon.FiBarChart />
          </S.MenuItemIcon>
          <S.MenuItemText>Ranking</S.MenuItemText>
        </S.MenuItem>
        <S.MenuItem to="/demo/rewards" active={location.pathname === '/demo/rewards'}>
          <S.MenuItemIcon>
            <Icon.FiLayers />
          </S.MenuItemIcon>
          <S.MenuItemText>Recompensas</S.MenuItemText>
        </S.MenuItem>
        <S.MenuItem to="/demo/classes" active={location.pathname === '/demo/classes'}>
          <S.MenuItemIcon>
            <Icon.FiCheckSquare />
          </S.MenuItemIcon>
          <S.MenuItemText>Video Aulas</S.MenuItemText>
        </S.MenuItem>
        <S.MenuItem to="/demo/challenges" active={location.pathname === '/demo/challenges'}>
          <S.MenuItemIcon>
            <Icon.FiHome />
          </S.MenuItemIcon>
          <S.MenuItemText>Desafios</S.MenuItemText>
        </S.MenuItem>
        <S.MenuItem to="/demo/community" active={location.pathname === '/demo/community'}>
          <S.MenuItemIcon>
            <Icon.FiUsers />
          </S.MenuItemIcon>
          <S.MenuItemText>Comunidade</S.MenuItemText>
        </S.MenuItem>
      </S.Menu>
      <S.Menu>
        <S.MenuItem to="/demo/profile" active={location.pathname === '/demo/profile'}>
          <S.MenuItemIcon>
            <Icon.FiUser />
          </S.MenuItemIcon>
          <S.MenuItemText>Perfil do Usuario</S.MenuItemText>
        </S.MenuItem>
        <S.Divider />
        <S.Footer to="/">
          <S.FooterText>Voltar ao site</S.FooterText>
          <S.FooterIcon>
            <Icon.FiLogOut />
          </S.FooterIcon>
        </S.Footer>
      </S.Menu>
    </S.Container>
  );
}
