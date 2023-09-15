import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';

export function RankingPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Ranking</DemoTitle>
          <DemoText>Aqui estao os funcionarios com mais pontos no mes.</DemoText>
        </FlexColumn>
      </DemoContent>
    </S.Container>
  );
}
