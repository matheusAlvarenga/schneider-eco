import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';
import { RewardBadge } from '../../../components/reward-badge';
import { rewards } from '../../../constants/rewards';

import * as S from './styles';

export function RewardsPage() {
  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Recompensas</DemoTitle>
          <DemoText>Aqui estao as possiveis recompensas.</DemoText>
        </FlexColumn>
        <S.List>
          {rewards.map((reward) => (
            <RewardBadge key={`reward-${reward.points}`} points={reward.points} text={reward.title} />
          ))}
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
