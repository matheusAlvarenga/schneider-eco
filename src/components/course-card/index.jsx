import * as S from './styles';

export function CourseCard({
  children, img, onClick = undefined, points = undefined,
}) {
  return (
    <S.Wrapper onClick={onClick} style={{ backgroundImage: `url(${img})` }}>
      <S.Text>{children}</S.Text>
      <S.Points>{points}</S.Points>
    </S.Wrapper>
  );
}
