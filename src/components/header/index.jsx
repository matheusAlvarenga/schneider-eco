import * as S from './styles';
import logo from '../../assets/logo.png';

export function Header() {
  return (
    <S.Wrapper>
      <S.Logo src={logo} />
      <S.Menu>
        <S.MenuItem>Inicio</S.MenuItem>
        <S.MenuItem>Sobre o projeto</S.MenuItem>
        <S.MenuItem>Vídeo Pitch</S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  );
}
