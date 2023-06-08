import * as S from './styles';

export function AuthorCard({ name, text }) {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
      <S.Name>{name}</S.Name>
    </S.Wrapper>
  );
}
