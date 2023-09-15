import * as S from './styles';

export function ChallengeDataCard({ title, data, img }) {
  return (
    <S.Wrapper style={{ backgroundImage: `url(${img})` }}>
      <S.Text>{title}</S.Text>
      <S.DataWrapper>
        {data.map((str) => (
          <S.Data>{str}</S.Data>
        ))}
      </S.DataWrapper>
    </S.Wrapper>
  );
}
