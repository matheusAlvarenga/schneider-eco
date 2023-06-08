import * as S from './styles';

export function InstructorCard({ img, name, subtitle }) {
  return (
    <S.Wrapper>
      <S.Avatar src={img} />
      <S.Name>{name}</S.Name>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
}
