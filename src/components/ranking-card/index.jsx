import * as S from './styles';

export function RankingCard({ name, points }) {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.Points>
        {points}
        {' '}
        pontos
      </S.Points>
    </S.Container>
  );
}
