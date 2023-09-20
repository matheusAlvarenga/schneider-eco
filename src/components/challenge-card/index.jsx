import * as S from './styles';

export function ChallengeCard({
  title, points, img, percent,
}) {
  return (
    <S.Wrapper style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${img})` }}>
      <S.TextWrapper>
        <S.Text>{title}</S.Text>
        <S.Points>
          {points}
          {' '}
          pontos
        </S.Points>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.Percent>
          {percent}
          %
        </S.Percent>
        <S.Bar>
          <S.GreyBar />
          <S.GreenBar width={percent} />
        </S.Bar>
      </S.TextWrapper>
    </S.Wrapper>
  );
}
