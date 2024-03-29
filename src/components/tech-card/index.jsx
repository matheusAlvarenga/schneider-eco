import * as S from './styles';

export function TechCard({ children, img }) {
  return (
    <S.Wrapper style={{ backgroundImage: `url(${img})` }}>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
}
