import { useNavigate } from 'react-router-dom';
import { ChallengeCard } from '../../../components/challenge-card';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';
import { challenges } from '../../../constants/challenges';

import * as S from './styles';

export function ChallengesPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Desafios</DemoTitle>
          <DemoText>Aqui estao os seus desafios.</DemoText>
        </FlexColumn>
        <S.List>
          {challenges.map((challenge, index) => (
            <ChallengeCard
              img={challenge.image}
              title={challenge.title}
              points={challenge.points}
              percent={challenge.percent}
              onClick={() => navigate(`/demo/challenges/${index}`)}
            />
          ))}
        </S.List>
      </DemoContent>
    </S.Container>
  );
}
