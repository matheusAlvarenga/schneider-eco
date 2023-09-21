import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/button';
import * as S from './styles';

import logo from '../../assets/logo.png';

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.Container>
        <S.Logo src={logo} />
        <S.Wrapper>
          <S.Form>
            <S.Title>Entrar</S.Title>
            <S.InputWrapper>
              <S.InputLabel>Email</S.InputLabel>
              <S.Input placeholder="olivia.santos@mail.com" type="email" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>Senha</S.InputLabel>
              <S.Input placeholder="************" type="password" />
            </S.InputWrapper>
            <Button onClick={() => navigate('/demo')}>Entrar</Button>
          </S.Form>
          <S.Divider />
          <S.Form>
            <S.Title>Crie sua conta</S.Title>
            <S.InputWrapper>
              <S.InputLabel>Email</S.InputLabel>
              <S.Input placeholder="olivia.santos@mail.com" type="email" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>Nome</S.InputLabel>
              <S.Input placeholder="Olivia dos Santos" type="text" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>Senha</S.InputLabel>
              <S.Input placeholder="************" type="password" />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>Confirme a senha</S.InputLabel>
              <S.Input placeholder="************" type="password" />
            </S.InputWrapper>
            <Button onClick={() => navigate('/demo')}>Cadastrar</Button>
          </S.Form>
        </S.Wrapper>
      </S.Container>
    </S.Background>
  );
}
