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
        <S.MenuItem>Inicio</S.MenuItem>
        <S.MenuItem>Sobre o projeto</S.MenuItem>
        <S.MenuItem>Vídeo Pitch</S.MenuItem>
        <Button onClick={() => navigate('/teste')}>Acesse o demo</Button>
      </S.Menu>
    </S.Wrapper>
  );
}
