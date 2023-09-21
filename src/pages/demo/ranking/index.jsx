import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';
import { RankingCard } from '../../../components/ranking-card';
import { RankingCrown } from '../../../components/ranking-crown';
import { ranking } from '../../../constants/ranking';

import * as S from './styles';

const crownColor = [
  '#C88F3A',
  '#A5A5A5',
  '#9B521C',
];

export function RankingPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Ranking</DemoTitle>
          <DemoText>Aqui estao os funcionarios com mais pontos no mes.</DemoText>
        </FlexColumn>
        <S.CrownList>
          <RankingCrown
            key={ranking[1].name}
            name={ranking[1].name}
            points={ranking[1].points}
            color={crownColor[1]}
          />
          <RankingCrown
            key={ranking[0].name}
            name={ranking[0].name}
            points={ranking[0].points}
            color={crownColor[0]}
            size="large"
          />
          <RankingCrown
            key={ranking[2].name}
            name={ranking[2].name}
            points={ranking[2].points}
            color={crownColor[2]}
          />
        </S.CrownList>
        <S.List>
          {ranking.slice(3).map((r, index) => (
            <RankingCard key={r.name} name={`${index + 4}) ${r.name}`} points={r.points} />
          ))}
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
