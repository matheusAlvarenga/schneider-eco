import * as S from './styles';

export function CourseCard({ children, img, onClick = undefined }) {
  return (
    <S.Wrapper onClick={onClick} style={{ backgroundImage: `url(${img})` }}>
      <S.Text>{children}</S.Text>
    </S.Wrapper>
  );
}
