import { useNavigate } from 'react-router-dom';
import { DemoContent } from '../../../components/demo-content';
import { DemoSidebar } from '../../../components/demo-sidebar';
import { DemoText } from '../../../components/demo-text';
import { DemoTitle } from '../../../components/demo-title';
import { FlexColumn } from '../../../components/flex-column';

import * as S from './styles';
import { CourseCard } from '../../../components/course-card';
import { RewardBadge } from '../../../components/reward-badge';
import { classes } from '../../../constants/classes';
import { rewards } from '../../../constants/rewards';

export function MainPage() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <DemoSidebar />
      <DemoContent>
        <FlexColumn>
          <DemoTitle>Seja bem-vindo</DemoTitle>
          <DemoText>Aqui esta um resumo do seu mes no sistema.</DemoText>
        </FlexColumn>
        <DemoTitle>Cursos assistidos</DemoTitle>
        <S.List>
          {classes.slice(0, 3).map((course, index) => (
            <CourseCard onClick={() => navigate(`/demo/classes/${index}`)} key={`course-${course.title}`} img={course.image}>
              {course.title}
            </CourseCard>
          ))}
        </S.List>
        <DemoTitle>Recompensas resgatadas</DemoTitle>
        <S.RewardsList>
          {rewards.slice(16, 18).map((reward) => (
            <RewardBadge key={`reward-${reward.points}`} points={reward.points} text={reward.title} />
          ))}
        </S.RewardsList>
      </DemoContent>
    </S.Container>
  );
}
