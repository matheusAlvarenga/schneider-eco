import * as S from './styles';

export function CourseCard({
  children, img, onClick = undefined, points = undefined,
}) {
  return (
    <S.Wrapper onClick={onClick} style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${img})` }}>
      <S.Text>{children}</S.Text>
      <S.Points>{points}</S.Points>
    </S.Wrapper>
  );
}
