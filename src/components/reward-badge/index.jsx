import * as S from './styles';

export function RewardBadge({ points, text }) {
  return (
    <S.Container>
      <S.Points>{points}</S.Points>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
