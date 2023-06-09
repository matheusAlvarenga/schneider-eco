import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import logo from '../../assets/logo.png';
import { Button } from '../button';

export function Header() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Logo src={logo} />
      <S.Menu>
        <S.MenuItem to="/">Inicio</S.MenuItem>
        <S.MenuItem to="/sobre-nos">Sobre o projeto</S.MenuItem>
        <S.MenuItem to="https://www.youtube.com/watch?v=f3YPcldAXxY">Vídeo Pitch</S.MenuItem>
        <Button onClick={() => navigate('https://www.figma.com/proto/ERtfy8oYwO7HYUZdiGFqkE/Geral?type=design&node-id=5-9947&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=5%3A9947')}>Acesse o demo</Button>
      </S.Menu>
    </S.Wrapper>
  );
}
