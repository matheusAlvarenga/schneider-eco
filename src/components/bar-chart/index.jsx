import * as S from './styles';

export function BarChart({
  title, totalValue, value, unit,
}) {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Data>
          {value}
          /
          {totalValue}
          {' '}
          {unit}
        </S.Data>
      </S.TextWrapper>
      <S.Bar>
        <S.GreyBar />
        <S.FilledBar width={(value / totalValue) * 100} />
      </S.Bar>
    </S.Container>
  );
}
