import * as S from './styles';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <S.Wrapper>
      <S.Logo src={logo} />
      <S.Text>Uma nova maneira de receber recompensas e beneficios da sua empresa.</S.Text>
    </S.Wrapper>
  );
}
