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
        <S.MenuItem to="https://youtu.be/nnsXNaaj6b8">Vídeo Pitch</S.MenuItem>
        <Button onClick={() => navigate('/login')}>Acesse o demo</Button>
      </S.Menu>
    </S.Wrapper>
  );
}
