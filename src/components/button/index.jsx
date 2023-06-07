import * as S from './styles';

export function Button({ children, onClick }) {
  return (
    <S.Wrapper onClick={onClick}>
      {children}
    </S.Wrapper>
  );
}
