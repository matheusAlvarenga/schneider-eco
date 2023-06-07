import * as S from './styles';

export function Badge({ icon, children }) {
  return (
    <S.Wrapper>
      <S.Circle>
        <S.IconWrapper>{icon}</S.IconWrapper>
      </S.Circle>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
}
