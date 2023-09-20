import * as S from './styles';

export function ChallengeDataCard({ title, data, img }) {
  return (
    <S.Wrapper style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${img})` }}>
      <S.Text>{title}</S.Text>
      <S.DataWrapper>
        {data.map((str) => (
          <S.Data>{str}</S.Data>
        ))}
      </S.DataWrapper>
    </S.Wrapper>
  );
}
